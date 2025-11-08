# Software Requirements Specification (SRS) — Summary

> This document provides a high-level summary of the full Software Requirements Specification (SRS) for the `aic-smb-copilot-v2` system. It captures key functional and non-functional requirements and maps them to specific project modules and repository paths.

---

## 📋 Table of Contents

- [Introduction](#-introduction)
- [System Scope](#-system-scope)
- [Functional Requirements (FR)](#-functional-requirements-fr)
- [Non-Functional Requirements (NFR)](#-non-functional-requirements-nfr)
- [Module Mapping](#-module-mapping)
- [Traceability Matrix](#-traceability-matrix)
- [Glossary](#-glossary)

---

## 🧭 Introduction

The `aic-smb-copilot-v2` platform enables small and medium businesses (SMBs) to streamline workflows, retrieve actionable business intelligence, and leverage large language models to automate routine operations.

📄 Full SRS available at:  
`/docs/SRS.md`

---

## 🎯 System Scope

Key capabilities of the system:

- AI-powered conversational workflows via LLM integration
- Ingest and index business data from diverse sources
- Provide secure, multitenant access through a web portal/API
- Enable admins to manage users, policies, and data
- Deliver insights via visual dashboards and conversational UI

---

## ✅ Functional Requirements (FR)

| ID       | Requirement | Description | Module/Path |
|----------|-------------|-------------|-------------|
| FR-001   | User Login  | Users can authenticate via OAuth 2.0 or passwordless login | `/apps/api/`, `/packages/auth-lib/` |
| FR-002   | Role/Policy Mgmt | Admins can assign user roles and access policies | `/apps/web/`, `/apps/api/` |
| FR-003   | Data Ingestion | Import structured/unstructured data | `/apps/workers/` |
| FR-004   | Semantic Search | Search based on semantic meaning, powered by embeddings | `/packages/vector-client/`, `/infra/docker/qdrant/` |
| FR-005   | Workflow Execution | Trigger server-side workflows with LLM calls | `/apps/workers/` |
| FR-006   | Dashboard View | Visual insights presented via web interface | `/apps/web/` |
| FR-007   | External API Integration | API consumption from 3rd-party services (e.g. QuickBooks, Slack) | `/apps/workers/`, `/apps/api/` |
| FR-008   | Audit Logging | Track user actions for compliance | `/apps/api/`, `/infra/k8s/otel/` |

---

## 🏗️ Non-Functional Requirements (NFR)

| ID       | Requirement | Description | Strategy |
|----------|-------------|-------------|----------|
| NFR-001  | Availability | Must be 99.9% uptime | Multi-zone K8s deployment |
| NFR-002  | Latency | API responses < 250ms P95 | API Gateway caching, async jobs |
| NFR-003  | Scalability | Support 10K concurrent users | Horizontal pod autoscaling (HPA) |
| NFR-004  | Security | SOC2 Type II compliant | IAM roles, encrypted endpoints |
| NFR-005  | Portability | Deploy agnostically to AWS/GCP/Azure | Terraform, Docker, Helm |
| NFR-006  | Observability | Full OpenTelemetry compliance | OTEL collector, Grafana dashboards |

---

## 🗂️ Module Mapping

| Component | Language | Path | Description |
|-----------|----------|------|-------------|
| API Gateway | TypeScript | `/apps/api/` | Request routing, auth, and middleware |
| Web UI | TypeScript | `/apps/web/` | User-facing dashboards and UI components |
| Worker Services | Python | `/apps/workers/` | Workflow automation, ETL, LLM triggers |
| Qdrant Client | TypeScript | `/packages/vector-client/` | Wrapper for vector DB operations |
| Auth Library | TypeScript | `/packages/auth-lib/` | JWT validation & RBAC policies |
| Terraform IaC | HCL | `/infra/terraform/` | Modular and multi-cloud infrastructure code |
| K8s Manifests | YAML/Helm | `/infra/k8s/` | Deployment, services, autoscaling |

---

## 🔍 Traceability Matrix

| Requirement | Module | Feature Branch | Test Coverage |
|-------------|--------|----------------|---------------|
| FR-001 | `/apps/api/` | `feat/auth` | ✅ Integration/Unit Tests |
| FR-004 | `/packages/vector-client/` | `feature/qdrant-search` | 🟡 Partial (E2E Pending) |
| NFR-002 | `/apps/api/`, `/infra/k8s/` | `perf/latency-opt` | 🟡 Load & Perf Testing |
| NFR-005 | `/infra/terraform/` | `cli/deploy-any` | ✅ Cross-cloud Tests (AWS/GCP/Azure) |

---

## 🔤 Glossary

| Term     | Definition |
|----------|-------------|
| LLM      | Large Language Model (e.g. GPT-4, Claude) |
| RBAC     | Role-Based Access Control |
| Qdrant   | Open-source vector search engine |
| IaC      | Infrastructure as Code |
| ETL      | Extract, Transform, Load |

---

🔗 For full requirement definitions, see:  
[`/docs/SRS.md`](./SRS.md)