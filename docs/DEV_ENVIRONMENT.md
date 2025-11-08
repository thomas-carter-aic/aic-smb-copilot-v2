# Developer Environment Setup

> This document describes how to set up and run the development environment for the `aic-smb-copilot-v2` project. It details the tools, commands, and workflows needed to contribute effectively.

---

## 🛠️ Prerequisites

Install the following before setting up the project:

| Tool        | Version    | Required? |
|-------------|------------|-----------|
| Git         | ≥ 2.x      | ✅        |
| Docker      | ≥ 20.x     | ✅        |
| Node.js     | ≥ 20.x     | ✅ (API/Web) |
| Python      | ≥ 3.11     | ✅ (Workers) |
| Terraform   | ≥ 1.5.x    | ✅ (Infra) |
| Make        | Any        | Optional  |
| VS Code     | Latest     | Optional (recommended) |

---

## 🧱 Repo Structure Overview

See the [full structure in tree.md](./tree.md).

Key directories:

| Path | Description |
|------|-------------|
| `/apps/api/` | TypeScript backend (API Gateway) |
| `/apps/web/` | Next.js frontend UI |
| `/apps/workers/` | Python-based workflow and AI processor |
| `/packages/vector-client/` | Qdrant wrapper for semantic search |
| `/infra/terraform/` | Cloud configuration (IaC) |
| `/infra/kubernetes/` | Kubernetes manifests + Helm charts |
| `/docs/` | Specifications, diagrams, and reference |

---

## 🚀 Local Development (Docker Compose)

Start the whole stack locally:

```bash
# Copy env file
cp .env.example .env

# Build and run services
docker compose up --build
````

This will start:

| Service    | Location                 | URL                                            |
| ---------- | ------------------------ | ---------------------------------------------- |
| Web App    | `/apps/web`              | [http://localhost:3000](http://localhost:3000) |
| API        | `/apps/api`              | [http://localhost:8080](http://localhost:8080) |
| Qdrant     | `/infra/docker/qdrant`   | [http://localhost:6333](http://localhost:6333) |
| PostgreSQL | `/infra/docker/postgres` | localhost:5432                                 |

Stop stack:

```bash
docker compose down
```

---

## 🧑‍💻 Running Locally (No Docker)

### 1. Install dependencies

```bash
# Backend + frontend
npm install

# Workers
pip install -r apps/workers/requirements.txt
```

### 2. Run API & Web

```bash
# In apps/api
npm run dev

# In apps/web
npm run dev
```

### 3. Run Python Workers

```bash
cd apps/workers
python main.py
```

---

## 🌐 Devcontainer Setup (Recommended)

If you're using VS Code:

1. Install Docker Desktop
2. Install the “Dev Containers” extension
3. Clone repo and open in VS Code
4. When prompted, select "Reopen in Container"

This will:

* Auto-install Node, Python, Terraform, etc.
* Build all service dependencies
* Use `.devcontainer/devcontainer.json` config

---

## 🧩 Development Commands

| Action               | Command                                                                |
| -------------------- | ---------------------------------------------------------------------- |
| Format code          | `npm run format` or `black .`                                          |
| Lint code            | `npm run lint` or `flake8`                                             |
| Run API tests        | `npm run test --workspace apps/api`                                    |
| Run Infra plan       | `cd infra/terraform && terraform plan`                                 |
| Debug web app        | Visit [http://localhost:3000](http://localhost:3000) with dev tools on |
| Generate API clients | `npm run generate:sdk`                                                 |

---

## 🔍 Observability Tools

When running locally with Compose, the following dev tools are available:

| Tool       | URL                                                                |
| ---------- | ------------------------------------------------------------------ |
| Grafana    | [http://localhost:3001](http://localhost:3001)                     |
| Prometheus | [http://localhost:9090](http://localhost:9090)                     |
| Loki       | [http://localhost:3100](http://localhost:3100)                     |
| Qdrant UI  | [http://localhost:6333/dashboard](http://localhost:6333/dashboard) |

---

## 🧪 Tests

Run tests from root:

```bash
# API
npm run test --workspace apps/api

# Python workers
pytest apps/workers/tests/
```

Add new tests under each service's test folder:

```plaintext
apps/api/tests/
apps/workers/tests/
```

---

## 🔁 Common Issues & Fixes

| Issue                      | Fix                                 |
| -------------------------- | ----------------------------------- |
| Port 3000 already in use   | `lsof -i:3000` then `kill -9 <pid>` |
| Qdrant not starting        | Ensure Docker Desktop is running    |
| Cannot connect to Postgres | Check `.env` settings               |

---

## 🧹 Cleanup

To remove images, volumes, and networks:

```bash
docker compose down --volumes --remove-orphans
```

---

📘 For production deployment, see:
[`infra/terraform/README.md`](../infra/terraform/README.md)