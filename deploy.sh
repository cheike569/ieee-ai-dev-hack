#!/bin/bash
set -e

APP_NAME="ieee-ai-dev-hack"
APP_DIR="/root/ieee-ai-dev-hack"

echo "🚀 Deploying $APP_NAME ..."

cd $APP_DIR

echo "📥 Pulling latest changes..."
git fetch origin main
git reset --hard origin/main   # ensures clean deploy

echo "📦 Installing dependencies..."
npm install --production

echo "🔨 Building Next.js app..."
npm run build

echo "♻️ Restarting PM2 app..."
pm2 reload ecosystem.config.js --only $APP_NAME

echo "✅ Deployment complete!"
