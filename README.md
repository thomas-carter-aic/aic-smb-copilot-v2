# AIC SMB Copilot

> AI-powered copilot platform for Small and Medium Businesses

This is a monorepo with multiple applications and services. Let me analyze the structure:

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

## 🎯 Overview

AIC SMB Copilot is an enterprise-grade AI-powered platform designed to help small and medium businesses automate workflows, integrate with existing tools, and leverage AI capabilities without extensive technical expertise.

## ✨ Features

- 🤖 **AI-Powered Document Processing** - Intelligent document analysis and automation
- 🔄 **Workflow Automation** - Visual workflow builder with Temporal.io
- 🔌 **Seamless Integrations** - Connect with Slack, Google Workspace, Microsoft 365, and more
- 📊 **Advanced Analytics** - Real-time business insights and reporting
- 📱 **Cross-Platform** - Web, mobile (iOS/Android), and CLI interfaces
- 🔐 **Enterprise Security** - SOC 2 compliant with role-based access control
- 💰 **Flexible Billing** - Usage-based pricing with multiple tiers

## 🏗️ Architecture

This is a monorepo built with:

- **Frontend**: Next.js 14, React Native (Expo), TailwindCSS
- **Backend**: NestJS microservices
- **Databases**: PostgreSQL, Redis, Elasticsearch
- **Infrastructure**: Docker, Kubernetes, Terraform
- **Workflow**: Temporal.io
- **Monitoring**: Prometheus, Grafana, Datadog, Sentry

### Project Structure

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

## 🚀 Quick Start

### Prerequisites

- Node.js >= 20.0.0
- pnpm >= 8.0.0
- Docker & Docker Compose
- PostgreSQL 15+
- Redis 7+

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/aic-smb-copilot.git
cd aic-smb-copilot

# Install dependencies
pnpm install

# Set up local environment
pnpm local:setup

# Start development services
pnpm local:start

# Run database migrations
pnpm db:migrate

# Seed development data
pnpm db:seed
```

### Development

```bash
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
```

## 📚 Documentation

- [Development Guide](./docs/DEVELOPMENT.md)
- [Architecture Overview](./docs/ARCHITECTURE.md)
- [API Documentation](./docs/API.md)
- [Deployment Guide](./docs/DEPLOYMENT.md)
- [Contributing Guidelines](./CONTRIBUTING.md)

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

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [NestJS](https://nestjs.com/) - Backend framework
- [Next.js](https://nextjs.org/) - React framework
- [Temporal](https://temporal.io/) - Workflow engine
- [Turborepo](https://turbo.build/) - Monorepo tools

## 📞 Support

- 📧 Email: support@aic-copilot.com
- 💬 Discord: [Join our community](https://discord.gg/aic-copilot)
- 📖 Docs: [docs.aic-copilot.com](https://docs.aic-copilot.com)

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