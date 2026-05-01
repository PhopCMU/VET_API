Always read `.copilot-chat/INSTRUCTIONS.md` first (TypeScript rules, import style, error handling,
logging, naming, testing), then README.md, then only the files you need.

1. Role: declare **Builder** (implement) or **Reviewer** (review diff).
2. Minimal patch — do not refactor surrounding code.
3. `bun run typecheck` must pass (exit 0) before declaring done.
4. No new dependencies without approval.
5. New secrets → `.env.example` with placeholder, never hardcode.
