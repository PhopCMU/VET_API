# Copilot Instructions — vm_api

> Always read this file before touching any code. Then read README.md. Then open only the files you need.

---

## Project at a glance

Multi-tenant REST API for the Faculty of Veterinary Medicine, CMU.
Runtime: **Bun 1.3+** · Framework: **Elysia** · ORM: **Prisma (multi-schema)** · DB: PostgreSQL.
Sub-projects: `360` · `anatomy` · `cmuvc` · `role` · `vetrun` · `scb`.

---

## 1. TypeScript — strict mode patterns

**`any` is banned except in the two approved patterns below. All others require a justification comment.**

```ts
// ✅ APPROVED: narrowing an unknown catch value
} catch (error: unknown) {
  const msg = error instanceof Error ? error.message : String(error);
  Logger.error(`${action} | ${msg}`);
  set.status = 500;
  return { success: false, message: "Internal server error" };
}

// ✅ APPROVED: decryptMiddleware return type is Record<string,unknown> — cast once at the call site
const decryptedData = decryptMiddleware(encoded) as Record<string, unknown>;
const userId = typeof decryptedData.userId === "string" ? decryptedData.userId : null;

// ❌ FORBIDDEN: lazy escape hatches
const data = something as any;              // no — type it properly
function handler({ body }: { body: any })  // no — use a TypeBox model or explicit interface
(e as any).userId                          // no — narrow instead: (e instanceof CustomError ? e.userId : "unknown")
```

**`@ts-ignore` / `@ts-expect-error`**
- `@ts-ignore` — never use it.
- `@ts-expect-error` — only when suppressing a known upstream type bug; must be followed by a comment: `// upstream: <reason>`.

**`unknown` over `any` in catch blocks**
```ts
// ✅
} catch (error: unknown) { ... }

// ❌
} catch (error) { ... }   // implicit any — tsc strict catches this
```

---

## 2. Import style and path aliases

- **No `.js` extensions** on local imports (`moduleResolution: Bundler` resolves them).
- **Import order** (enforced by convention, not a linter — keep it consistent):
  1. External packages (`elysia`, `prisma`, …)
  2. Internal modules (`../modules/…`)
  3. Local files (`./controller`, `./model`, …)
- **Prisma clients** — always import from `generated/<sub-project>`, never from `@prisma/client`:
  ```ts
  // ✅
  import { PrismaClient } from "../../generated/cmuvc";

  // ❌
  import { PrismaClient } from "@prisma/client";
  ```
- **Logger** — always import from `utils/Logger` (relative path from the file):
  ```ts
  import { createPartLogger } from "../../../utils/Logger";
  const Logger = createPartLogger("/role/cmuvc");
  ```
- **No barrel `index.ts` files** — import directly from the source file to keep tree-shaking clean.

---

## 3. Error handling conventions

Every controller **must** follow this pattern:

```ts
const action = "DESCRIBE_WHAT_HANDLER_DOES";  // ALL_CAPS snake-case

try {
  // ... business logic
  set.status = 200;
  return { success: true, data: result };
} catch (error: unknown) {
  const msg = error instanceof Error ? error.message : String(error);
  Logger.error(`${action} | ${msg}`);
  set.status = 500;
  return { success: false, message: "Internal server error" };
}
```

Rules:
- **Never** propagate raw error messages to the HTTP response — log internally, return a safe message.
- **Never** use `console.log/error` in controllers or services — use `Logger` from `utils/Logger.ts`.
- Set `set.status` **before** returning — do not leave it at the default 200 on error paths.
- Auth failures → `401`. Validation failures → `400`. Server faults → `500`.
- Early-return guard pattern for auth:
  ```ts
  const auth = await authWithRateLimit(request, set, action);
  if (!auth.success) return { success: false, message: auth.message };
  ```

---

## 4. Logging conventions

```ts
// Create a named logger at the top of each controller file:
const Logger = createPartLogger("/cmuvc/participant");  // matches the route prefix

// Use structured log messages — include action + relevant IDs, never PII:
Logger.info(`${action} | userId=${userId}`);
Logger.warn(`${action} | IP=${ip} | RATE_LIMITED`);
Logger.error(`${action} | ${errorMessage}`);

// ❌ Never log:
Logger.info(JSON.stringify(body));     // may contain passwords / slip images / PII
console.log("debug:", something);      // use Logger.debug() instead, or remove entirely
```

`createPartLogger` writes to `logs/<part>/combined.log` and `logs/<part>/error.log`.
The `part` string should mirror the sub-project path (e.g., `"/role/scb"`, `"/vetrun/participant"`).

---

## 5. File / folder naming conventions

| Artifact | Convention | Example |
|---|---|---|
| Controllers | `PascalCase` + `Controller.ts` suffix | `ParticipantController.ts` |
| Routers | `snake_case` + `_router.ts` suffix | `participant_router.ts` |
| Elysia modules | `camelCase` + `Module.ts` suffix | `dbCmuvcModule.ts` |
| TypeBox models | `PascalCase` + `Model.ts` suffix | `ParticipantModel.ts` |
| Services | `PascalCase` + descriptive name | `TelegramBot.ts`, `EmailSmtp.ts` |
| Folders | `camelCase`, grouped by sub-project | `controllers/cmuvc/`, `routers/vetrun/` |
| Prisma schemas | `schema_<name>.prisma` or `schema<Name>.prisma` | `schemaDb360.prisma` |

- Do **not** create new top-level folders in `src/` — use the existing `controllers/`, `routers/`, `model/`, `services/`, `middleware/`, `utils/` directories.
- Sub-project folders inside `controllers/` and `routers/` must match the sub-project key: `360`, `anatomy`, `cmuvc`, `role`, `vetrun`.

---

## 6. Testing approach

This codebase has no test runner configured. Until one is added:

- **Do not add test files** (no `*.test.ts`, `*.spec.ts`) without explicit approval and a chosen test framework.
- **Validate manually** with `bun run typecheck` (must exit 0) before marking any task done.
- **Integration smoke test**: `curl http://localhost:3000/` must return `Connect Success`.
- When a new route is added, document a `curl` example in the PR description.

---

## 7. How to make changes (workflow)

1. Declare role: **Builder** (write code) or **Reviewer** (review diff).
2. Read the relevant controller + router + model before editing.
3. Minimal patch — do not refactor surrounding code.
4. Run `bun run typecheck` — zero errors required.
5. No new `npm`/`bun` dependencies without approval.
6. New secrets → add to `.env.example` with a placeholder, never hardcode.
