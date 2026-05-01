## Summary
<!-- One-sentence description of what this PR does -->

## Type of change
- [ ] Bug fix
- [ ] New feature
- [ ] Refactor / cleanup
- [ ] Configuration / infra
- [ ] Documentation

## Related issues
<!-- Closes #xxx -->

## Changes
<!-- List the files changed and why -->

## Checklist
- [ ] `bun run typecheck` passes with zero errors
- [ ] No new `any` types introduced (or justified in comments)
- [ ] No secrets hardcoded — env vars used and `.env.example` updated if needed
- [ ] Auth middleware applied to all new protected routes
- [ ] Prisma clients regenerated if schema changed (`bunx prisma generate --schema=...`)
- [ ] Winston logger used instead of `console.log`
- [ ] README / INSTRUCTIONS updated if architecture changed
