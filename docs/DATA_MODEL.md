# Data Model — aic-smb-copilot-v2

This document explains the logical data model used in `aic-smb-copilot-v2`.  
It includes a description of the core entities, their relationships, and how they relate to both the REST API (OpenAPI) and GraphQL schema.

> ✅ See the accompanying `ERD_DIAGRAM.svg` for the visual representation of the model.

---

## 📐 Overview

The data model is designed to support the following core workflows:

- **Multi-tenant support** with role-based access control (RBAC)
- **Document ingestion and semantic indexing**
- **Workflow orchestration and run execution**
- **End-user API consumption through REST and GraphQL**
- **RBAC-based, secure access to resources**

Entities are grouped into several domains:

| Domain        | Key Entities                     |
|---------------|----------------------------------|
| Auth & User   | `User`, `Role`, `Policy`         |
| Tenant Mgmt   | `Tenant`, `Plan`                 |
| Knowledgebase | `Document`, `SemanticChunk`      |
| Workflows     | `Workflow`, `WorkflowStep`, `WorkflowRun` |
| Billing       | `Invoice`, `Subscription`, etc. (future) |

---

## 📦 Entities and Relationships

### 👤 User

- Belongs to exactly **one Tenant**
- Can have multiple **Roles**
- Identified uniquely across the platform by email

| Field         | Type     | Notes                          |
|---------------|----------|--------------------------------|
| id            | UUID     | Primary key                    |
| email         | String   | Unique email                   |
| displayName   | String   | Optional full name             |
| tenantId      | UUID     | Foreign key to Tenant          |
| roles         | String[] | One or more assigned roles     |
| pictureUrl    | URL      | Profile picture                |
| createdAt     | DateTime | Record created datetime        |
| updatedAt     | DateTime | Record updated datetime        |

---

### 🏢 Tenant

- Represents an organizational unit
- Defines default settings (e.g., billing plan and features)

| Field      | Type       | Notes                         |
|------------|------------|-------------------------------|
| id         | UUID       | Primary key                   |
| name       | String     | Display name                  |
| slug       | String     | URL safe slug (optional)      |
| status     | Enum       | ACTIVE, SUSPENDED, ARCHIVED   |
| settings   | JSON       | Custom tenant-wide settings   |
| createdAt  | DateTime   | Timestamp                     |

Relationships:
- `Tenant` has many `Users`
- `Tenant` has many `Documents`
- `Tenant` has many `Workflows`

---

### 📄 Document

- Indexed unit in user knowledge base
- Associated with content chunks (vector embeddings)

| Field       | Type       | Notes                         |
|-------------|------------|-------------------------------|
| id          | UUID       | Primary key                   |
| tenantId    | UUID       | Foreign key to Tenant         |
| uri         | String     | Location in object storage    |
| mimeType    | String     | Type of file e.g. text/plain  |
| metadata    | JSON       | Parses from upload            |
| status      | Enum       | PENDING → PROCESSING → READY  |
| createdAt   | DateTime   | Timestamp                     |

---

### 🧠 SemanticChunk (Vector DB layer)

- Stores embedding vectors and metadata for chunks of documents
- Physically stored in vector DB (e.g., **Qdrant**)
- Connected back to `Document` by `documentId`

> Same schema is federated into GraphQL for embedded queries

---

### 🧩 Workflow

- Declarative definitions of multi-step automations
- Steps specify input/output schemas and execution logic (Python workers or API calls)

| Field        | Type     | Notes                                 |
|--------------|----------|---------------------------------------|
| id           | UUID     | Primary key                           |
| tenantId     | UUID     | Foreign key to Tenant                 |
| name         | String   | Human-friendly name                   |
| steps        | Array    | JSON array of structured action nodes |
| status       | Enum     | ACTIVE or ARCHIVED                    |
| createdAt    | DateTime | Timestamp                             |
| updatedAt    | DateTime | Timestamp                             |

---

### ⏱️ WorkflowRun

- Logs execution of a workflow
- Tracks status and step outputs
- Can be observed in real-time via WebSocket or GQL subscriptions

| Field       | Type     | Notes                          |
|-------------|----------|--------------------------------|
| id          | UUID     | Primary key                    |
| workflowId  | UUID     | Reference to Workflow          |
| status      | Enum     | QUEUED / RUNNING / FAILED etc. |
| output      | JSON     | Final result of execution      |
| error       | JSON     | If a step fails                |
| startedAt   | DateTime | Timestamp                      |
| finishedAt  | DateTime | Timestamp                      |

---

## 🔗 Diagram

See the `ERD_DIAGRAM.svg` file for a visual summary of entity relationships.


[User] 1─* [Document]
[Tenant] 1─* [User]
[Tenant] 1─* [Document]
[Tenant] 1─* [Workflow]
[Workflow] 1─* [WorkflowRun]
[Document] 1─* [SemanticChunk]


---

## ✅ Implementation & ORM

- This model maps cleanly into Prisma ORM (recommended for Node with PostgreSQL)
- GraphQL schema (`schema.graphql`) aligns with this data model
- REST API paths refer directly to entities here (see `openapi.yaml`)

To generate migrations for these entities, see `infrastructure/DATABASE_MIGRATIONS/README.md`.

---

## 📘 Related Files

- `ERD_DIAGRAM.svg`
- `graphql/schema.graphql`
- `openapi.yaml`
- `ACCESS_CONTROL_AND_RBAC.md` (permission tree)
