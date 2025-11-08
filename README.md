# aic-smb-copilot-v2

> **AI-powered SMB Copilot** — The modern, cloud-agnostic, enterprise-grade AI platform that empowers small and medium-sized businesses, designed to deliver custom insights, workflow automation, and conversational intelligence powered by large language models (LLMs).

---

## 🧭 Table of Contents

- [Overview](#-overview)
- [Repository Structure](#-repository-structure)
- [Key Features](#-key-features)
- [Quick Start](#-quick-start)
- [Development](#-development)
- [Documentation](#-documentation)
- [Tech Stack](#-tech-stack)
- [License](#-license)

---

## Main Apps:

* admin-dashboard (Next.js)
* cli (Command line interface)
* docs (Docusaurus)
* mobile (React Native with iOS/Android)
* web (Next.js)

## Services:

* analytics-service (NestJS)
* api-gateway (NestJS)
* auth-service (NestJS)
* document-service (NestJS)
* integration-service (NestJS)
* notification-service (NestJS)
* orchestration-service (NestJS)
* subscription-service (NestJS)
* workflow-engine (NestJS + Temporal)

## Packages:

* analytics
* auth
* config
* constants
* database
* email
* logger
* redis
* storage
* testing
* types
* ui-components
* utils
* validation

## Infrastructure:

* Docker setup with multiple Docker Compose configurations
* Local development environment scripts
* Kubernetes manifests
* Terraform configurations

This is a complete microservices architecture with:

* Multiple frontend applications
* Multiple backend services
* Shared packages
* Infrastructure as code
* Testing infrastructure
* CI/CD pipelines
* Monitoring and logging setup

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Node](https://img.shields.io/badge/node-%3E%3D20.0.0-green.svg)](https://nodejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue.svg)](https://www.typescriptlang.org/)

---

## 🎯 Overview

AIC SMB Copilot is a modular enterprise-grade AI platform designed to help small and medium businesses automate workflows, integrate with existing tools, and leverage AI capabilities without extensive technical expertise; a modular, cloud-agnostic, multi-tenant platform delivering intelligent AI copilots to small and mid-sized businesses. It integrates business data, LLM-powered workflows, and user interactions to deliver operational efficiency and decision support for SMBs. Designed with cloud portability, security, and developer experience in mind. It offers:

## ✨ Features

- 🔒 **Secure, tenant-isolated backend APIs**
- 🎯 **LLM-powered workflows and automation**
- 📊 **Integration with existing business data sources**
- 🧠 **Knowledge management via vectorized retrieval**
- 🚀 **Deployable to AWS (default), with support for other clouds**
- 🤖 **AI-Powered Document Processing** - Intelligent document analysis and automation
- 🔄 **Workflow Automation** - Visual workflow builder with Temporal.io
- 🔌 **Seamless Integrations** - Connect with Slack, Google Workspace, Microsoft 365, and more
- 📊 **Advanced Analytics** - Real-time business insights and reporting
- 📱 **Cross-Platform** - Web, mobile (iOS/Android), and CLI interfaces
- 🔐 **Enterprise Security** - SOC 2 compliant with role-based access control
- 💰 **Flexible Billing** - Usage-based pricing with multiple tiers
- AI Copilot engine powered by pluggable LLM providers
- Multi-tenant RBAC-enabled API gateway
- Vector database-powered RAG with Qdrant
- Observability with full tracing, metrics, and logs
- Devcontainer-powered rapid setup for contributors

---

## 🏗️ Architecture

This is a monorepo built with:

- **Frontend**: Next.js 14, React Native (Expo), TailwindCSS
- **Backend**: NestJS microservices
- **Databases**: PostgreSQL, Redis, Elasticsearch
- **Infrastructure**: Docker, Kubernetes, Terraform
- **Workflow**: Temporal.io
- **Monitoring**: Prometheus, Grafana, Datadog, Sentry

---

## 🧱 Repository Structure

A high-level view of the project's directory layout:

```
aic-smb-copilot/
├── apps/                    # Frontend applications
│   ├── web/                # Main web app (Next.js)
│   ├── admin-dashboard/    # Admin dashboard (Next.js)
│   ├── mobile/             # Mobile app (React Native)
│   ├── cli/                # CLI tool
│   └── docs/               # Documentation site (Docusaurus)
│
├── services/               # Backend microservices
│   ├── api-gateway/        # Kong API Gateway
│   ├── auth-service/       # Authentication & Authorization
│   ├── document-service/   # AI document processing
│   ├── workflow-engine/    # Workflow orchestration
│   ├── integration-service/ # Third-party integrations
│   ├── subscription-service/ # Billing & subscriptions
│   ├── notification-service/ # Email/SMS/Push notifications
│   ├── analytics-service/  # Analytics & reporting
│   └── orchestration-service/ # Service coordination
│
├── packages/               # Shared packages
│   ├── types/              # TypeScript types
│   ├── constants/          # Shared constants
│   ├── config/             # Configuration management
│   ├── utils/              # Utility functions
│   ├── validation/         # Schema validation
│   ├── database/           # Database client & ORM
│   ├── auth/               # Auth middleware & guards
│   ├── logger/             # Logging utilities
│   ├── redis/              # Redis client
│   ├── storage/            # File storage (S3)
│   ├── email/              # Email templates & sender
│   ├── analytics/          # Analytics tracking
│   ├── testing/            # Testing utilities
│   └── ui-components/      # Shared UI components
│
├── infrastructure/         # Infrastructure as Code
│   ├── docker/             # Docker configurations
│   ├── kubernetes/         # K8s manifests
│   ├── terraform/          # Cloud provisioning
│   └── local/              # Local development
│
└── scripts/                # Utility scripts
    ├── build/              # Build scripts
    ├── deploy/             # Deployment scripts
    ├── database/           # Database utilities
    └── testing/            # Testing scripts
```

*(Full tree available in [`tree.md`](./tree.md))*


## 🚀 Quick Start

## 🛠️ Quick Start (Local)

```bash
# Clone the repo
git clone https://github.com/thomas-carter-aic/aic-smb-copilot-v2.git

cd aic-smb-copilot-v2

# Copy environment example
cp .env.example .env

# Start local environment (dev services (API, Web, DBs, etc.))
docker compose up --build

Access the app:

* Frontend: [http://localhost:3000](http://localhost:3000)
* API: [http://localhost:8080](http://localhost:8080)

---

### Prerequisites

- Node.js >= 20.0.0
- pnpm >= 8.0.0
- Docker & Docker Compose
- PostgreSQL 15+
- Redis 7+


### Development

To run the app in a full development environment using VS Code Dev Containers:

1. Install Docker Desktop.
2. Install the Dev Containers extension in VS Code.
3. Reopen the project in devcontainer (will auto-install tools and environments).

### Commands:

```bash
# Install dependencies
npm install && pip install -r requirements.txt

# Start all applications and services in development mode
pnpm dev

# Start specific workspace
pnpm --filter @aic/web dev
pnpm --filter @aic/auth-service dev

# Run tests
pnpm test

# Run linting
pnpm lint

# Type checking
pnpm type-check

# Run API
pnpm --workspace apps/api dev

# Run Web
pnpm --workspace apps/web dev

# Run Python workers
python apps/workers/main.py
```

---

## 📚 Documentation

Relevant guides and reference documents live in `/docs`:

- [Development Guide](./docs/DEVELOPMENT.md)
- [Architecture Overview](./docs/ARCHITECTURE.md)
- [API Documentation](./docs/API.md)
- [Deployment Guide](./docs/DEPLOYMENT.md)
- [Contributing Guidelines](./CONTRIBUTING.md)
- [Architecture Overview](./docs/ARCHITECTURE_OVERVIEW.md)
- [SRS Summary](./docs/SOFTWARE_REQUIREMENTS_SPECIFICATION_SUMMARY.md)
- [Dev Environment Guide](./docs/DEV_ENVIRONMENT.md)

---

## 🧪 Testing

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run integration tests
pnpm test:integration

# Run e2e tests
pnpm test:e2e

# Generate coverage report
pnpm test:coverage
```

## 🛠️ Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start all services in development mode |
| `pnpm build` | Build all applications and services |
| `pnpm test` | Run all tests |
| `pnpm lint` | Run ESLint on all workspaces |
| `pnpm format` | Format code with Prettier |
| `pnpm docker:up` | Start Docker services |
| `pnpm db:migrate` | Run database migrations |
| `pnpm local:setup` | Set up local development environment |

## 🔧 Configuration

### Environment Variables

Create `.env.local` files in each workspace:

```bash
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/aic_db
REDIS_URL=redis://localhost:6379

# Auth
JWT_SECRET=your-secret-key
JWT_EXPIRATION=7d

# API
API_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:3000

# External Services
OPENAI_API_KEY=your-openai-key
SENDGRID_API_KEY=your-sendgrid-key
STRIPE_SECRET_KEY=your-stripe-key
```

See `.env.example` files in each workspace for complete configuration options.

## 🚢 Deployment

### Docker

```bash
# Build all images
pnpm docker:build

# Start production stack
docker-compose -f docker-compose.prod.yml up -d
```

### Kubernetes

```bash
# Apply Kubernetes manifests
kubectl apply -f infrastructure/kubernetes/

# Check deployment status
kubectl get pods -n aic-copilot
```

### Cloud (AWS/GCP/Azure)

```bash
# Initialize Terraform
cd infrastructure/terraform
terraform init

# Plan deployment
terraform plan

# Apply infrastructure
terraform apply
```

See [Deployment Guide](./docs/DEPLOYMENT.md) for detailed instructions.

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](./CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🧰 Tech Stack

| Layer         | Technology                         |
| ------------- | ---------------------------------- |
| Backend       | Node.js + TypeScript (NestJS)      |
| Frontend      | React + TypeScript (Next.js)       |
| Workflows     | Python 3.11                        |
| Vector DB     | Qdrant (Rust/HTTP-based)           |
| Infra as Code | Terraform                          |
| Deployment    | Kubernetes (K8s) + Helm            |
| Observability | OpenTelemetry, Prometheus, Grafana |

---

## 📄 License

This project is currently under a **proprietary license** and not open for public redistribution.

> ⚠️ Note: The licensing model is subject to change based on business and legal review. Future open-sourcing is possible.

## 🙏 Acknowledgments

- [NestJS](https://nestjs.com/) - Backend framework
- [Next.js](https://nextjs.org/) - React framework
- [Temporal](https://temporal.io/) - Workflow engine
- [Turborepo](https://turbo.build/) - Monorepo tools

## 📞 Support

- 📧 Email: support@aic-copilot.com
- 💬 Discord: [Join our community](https://discord.gg/aic-copilot)
- 📖 Docs: [docs.aic-copilot.com](https://docs.aic-copilot.com)

For support or commercial licensing, contact: **[support@yourcompany.com](mailto:support@yourcompany.com)**

Internal collaboration? Join our Slack channel: `#copilot-dev`

```

## 🗺️ Roadmap

- [x] Core authentication system
- [x] Document processing pipeline
- [x] Basic workflow engine
- [ ] Advanced AI features
- [ ] Mobile app v1.0
- [ ] 20+ integrations
- [ ] Advanced analytics dashboard
- [ ] Multi-language support
- [ ] SOC 2 Type II certification

---

Made with ❤️ by the AIC Team