module.exports = {
  apps: [
    {
      name: "nextjs-app",
      script: "npm",
      args: "start",
      cwd: "/root/ieee-ai-dev-hack/",
      env: {
        NODE_ENV: "production",
        PORT: 3000
      }
    }
  ]
};
