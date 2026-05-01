// module.exports = {
//   apps: [
//     {
//       name: "API_3000", // ชื่อแอปพลิเคชัน (ไม่จำเป็นต้องรวมพอร์ตในชื่อ)
//       script: "bun dev", // ใช้ Bun runtime
//       watch: ".", // ปิดใน production
//       max_memory_restart: "500M", // รีสตาร์ทหากใช้ memory เกิน 500MB

//       // ตั้งค่า logs
//       log_date_format: "YYYY-MM-DD HH:mm Z",
//       error_file: "/var/log/pm2/api-vet-error.log",
//       out_file: "/var/log/pm2/api-vet-out.log",
//       combine_logs: false,
//       time: true,
//     },
//   ],
// };

// โหมด Production

module.exports = {
  apps: [
    {
      name: "API_3000",
      script: "bun run start", // ใช้ bun runtime
      interpreter: "none", // เพราะเรียกผ่าน bun ตรง ๆ
      watch: false, // ปิด watch ใน production
      max_memory_restart: "1G",

      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },

      // Log settings
      log_date_format: "YYYY-MM-DD HH:mm Z",
      error_file: "/var/log/pm2/api-vet-error.log",
      out_file: "/var/log/pm2/api-vet-out.log",
      combine_logs: false,
      time: true,
    },
  ],
};

/*
รันแอป
pm2 start ecosystem.config.js --env production
ดู log
pm2 logs
Restart
pm2 restart API_3000
ดู status
pm2 status
Auto-restart
pm2 startup && pm2 save
*/
