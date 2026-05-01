// Development ecosystem — port 3004, file watching enabled
// Usage: pm2 start .pm2-process-manager/ecosystem.dev.config.js

module.exports = {
  apps: [
    {
      name: "API_DEV_3004",
      script: "bun run dev",
      interpreter: "none", // Required: prevent PM2 from wrapping with Node
      watch: ["src", "modules"], // Watch only source directories
      ignore_watch: ["node_modules", "logs", "dist", "generated"],
      max_memory_restart: "1G",
      exec_mode: "fork",

      env: {
        NODE_ENV: "development",
        PORT: 3004,
      },

      log_date_format: "YYYY-MM-DD HH:mm Z",
      error_file: "./logs/pm2-dev-error.log",
      out_file: "./logs/pm2-dev-out.log",
      combine_logs: false,
      time: true,
    },
  ],
};
