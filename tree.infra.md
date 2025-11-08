./infra/
├── ansible
│   ├── ansible.cfg
│   ├── group_vars
│   │   ├── all.yml
│   │   ├── development.yml
│   │   ├── production.yml
│   │   ├── README.md
│   │   └── staging.yml
│   ├── inventory
│   │   ├── development.yml
│   │   ├── production.yml
│   │   ├── README.md
│   │   └── staging.yml
│   ├── playbooks
│   │   ├── backup-databases.yml
│   │   ├── deploy-application.yml
│   │   ├── README.md
│   │   ├── security-hardening.yml
│   │   ├── setup-infrastructure.yml
│   │   └── update-certificates.yml
│   ├── README.md
│   └── roles
│       ├── common
│       │   ├── handlers
│       │   │   ├── main.yml
│       │   │   └── README.md
│       │   ├── README.md
│       │   ├── tasks
│       │   │   ├── main.yml
│       │   │   └── README.md
│       │   ├── templates
│       │   │   └── README.md
│       │   └── vars
│       │       ├── main.yml
│       │       └── README.md
│       ├── docker
│       │   ├── handlers
│       │   │   └── README.md
│       │   ├── README.md
│       │   ├── tasks
│       │   │   └── README.md
│       │   └── vars
│       │       └── README.md
│       ├── kubernetes
│       │   ├── README.md
│       │   ├── tasks
│       │   │   └── README.md
│       │   ├── templates
│       │   │   └── README.md
│       │   └── vars
│       │       └── README.md
│       ├── monitoring
│       │   ├── README.md
│       │   ├── tasks
│       │   │   └── README.md
│       │   └── templates
│       │       └── README.md
│       ├── README.md
│       └── security
│           ├── README.md
│           ├── tasks
│           │   └── README.md
│           └── templates
│               └── README.md
├── bootstrap
│   ├── aws
│   │   ├── account-setup
│   │   │   ├── account-factory.tf
│   │   │   ├── consolidated-billing.tf
│   │   │   ├── organizational-units.tf
│   │   │   ├── organizations.tf
│   │   │   ├── README.md
│   │   │   └── service-control-policies.tf
│   │   ├── billing
│   │   │   ├── billing-alarms.tf
│   │   │   ├── budgets.tf
│   │   │   ├── cost-allocation-tags.tf
│   │   │   ├── cost-explorer.tf
│   │   │   └── README.md
│   │   ├── iam
│   │   │   ├── admin-roles.tf
│   │   │   ├── admin-users.tf
│   │   │   ├── assume-role-policies.json
│   │   │   ├── cross-account-roles.tf
│   │   │   ├── password-policy.tf
│   │   │   ├── README.md
│   │   │   ├── root-account-mfa.tf
│   │   │   └── service-accounts.tf
│   │   ├── initial-setup
│   │   │   ├── backend.tf
│   │   │   ├── main.tf
│   │   │   ├── outputs.tf
│   │   │   ├── providers.tf
│   │   │   ├── README.md
│   │   │   └── variables.tf
│   │   ├── networking
│   │   │   ├── direct-connect.tf
│   │   │   ├── README.md
│   │   │   ├── route53-zones.tf
│   │   │   ├── transit-gateway.tf
│   │   │   └── vpc-peering.tf
│   │   ├── README.md
│   │   ├── scripts
│   │   │   ├── bootstrap-aws.sh
│   │   │   ├── configure-cli.sh
│   │   │   ├── enable-services.sh
│   │   │   ├── README.md
│   │   │   └── setup-mfa.sh
│   │   └── security
│   │       ├── access-analyzer.tf
│   │       ├── cloudtrail.tf
│   │       ├── config.tf
│   │       ├── guardduty.tf
│   │       ├── macie.tf
│   │       ├── README.md
│   │       └── security-hub.tf
│   ├── azure
│   │   ├── iam
│   │   │   ├── admin-users.tf
│   │   │   ├── managed-identities.tf
│   │   │   ├── rbac-assignments.tf
│   │   │   ├── README.md
│   │   │   └── service-principals.tf
│   │   ├── initial-setup
│   │   │   ├── backend.tf
│   │   │   ├── main.tf
│   │   │   ├── outputs.tf
│   │   │   ├── README.md
│   │   │   └── variables.tf
│   │   ├── README.md
│   │   ├── scripts
│   │   │   ├── bootstrap-azure.sh
│   │   │   ├── enable-features.sh
│   │   │   └── README.md
│   │   ├── security
│   │   │   ├── activity-logs.tf
│   │   │   ├── key-vault.tf
│   │   │   ├── README.md
│   │   │   ├── security-center.tf
│   │   │   └── sentinel.tf
│   │   └── tenant-setup
│   │       ├── blueprints.tf
│   │       ├── management-groups.tf
│   │       ├── policies.tf
│   │       ├── README.md
│   │       └── subscriptions.tf
│   ├── certificates
│   │   ├── acm
│   │   │   ├── certificates.tf
│   │   │   ├── README.md
│   │   │   └── validation.tf
│   │   ├── letsencrypt
│   │   │   ├── cert-manager-setup.yaml
│   │   │   ├── cluster-issuer-prod.yaml
│   │   │   ├── cluster-issuer-staging.yaml
│   │   │   ├── README.md
│   │   │   └── wildcard-cert.yaml
│   │   ├── README.md
│   │   └── self-signed
│   │       ├── ca-setup.sh
│   │       ├── generate-certs.sh
│   │       └── README.md
│   ├── ci-cd
│   │   ├── argocd
│   │   │   ├── application-sets.yaml
│   │   │   ├── install.yaml
│   │   │   ├── projects.yaml
│   │   │   ├── README.md
│   │   │   └── repositories.yaml
│   │   ├── github-actions
│   │   │   ├── README.md
│   │   │   ├── secrets
│   │   │   │   ├── README.md
│   │   │   │   └── setup-secrets.sh
│   │   │   ├── self-hosted-runners
│   │   │   │   ├── autoscaling.yaml
│   │   │   │   ├── deployment.yaml
│   │   │   │   ├── README.md
│   │   │   │   └── runner-image
│   │   │   │       └── README.md
│   │   │   └── workflows
│   │   │       ├── bootstrap-workflow.yml
│   │   │       ├── deploy-infrastructure.yml
│   │   │       └── README.md
│   │   ├── gitlab-ci
│   │   │   ├── README.md
│   │   │   ├── runners
│   │   │   │   ├── config.toml
│   │   │   │   ├── deployment.yaml
│   │   │   │   └── README.md
│   │   │   └── variables
│   │   │       ├── README.md
│   │   │       └── setup-variables.sh
│   │   ├── jenkins
│   │   │   ├── casc-config.yaml
│   │   │   ├── deployment.yaml
│   │   │   ├── jobs
│   │   │   │   └── README.md
│   │   │   ├── plugins.txt
│   │   │   └── README.md
│   │   └── README.md
│   ├── databases
│   │   ├── documentdb
│   │   │   ├── cluster-setup.tf
│   │   │   └── README.md
│   │   ├── rds-setup
│   │   │   ├── option-groups.tf
│   │   │   ├── parameter-groups.tf
│   │   │   ├── README.md
│   │   │   └── subnet-groups.tf
│   │   ├── README.md
│   │   └── scripts
│   │       ├── create-users.sh
│   │       ├── init-databases.sh
│   │       └── README.md
│   ├── dns
│   │   ├── cloudflare
│   │   │   ├── dns-records.tf
│   │   │   ├── page-rules.tf
│   │   │   ├── README.md
│   │   │   └── zones.tf
│   │   ├── README.md
│   │   ├── route53
│   │   │   ├── health-checks.tf
│   │   │   ├── hosted-zones.tf
│   │   │   ├── README.md
│   │   │   └── records.tf
│   │   └── scripts
│   │       ├── README.md
│   │       ├── setup-dns.sh
│   │       └── validate-dns.sh
│   ├── docs
│   │   ├── aws-setup.md
│   │   ├── azure-setup.md
│   │   ├── bootstrap-guide.md
│   │   ├── gcp-setup.md
│   │   ├── kubernetes-setup.md
│   │   ├── README.md
│   │   ├── runbook.md
│   │   └── troubleshooting.md
│   ├── gcp
│   │   ├── iam
│   │   │   ├── admin-users.tf
│   │   │   ├── custom-roles.tf
│   │   │   ├── README.md
│   │   │   ├── service-accounts.tf
│   │   │   └── workload-identity.tf
│   │   ├── initial-setup
│   │   │   ├── backend.tf
│   │   │   ├── main.tf
│   │   │   ├── outputs.tf
│   │   │   ├── providers.tf
│   │   │   ├── README.md
│   │   │   └── variables.tf
│   │   ├── networking
│   │   │   ├── cloud-dns.tf
│   │   │   ├── cloud-interconnect.tf
│   │   │   ├── README.md
│   │   │   └── shared-vpc.tf
│   │   ├── organization-setup
│   │   │   ├── billing-account.tf
│   │   │   ├── folders.tf
│   │   │   ├── organization.tf
│   │   │   ├── org-policies.tf
│   │   │   └── README.md
│   │   ├── README.md
│   │   ├── scripts
│   │   │   ├── bootstrap-gcp.sh
│   │   │   ├── enable-apis.sh
│   │   │   ├── README.md
│   │   │   └── setup-billing.sh
│   │   └── security
│   │       ├── cloud-audit.tf
│   │       ├── cloud-logging.tf
│   │       ├── README.md
│   │       ├── security-command-center.tf
│   │       └── vpc-service-controls.tf
│   ├── git-repositories
│   │   ├── github
│   │   │   ├── branch-protection.tf
│   │   │   ├── organization.tf
│   │   │   ├── README.md
│   │   │   ├── repositories.tf
│   │   │   ├── secrets.tf
│   │   │   ├── teams.tf
│   │   │   └── webhooks.tf
│   │   ├── gitlab
│   │   │   ├── groups.tf
│   │   │   ├── projects.tf
│   │   │   ├── README.md
│   │   │   └── variables.tf
│   │   ├── README.md
│   │   └── scripts
│   │       ├── create-repos.sh
│   │       ├── README.md
│   │       └── setup-webhooks.sh
│   ├── kubernetes
│   │   ├── cluster-bootstrap
│   │   │   ├── namespace-setup.yaml
│   │   │   ├── network-policies.yaml
│   │   │   ├── rbac-setup.yaml
│   │   │   ├── README.md
│   │   │   ├── resource-quotas.yaml
│   │   │   └── service-accounts.yaml
│   │   ├── core-services
│   │   │   ├── cert-manager
│   │   │   │   ├── certificates.yaml
│   │   │   │   ├── cluster-issuer.yaml
│   │   │   │   ├── install.yaml
│   │   │   │   └── README.md
│   │   │   ├── external-dns
│   │   │   │   ├── config.yaml
│   │   │   │   ├── install.yaml
│   │   │   │   └── README.md
│   │   │   ├── ingress-nginx
│   │   │   │   ├── config.yaml
│   │   │   │   ├── install.yaml
│   │   │   │   └── README.md
│   │   │   ├── metrics-server
│   │   │   │   ├── install.yaml
│   │   │   │   └── README.md
│   │   │   ├── README.md
│   │   │   └── sealed-secrets
│   │   │       ├── controller.yaml
│   │   │       ├── install.yaml
│   │   │       └── README.md
│   │   ├── observability
│   │   │   ├── grafana
│   │   │   │   ├── dashboards.yaml
│   │   │   │   ├── datasources.yaml
│   │   │   │   ├── install.yaml
│   │   │   │   └── README.md
│   │   │   ├── loki
│   │   │   │   ├── install.yaml
│   │   │   │   └── README.md
│   │   │   ├── prometheus
│   │   │   │   ├── install.yaml
│   │   │   │   ├── operator.yaml
│   │   │   │   ├── README.md
│   │   │   │   └── service-monitors.yaml
│   │   │   ├── README.md
│   │   │   └── tempo
│   │   │       ├── install.yaml
│   │   │       └── README.md
│   │   ├── README.md
│   │   ├── scripts
│   │   │   ├── bootstrap-cluster.sh
│   │   │   ├── install-core-services.sh
│   │   │   ├── README.md
│   │   │   └── setup-observability.sh
│   │   └── security
│   │       ├── admission-controllers.yaml
│   │       ├── network-policies.yaml
│   │       ├── pod-security-policies.yaml
│   │       ├── README.md
│   │       └── security-contexts.yaml
│   ├── Makefile
│   ├── monitoring
│   │   ├── datadog
│   │   │   ├── agent-install.yaml
│   │   │   ├── api-keys.tf
│   │   │   └── README.md
│   │   ├── grafana
│   │   │   ├── dashboards
│   │   │   │   └── README.md
│   │   │   ├── datasources
│   │   │   │   └── README.md
│   │   │   ├── deployment.yaml
│   │   │   ├── plugins.yaml
│   │   │   └── README.md
│   │   ├── newrelic
│   │   │   ├── agent-install.yaml
│   │   │   ├── license-key.tf
│   │   │   └── README.md
│   │   ├── prometheus
│   │   │   ├── alertmanager.yaml
│   │   │   ├── operator-install.yaml
│   │   │   ├── prometheus-instance.yaml
│   │   │   ├── README.md
│   │   │   └── recording-rules.yaml
│   │   └── README.md
│   ├── networking
│   │   ├── README.md
│   │   ├── service-mesh
│   │   │   ├── istio-install.yaml
│   │   │   ├── linkerd-install.yaml
│   │   │   └── README.md
│   │   ├── vpc-setup
│   │   │   ├── main-vpc.tf
│   │   │   ├── nat-gateways.tf
│   │   │   ├── README.md
│   │   │   ├── route-tables.tf
│   │   │   └── subnets.tf
│   │   └── vpn
│   │       ├── client-vpn.tf
│   │       ├── README.md
│   │       └── site-to-site.tf
│   ├── README.md
│   ├── scripts
│   │   ├── bootstrap
│   │   │   ├── bootstrap-all.sh
│   │   │   ├── bootstrap-aws.sh
│   │   │   ├── bootstrap-azure.sh
│   │   │   ├── bootstrap-gcp.sh
│   │   │   ├── bootstrap-k8s.sh
│   │   │   └── README.md
│   │   ├── cleanup
│   │   │   ├── cleanup-resources.sh
│   │   │   ├── destroy-bootstrap.sh
│   │   │   └── README.md
│   │   ├── prerequisites
│   │   │   ├── check-requirements.sh
│   │   │   ├── install-tools.sh
│   │   │   ├── README.md
│   │   │   └── verify-credentials.sh
│   │   ├── README.md
│   │   └── validation
│   │       ├── README.md
│   │       ├── test-connectivity.sh
│   │       ├── validate-setup.sh
│   │       └── verify-permissions.sh
│   ├── secrets-management
│   │   ├── external-secrets
│   │   │   ├── external-secrets.yaml
│   │   │   ├── operator-install.yaml
│   │   │   ├── README.md
│   │   │   └── secret-stores.yaml
│   │   ├── README.md
│   │   ├── sealed-secrets
│   │   │   ├── cert-generation.sh
│   │   │   ├── controller-install.yaml
│   │   │   └── README.md
│   │   └── vault
│   │       ├── config
│   │       │   ├── auto-unseal.tf
│   │       │   ├── README.md
│   │       │   └── vault-config.hcl
│   │       ├── install.yaml
│   │       ├── policies
│   │       │   ├── admin-policy.hcl
│   │       │   ├── app-policy.hcl
│   │       │   ├── README.md
│   │       │   └── read-only-policy.hcl
│   │       ├── README.md
│   │       └── unsealing.sh
│   ├── storage
│   │   ├── backup-config
│   │   │   ├── backup-plans.tf
│   │   │   ├── README.md
│   │   │   └── retention-policies.tf
│   │   ├── disaster-recovery
│   │   │   ├── README.md
│   │   │   ├── recovery-procedures.md
│   │   │   └── replication-config.tf
│   │   ├── README.md
│   │   └── s3-buckets
│   │       ├── artifacts.tf
│   │       ├── backups.tf
│   │       ├── logs.tf
│   │       ├── README.md
│   │       └── terraform-state.tf
│   ├── templates
│   │   ├── env
│   │   │   ├── credentials.example
│   │   │   └── README.md
│   │   ├── kubeconfig
│   │   │   ├── kubeconfig.yaml.tmpl
│   │   │   └── README.md
│   │   ├── README.md
│   │   └── tfvars
│   │       ├── dev.tfvars.example
│   │       ├── production.tfvars.example
│   │       ├── README.md
│   │       └── staging.tfvars.example
│   └── terraform-state
│       ├── azure-backend
│       │   ├── container.tf
│       │   ├── main.tf
│       │   ├── README.md
│       │   └── storage-account.tf
│       ├── gcs-backend
│       │   ├── iam.tf
│       │   ├── main.tf
│       │   ├── README.md
│       │   └── storage-bucket.tf
│       ├── README.md
│       └── s3-backend
│           ├── dynamodb.tf
│           ├── iam.tf
│           ├── kms.tf
│           ├── main.tf
│           ├── outputs.tf
│           ├── README.md
│           └── s3.tf
├── DATABASE_MIGRATIONS
│   ├── prisma
│   │   └── schema.prisma
│   └── README.md
├── databases
│   ├── backups
│   │   ├── backup-plans.tf
│   │   ├── README.md
│   │   └── restore-procedures.md
│   ├── clickhouse
│   │   ├── config.xml
│   │   ├── instances.tf
│   │   └── README.md
│   ├── migrations
│   │   ├── init-schema.sql
│   │   ├── README.md
│   │   └── seed-data.sql
│   ├── postgres
│   │   ├── parameter-groups.tf
│   │   ├── rds.tf
│   │   ├── README.md
│   │   ├── replicas.tf
│   │   └── subnet-groups.tf
│   ├── README.md
│   ├── redis
│   │   ├── elasticache.tf
│   │   ├── README.md
│   │   └── replication-groups.tf
│   └── scylla
│       ├── cluster-config.yaml
│       ├── instances.tf
│       └── README.md
├── docker
│   ├── base
│   │   ├── nginx.Dockerfile
│   │   ├── node.Dockerfile
│   │   ├── python.Dockerfile
│   │   └── README.md
│   ├── development
│   │   ├── docker-compose.override.yml
│   │   ├── docker-compose.yml
│   │   └── README.md
│   ├── nginx
│   │   ├── default.conf
│   │   ├── nginx.conf
│   │   ├── README.md
│   │   └── ssl
│   │       └── README.md
│   ├── postgres
│   ├── production
│   │   ├── docker-compose.prod.yml
│   │   └── README.md
│   ├── qdrant
│   ├── README.md
│   ├── scripts
│   │   ├── build-all.sh
│   │   ├── clean.sh
│   │   ├── push-all.sh
│   │   └── README.md
│   └── testing
│       ├── docker-compose.test.yml
│       ├── Dockerfile.test
│       └── README.md
├── event-bus
│   ├── docker-compose.yml
│   ├── docs
│   │   ├── architecture.md
│   │   ├── best-practices.md
│   │   ├── event-design.md
│   │   ├── kafka-guide.md
│   │   ├── rabbitmq-guide.md
│   │   ├── README.md
│   │   └── troubleshooting.md
│   ├── event-schemas
│   │   ├── billing-events
│   │   │   ├── index.ts
│   │   │   ├── payment-received.schema.ts
│   │   │   ├── README.md
│   │   │   └── subscription-created.schema.ts
│   │   ├── README.md
│   │   ├── user-events
│   │   │   ├── index.ts
│   │   │   ├── README.md
│   │   │   ├── user-created.schema.ts
│   │   │   ├── user-deleted.schema.ts
│   │   │   └── user-updated.schema.ts
│   │   ├── validation
│   │   │   ├── README.md
│   │   │   ├── schema-registry.ts
│   │   │   └── validator.ts
│   │   └── workflow-events
│   │       ├── index.ts
│   │       ├── README.md
│   │       ├── workflow-completed.schema.ts
│   │       ├── workflow-failed.schema.ts
│   │       └── workflow-started.schema.ts
│   ├── examples
│   │   ├── cqrs-pattern.md
│   │   ├── event-sourcing.md
│   │   ├── outbox-pattern.md
│   │   ├── README.md
│   │   ├── saga-pattern.md
│   │   └── simple-pub-sub.md
│   ├── integrations
│   │   ├── express
│   │   │   ├── event-middleware.ts
│   │   │   ├── README.md
│   │   │   └── webhook-handler.ts
│   │   ├── nestjs
│   │   │   ├── event-bus.module.ts
│   │   │   ├── event-emitter.service.ts
│   │   │   ├── event-listener.decorator.ts
│   │   │   ├── README.md
│   │   │   └── saga.decorator.ts
│   │   ├── prisma
│   │   │   ├── event-publisher.ts
│   │   │   ├── outbox-middleware.ts
│   │   │   └── README.md
│   │   └── README.md
│   ├── kafka
│   │   ├── connectors
│   │   │   ├── elasticsearch-sink.json
│   │   │   ├── kafka-connect.yaml
│   │   │   ├── postgres-source.json
│   │   │   ├── README.md
│   │   │   └── s3-sink.json
│   │   ├── consumers
│   │   │   ├── consumer-config.ts
│   │   │   ├── consumer-group.ts
│   │   │   ├── dead-letter-queue.ts
│   │   │   ├── event-handler.ts
│   │   │   └── README.md
│   │   ├── docker-compose.yml
│   │   ├── installation
│   │   │   ├── install.sh
│   │   │   ├── kafka-cluster.yaml
│   │   │   ├── kafka-config.yaml
│   │   │   ├── README.md
│   │   │   └── strimzi-operator.yaml
│   │   ├── monitoring
│   │   │   ├── alerts.yaml
│   │   │   ├── grafana-dashboards
│   │   │   │   ├── consumer-lag.json
│   │   │   │   ├── kafka-overview.json
│   │   │   │   └── README.md
│   │   │   ├── kafka-exporter.yaml
│   │   │   └── README.md
│   │   ├── producers
│   │   │   ├── batch-producer.ts
│   │   │   ├── event-publisher.ts
│   │   │   ├── producer-config.ts
│   │   │   ├── README.md
│   │   │   └── transaction-producer.ts
│   │   ├── README.md
│   │   ├── schemas
│   │   │   ├── avro-schemas
│   │   │   │   ├── billing-event.avsc
│   │   │   │   ├── README.md
│   │   │   │   ├── user-event.avsc
│   │   │   │   └── workflow-event.avsc
│   │   │   ├── json-schemas
│   │   │   │   ├── README.md
│   │   │   │   ├── user-event.json
│   │   │   │   └── workflow-event.json
│   │   │   ├── README.md
│   │   │   └── schema-registry.yaml
│   │   └── topics
│   │       ├── audit-events.yaml
│   │       ├── billing-events.yaml
│   │       ├── notification-events.yaml
│   │       ├── README.md
│   │       ├── user-events.yaml
│   │       └── workflow-events.yaml
│   ├── monitoring
│   │   ├── alerts
│   │   │   ├── consumer-lag-alert.yaml
│   │   │   ├── error-rate-alert.yaml
│   │   │   ├── README.md
│   │   │   └── throughput-alert.yaml
│   │   ├── dashboards
│   │   │   ├── consumer-lag-dashboard.json
│   │   │   ├── kafka-dashboard.json
│   │   │   ├── rabbitmq-dashboard.json
│   │   │   └── README.md
│   │   ├── metrics
│   │   │   ├── consumer-metrics.ts
│   │   │   ├── lag-metrics.ts
│   │   │   ├── producer-metrics.ts
│   │   │   └── README.md
│   │   ├── README.md
│   │   └── tracing
│   │       ├── correlation-id.ts
│   │       ├── event-tracing.ts
│   │       └── README.md
│   ├── nats
│   │   ├── clients
│   │   │   ├── publisher.ts
│   │   │   ├── README.md
│   │   │   ├── request-reply.ts
│   │   │   └── subscriber.ts
│   │   ├── consumers
│   │   │   ├── durable-consumer.yaml
│   │   │   ├── pull-consumer.yaml
│   │   │   ├── push-consumer.yaml
│   │   │   └── README.md
│   │   ├── docker-compose.yml
│   │   ├── installation
│   │   │   ├── install.sh
│   │   │   ├── nats-cluster.yaml
│   │   │   ├── nats-operator.yaml
│   │   │   └── README.md
│   │   ├── README.md
│   │   └── streams
│   │       ├── notification-stream.yaml
│   │       ├── README.md
│   │       ├── user-stream.yaml
│   │       └── workflow-stream.yaml
│   ├── patterns
│   │   ├── cqrs
│   │   │   ├── command-handler.ts
│   │   │   ├── event-handler.ts
│   │   │   ├── query-handler.ts
│   │   │   └── README.md
│   │   ├── event-sourcing
│   │   │   ├── aggregate.ts
│   │   │   ├── event-store.ts
│   │   │   ├── projection.ts
│   │   │   ├── README.md
│   │   │   └── snapshot.ts
│   │   ├── outbox
│   │   │   ├── outbox-pattern.ts
│   │   │   ├── outbox-publisher.ts
│   │   │   └── README.md
│   │   ├── README.md
│   │   └── saga
│   │       ├── compensation.ts
│   │       ├── README.md
│   │       ├── saga-orchestrator.ts
│   │       └── saga-step.ts
│   ├── rabbitmq
│   │   ├── bindings
│   │   │   ├── binding-rules.yaml
│   │   │   ├── README.md
│   │   │   └── routing-config.yaml
│   │   ├── consumers
│   │   │   ├── consumer.ts
│   │   │   ├── README.md
│   │   │   ├── retry-handler.ts
│   │   │   └── worker.ts
│   │   ├── docker-compose.yml
│   │   ├── exchanges
│   │   │   ├── direct-exchange.yaml
│   │   │   ├── fanout-exchange.yaml
│   │   │   ├── headers-exchange.yaml
│   │   │   ├── README.md
│   │   │   └── topic-exchange.yaml
│   │   ├── installation
│   │   │   ├── install.sh
│   │   │   ├── rabbitmq-cluster.yaml
│   │   │   ├── rabbitmq-operator.yaml
│   │   │   └── README.md
│   │   ├── monitoring
│   │   │   ├── grafana-dashboard.json
│   │   │   ├── prometheus-plugin.yaml
│   │   │   └── README.md
│   │   ├── policies
│   │   │   ├── federation-policy.yaml
│   │   │   ├── ha-policy.yaml
│   │   │   ├── README.md
│   │   │   └── ttl-policy.yaml
│   │   ├── producers
│   │   │   ├── confirm-publisher.ts
│   │   │   ├── publisher.ts
│   │   │   ├── README.md
│   │   │   └── transaction-publisher.ts
│   │   ├── queues
│   │   │   ├── dead-letter-queue.yaml
│   │   │   ├── notification-queue.yaml
│   │   │   ├── README.md
│   │   │   ├── user-queue.yaml
│   │   │   └── workflow-queue.yaml
│   │   └── README.md
│   ├── README.md
│   ├── redis-streams
│   │   ├── consumer-groups
│   │   │   ├── consumer-impl.ts
│   │   │   ├── group-config.ts
│   │   │   └── README.md
│   │   ├── docker-compose.yml
│   │   ├── README.md
│   │   └── streams
│   │       ├── notification-stream.ts
│   │       ├── README.md
│   │       ├── user-stream.ts
│   │       └── workflow-stream.ts
│   ├── reliability
│   │   ├── dead-letter
│   │   │   ├── dlq-handler.ts
│   │   │   ├── poison-message.ts
│   │   │   ├── README.md
│   │   │   └── retry-manager.ts
│   │   ├── idempotency
│   │   │   ├── deduplication.ts
│   │   │   ├── idempotency-key.ts
│   │   │   └── README.md
│   │   ├── ordering
│   │   │   ├── ordered-consumer.ts
│   │   │   ├── partition-key.ts
│   │   │   └── README.md
│   │   ├── README.md
│   │   └── retry
│   │       ├── circuit-breaker.ts
│   │       ├── exponential-backoff.ts
│   │       ├── README.md
│   │       └── retry-policy.ts
│   ├── scripts
│   │   ├── cleanup.sh
│   │   ├── create-topics.sh
│   │   ├── list-consumer-groups.sh
│   │   ├── monitor-lag.sh
│   │   ├── produce-test-event.sh
│   │   ├── README.md
│   │   └── reset-offsets.sh
│   ├── security
│   │   ├── authentication
│   │   │   ├── credentials.yaml
│   │   │   ├── README.md
│   │   │   ├── sasl-config.yaml
│   │   │   └── tls-config.yaml
│   │   ├── authorization
│   │   │   ├── acl-config.yaml
│   │   │   ├── rbac-rules.yaml
│   │   │   └── README.md
│   │   ├── encryption
│   │   │   ├── encryption-config.yaml
│   │   │   ├── README.md
│   │   │   └── tls-certificates
│   │   │       └── README.md
│   │   └── README.md
│   └── testing
│       ├── event-fixtures.ts
│       ├── integration-tests.ts
│       ├── README.md
│       ├── test-consumer.ts
│       └── test-producer.ts
├── helm
│   ├── charts
│   │   ├── aic-platform
│   │   │   ├── Chart.yaml
│   │   │   ├── README.md
│   │   │   ├── templates
│   │   │   │   ├── configmap.yaml
│   │   │   │   ├── deployment.yaml
│   │   │   │   ├── _helpers.tpl
│   │   │   │   ├── hpa.yaml
│   │   │   │   ├── ingress.yaml
│   │   │   │   ├── README.md
│   │   │   │   ├── secret.yaml
│   │   │   │   ├── serviceaccount.yaml
│   │   │   │   └── service.yaml
│   │   │   ├── values-dev.yaml
│   │   │   ├── values-production.yaml
│   │   │   ├── values-staging.yaml
│   │   │   └── values.yaml
│   │   ├── api-gateway
│   │   │   ├── Chart.yaml
│   │   │   ├── README.md
│   │   │   ├── templates
│   │   │   │   └── README.md
│   │   │   └── values.yaml
│   │   ├── microservices
│   │   │   ├── Chart.yaml
│   │   │   ├── README.md
│   │   │   ├── templates
│   │   │   │   └── README.md
│   │   │   └── values.yaml
│   │   ├── README.md
│   │   └── web-app
│   │       ├── Chart.yaml
│   │       ├── README.md
│   │       ├── templates
│   │       │   └── README.md
│   │       └── values.yaml
│   ├── dependencies
│   │   ├── kafka
│   │   │   └── README.md
│   │   ├── postgres
│   │   │   └── README.md
│   │   ├── README.md
│   │   ├── redis
│   │   │   └── README.md
│   │   └── temporal
│   │       └── README.md
│   └── README.md
├── kubernetes
│   ├── base
│   │   ├── limit-ranges.yaml
│   │   ├── namespace.yaml
│   │   ├── network-policies.yaml
│   │   ├── README.md
│   │   ├── resource-quotas.yaml
│   │   └── service-accounts.yaml
│   ├── infrastructure
│   │   ├── cert-manager
│   │   │   ├── cluster-issuer.yaml
│   │   │   ├── deployment.yaml
│   │   │   ├── kustomization.yaml
│   │   │   └── README.md
│   │   ├── cluster-autoscaler
│   │   │   ├── deployment.yaml
│   │   │   ├── kustomization.yaml
│   │   │   └── README.md
│   │   ├── external-dns
│   │   │   ├── deployment.yaml
│   │   │   ├── kustomization.yaml
│   │   │   └── README.md
│   │   ├── ingress-nginx
│   │   │   ├── configmap.yaml
│   │   │   ├── deployment.yaml
│   │   │   ├── kustomization.yaml
│   │   │   ├── README.md
│   │   │   └── service.yaml
│   │   ├── metrics-server
│   │   │   ├── deployment.yaml
│   │   │   ├── kustomization.yaml
│   │   │   └── README.md
│   │   └── README.md
│   ├── logging
│   │   ├── elasticsearch
│   │   │   ├── kustomization.yaml
│   │   │   ├── README.md
│   │   │   └── statefulset.yaml
│   │   ├── fluentd
│   │   │   ├── configmap.yaml
│   │   │   ├── daemonset.yaml
│   │   │   ├── kustomization.yaml
│   │   │   └── README.md
│   │   └── README.md
│   ├── monitoring
│   │   ├── alertmanager
│   │   │   ├── config.yaml
│   │   │   ├── deployment.yaml
│   │   │   ├── kustomization.yaml
│   │   │   └── README.md
│   │   ├── grafana
│   │   │   ├── dashboards
│   │   │   │   └── README.md
│   │   │   ├── datasources.yaml
│   │   │   ├── deployment.yaml
│   │   │   ├── kustomization.yaml
│   │   │   └── README.md
│   │   ├── prometheus
│   │   │   ├── kustomization.yaml
│   │   │   ├── prometheus.yaml
│   │   │   ├── README.md
│   │   │   ├── rules.yaml
│   │   │   └── service-monitors.yaml
│   │   └── README.md
│   ├── operators
│   │   ├── kafka-operator
│   │   │   └── README.md
│   │   ├── postgres-operator
│   │   │   └── README.md
│   │   ├── README.md
│   │   └── redis-operator
│   │       └── README.md
│   └── README.md
├── monitoring
│   ├── alertmanager
│   │   ├── alertmanager.yml
│   │   ├── README.md
│   │   └── templates
│   │       ├── email.tmpl
│   │       ├── README.md
│   │       └── slack.tmpl
│   ├── datadog
│   │   ├── conf.d
│   │   │   └── README.md
│   │   ├── datadog.yaml
│   │   └── README.md
│   ├── grafana
│   │   ├── dashboards
│   │   │   ├── api-gateway.json
│   │   │   ├── application-metrics.json
│   │   │   ├── business-kpis.json
│   │   │   ├── database-performance.json
│   │   │   ├── kubernetes-cluster.json
│   │   │   └── README.md
│   │   ├── datasources
│   │   │   ├── elasticsearch.yaml
│   │   │   ├── loki.yaml
│   │   │   ├── prometheus.yaml
│   │   │   └── README.md
│   │   ├── grafana.ini
│   │   └── README.md
│   ├── loki
│   │   ├── loki-config.yaml
│   │   ├── promtail-config.yaml
│   │   └── README.md
│   ├── prometheus
│   │   ├── prometheus.yml
│   │   ├── README.md
│   │   ├── rules
│   │   │   ├── alerts.yml
│   │   │   ├── README.md
│   │   │   ├── recording-rules.yml
│   │   │   └── slos.yml
│   │   └── targets
│   │       ├── kubernetes.json
│   │       ├── README.md
│   │       └── services.json
│   └── README.md
├── networking
│   ├── cdn
│   │   ├── cloudfront.tf
│   │   ├── distributions.tf
│   │   └── README.md
│   ├── dns
│   │   ├── README.md
│   │   ├── records.tf
│   │   └── route53.tf
│   ├── load-balancers
│   │   ├── application-lb.tf
│   │   ├── network-lb.tf
│   │   ├── README.md
│   │   └── target-groups.tf
│   ├── README.md
│   ├── security-groups
│   │   ├── api-gateway.tf
│   │   ├── databases.tf
│   │   ├── kubernetes.tf
│   │   ├── load-balancers.tf
│   │   └── README.md
│   ├── vpc
│   │   ├── main.tf
│   │   ├── nat-gateways.tf
│   │   ├── README.md
│   │   ├── route-tables.tf
│   │   ├── subnets.tf
│   │   └── vpc-endpoints.tf
│   └── vpn
│       ├── client-vpn.tf
│       ├── README.md
│       └── site-to-site.tf
├── packer
│   ├── ansible
│   │   ├── inventory
│   │   │   ├── hosts
│   │   │   └── README.md
│   │   ├── playbooks
│   │   │   ├── application-setup.yml
│   │   │   ├── base-setup.yml
│   │   │   ├── monitoring-setup.yml
│   │   │   ├── README.md
│   │   │   └── security-hardening.yml
│   │   ├── README.md
│   │   └── roles
│   │       ├── common
│   │       │   └── README.md
│   │       ├── docker
│   │       │   └── README.md
│   │       ├── kubernetes
│   │       │   └── README.md
│   │       ├── README.md
│   │       └── security
│   │           └── README.md
│   ├── aws
│   │   ├── application
│   │   │   ├── api-server.pkr.hcl
│   │   │   ├── database-server.pkr.hcl
│   │   │   ├── README.md
│   │   │   ├── web-server.pkr.hcl
│   │   │   └── worker-node.pkr.hcl
│   │   ├── base
│   │   │   ├── amazon-linux-base.pkr.hcl
│   │   │   ├── README.md
│   │   │   ├── ubuntu-base.pkr.hcl
│   │   │   └── variables.pkr.hcl
│   │   ├── golden-images
│   │   │   ├── cis-compliant.pkr.hcl
│   │   │   ├── hardened-ubuntu.pkr.hcl
│   │   │   ├── README.md
│   │   │   └── soc2-compliant.pkr.hcl
│   │   ├── kubernetes
│   │   │   ├── k8s-master.pkr.hcl
│   │   │   ├── k8s-node.pkr.hcl
│   │   │   ├── k8s-worker.pkr.hcl
│   │   │   └── README.md
│   │   └── README.md
│   ├── azure
│   │   ├── aks
│   │   │   ├── aks-node.pkr.hcl
│   │   │   └── README.md
│   │   ├── application
│   │   │   ├── api-server.pkr.hcl
│   │   │   ├── README.md
│   │   │   └── web-server.pkr.hcl
│   │   ├── base
│   │   │   ├── README.md
│   │   │   ├── ubuntu-base.pkr.hcl
│   │   │   └── variables.pkr.hcl
│   │   └── README.md
│   ├── configurations
│   │   ├── docker
│   │   │   ├── daemon.json
│   │   │   └── README.md
│   │   ├── kubernetes
│   │   │   ├── kubeadm-config.yaml
│   │   │   ├── kubelet-config.yaml
│   │   │   └── README.md
│   │   ├── nginx
│   │   │   ├── nginx.conf
│   │   │   ├── README.md
│   │   │   ├── sites
│   │   │   │   └── README.md
│   │   │   └── ssl.conf
│   │   ├── README.md
│   │   ├── sysctl
│   │   │   ├── network-tuning.conf
│   │   │   ├── README.md
│   │   │   └── security.conf
│   │   └── systemd
│   │       ├── api-server.service
│   │       ├── monitoring.service
│   │       ├── README.md
│   │       └── worker.service
│   ├── docker
│   │   ├── application-images
│   │   │   ├── api-gateway.pkr.hcl
│   │   │   ├── README.md
│   │   │   └── worker.pkr.hcl
│   │   ├── base-images
│   │   │   ├── go-base.pkr.hcl
│   │   │   ├── node-base.pkr.hcl
│   │   │   ├── python-base.pkr.hcl
│   │   │   └── README.md
│   │   └── README.md
│   ├── docs
│   │   ├── architecture.md
│   │   ├── best-practices.md
│   │   ├── building-images.md
│   │   ├── README.md
│   │   ├── security-hardening.md
│   │   ├── testing-strategy.md
│   │   └── troubleshooting.md
│   ├── examples
│   │   ├── custom-provisioner.pkr.hcl
│   │   ├── multi-region-ami.pkr.hcl
│   │   ├── README.md
│   │   └── simple-ami.pkr.hcl
│   ├── files
│   │   ├── certificates
│   │   │   └── README.md
│   │   ├── configs
│   │   │   ├── motd.txt
│   │   │   └── README.md
│   │   ├── keys
│   │   │   └── README.md
│   │   └── README.md
│   ├── gcp
│   │   ├── application
│   │   │   ├── api-server.pkr.hcl
│   │   │   ├── README.md
│   │   │   ├── web-server.pkr.hcl
│   │   │   └── worker-node.pkr.hcl
│   │   ├── base
│   │   │   ├── debian-base.pkr.hcl
│   │   │   ├── README.md
│   │   │   ├── ubuntu-base.pkr.hcl
│   │   │   └── variables.pkr.hcl
│   │   ├── gke
│   │   │   ├── gke-node.pkr.hcl
│   │   │   └── README.md
│   │   └── README.md
│   ├── manifests
│   │   ├── manifest.json
│   │   ├── manifest-template.json
│   │   └── README.md
│   ├── packer.pkr.hcl
│   ├── pipelines
│   │   ├── github-actions
│   │   │   ├── build-ami.yml
│   │   │   ├── README.md
│   │   │   ├── test-image.yml
│   │   │   └── validate-template.yml
│   │   ├── gitlab-ci
│   │   │   └── README.md
│   │   ├── jenkins
│   │   │   ├── Jenkinsfile
│   │   │   └── README.md
│   │   └── README.md
│   ├── plugins
│   │   ├── post-processors
│   │   │   ├── custom-post-processor.sh
│   │   │   └── README.md
│   │   ├── provisioners
│   │   │   ├── custom-provisioner.sh
│   │   │   └── README.md
│   │   └── README.md
│   ├── policies
│   │   ├── compliance-policy.json
│   │   ├── README.md
│   │   ├── security-policy.json
│   │   └── tagging-policy.json
│   ├── README.md
│   ├── scripts
│   │   ├── application
│   │   │   ├── install-nginx.sh
│   │   │   ├── install-nodejs.sh
│   │   │   ├── install-postgres.sh
│   │   │   ├── install-python.sh
│   │   │   ├── install-redis.sh
│   │   │   └── README.md
│   │   ├── aws
│   │   │   ├── configure-ssm.sh
│   │   │   ├── install-cloudwatch.sh
│   │   │   ├── README.md
│   │   │   └── setup-efs-mount.sh
│   │   ├── azure
│   │   │   ├── configure-diagnostics.sh
│   │   │   ├── install-azure-monitor.sh
│   │   │   └── README.md
│   │   ├── common
│   │   │   ├── cleanup.sh
│   │   │   ├── configure-networking.sh
│   │   │   ├── harden-security.sh
│   │   │   ├── install-docker.sh
│   │   │   ├── install-kubernetes.sh
│   │   │   ├── README.md
│   │   │   ├── setup-monitoring.sh
│   │   │   └── update-system.sh
│   │   ├── gcp
│   │   │   ├── configure-ops-agent.sh
│   │   │   ├── install-stackdriver.sh
│   │   │   └── README.md
│   │   ├── README.md
│   │   └── security
│   │       ├── configure-firewall.sh
│   │       ├── configure-ssh.sh
│   │       ├── install-clamav.sh
│   │       ├── README.md
│   │       └── setup-fail2ban.sh
│   ├── scripts-build
│   │   ├── build-all-images.sh
│   │   ├── build-app-images.sh
│   │   ├── build-base-images.sh
│   │   ├── publish-images.sh
│   │   ├── README.md
│   │   ├── test-images.sh
│   │   └── validate-templates.sh
│   ├── templates
│   │   ├── builders
│   │   │   ├── aws-builder.pkr.hcl
│   │   │   ├── azure-builder.pkr.hcl
│   │   │   ├── gcp-builder.pkr.hcl
│   │   │   └── README.md
│   │   ├── provisioners
│   │   │   ├── app-provisioners.pkr.hcl
│   │   │   ├── common-provisioners.pkr.hcl
│   │   │   └── README.md
│   │   ├── README.md
│   │   └── variables
│   │       ├── aws-vars.pkr.hcl
│   │       ├── common-vars.pkr.hcl
│   │       ├── gcp-vars.pkr.hcl
│   │       └── README.md
│   ├── tests
│   │   ├── goss
│   │   │   ├── goss-vars.yaml
│   │   │   ├── goss.yaml
│   │   │   └── README.md
│   │   ├── inspec
│   │   │   ├── application-image
│   │   │   │   ├── controls
│   │   │   │   │   └── README.md
│   │   │   │   ├── inspec.yml
│   │   │   │   └── README.md
│   │   │   ├── base-image
│   │   │   │   ├── controls
│   │   │   │   │   ├── packages.rb
│   │   │   │   │   ├── README.md
│   │   │   │   │   ├── security.rb
│   │   │   │   │   └── services.rb
│   │   │   │   ├── inspec.yml
│   │   │   │   └── README.md
│   │   │   ├── kubernetes-node
│   │   │   │   ├── controls
│   │   │   │   │   └── README.md
│   │   │   │   ├── inspec.yml
│   │   │   │   └── README.md
│   │   │   └── README.md
│   │   ├── README.md
│   │   └── serverspec
│   │       ├── README.md
│   │       ├── spec
│   │       │   ├── application_spec.rb
│   │       │   ├── base_spec.rb
│   │       │   └── README.md
│   │       └── spec_helper.rb
│   └── vagrant
│       ├── centos-dev.pkr.hcl
│       ├── README.md
│       ├── ubuntu-dev.pkr.hcl
│       └── variables.pkr.hcl
├── pulumi
│   ├── automation
│   │   ├── programs
│   │   │   ├── backup-restore.ts
│   │   │   ├── cost-optimizer.ts
│   │   │   ├── drift-detector.ts
│   │   │   ├── README.md
│   │   │   └── resource-tagger.ts
│   │   ├── README.md
│   │   └── webhooks
│   │       ├── deployment-tracker.ts
│   │       ├── README.md
│   │       └── slack-notifier.ts
│   ├── aws
│   │   ├── compute
│   │   │   ├── auto-scaling.ts
│   │   │   ├── ec2.ts
│   │   │   ├── elastic-ips.ts
│   │   │   ├── index.ts
│   │   │   ├── launch-templates.ts
│   │   │   └── README.md
│   │   ├── databases
│   │   │   ├── aurora.ts
│   │   │   ├── documentdb.ts
│   │   │   ├── dynamodb.ts
│   │   │   ├── elasticache.ts
│   │   │   ├── index.ts
│   │   │   ├── rds.ts
│   │   │   └── README.md
│   │   ├── kubernetes
│   │   │   ├── addons.ts
│   │   │   ├── eks-cluster.ts
│   │   │   ├── fargate-profiles.ts
│   │   │   ├── index.ts
│   │   │   ├── irsa.ts
│   │   │   ├── node-groups.ts
│   │   │   └── README.md
│   │   ├── messaging
│   │   │   ├── index.ts
│   │   │   ├── kinesis.ts
│   │   │   ├── msk.ts
│   │   │   ├── README.md
│   │   │   ├── sns.ts
│   │   │   └── sqs.ts
│   │   ├── monitoring
│   │   │   ├── cloudtrail.ts
│   │   │   ├── cloudwatch.ts
│   │   │   ├── config.ts
│   │   │   ├── guardduty.ts
│   │   │   ├── index.ts
│   │   │   └── README.md
│   │   ├── networking
│   │   │   ├── index.ts
│   │   │   ├── nat-gateway.ts
│   │   │   ├── README.md
│   │   │   ├── security-groups.ts
│   │   │   ├── subnets.ts
│   │   │   ├── transit-gateway.ts
│   │   │   ├── vpc-endpoints.ts
│   │   │   └── vpc.ts
│   │   ├── README.md
│   │   ├── security
│   │   │   ├── certificate-manager.ts
│   │   │   ├── iam.ts
│   │   │   ├── index.ts
│   │   │   ├── kms.ts
│   │   │   ├── README.md
│   │   │   ├── secrets-manager.ts
│   │   │   └── waf.ts
│   │   ├── serverless
│   │   │   ├── api-gateway.ts
│   │   │   ├── eventbridge.ts
│   │   │   ├── index.ts
│   │   │   ├── lambda.ts
│   │   │   ├── README.md
│   │   │   └── step-functions.ts
│   │   └── storage
│   │       ├── ebs.ts
│   │       ├── efs.ts
│   │       ├── fsx.ts
│   │       ├── index.ts
│   │       ├── README.md
│   │       └── s3.ts
│   ├── azure
│   │   ├── compute
│   │   │   ├── index.ts
│   │   │   ├── README.md
│   │   │   ├── scale-sets.ts
│   │   │   └── virtual-machines.ts
│   │   ├── databases
│   │   │   ├── cosmos-db.ts
│   │   │   ├── index.ts
│   │   │   ├── postgres.ts
│   │   │   ├── README.md
│   │   │   └── redis-cache.ts
│   │   ├── kubernetes
│   │   │   ├── aks-cluster.ts
│   │   │   ├── index.ts
│   │   │   ├── node-pools.ts
│   │   │   └── README.md
│   │   ├── networking
│   │   │   ├── index.ts
│   │   │   ├── load-balancer.ts
│   │   │   ├── nsg.ts
│   │   │   ├── README.md
│   │   │   ├── subnets.ts
│   │   │   └── vnet.ts
│   │   ├── README.md
│   │   └── storage
│   │       ├── blob-storage.ts
│   │       ├── file-shares.ts
│   │       ├── index.ts
│   │       └── README.md
│   ├── components
│   │   ├── compute
│   │   │   ├── asg-component.ts
│   │   │   ├── ec2-component.ts
│   │   │   └── README.md
│   │   ├── database
│   │   │   ├── rds-component.ts
│   │   │   ├── README.md
│   │   │   └── redis-component.ts
│   │   ├── kubernetes
│   │   │   ├── aks-component.ts
│   │   │   ├── eks-component.ts
│   │   │   ├── gke-component.ts
│   │   │   └── README.md
│   │   ├── networking
│   │   │   ├── README.md
│   │   │   ├── security-group-component.ts
│   │   │   ├── subnet-component.ts
│   │   │   └── vpc-component.ts
│   │   ├── README.md
│   │   └── storage
│   │       ├── efs-component.ts
│   │       ├── README.md
│   │       └── s3-component.ts
│   ├── docs
│   │   ├── architecture.md
│   │   ├── best-practices.md
│   │   ├── component-guide.md
│   │   ├── getting-started.md
│   │   ├── policy-guide.md
│   │   ├── README.md
│   │   ├── stack-configuration.md
│   │   └── troubleshooting.md
│   ├── gcp
│   │   ├── compute
│   │   │   ├── auto-scaling.ts
│   │   │   ├── index.ts
│   │   │   ├── instance-groups.ts
│   │   │   ├── instances.ts
│   │   │   └── README.md
│   │   ├── databases
│   │   │   ├── bigtable.ts
│   │   │   ├── cloud-sql.ts
│   │   │   ├── firestore.ts
│   │   │   ├── index.ts
│   │   │   ├── memorystore.ts
│   │   │   └── README.md
│   │   ├── kubernetes
│   │   │   ├── gke-cluster.ts
│   │   │   ├── index.ts
│   │   │   ├── node-pools.ts
│   │   │   ├── README.md
│   │   │   └── workload-identity.ts
│   │   ├── networking
│   │   │   ├── firewall.ts
│   │   │   ├── index.ts
│   │   │   ├── load-balancer.ts
│   │   │   ├── README.md
│   │   │   ├── subnets.ts
│   │   │   └── vpc.ts
│   │   ├── README.md
│   │   ├── security
│   │   │   ├── certificate-manager.ts
│   │   │   ├── iam.ts
│   │   │   ├── index.ts
│   │   │   ├── README.md
│   │   │   └── secret-manager.ts
│   │   ├── serverless
│   │   │   ├── app-engine.ts
│   │   │   ├── cloud-functions.ts
│   │   │   ├── cloud-run.ts
│   │   │   ├── index.ts
│   │   │   └── README.md
│   │   └── storage
│   │       ├── filestore.ts
│   │       ├── gcs.ts
│   │       ├── index.ts
│   │       └── README.md
│   ├── kubernetes
│   │   ├── config
│   │   │   ├── config-maps.ts
│   │   │   ├── index.ts
│   │   │   ├── README.md
│   │   │   └── secrets.ts
│   │   ├── deployments
│   │   │   ├── api-gateway.ts
│   │   │   ├── auth-service.ts
│   │   │   ├── index.ts
│   │   │   ├── README.md
│   │   │   └── user-service.ts
│   │   ├── helm
│   │   │   ├── argocd.ts
│   │   │   ├── cert-manager.ts
│   │   │   ├── grafana.ts
│   │   │   ├── index.ts
│   │   │   ├── prometheus.ts
│   │   │   └── README.md
│   │   ├── ingress
│   │   │   ├── index.ts
│   │   │   ├── ingress-rules.ts
│   │   │   ├── nginx-ingress.ts
│   │   │   └── README.md
│   │   ├── namespaces
│   │   │   ├── applications.ts
│   │   │   ├── index.ts
│   │   │   ├── platform.ts
│   │   │   └── README.md
│   │   ├── README.md
│   │   ├── services
│   │   │   ├── index.ts
│   │   │   ├── internal-services.ts
│   │   │   ├── load-balancers.ts
│   │   │   └── README.md
│   │   └── storage
│   │       ├── index.ts
│   │       ├── persistent-volumes.ts
│   │       ├── README.md
│   │       └── storage-classes.ts
│   ├── package.json
│   ├── policies
│   │   ├── aws
│   │   │   ├── compliance-policies.ts
│   │   │   ├── cost-policies.ts
│   │   │   ├── index.ts
│   │   │   ├── README.md
│   │   │   └── security-policies.ts
│   │   ├── gcp
│   │   │   ├── index.ts
│   │   │   ├── README.md
│   │   │   └── security-policies.ts
│   │   ├── kubernetes
│   │   │   ├── index.ts
│   │   │   ├── pod-security.ts
│   │   │   ├── README.md
│   │   │   └── resource-limits.ts
│   │   ├── PulumiPolicy.yaml
│   │   └── README.md
│   ├── Pulumi.yaml
│   ├── README.md
│   ├── scripts
│   │   ├── deploy-stack.sh
│   │   ├── destroy-stack.sh
│   │   ├── export-stack.sh
│   │   ├── import-resources.sh
│   │   ├── init-stack.sh
│   │   ├── preview-changes.sh
│   │   └── README.md
│   ├── stacks
│   │   ├── dev
│   │   │   ├── config.ts
│   │   │   ├── index.ts
│   │   │   ├── Pulumi.dev.yaml
│   │   │   └── README.md
│   │   ├── production
│   │   │   ├── config.ts
│   │   │   ├── index.ts
│   │   │   ├── Pulumi.production.yaml
│   │   │   └── README.md
│   │   ├── README.md
│   │   ├── shared
│   │   │   ├── config.ts
│   │   │   ├── index.ts
│   │   │   ├── Pulumi.shared.yaml
│   │   │   └── README.md
│   │   └── staging
│   │       ├── config.ts
│   │       ├── index.ts
│   │       ├── Pulumi.staging.yaml
│   │       └── README.md
│   ├── templates
│   │   ├── aws-vpc
│   │   │   ├── index.ts
│   │   │   └── README.md
│   │   ├── eks-cluster
│   │   │   ├── index.ts
│   │   │   └── README.md
│   │   ├── README.md
│   │   └── serverless-api
│   │       ├── index.ts
│   │       └── README.md
│   ├── testing
│   │   ├── integration
│   │   │   ├── kubernetes.test.ts
│   │   │   ├── networking.test.ts
│   │   │   └── README.md
│   │   ├── policy
│   │   │   ├── compliance.test.ts
│   │   │   ├── README.md
│   │   │   └── security.test.ts
│   │   ├── README.md
│   │   └── unit
│   │       ├── eks.test.ts
│   │       ├── rds.test.ts
│   │       ├── README.md
│   │       └── vpc.test.ts
│   ├── tsconfig.json
│   ├── types
│   │   ├── aws.ts
│   │   ├── azure.ts
│   │   ├── gcp.ts
│   │   ├── kubernetes.ts
│   │   └── README.md
│   └── utils
│       ├── constants.ts
│       ├── helpers.ts
│       ├── naming.ts
│       ├── README.md
│       ├── tagging.ts
│       └── validation.ts
├── README.md
├── scripts
│   ├── backup
│   │   ├── backup-configs.sh
│   │   ├── backup-databases.sh
│   │   ├── README.md
│   │   └── restore.sh
│   ├── deploy
│   │   ├── deploy-infrastructure.sh
│   │   ├── deploy-kubernetes.sh
│   │   ├── deploy-monitoring.sh
│   │   ├── README.md
│   │   └── rollback.sh
│   ├── maintenance
│   │   ├── drain-node.sh
│   │   ├── README.md
│   │   ├── rotate-secrets.sh
│   │   ├── scale-cluster.sh
│   │   └── update-certificates.sh
│   ├── monitoring
│   │   ├── alert-test.sh
│   │   ├── check-health.sh
│   │   ├── get-metrics.sh
│   │   └── README.md
│   ├── README.md
│   ├── setup
│   │   ├── bootstrap-terraform.sh
│   │   ├── README.md
│   │   ├── setup-aws-account.sh
│   │   ├── setup-azure-subscription.sh
│   │   └── setup-gcp-project.sh
│   └── utils
│       ├── create-namespace.sh
│       ├── generate-kubeconfig.sh
│       ├── README.md
│       └── update-dns.sh
├── security
│   ├── certificates
│   │   ├── acm.tf
│   │   ├── cert-manager.yaml
│   │   └── README.md
│   ├── compliance
│   │   ├── cloudtrail.tf
│   │   ├── config-rules.tf
│   │   ├── guardduty.tf
│   │   └── README.md
│   ├── iam
│   │   ├── policies.tf
│   │   ├── README.md
│   │   ├── roles.tf
│   │   └── service-accounts.tf
│   ├── policies
│   │   ├── backup-policy.json
│   │   ├── kms-key-policy.json
│   │   ├── README.md
│   │   └── s3-bucket-policy.json
│   ├── README.md
│   ├── secrets
│   │   ├── kms.tf
│   │   ├── README.md
│   │   └── secrets-manager.tf
│   └── waf
│       ├── rate-limiting.tf
│       ├── README.md
│       └── waf-rules.tf
├── service-mesh
│   ├── addons
│   │   ├── flagger
│   │   │   ├── canary-config.yaml
│   │   │   ├── flagger-install.yaml
│   │   │   ├── flagger-metrics.yaml
│   │   │   └── README.md
│   │   ├── grafana
│   │   │   ├── grafana-dashboards.yaml
│   │   │   └── README.md
│   │   ├── kiali
│   │   │   ├── kiali-config.yaml
│   │   │   ├── kiali-install.yaml
│   │   │   └── README.md
│   │   ├── prometheus
│   │   │   ├── prometheus-mesh.yaml
│   │   │   └── README.md
│   │   └── README.md
│   ├── consul-connect
│   │   ├── installation
│   │   │   ├── connect-inject.yaml
│   │   │   ├── consul-config.yaml
│   │   │   └── README.md
│   │   ├── intentions
│   │   │   ├── README.md
│   │   │   └── service-intentions.yaml
│   │   └── README.md
│   ├── docker-compose.yml
│   ├── docs
│   │   ├── best-practices.md
│   │   ├── getting-started.md
│   │   ├── observability.md
│   │   ├── README.md
│   │   ├── security.md
│   │   ├── traffic-management.md
│   │   └── troubleshooting.md
│   ├── examples
│   │   ├── canary-deployment.md
│   │   ├── circuit-breaker.md
│   │   ├── mtls-setup.md
│   │   ├── README.md
│   │   ├── simple-routing.yaml
│   │   └── traffic-splitting.md
│   ├── istio
│   │   ├── authorization
│   │   │   ├── authz-policy.yaml
│   │   │   ├── jwt-policy.yaml
│   │   │   ├── peer-authentication.yaml
│   │   │   ├── README.md
│   │   │   └── request-authentication.yaml
│   │   ├── destination-rules
│   │   │   ├── api-gateway-dr.yaml
│   │   │   ├── circuit-breaker.yaml
│   │   │   ├── connection-pool.yaml
│   │   │   ├── load-balancing.yaml
│   │   │   ├── README.md
│   │   │   └── tls-settings.yaml
│   │   ├── gateways
│   │   │   ├── egress-gateway.yaml
│   │   │   ├── gateway-deployment.yaml
│   │   │   ├── gateway-service.yaml
│   │   │   ├── ingress-gateway.yaml
│   │   │   └── README.md
│   │   ├── installation
│   │   │   ├── install.sh
│   │   │   ├── istio-config.yaml
│   │   │   ├── istio-operator.yaml
│   │   │   ├── profile-default.yaml
│   │   │   ├── profile-demo.yaml
│   │   │   ├── profile-production.yaml
│   │   │   └── README.md
│   │   ├── observability
│   │   │   ├── grafana-dashboards
│   │   │   │   ├── istio-mesh.json
│   │   │   │   ├── istio-service.json
│   │   │   │   ├── istio-workload.json
│   │   │   │   └── README.md
│   │   │   ├── jaeger.yaml
│   │   │   ├── kiali.yaml
│   │   │   ├── prometheus.yaml
│   │   │   └── README.md
│   │   ├── README.md
│   │   ├── service-entries
│   │   │   ├── databases.yaml
│   │   │   ├── external-apis.yaml
│   │   │   ├── README.md
│   │   │   └── third-party.yaml
│   │   ├── telemetry
│   │   │   ├── access-logs.yaml
│   │   │   ├── metrics.yaml
│   │   │   ├── README.md
│   │   │   ├── telemetry-config.yaml
│   │   │   └── tracing.yaml
│   │   ├── traffic-management
│   │   │   ├── fault-injection.yaml
│   │   │   ├── mirroring.yaml
│   │   │   ├── README.md
│   │   │   ├── retry-policy.yaml
│   │   │   ├── timeout.yaml
│   │   │   └── traffic-split.yaml
│   │   └── virtual-services
│   │       ├── api-gateway-vs.yaml
│   │       ├── auth-service-vs.yaml
│   │       ├── canary-routing.yaml
│   │       ├── README.md
│   │       ├── user-service-vs.yaml
│   │       └── workflow-service-vs.yaml
│   ├── linkerd
│   │   ├── installation
│   │   │   ├── install.sh
│   │   │   ├── linkerd-install.yaml
│   │   │   ├── linkerd-smi.yaml
│   │   │   ├── linkerd-viz.yaml
│   │   │   └── README.md
│   │   ├── observability
│   │   │   ├── dashboard-config.yaml
│   │   │   ├── README.md
│   │   │   └── tap.yaml
│   │   ├── profiles
│   │   │   ├── api-gateway-profile.yaml
│   │   │   ├── auth-service-profile.yaml
│   │   │   ├── default-profile.yaml
│   │   │   └── README.md
│   │   ├── README.md
│   │   ├── service-profiles
│   │   │   ├── README.md
│   │   │   ├── retry-budget.yaml
│   │   │   └── timeout-config.yaml
│   │   └── traffic-split
│   │       ├── ab-testing.yaml
│   │       ├── canary-split.yaml
│   │       └── README.md
│   ├── multi-cluster
│   │   ├── multi-primary
│   │   │   ├── multi-primary-config.yaml
│   │   │   └── README.md
│   │   ├── primary-remote
│   │   │   ├── primary-cluster.yaml
│   │   │   ├── README.md
│   │   │   └── remote-cluster.yaml
│   │   ├── README.md
│   │   └── service-discovery
│   │       ├── cross-cluster-discovery.yaml
│   │       └── README.md
│   ├── observability
│   │   ├── dashboards
│   │   │   ├── mesh-overview.json
│   │   │   ├── README.md
│   │   │   ├── service-dashboard.json
│   │   │   └── workload-dashboard.json
│   │   ├── logging
│   │   │   ├── access-log-format.yaml
│   │   │   ├── log-filters.yaml
│   │   │   └── README.md
│   │   ├── metrics
│   │   │   ├── custom-metrics.yaml
│   │   │   ├── prometheus-rules.yaml
│   │   │   ├── README.md
│   │   │   └── service-metrics.yaml
│   │   ├── README.md
│   │   └── tracing
│   │       ├── README.md
│   │       ├── sampling-rules.yaml
│   │       └── tracing-config.yaml
│   ├── policies
│   │   ├── circuit-breaking
│   │   │   ├── default-circuit-breaker.yaml
│   │   │   ├── README.md
│   │   │   └── service-specific-cb.yaml
│   │   ├── outlier-detection
│   │   │   ├── outlier-policy.yaml
│   │   │   └── README.md
│   │   ├── rate-limiting
│   │   │   ├── api-rate-limit.yaml
│   │   │   ├── global-rate-limit.yaml
│   │   │   ├── per-user-rate-limit.yaml
│   │   │   └── README.md
│   │   ├── README.md
│   │   ├── retries
│   │   │   ├── default-retry.yaml
│   │   │   ├── exponential-backoff.yaml
│   │   │   └── README.md
│   │   └── timeouts
│   │       ├── default-timeout.yaml
│   │       ├── long-running-timeout.yaml
│   │       └── README.md
│   ├── README.md
│   ├── resilience
│   │   ├── bulkhead
│   │   │   ├── connection-pool.yaml
│   │   │   └── README.md
│   │   ├── fallback
│   │   │   ├── fallback-service.yaml
│   │   │   └── README.md
│   │   ├── health-checks
│   │   │   ├── liveness-probe.yaml
│   │   │   ├── readiness-probe.yaml
│   │   │   └── README.md
│   │   └── README.md
│   ├── scripts
│   │   ├── cleanup.sh
│   │   ├── enable-sidecar-injection.sh
│   │   ├── install-istio.sh
│   │   ├── install-linkerd.sh
│   │   ├── README.md
│   │   ├── troubleshoot.sh
│   │   └── verify-mesh.sh
│   ├── security
│   │   ├── certificates
│   │   │   ├── ca-certificates.yaml
│   │   │   ├── cert-manager.yaml
│   │   │   └── README.md
│   │   ├── jwt
│   │   │   ├── jwt-rule.yaml
│   │   │   ├── README.md
│   │   │   └── request-authentication.yaml
│   │   ├── mtls
│   │   │   ├── destination-rule-mtls.yaml
│   │   │   ├── peer-authentication.yaml
│   │   │   ├── README.md
│   │   │   └── strict-mtls.yaml
│   │   ├── rbac
│   │   │   ├── authorization-policy.yaml
│   │   │   ├── README.md
│   │   │   ├── service-role-binding.yaml
│   │   │   └── service-role.yaml
│   │   └── README.md
│   ├── tests
│   │   ├── connectivity-test.yaml
│   │   ├── mtls-test.yaml
│   │   ├── README.md
│   │   └── traffic-management-test.yaml
│   └── traffic-management
│       ├── ab-testing
│       │   ├── ab-test-routing.yaml
│       │   ├── header-based-routing.yaml
│       │   └── README.md
│       ├── blue-green
│       │   ├── blue-green-deployment.yaml
│       │   ├── instant-switch.yaml
│       │   └── README.md
│       ├── canary
│       │   ├── canary-deployment.yaml
│       │   ├── flagger-canary.yaml
│       │   ├── progressive-delivery.yaml
│       │   └── README.md
│       ├── chaos
│       │   ├── abort-injection.yaml
│       │   ├── delay-injection.yaml
│       │   ├── fault-injection.yaml
│       │   └── README.md
│       ├── README.md
│       └── shadowing
│           ├── README.md
│           └── traffic-mirroring.yaml
├── storage
│   ├── backup
│   │   ├── application-backups
│   │   │   ├── backup-cronjob.yaml
│   │   │   ├── backup-script.sh
│   │   │   ├── README.md
│   │   │   └── retention-policy.yaml
│   │   ├── database-backups
│   │   │   ├── mongodb
│   │   │   │   ├── backup-cronjob.yaml
│   │   │   │   ├── mongodump-script.sh
│   │   │   │   ├── README.md
│   │   │   │   └── restore.sh
│   │   │   ├── postgres
│   │   │   │   ├── backup-schedule.yaml
│   │   │   │   ├── continuous-archiving.sh
│   │   │   │   ├── pg-dump-script.sh
│   │   │   │   ├── README.md
│   │   │   │   └── restore.sh
│   │   │   ├── README.md
│   │   │   └── redis
│   │   │       ├── backup-cronjob.yaml
│   │   │       ├── rdb-backup.sh
│   │   │       └── README.md
│   │   ├── disaster-recovery
│   │   │   ├── dr-plan.md
│   │   │   ├── failover-procedure.md
│   │   │   ├── README.md
│   │   │   ├── recovery-testing.md
│   │   │   └── rpo-rto-targets.yaml
│   │   ├── README.md
│   │   └── velero
│   │       ├── backup-locations
│   │       │   ├── gcs-location.yaml
│   │       │   ├── README.md
│   │       │   └── s3-location.yaml
│   │       ├── installation
│   │       │   ├── install.sh
│   │       │   ├── README.md
│   │       │   └── velero-install.yaml
│   │       ├── README.md
│   │       ├── restore
│   │       │   ├── README.md
│   │       │   ├── restore-procedure.md
│   │       │   └── restore-scripts
│   │       │       └── README.md
│   │       └── schedules
│   │           ├── daily-backup.yaml
│   │           ├── monthly-backup.yaml
│   │           ├── README.md
│   │           └── weekly-backup.yaml
│   ├── block-storage
│   │   ├── csi-drivers
│   │   │   ├── azure-disk-csi.yaml
│   │   │   ├── ebs-csi-driver.yaml
│   │   │   ├── gce-pd-csi.yaml
│   │   │   └── README.md
│   │   ├── persistent-volumes
│   │   │   ├── elasticsearch-pv.yaml
│   │   │   ├── kafka-pv.yaml
│   │   │   ├── postgres-pv.yaml
│   │   │   ├── README.md
│   │   │   └── redis-pv.yaml
│   │   ├── README.md
│   │   ├── snapshots
│   │   │   ├── backup-schedule.yaml
│   │   │   ├── README.md
│   │   │   ├── restore-procedure.md
│   │   │   └── snapshot-class.yaml
│   │   ├── storage-classes
│   │   │   ├── bulk-hdd.yaml
│   │   │   ├── fast-ssd.yaml
│   │   │   ├── io2-class.yaml
│   │   │   ├── README.md
│   │   │   └── standard-ssd.yaml
│   │   └── volume-claims
│   │       ├── cache-pvc.yaml
│   │       ├── database-pvc.yaml
│   │       ├── logging-pvc.yaml
│   │       └── README.md
│   ├── caching
│   │   ├── cdn-cache
│   │   │   ├── cache-rules.yaml
│   │   │   ├── purge-strategy.md
│   │   │   └── README.md
│   │   ├── memcached
│   │   │   ├── memcached-config.yaml
│   │   │   ├── memcached-deployment.yaml
│   │   │   └── README.md
│   │   ├── README.md
│   │   └── redis-cluster
│   │       ├── eviction-config.yaml
│   │       ├── persistence-config.yaml
│   │       ├── README.md
│   │       ├── redis-cluster.yaml
│   │       └── sentinel.yaml
│   ├── database-storage
│   │   ├── elasticsearch
│   │   │   ├── indices
│   │   │   │   ├── ilm-policies.json
│   │   │   │   ├── index-templates.json
│   │   │   │   ├── README.md
│   │   │   │   └── shard-allocation.yaml
│   │   │   ├── README.md
│   │   │   └── snapshots
│   │   │       ├── README.md
│   │   │       ├── snapshot-policy.json
│   │   │       └── snapshot-repo.yaml
│   │   ├── mongodb
│   │   │   ├── README.md
│   │   │   ├── sharding
│   │   │   │   ├── README.md
│   │   │   │   ├── shard-config.yaml
│   │   │   │   └── shard-key-strategy.md
│   │   │   └── storage-engine
│   │   │       ├── README.md
│   │   │       └── wiredtiger-config.yaml
│   │   ├── postgres
│   │   │   ├── partitioning
│   │   │   │   ├── partition-maintenance.sql
│   │   │   │   ├── partition-strategy.sql
│   │   │   │   └── README.md
│   │   │   ├── README.md
│   │   │   ├── tablespaces
│   │   │   │   ├── archive-tablespace.yaml
│   │   │   │   ├── fast-tablespace.yaml
│   │   │   │   └── README.md
│   │   │   └── wal-archiving
│   │   │       ├── archive-command.sh
│   │   │       ├── README.md
│   │   │       └── wal-config.yaml
│   │   ├── README.md
│   │   └── redis
│   │       ├── eviction
│   │       │   ├── eviction-policies.yaml
│   │       │   └── README.md
│   │       ├── persistence
│   │       │   ├── aof-config.yaml
│   │       │   ├── hybrid-config.yaml
│   │       │   ├── rdb-config.yaml
│   │       │   └── README.md
│   │       └── README.md
│   ├── data-lifecycle
│   │   ├── archival
│   │   │   ├── archive-jobs.yaml
│   │   │   ├── archive-strategy.yaml
│   │   │   ├── glacier-config.yaml
│   │   │   └── README.md
│   │   ├── deletion
│   │   │   ├── deletion-audit.yaml
│   │   │   ├── hard-delete-schedule.yaml
│   │   │   ├── README.md
│   │   │   └── soft-delete-policy.yaml
│   │   ├── README.md
│   │   ├── retention
│   │   │   ├── data-classification.yaml
│   │   │   ├── gdpr-compliance.md
│   │   │   ├── README.md
│   │   │   └── retention-policies.yaml
│   │   └── tiering
│   │       ├── cost-optimization.md
│   │       ├── README.md
│   │       ├── storage-tiers.yaml
│   │       └── tier-transition-rules.yaml
│   ├── docker-compose.yml
│   ├── docs
│   │   ├── architecture.md
│   │   ├── backup-strategy.md
│   │   ├── capacity-planning.md
│   │   ├── disaster-recovery.md
│   │   ├── README.md
│   │   ├── s3-guide.md
│   │   └── troubleshooting.md
│   ├── encryption
│   │   ├── database-encryption
│   │   │   ├── encryption-keys.yaml
│   │   │   ├── mongodb-encryption.yaml
│   │   │   ├── postgres-tde.yaml
│   │   │   └── README.md
│   │   ├── kms
│   │   │   ├── key-management.yaml
│   │   │   ├── key-policies.json
│   │   │   ├── key-rotation.yaml
│   │   │   └── README.md
│   │   ├── README.md
│   │   └── volume-encryption
│   │       ├── encrypted-storage-class.yaml
│   │       ├── encryption-config.yaml
│   │       └── README.md
│   ├── file-storage
│   │   ├── efs
│   │   │   ├── access-points.yaml
│   │   │   ├── backup-policy.yaml
│   │   │   ├── file-system.yaml
│   │   │   ├── mount-targets.yaml
│   │   │   └── README.md
│   │   ├── fsx
│   │   │   ├── lustre-config.yaml
│   │   │   └── README.md
│   │   ├── nfs
│   │   │   ├── exports-config.yaml
│   │   │   ├── nfs-provisioner.yaml
│   │   │   ├── nfs-server.yaml
│   │   │   └── README.md
│   │   ├── README.md
│   │   └── shared-volumes
│   │       ├── README.md
│   │       ├── shared-cache-pvc.yaml
│   │       ├── shared-logs-pvc.yaml
│   │       └── shared-uploads-pvc.yaml
│   ├── migrations
│   │   ├── cloud-migration
│   │   │   ├── aws-to-gcp.md
│   │   │   ├── migration-tools.yaml
│   │   │   ├── on-prem-to-cloud.md
│   │   │   └── README.md
│   │   ├── database-migration
│   │   │   ├── migration-plan.md
│   │   │   ├── README.md
│   │   │   ├── storage-class-change.yaml
│   │   │   └── volume-resize.sh
│   │   ├── README.md
│   │   └── s3-migration
│   │       ├── bucket-migration.yaml
│   │       ├── cross-region-copy.sh
│   │       ├── data-transfer.sh
│   │       └── README.md
│   ├── monitoring
│   │   ├── alerts
│   │   │   ├── backup-alerts.yaml
│   │   │   ├── capacity-alerts.yaml
│   │   │   ├── performance-alerts.yaml
│   │   │   └── README.md
│   │   ├── cost-tracking
│   │   │   ├── cost-allocation.yaml
│   │   │   ├── cost-dashboard.json
│   │   │   └── README.md
│   │   ├── dashboards
│   │   │   ├── backup-status.json
│   │   │   ├── README.md
│   │   │   ├── s3-metrics.json
│   │   │   ├── storage-overview.json
│   │   │   └── volume-usage.json
│   │   ├── metrics
│   │   │   ├── capacity-metrics.yaml
│   │   │   ├── performance-metrics.yaml
│   │   │   ├── README.md
│   │   │   └── storage-metrics.yaml
│   │   └── README.md
│   ├── object-storage
│   │   ├── cdn
│   │   │   ├── cache-behaviors.json
│   │   │   ├── cdn-setup.sh
│   │   │   ├── cloudfront-config.yaml
│   │   │   └── README.md
│   │   ├── clients
│   │   │   ├── download-service.ts
│   │   │   ├── multipart-upload.ts
│   │   │   ├── presigned-urls.ts
│   │   │   ├── README.md
│   │   │   ├── s3-client.ts
│   │   │   └── upload-service.ts
│   │   ├── minio
│   │   │   ├── deployment.yaml
│   │   │   ├── docker-compose.yml
│   │   │   ├── minio-config.yaml
│   │   │   ├── README.md
│   │   │   ├── service.yaml
│   │   │   ├── statefulset.yaml
│   │   │   └── tenant.yaml
│   │   ├── README.md
│   │   └── s3
│   │       ├── buckets
│   │       │   ├── backups.yaml
│   │       │   ├── logs.yaml
│   │       │   ├── media.yaml
│   │       │   ├── README.md
│   │       │   ├── user-uploads.yaml
│   │       │   └── workflow-files.yaml
│   │       ├── iam
│   │       │   ├── access-keys.yaml
│   │       │   ├── README.md
│   │       │   ├── roles.yaml
│   │       │   └── service-accounts.yaml
│   │       ├── policies
│   │       │   ├── bucket-policies.json
│   │       │   ├── cors-policies.json
│   │       │   ├── encryption-config.yaml
│   │       │   ├── lifecycle-policies.json
│   │       │   └── README.md
│   │       ├── README.md
│   │       └── terraform
│   │           ├── main.tf
│   │           ├── outputs.tf
│   │           ├── README.md
│   │           └── variables.tf
│   ├── performance
│   │   ├── benchmarking
│   │   │   ├── db-io-test.sh
│   │   │   ├── fio-tests.sh
│   │   │   ├── README.md
│   │   │   └── s3-benchmark.sh
│   │   ├── profiling
│   │   │   ├── io-profiler.sh
│   │   │   ├── latency-analysis.sh
│   │   │   └── README.md
│   │   ├── README.md
│   │   └── tuning
│   │       ├── cache-tuning.yaml
│   │       ├── io-optimization.yaml
│   │       ├── README.md
│   │       └── throughput-config.yaml
│   ├── quota-management
│   │   ├── enforcement
│   │   │   ├── overage-alerts.yaml
│   │   │   ├── quota-enforcement.yaml
│   │   │   └── README.md
│   │   ├── limit-ranges
│   │   │   ├── pvc-limits.yaml
│   │   │   ├── README.md
│   │   │   └── storage-limits.yaml
│   │   ├── README.md
│   │   └── resource-quotas
│   │       ├── namespace-quotas.yaml
│   │       ├── README.md
│   │       ├── team-quotas.yaml
│   │       └── user-quotas.yaml
│   ├── README.md
│   ├── scripts
│   │   ├── backup-all.sh
│   │   ├── check-capacity.sh
│   │   ├── cleanup-old-data.sh
│   │   ├── cost-report.sh
│   │   ├── create-buckets.sh
│   │   ├── README.md
│   │   ├── restore-from-backup.sh
│   │   ├── setup-storage.sh
│   │   └── snapshot-volumes.sh
│   ├── terraform
│   │   ├── aws
│   │   │   ├── ebs.tf
│   │   │   ├── efs.tf
│   │   │   ├── glacier.tf
│   │   │   ├── README.md
│   │   │   └── s3.tf
│   │   ├── azure
│   │   │   ├── blob-storage.tf
│   │   │   ├── files.tf
│   │   │   ├── managed-disk.tf
│   │   │   └── README.md
│   │   ├── gcp
│   │   │   ├── filestore.tf
│   │   │   ├── gcs.tf
│   │   │   ├── persistent-disk.tf
│   │   │   └── README.md
│   │   └── README.md
│   └── tests
│       ├── backup-restore-test.sh
│       ├── performance-tests.sh
│       ├── README.md
│       ├── s3-tests.ts
│       └── volume-tests.ts
├── terraform
│   ├── environments
│   │   ├── development
│   │   │   ├── backend.tf
│   │   │   ├── main.tf
│   │   │   ├── README.md
│   │   │   ├── terraform.tfvars
│   │   │   └── variables.tf
│   │   ├── production
│   │   │   ├── backend.tf
│   │   │   ├── main.tf
│   │   │   ├── README.md
│   │   │   ├── terraform.tfvars
│   │   │   └── variables.tf
│   │   ├── README.md
│   │   ├── shared
│   │   │   ├── backend.tf
│   │   │   ├── main.tf
│   │   │   ├── README.md
│   │   │   ├── terraform.tfvars
│   │   │   └── variables.tf
│   │   └── staging
│   │       ├── backend.tf
│   │       ├── main.tf
│   │       ├── README.md
│   │       ├── terraform.tfvars
│   │       └── variables.tf
│   ├── global
│   │   ├── budget
│   │   │   ├── main.tf
│   │   │   └── README.md
│   │   ├── dns
│   │   │   ├── main.tf
│   │   │   └── README.md
│   │   ├── iam
│   │   │   ├── main.tf
│   │   │   ├── policies.tf
│   │   │   ├── README.md
│   │   │   └── roles.tf
│   │   └── README.md
│   ├── modules
│   │   ├── cloudfront
│   │   │   ├── main.tf
│   │   │   ├── outputs.tf
│   │   │   ├── README.md
│   │   │   └── variables.tf
│   │   ├── eks
│   │   │   ├── iam.tf
│   │   │   ├── main.tf
│   │   │   ├── outputs.tf
│   │   │   ├── README.md
│   │   │   ├── security-groups.tf
│   │   │   └── variables.tf
│   │   ├── elasticache
│   │   │   ├── main.tf
│   │   │   ├── outputs.tf
│   │   │   ├── README.md
│   │   │   └── variables.tf
│   │   ├── elasticsearch
│   │   │   ├── main.tf
│   │   │   ├── outputs.tf
│   │   │   ├── README.md
│   │   │   └── variables.tf
│   │   ├── kafka
│   │   │   ├── main.tf
│   │   │   ├── outputs.tf
│   │   │   ├── README.md
│   │   │   └── variables.tf
│   │   ├── load-balancer
│   │   │   ├── main.tf
│   │   │   ├── outputs.tf
│   │   │   ├── README.md
│   │   │   └── variables.tf
│   │   ├── monitoring
│   │   │   ├── main.tf
│   │   │   ├── outputs.tf
│   │   │   ├── README.md
│   │   │   └── variables.tf
│   │   ├── rds
│   │   │   ├── main.tf
│   │   │   ├── outputs.tf
│   │   │   ├── parameter-groups.tf
│   │   │   ├── README.md
│   │   │   ├── subnet-groups.tf
│   │   │   └── variables.tf
│   │   ├── README.md
│   │   ├── route53
│   │   │   ├── main.tf
│   │   │   ├── outputs.tf
│   │   │   ├── README.md
│   │   │   └── variables.tf
│   │   ├── s3
│   │   │   ├── lifecycle.tf
│   │   │   ├── main.tf
│   │   │   ├── outputs.tf
│   │   │   ├── README.md
│   │   │   └── variables.tf
│   │   ├── secrets-manager
│   │   │   ├── main.tf
│   │   │   ├── outputs.tf
│   │   │   ├── README.md
│   │   │   └── variables.tf
│   │   └── vpc
│   │       ├── main.tf
│   │       ├── outputs.tf
│   │       ├── README.md
│   │       └── variables.tf
│   ├── README.md
│   └── scripts
│       ├── apply-all.sh
│       ├── destroy-all.sh
│       ├── init-terraform.sh
│       ├── plan-all.sh
│       ├── README.md
│       └── validate.sh
├── tracing
│   ├── alerts
│   │   ├── dependency-alerts.yaml
│   │   ├── error-rate-alerts.yaml
│   │   ├── latency-alerts.yaml
│   │   ├── README.md
│   │   └── span-duration-alerts.yaml
│   ├── analysis
│   │   ├── anomaly-detector.ts
│   │   ├── dependency-graph.ts
│   │   ├── latency-analyzer.ts
│   │   ├── README.md
│   │   └── trace-analyzer.ts
│   ├── context-propagation
│   │   ├── baggage.ts
│   │   ├── correlation.ts
│   │   ├── headers.ts
│   │   ├── README.md
│   │   └── w3c-trace-context.ts
│   ├── dashboards
│   │   ├── grafana
│   │   │   ├── error-analysis.json
│   │   │   ├── latency-breakdown.json
│   │   │   ├── README.md
│   │   │   ├── service-overview.json
│   │   │   └── trace-analysis.json
│   │   ├── jaeger
│   │   │   ├── README.md
│   │   │   └── service-dependencies.json
│   │   └── README.md
│   ├── docker-compose.yml
│   ├── docs
│   │   ├── best-practices.md
│   │   ├── getting-started.md
│   │   ├── instrumentation-guide.md
│   │   ├── README.md
│   │   ├── sampling-strategies.md
│   │   └── troubleshooting.md
│   ├── examples
│   │   ├── async-operations.md
│   │   ├── database-tracing.md
│   │   ├── error-tracking.md
│   │   ├── README.md
│   │   └── service-to-service.md
│   ├── exporters
│   │   ├── console-exporter.ts
│   │   ├── jaeger-exporter.ts
│   │   ├── otlp-exporter.ts
│   │   ├── README.md
│   │   └── tempo-exporter.ts
│   ├── integrations
│   │   ├── express
│   │   │   ├── error-handler.ts
│   │   │   ├── README.md
│   │   │   └── tracing-middleware.ts
│   │   ├── http-client
│   │   │   ├── axios-tracing.ts
│   │   │   ├── fetch-tracing.ts
│   │   │   └── README.md
│   │   ├── nestjs
│   │   │   ├── README.md
│   │   │   ├── tracing.decorator.ts
│   │   │   ├── tracing.interceptor.ts
│   │   │   ├── tracing.module.ts
│   │   │   └── tracing.service.ts
│   │   ├── prisma
│   │   │   ├── prisma-tracing.ts
│   │   │   ├── query-tracer.ts
│   │   │   └── README.md
│   │   ├── README.md
│   │   └── redis
│   │       ├── cache-tracer.ts
│   │       ├── README.md
│   │       └── redis-tracing.ts
│   ├── jaeger
│   │   ├── docker-compose.yml
│   │   ├── jaeger-config.yaml
│   │   ├── jaeger-dev.yaml
│   │   ├── jaeger-prod.yaml
│   │   ├── kubernetes
│   │   │   ├── jaeger-all-in-one.yaml
│   │   │   ├── jaeger-operator.yaml
│   │   │   ├── jaeger-production.yaml
│   │   │   ├── README.md
│   │   │   └── storage
│   │   │       ├── cassandra.yaml
│   │   │       ├── elasticsearch.yaml
│   │   │       └── README.md
│   │   ├── README.md
│   │   └── sampling
│   │       ├── adaptive-sampling.json
│   │       ├── README.md
│   │       └── sampling-config.json
│   ├── opentelemetry
│   │   ├── collector
│   │   │   ├── docker-compose.yml
│   │   │   ├── kubernetes
│   │   │   │   ├── configmap.yaml
│   │   │   │   ├── deployment.yaml
│   │   │   │   ├── hpa.yaml
│   │   │   │   ├── README.md
│   │   │   │   └── service.yaml
│   │   │   ├── otel-collector-dev.yaml
│   │   │   ├── otel-collector-prod.yaml
│   │   │   ├── otel-collector.yaml
│   │   │   └── README.md
│   │   ├── examples
│   │   │   ├── basic-tracing.ts
│   │   │   ├── custom-spans.ts
│   │   │   ├── database-tracing.ts
│   │   │   ├── http-tracing.ts
│   │   │   └── README.md
│   │   ├── instrumentation
│   │   │   ├── auto-instrumentation.yaml
│   │   │   ├── nodejs
│   │   │   │   ├── exporters.ts
│   │   │   │   ├── metrics.ts
│   │   │   │   ├── middleware.ts
│   │   │   │   ├── README.md
│   │   │   │   └── tracing.ts
│   │   │   ├── react
│   │   │   │   ├── browser-tracing.ts
│   │   │   │   ├── README.md
│   │   │   │   └── web-vitals.ts
│   │   │   └── README.md
│   │   ├── README.md
│   │   └── sdk
│   │       ├── README.md
│   │       ├── resource.ts
│   │       ├── sampler.ts
│   │       ├── sdk-config.ts
│   │       └── span-processor.ts
│   ├── processors
│   │   ├── batch-processor.ts
│   │   ├── enrichment-processor.ts
│   │   ├── filtering-processor.ts
│   │   ├── README.md
│   │   └── simple-processor.ts
│   ├── README.md
│   ├── samplers
│   │   ├── custom-sampler.ts
│   │   ├── parent-based-sampler.ts
│   │   ├── probability-sampler.ts
│   │   ├── rate-limiting-sampler.ts
│   │   └── README.md
│   ├── scripts
│   │   ├── analyze-spans.sh
│   │   ├── export-traces.sh
│   │   ├── query-traces.sh
│   │   ├── README.md
│   │   ├── setup-tracing.sh
│   │   └── test-tracing.sh
│   ├── tempo
│   │   ├── docker-compose.yml
│   │   ├── kubernetes
│   │   │   ├── configmap.yaml
│   │   │   ├── deployment.yaml
│   │   │   ├── pvc.yaml
│   │   │   ├── README.md
│   │   │   └── service.yaml
│   │   ├── README.md
│   │   ├── tempo-config.yaml
│   │   ├── tempo-local-config.yaml
│   │   └── tempo-s3-config.yaml
│   ├── tests
│   │   ├── integration.test.ts
│   │   ├── propagation.test.ts
│   │   ├── README.md
│   │   ├── sampler.test.ts
│   │   └── tracing.test.ts
│   └── zipkin
│       ├── docker-compose.yml
│       ├── kubernetes
│       │   ├── deployment.yaml
│       │   ├── README.md
│       │   └── service.yaml
│       ├── README.md
│       └── zipkin-config.yaml
└── vector-db
    ├── backup
    │   ├── README.md
    │   ├── restore
    │   │   ├── README.md
    │   │   ├── restore-procedure.md
    │   │   └── restore-script.sh
    │   ├── schedules
    │   │   ├── daily-backup.yaml
    │   │   ├── README.md
    │   │   └── weekly-backup.yaml
    │   └── strategies
    │       ├── continuous-backup.ts
    │       ├── export-backup.ts
    │       ├── README.md
    │       └── snapshot-backup.ts
    ├── benchmarks
    │   ├── accuracy-tests
    │   │   ├── ndcg-test.ts
    │   │   ├── precision-test.ts
    │   │   ├── README.md
    │   │   └── recall-test.ts
    │   ├── comparison
    │   │   ├── benchmark-results.json
    │   │   ├── db-comparison.md
    │   │   └── README.md
    │   ├── load-tests
    │   │   ├── insert-benchmark.ts
    │   │   ├── query-benchmark.ts
    │   │   ├── README.md
    │   │   └── update-benchmark.ts
    │   └── README.md
    ├── chroma
    │   ├── clients
    │   │   ├── chroma-client.ts
    │   │   ├── embedding-service.ts
    │   │   └── README.md
    │   ├── collections
    │   │   ├── collection-config.ts
    │   │   ├── metadata-config.ts
    │   │   └── README.md
    │   ├── docker-compose.yml
    │   ├── installation
    │   │   ├── chroma-config.yaml
    │   │   ├── chroma-deployment.yaml
    │   │   ├── install.sh
    │   │   └── README.md
    │   └── README.md
    ├── data-pipeline
    │   ├── enrichment
    │   │   ├── entity-extractor.ts
    │   │   ├── keyword-extractor.ts
    │   │   ├── metadata-enricher.ts
    │   │   └── README.md
    │   ├── ingestion
    │   │   ├── api-connector.ts
    │   │   ├── document-loader.ts
    │   │   ├── pdf-processor.ts
    │   │   ├── README.md
    │   │   └── web-scraper.ts
    │   ├── preprocessing
    │   │   ├── deduplication.ts
    │   │   ├── normalizer.ts
    │   │   ├── README.md
    │   │   └── text-cleaner.ts
    │   ├── README.md
    │   └── validation
    │       ├── quality-checker.ts
    │       ├── README.md
    │       └── schema-validator.ts
    ├── docker-compose.yml
    ├── docs
    │   ├── architecture.md
    │   ├── best-practices.md
    │   ├── embedding-guide.md
    │   ├── getting-started.md
    │   ├── performance-tuning.md
    │   ├── rag-implementation.md
    │   ├── README.md
    │   └── vector-db-comparison.md
    ├── embeddings
    │   ├── cohere
    │   │   ├── config.yaml
    │   │   ├── embedding-service.ts
    │   │   └── README.md
    │   ├── custom
    │   │   ├── fine-tuned-model.ts
    │   │   ├── model-config.yaml
    │   │   └── README.md
    │   ├── huggingface
    │   │   ├── config.yaml
    │   │   ├── embedding-service.ts
    │   │   ├── model-deployment.yaml
    │   │   └── README.md
    │   ├── openai
    │   │   ├── batch-embeddings.ts
    │   │   ├── config.yaml
    │   │   ├── embedding-service.ts
    │   │   └── README.md
    │   ├── README.md
    │   └── sentence-transformers
    │       ├── config.yaml
    │       ├── local-embeddings.ts
    │       ├── model-cache.ts
    │       └── README.md
    ├── examples
    │   ├── chatbot-example.ts
    │   ├── hybrid-search-example.ts
    │   ├── rag-example.ts
    │   ├── README.md
    │   ├── recommendation-example.ts
    │   └── semantic-search-example.ts
    ├── indexing
    │   ├── batch-indexing
    │   │   ├── batch-processor.ts
    │   │   ├── job-config.yaml
    │   │   ├── queue-manager.ts
    │   │   └── README.md
    │   ├── optimization
    │   │   ├── index-tuning.ts
    │   │   ├── performance-analyzer.ts
    │   │   └── README.md
    │   ├── README.md
    │   ├── real-time-indexing
    │   │   ├── change-capture.ts
    │   │   ├── README.md
    │   │   └── stream-processor.ts
    │   └── strategies
    │       ├── flat-index.ts
    │       ├── hnsw-index.ts
    │       ├── ivf-index.ts
    │       ├── product-quantization.ts
    │       └── README.md
    ├── integrations
    │   ├── haystack
    │   │   ├── document-store.ts
    │   │   ├── haystack-integration.ts
    │   │   └── README.md
    │   ├── langchain
    │   │   ├── chain-builder.ts
    │   │   ├── langchain-integration.ts
    │   │   ├── README.md
    │   │   ├── retriever-adapter.ts
    │   │   └── vector-store-adapter.ts
    │   ├── llamaindex
    │   │   ├── index-builder.ts
    │   │   ├── llamaindex-integration.ts
    │   │   ├── query-engine.ts
    │   │   └── README.md
    │   ├── nestjs
    │   │   ├── embedding.service.ts
    │   │   ├── README.md
    │   │   ├── vector-db.module.ts
    │   │   └── vector-search.service.ts
    │   └── README.md
    ├── milvus
    │   ├── clients
    │   │   ├── collection-ops.ts
    │   │   ├── milvus-client.ts
    │   │   ├── README.md
    │   │   └── vector-search.ts
    │   ├── collections
    │   │   ├── collection-schema.yaml
    │   │   ├── index-config.yaml
    │   │   ├── partition-config.yaml
    │   │   └── README.md
    │   ├── docker-compose.yml
    │   ├── installation
    │   │   ├── helm-values.yaml
    │   │   ├── install.sh
    │   │   ├── milvus-cluster.yaml
    │   │   ├── milvus-config.yaml
    │   │   └── README.md
    │   └── README.md
    ├── monitoring
    │   ├── alerts
    │   │   ├── accuracy-alerts.yaml
    │   │   ├── capacity-alerts.yaml
    │   │   ├── latency-alerts.yaml
    │   │   └── README.md
    │   ├── dashboards
    │   │   ├── embedding-metrics.json
    │   │   ├── rag-analytics.json
    │   │   ├── README.md
    │   │   ├── search-performance.json
    │   │   └── vector-db-overview.json
    │   ├── metrics
    │   │   ├── index-size.ts
    │   │   ├── query-latency.ts
    │   │   ├── README.md
    │   │   ├── recall-metrics.ts
    │   │   └── throughput.ts
    │   ├── README.md
    │   └── tracing
    │       ├── embedding-tracing.ts
    │       ├── README.md
    │       └── search-tracing.ts
    ├── optimization
    │   ├── batching
    │   │   ├── batch-config.yaml
    │   │   ├── batch-processor.ts
    │   │   └── README.md
    │   ├── caching
    │   │   ├── embedding-cache.ts
    │   │   ├── query-cache.ts
    │   │   ├── README.md
    │   │   └── result-cache.ts
    │   ├── compression
    │   │   ├── dimensionality-reduction.ts
    │   │   ├── README.md
    │   │   └── vector-quantization.ts
    │   ├── README.md
    │   └── sharding
    │       ├── README.md
    │       ├── shard-routing.ts
    │       └── shard-strategy.ts
    ├── pgvector
    │   ├── clients
    │   │   ├── pgvector-client.ts
    │   │   ├── README.md
    │   │   └── vector-search.ts
    │   ├── installation
    │   │   ├── extension-setup.sql
    │   │   ├── install.sh
    │   │   ├── postgres-vector.yaml
    │   │   └── README.md
    │   ├── queries
    │   │   ├── hybrid-search.sql
    │   │   ├── README.md
    │   │   ├── similarity-search.sql
    │   │   └── vector-operations.sql
    │   ├── README.md
    │   └── schemas
    │       ├── embeddings-table.sql
    │       ├── indexes.sql
    │       ├── partitions.sql
    │       └── README.md
    ├── pinecone
    │   ├── clients
    │   │   ├── index-manager.ts
    │   │   ├── pinecone-client.ts
    │   │   ├── query-service.ts
    │   │   ├── README.md
    │   │   └── upsert-service.ts
    │   ├── configuration
    │   │   ├── api-config.yaml
    │   │   ├── indexes.yaml
    │   │   ├── metadata-config.yaml
    │   │   ├── namespaces.yaml
    │   │   └── README.md
    │   ├── migrations
    │   │   ├── create-indexes.ts
    │   │   ├── README.md
    │   │   ├── reindex-data.ts
    │   │   └── update-metadata.ts
    │   ├── README.md
    │   └── terraform
    │       ├── main.tf
    │       ├── outputs.tf
    │       ├── README.md
    │       └── variables.tf
    ├── qdrant
    │   ├── clients
    │   │   ├── collection-manager.ts
    │   │   ├── point-operations.ts
    │   │   ├── qdrant-client.ts
    │   │   ├── README.md
    │   │   └── search-service.ts
    │   ├── collections
    │   │   ├── collection-config.yaml
    │   │   ├── documents-collection.json
    │   │   ├── embeddings-collection.json
    │   │   └── README.md
    │   ├── docker-compose.yml
    │   ├── installation
    │   │   ├── install.sh
    │   │   ├── qdrant-cluster.yaml
    │   │   ├── qdrant-config.yaml
    │   │   ├── README.md
    │   │   └── statefulset.yaml
    │   ├── README.md
    │   └── snapshots
    │       ├── backup-restore.sh
    │       ├── README.md
    │       └── snapshot-config.yaml
    ├── rag
    │   ├── chains
    │   │   ├── conversational-chain.ts
    │   │   ├── multi-step-chain.ts
    │   │   ├── README.md
    │   │   └── retrieval-qa-chain.ts
    │   ├── chunking
    │   │   ├── markdown-splitter.ts
    │   │   ├── README.md
    │   │   ├── recursive-splitter.ts
    │   │   ├── semantic-splitter.ts
    │   │   └── text-splitter.ts
    │   ├── context
    │   │   ├── context-builder.ts
    │   │   ├── context-compression.ts
    │   │   ├── context-ranking.ts
    │   │   └── README.md
    │   ├── prompts
    │   │   ├── few-shot-examples.ts
    │   │   ├── rag-prompts.ts
    │   │   ├── README.md
    │   │   └── system-prompts.ts
    │   ├── README.md
    │   └── retrievers
    │       ├── contextual-retriever.ts
    │       ├── multi-query-retriever.ts
    │       ├── parent-document-retriever.ts
    │       ├── README.md
    │       └── vector-retriever.ts
    ├── README.md
    ├── redis-search
    │   ├── clients
    │   │   ├── README.md
    │   │   ├── redis-vector-client.ts
    │   │   └── vector-search.ts
    │   ├── indexes
    │   │   ├── index-config.ts
    │   │   ├── README.md
    │   │   └── vector-index.yaml
    │   ├── installation
    │   │   ├── install.sh
    │   │   ├── README.md
    │   │   ├── redis-config.yaml
    │   │   └── redis-stack.yaml
    │   └── README.md
    ├── scripts
    │   ├── backup.sh
    │   ├── benchmark.sh
    │   ├── bulk-import.sh
    │   ├── create-index.sh
    │   ├── README.md
    │   ├── reindex.sh
    │   └── setup-vector-db.sh
    ├── search
    │   ├── faceted-search
    │   │   ├── aggregations.ts
    │   │   ├── facet-service.ts
    │   │   └── README.md
    │   ├── hybrid-search
    │   │   ├── bm25-search.ts
    │   │   ├── fusion-strategies.ts
    │   │   ├── hybrid-search.service.ts
    │   │   ├── README.md
    │   │   └── score-normalization.ts
    │   ├── README.md
    │   ├── semantic-search
    │   │   ├── filters.ts
    │   │   ├── query-expansion.ts
    │   │   ├── README.md
    │   │   ├── reranking.ts
    │   │   └── semantic-search.service.ts
    │   └── similarity
    │       ├── cosine-similarity.ts
    │       ├── dot-product.ts
    │       ├── euclidean-distance.ts
    │       └── README.md
    ├── security
    │   ├── authentication
    │   │   ├── api-key-auth.ts
    │   │   ├── jwt-auth.ts
    │   │   ├── oauth-config.yaml
    │   │   └── README.md
    │   ├── authorization
    │   │   ├── collection-permissions.ts
    │   │   ├── namespace-isolation.ts
    │   │   ├── rbac-config.yaml
    │   │   └── README.md
    │   ├── encryption
    │   │   ├── data-encryption.yaml
    │   │   ├── README.md
    │   │   └── tls-config.yaml
    │   └── README.md
    ├── tests
    │   ├── e2e
    │   │   ├── README.md
    │   │   └── search-flow.test.ts
    │   ├── integration
    │   │   ├── pipeline.test.ts
    │   │   ├── rag.test.ts
    │   │   ├── README.md
    │   │   └── vector-db.test.ts
    │   ├── README.md
    │   └── unit
    │       ├── embedding.test.ts
    │       ├── indexing.test.ts
    │       ├── README.md
    │       └── search.test.ts
    └── weaviate
        ├── clients
        │   ├── batch-import.ts
        │   ├── graphql-queries.ts
        │   ├── hybrid-search.ts
        │   ├── README.md
        │   └── weaviate-client.ts
        ├── docker-compose.yml
        ├── installation
        │   ├── helm-values.yaml
        │   ├── install.sh
        │   ├── README.md
        │   ├── weaviate-cluster.yaml
        │   └── weaviate-config.yaml
        ├── modules
        │   ├── generative-openai.yaml
        │   ├── qna-openai.yaml
        │   ├── README.md
        │   ├── text2vec-cohere.yaml
        │   └── text2vec-openai.yaml
        ├── README.md
        └── schemas
            ├── document-schema.json
            ├── knowledge-base-schema.json
            ├── README.md
            ├── user-profile-schema.json
            └── workflow-schema.json

707 directories, 2308 files
