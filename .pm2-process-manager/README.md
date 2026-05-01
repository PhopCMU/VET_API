# PM2 Process Manager — vm_api

> PM2 manages the Bun process in production. In development, use `bun run dev` directly (no PM2 needed).

---

## Files

| File | Purpose |
|---|---|
| `../ecosystem.config.js` | **Production** — single app entry `API_3000`, port 3000 |
| `ecosystem.dev.config.js` | **Development** — app `API_DEV_3004`, port 3004, file-watching |

---

## Quick Reference

```bash
# ── Production ──────────────────────────────────────────────────────────────
pm2 start ../ecosystem.config.js          # Start production process
pm2 restart API_3000                       # Restart gracefully
pm2 stop    API_3000                       # Stop (keeps process in list)
pm2 delete  API_3000                       # Remove from list

# ── Development (optional, for long-running dev sessions) ───────────────────
pm2 start ecosystem.dev.config.js         # Start dev watcher via PM2
pm2 restart API_DEV_3004

# ── Logs ───────────────────────────────────────────────────────────────────
pm2 logs                                  # Tail all logs
pm2 logs API_3000                         # Tail single app
pm2 logs API_3000 --lines 200             # Last 200 lines
pm2 flush                                 # Clear all log files

# ── Status ─────────────────────────────────────────────────────────────────
pm2 status                                # Process table
pm2 monit                                 # Interactive dashboard

# ── Auto-restart on reboot ─────────────────────────────────────────────────
pm2 startup                               # Generate systemd/init script (follow printed command)
pm2 save                                  # Persist current process list
```

---

## ecosystem.config.js explained

```js
module.exports = {
  apps: [{
    name: "API_3000",
    script: "bun run start",    // Calls package.json "start" script
    interpreter: "none",        // Bun manages its own interpreter; PM2 must not wrap it
    watch: false,               // No watch in production — reduces CPU/IO overhead
    max_memory_restart: "1G",   // Restart if RSS exceeds 1 GB
    env: {
      NODE_ENV: "production",
      PORT: 3000,
    },
    log_date_format: "YYYY-MM-DD HH:mm Z",
    error_file: "/var/log/pm2/api-vet-error.log",
    out_file:   "/var/log/pm2/api-vet-out.log",
    combine_logs: false,
    time: true,
  }],
};
```

Key: `interpreter: "none"` is **required** when `script` invokes `bun`. Without it PM2 tries to wrap the process with Node.js and Bun's runtime won't start correctly.

---

## Log locations

| Stream | Path |
|---|---|
| stdout | `/var/log/pm2/api-vet-out.log` |
| stderr | `/var/log/pm2/api-vet-error.log` |
| Application logs (Winston) | `logs/` (relative to project root) |

Ensure the PM2 user has write access to `/var/log/pm2/`.

---

## Cross-platform notes

- **Linux (production)**: Use `pm2 startup systemd` to auto-start on boot.
- **Windows (dev-only)**: PM2 works via `pm2 start ecosystem.dev.config.js`; no `startup` needed.
- `interpreter: "none"` + `script: "bun run start"` works on both platforms as long as `bun` is on `$PATH`.

---

## Updating the app (zero-downtime pattern)

```bash
git pull origin main
bun install --frozen-lockfile
bunx prisma generate --schema=prisma/db_360/schemaDb360.prisma  # if schema changed
pm2 restart API_3000
pm2 save
```
