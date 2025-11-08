# aic-smb-copilot — Kubernetes Deployment

This folder contains Kubernetes manifests for deploying the core application components of **aic-smb-copilot** into a cluster.

It is designed for **local-first development** (e.g., using `kind`, `minikube`, or `k3d`) and can be extended for staging/production clusters when you're ready.

---

## 📁 Directory Overview

```plaintext
applications/aic-smb-copilot/
├── kustomization.yaml     # Base Kustomize config
├── deployments/
│   ├── api-deployment.yaml         # NestJS API deployment
│   ├── worker-deployment.yaml      # Python workflow worker
├── statefulsets/
│   └── postgres-statefulset.yaml   # PostgreSQL persistent database
├── vector-db/
│   └── qdrant-deployment.yaml      # Qdrant vector search backend
└── services/
    ├── api-service.yaml            # Service for API
    ├── postgres-service.yaml       # Service for PostgreSQL
    └── qdrant-service.yaml         # Service for Qdrant
