#!/usr/bin/env python3
"""
aic-smb-copilot-v2 — Python workflow executor (local-first)

Responsibilities:
- Poll API for queued WorkflowRuns
- Execute steps in order (ingest/transform/call_llm/search/http_request/webhook/decision)
- Report status and results back to API
- Designed to be replaced with a queue-based worker later (Celery/RQ/etc.)

Env Vars:
  API_URL=http://localhost:8080
  API_TOKEN=dev-token-or-service-key
  QDRANT_URL=http://localhost:6333
  QDRANT_API_KEY=...
  OPENAI_API_KEY=...
"""

import os
import time
import json
import traceback
from typing import Any, Dict, List, Optional

import requests  # lightweight; ok for stub
# If you prefer httpx, feel free to swap.

API_URL = os.getenv("API_URL", "http://localhost:8080")
API_TOKEN = os.getenv("API_TOKEN", "dev-token")
POLL_INTERVAL_SEC = int(os.getenv("WORKER_POLL_INTERVAL_SEC", "3"))
MAX_BATCH = int(os.getenv("WORKER_MAX_BATCH", "3"))

QDRANT_URL = os.getenv("QDRANT_URL", "http://localhost:6333")
QDRANT_API_KEY = os.getenv("QDRANT_API_KEY", "")
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY", "")

def _auth_headers() -> Dict[str, str]:
    return {"Authorization": f"Bearer {API_TOKEN}", "Content-Type": "application/json"}

def poll_queued_runs(limit: int = MAX_BATCH) -> List[Dict[str, Any]]:
    # In a real impl, expose a dedicated endpoint to fetch queued runs for the worker.
    # For now, demo by scanning last N runs via REST or use a placeholder.
    # Replace with /runs?status=QUEUED once implemented.
    return []  # Stub: no centralized queue yet

def fetch_workflow(workflow_id: str) -> Dict[str, Any]:
    r = requests.get(f"{API_URL}/workflows/{workflow_id}", headers=_auth_headers(), timeout=15)
    r.raise_for_status()
    return r.json()

def mark_run_status(run_id: str, status: str, output: Optional[dict] = None, error: Optional[dict] = None):
    # You can implement a PATCH /runs/{runId} to update status; here we just log.
    print(json.dumps({"runId": run_id, "status": status, "output": output, "error": error}, indent=2))

# ---------- Step Handlers ----------

def step_ingest(config: Dict[str, Any], ctx: Dict[str, Any]) -> Dict[str, Any]:
    """
    Example: take a URI, pull text, push to Qdrant via separate ingestion service.
    """
    uri = config.get("uri") or ctx.get("input", {}).get("uri")
    if not uri:
        return {"warning": "no uri provided"}
    # TODO: parse, chunk, embed, upsert to Qdrant collection (use client of your choice)
    return {"ingested_uri": uri, "chunks": 0}

def step_transform(config: Dict[str, Any], ctx: Dict[str, Any]) -> Dict[str, Any]:
    """
    Example: map/normalize/clean data; trivial passthrough for stub.
    """
    data = ctx.get("previous_output") or ctx.get("input")
    return {"transformed": data}

def step_call_llm(config: Dict[str, Any], ctx: Dict[str, Any]) -> Dict[str, Any]:
    """
    Example: call OpenAI/Anthropic via chosen SDK.
    """
    prompt = config.get("prompt") or "Say hello to SMB Copilot."
    # Stubbed LLM call:
    response_text = f"[LLM] {prompt}"
    return {"response": response_text}

def step_search(config: Dict[str, Any], ctx: Dict[str, Any]) -> Dict[str, Any]:
    """
    Example: vector search against Qdrant.
    """
    query = config.get("query") or (ctx.get("input") or {}).get("query") or "hello"
    top_k = int(config.get("topK", 5))
    # TODO: embed query, search Qdrant, return hits
    return {"query": query, "results": [], "topK": top_k}

def step_http_request(config: Dict[str, Any], ctx: Dict[str, Any]) -> Dict[str, Any]:
    """
    Example: perform outbound HTTP call (GET/POST).
    """
    method = (config.get("method") or "GET").upper()
    url = config.get("url")
    if not url:
        return {"error": "http_request step missing url"}
    payload = config.get("body") or {}
    headers = config.get("headers") or {}
    try:
        resp = requests.request(method, url, json=payload, headers=headers, timeout=20)
        return {"status": resp.status_code, "body": safe_json(resp)}
    except Exception as e:
        return {"error": str(e)}

def step_webhook(config: Dict[str, Any], ctx: Dict[str, Any]) -> Dict[str, Any]:
    """
    Example: notify a webhook about the run result.
    """
    url = config.get("url")
    if not url:
        return {"warning": "no webhook url"}
    body = {"run": ctx.get("run"), "output": ctx.get("previous_output")}
    try:
        resp = requests.post(url, json=body, timeout=15)
        return {"delivered": resp.status_code in (200, 201, 204)}
    except Exception as e:
        return {"error": str(e)}

def step_decision(config: Dict[str, Any], ctx: Dict[str, Any]) -> Dict[str, Any]:
    """
    Example: branch on condition, set flags for next step (not implemented here).
    """
    condition = config.get("when") or True
    return {"branch": "then" if condition else "else"}

STEP_HANDLERS = {
    "ingest": step_ingest,
    "transform": step_transform,
    "call_llm": step_call_llm,
    "search": step_search,
    "http_request": step_http_request,
    "webhook": step_webhook,
    "decision": step_decision,
}

# ---------- Engine ----------

def execute_workflow_run(run: Dict[str, Any]) -> Dict[str, Any]:
    workflow_id = run.get("workflowId")
    run_id = run.get("id")
    input_payload = run.get("input") or {}

    wf = fetch_workflow(workflow_id)
    steps = wf.get("steps") or []

    ctx: Dict[str, Any] = {"run": run, "input": input_payload, "previous_output": None}
    for idx, step in enumerate(steps, start=1):
        step_type = (step.get("type") or "").lower()
        config = step.get("config") or {}
        handler = STEP_HANDLERS.get(step_type)
        if not handler:
            ctx["previous_output"] = {"warning": f"unsupported step type: {step_type}"}
            continue
        try:
            result = handler(config, ctx)
            ctx["previous_output"] = result
            print(f"[step {idx}/{len(steps)}] {step_type} -> {result}")
        except Exception as e:
            tb = traceback.format_exc()
            print(f"[step {idx}] ERROR: {e}\n{tb}")
            return {"status": "FAILED", "error": {"message": str(e)}}

    return {"status": "SUCCEEDED", "output": ctx.get("previous_output")}

def safe_json(resp) -> Any:
    try:
        return resp.json()
    except Exception:
        return {"text": resp.text[:2000]}

def main():
    print("🔧 Python worker started. Polling for queued runs...")
    while True:
        try:
            # In the stub, demonstrate by executing a sample run if none found
            # Replace this block with real polling from /runs?status=QUEUED
            sample_run = {
                "id": "run-1",
                "workflowId": "wf-1",
                "input": {"query": "hello copilot", "uri": "s3://bucket/key"},
            }
            mark_run_status(sample_run["id"], "RUNNING")
            result = execute_workflow_run(sample_run)
            mark_run_status(sample_run["id"], result["status"], result.get("output"), result.get("error"))
        except KeyboardInterrupt:
            print("Shutting down worker...")
            break
        except Exception as e:
            print(f"[worker] loop error: {e}")

        time.sleep(POLL_INTERVAL_SEC)

if __name__ == "__main__":
    main()
