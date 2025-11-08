# Architecture Overview

> This document provides a high-level overview of the system architecture for the `aic-smb-copilot-v2` platform, including service boundaries, data flows, deployment patterns, and supporting infrastructure.

---

## 🧭 System Context (C4 - Level 1)

![C4-Level-1-System-Context](./diagrams/system_context.svg)

At its core, the platform integrates:
- **Users** (SMB owners, employees, third-party partners)
- **External Systems** (databases, SaaS tools, banking APIs)
- **Large Language Models** (OpenAI, Anthropic, etc.)
- **Internal Microservices** (API Gateway, Workflow Worker, Auth)

---

## 🏗️ Container Architecture (C4 - Level 2)

![C4-Level-2-Container-Diagram](./diagrams/container_diagram.svg)

The platform consists of the following key components:

| Component            | Type                 | Description | Path |
|----------------------|----------------------|-------------|------|
| **API Gateway**      | NestJS (TypeScript)  | Handles all incoming client requests, API routing, rate limiting, and token validation. | `/apps/api/` |
| **Web UI**           | Next.js (TypeScript) | Frontend dashboard for SMB users to interact with insights and workflows. | `/apps/web/` |
| **Workflow Workers** | Python Microservices | Execute AI tasks, manage stateful workflows, data ingestion, and triggering LLM calls. | `/apps/workers/` |
| **Vector Search DB** | Qdrant               | Stores semantic embeddings used for document and knowledge retrieval. | `/infra/docker/qdrant/` |
| **Relational DB**    | PostgreSQL (RDS)     | Stores users, workflows, RBAC policies, audit trails. | `/infra/docker/postgres/` |
| **Cloud Infra**      | Terraform Modules    | Defines cloud-native resources with support for multiple providers. | `/infra/terraform/` |
| **Kubernetes**       | Helm Charts          | Deploys services consistently across AWS, GCP, etc. | `/infra/k8s/` |

---

## 🔄 Data Flow & LLM Integration

![AI-Workflow-Sequence](./diagrams/ai_workflow_sequence.svg)

1. User performs action on **Web UI → API Gateway**
2. API triggers **Workflow Execution**:
   - Queries internal DB + retrieves context from Qdrant
   - Invokes LLM provider via adapter (OpenAI, Anthropic, etc.)
3. Worker captures result and responds via API
4. Optional: Stored embedding ingested into Qdrant for future semantic search

---

## 🔐 Authentication & RBAC

- Authentication is handled through **JWT + OAuth 2.0**
- Custom RBAC layers enforced via policies in PostgreSQL
- Auth library shared under `/packages/auth-lib/`

---

## ⚙️ Deployment Architecture (C4 - Level 3)

```plaintext
┌──────────────────────────────────────────┐
│        Cloud Provider (AWS/GCP/Azure)    │
│                                          │
│   ┌───────────┐         ┌───────────┐    │
│   │ EKS/GKE   │         │ RDS/PGSQL │    │
│   │ Cluster   │◄───►    │           │    │
│   └───────────┘         └───────────┘    │
│         ▲                   ▲             │
│         │                   │             │
│   ┌────────────┐     ┌────────────┐       │
│   │ API Pods   │     │ Worker Pods│       │
│   └────────────┘     └────────────┘       │
│         ▲                   ▲             │
│         │                   │             │
│   ┌────────────┐     ┌────────────┐       │
│   │ LoadBalancer│    │ Qdrant     │       │
│   └────────────┘     └────────────┘       │
└──────────────────────────────────────────┘
````

* Multi-cloud IaC with Terraform defaults to AWS
* Uses Kubernetes for container orchestration
* Stateful DBs run via managed services or Helm charts

---

## 🛠️ Dev Environment Alignment

See [`DEV_ENVIRONMENT.md`](./DEV_ENVIRONMENT.md) for details on:

* Running all containers locally via Docker Compose
* Using Qdrant locally in `/infra/docker/qdrant/`
* Interacting with dev databases, playgrounds, and Logs (Grafana)

---

## 📝 Additional Info

* All architectural diagrams are located under `/docs/diagrams/`
* System changes tracked under `CHANGELOG.md`
* Performance targets and SLOs in `docs/PERFORMANCE_AND_SLO.md`

---

## 🔁 Feedback & Iterations

Architecture is living documentation. Please submit updates as PRs tagged with:

* `docs:architecture`
* `infra:xref`