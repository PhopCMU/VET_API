# vm_api — Veterinary Medicine Multi-tenant API

> **Runtime**: Bun 1.3+ · **Framework**: Elysia · **ORM**: Prisma (multi-schema) · **DB**: PostgreSQL

Multi-tenant REST API for the Faculty of Veterinary Medicine, CMU.
Serves: 360-degree evaluation · Anatomy · CMUVC · Role management · VetRun · SCB.

---

## Quickstart

### Prerequisites
- [Bun 1.3+](https://bun.sh) — `curl -fsSL https://bun.sh/install | bash`
- PostgreSQL (one instance per sub-project schema, or shared with separate schemas)
- Copy `.env.example` → `.env` and fill in connection strings

### Install & run
```bash
# Install dependencies
bun install

# Development (hot-reload)
bun run dev

# Production
bun run start

# Type-check only (no emit)
bun run typecheck

# Build (Bun native bundle → dist/)
bun run build
```

### Prisma — multi-schema setup
Each sub-project owns its schema. Always pass `--schema` explicitly:
```bash
# Generate a specific Prisma client
bunx prisma generate --schema=prisma/db_360/schemaDb360.prisma
bunx prisma generate --schema=prisma/db_anatomy/schema_anatomy.prisma
bunx prisma generate --schema=prisma/db_cmuvc/schema_cmuvc.prisma
bunx prisma generate --schema=prisma/db_role/schema_role.prisma
bunx prisma generate --schema=prisma/db_vetrun/schema_vetrun.prisma

# Push schema changes (dev only)
bunx prisma db push --schema=prisma/db_360/schemaDb360.prisma
```

---

## Scripts

| Script | Command | Purpose |
|---|---|---|
| `dev` | `bun run --watch src/index.ts` | Hot-reload development server |
| `start` | `bun run src/index.ts` | Production start |
| `typecheck` | `tsc --noEmit` | Type-check without emitting JS |
| `build` | `bun build src/index.ts --target bun --outdir dist` | Bundle for deployment |

---

## Project Structure

```
src/
  index.ts           # Entry point — mounts all Elysia modules
  controllers/       # Business logic, grouped by sub-project
  routers/           # Route definitions, grouped by sub-project
  middleware/        # authAndDecrypt, decryptMiddleware
  services/          # Email, Line, Telegram integrations
  model/             # TypeBox request/response schemas
  utils/             # Shared helpers
modules/             # Elysia plugins — one per sub-project DB
prisma/              # One sub-directory per database schema
generated/           # Prisma generated clients (one per schema)
uploads/             # Static files served via /uploads/*
logs/                # Winston log output
ecosystem.config.js  # PM2 production process config
```

---

## PM2 Deployment

See [`.pm2-process-manager/README.md`](.pm2-process-manager/README.md) for full docs.

```bash
# Start production process
pm2 start ecosystem.config.js

# View logs
pm2 logs API_3000

# Persist across reboots
pm2 startup && pm2 save
```

---

## TypeScript Configuration

`tsconfig.json` key settings:

| Option | Value | Reason |
|---|---|---|
| `module` | `ESNext` | Source uses ESM `import/export`; Bun is ESM-native |
| `moduleResolution` | `Bundler` | Bun resolves modules like a bundler; replaces deprecated `node`/`node10` |
| `target` | `ESNext` | Bun supports all modern JS — no down-level emit needed |
| `types` | `["bun-types"]` | Provides Bun globals + Node-compat types without conflicts |

### Troubleshooting: moduleResolution errors

**`TS5107: Option 'moduleResolution=node10' is deprecated`**
→ You have `"moduleResolution": "node"` (which is an alias for the deprecated `node10`).
→ Fix: change to `"moduleResolution": "Bundler"` and `"module": "ESNext"`.

**`Cannot find module '...' or its corresponding type declarations`**
→ With `Bundler` resolution you don't need `.js` extensions on local imports.
→ Ensure the target file exists and the path is correct (case-sensitive on Linux).

**`Type 'X' is not assignable to type 'Y'` after Prisma generate**
→ Re-run `bunx prisma generate --schema=prisma/<db>/schema.prisma` for the affected DB.

---

## AI Assistance

Copilot context lives in [`.copilot-chat/INSTRUCTIONS.md`](.copilot-chat/INSTRUCTIONS.md).
Always read that file before making changes to understand architecture and conventions.
