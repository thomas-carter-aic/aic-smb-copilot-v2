# Database Migrations Guide — aic-smb-copilot-v2

This folder contains version-controlled database schema migrations for `aic-smb-copilot-v2`.  
We use **Prisma ORM** to manage database schema evolution in a portable, frictionless way.

---

## 📦 Tech Stack

- **ORM**: [Prisma](https://www.prisma.io/)
- **Database**: PostgreSQL (primary)
- **Migration Structure**: SQL + Prisma Schema
- **Location**: `infrastructure/DATABASE_MIGRATIONS/`

---

## 📁 Folder Structure

```plaintext
DATABASE_MIGRATIONS/
├── prisma/
│   ├── schema.prisma         # Prisma data model
│   ├── migrations/           # Auto-generated SQL migrations
│   ├── seed.ts               # (optional) Seeding script
│   └── .env                  # Local/Dev DB connection string
└── README.md                 # You are here
````

---

## 🚦 Migration Lifecycle

### 1. **Edit the Prisma schema**

All entity/property updates are defined in the Prisma schema file:

infrastructure/DATABASE_MIGRATIONS/prisma/schema.prisma

Example:

```prisma
model User {
  id         String   @id @default(uuid())
  email      String   @unique
  displayName String?
  roles      String[]
  tenantId   String
  createdAt  DateTime @default(now())
  updatedAt  DateTime @updatedAt
}
```

---

### 2. **Create a Migration**

Generate a new timestamped migration script:

```bash
cd infrastructure/DATABASE_MIGRATIONS
npx prisma migrate dev --name add_user_roles_column
```

This creates a new SQL file in:

prisma/migrations/YYYYMMDDHHMMSS-add_user_roles_column/

---

### 3. **Apply Migration in Dev**

Apply recent migrations to your local database:

```bash
npx prisma migrate dev
```

Or to another environment (e.g., staging):

```bash
DATABASE_URL="postgresql://staging.example.com:5432/db" npx prisma migrate deploy
```

---

### 4. **Deploying Migrations**

In CI or CD pipelines, include a step like:

```bash
npx prisma migrate deploy
```

This ensures that when the app is deployed, the target database schema is migrated before runtime logic is executed.

---

## 🧪 Seeding the Database

If you want to create initial data (e.g., for testing), add logic to `prisma/seed.ts` and run:

```bash
npx prisma db seed
```

---

## 🔐 Environment Variables

* Prisma uses `.env` files to define the `DATABASE_URL`
* For dev, include `.env` in `infrastructure/DATABASE_MIGRATIONS/prisma/`
* For production, use Kubernetes Secrets or GitHub Actions Encrypted Secrets

---

## ✅ Good Practices

* Use semantic migration names (`add_user_roles_column`, `rename_tenant_to_org`, etc.)
* Never manually edit auto-generated SQL files
* Always peer-review migration files before merging
* Test migrations on a clone of production schema in a staging environment

---

## 📘 Related Files

* `../../docs/DATA_MODEL.md` – Data model and entities
* `../../docs/API_GATEWAY_AND_AUTH_ARCH.md` – Integration with NestJS services
* `../../apps/workers/` – Python workers may require DB access (add Prisma Client support via REST or gRPC)
