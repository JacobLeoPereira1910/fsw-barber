#!/bin/sh
set -e

echo "� DATABASE_URL: $DATABASE_URL"

echo "📦 Gerando cliente Prisma..."
cd /app && npx prisma generate

echo "🔄 Aplicando migrações do Prisma..."
cd /app && npx prisma migrate deploy

echo "🌱 Rodando seed..."
cd /app && npx prisma db seed || echo "⚠️  Seed pulado (já executado ou erro não crítico)"

echo "🚀 Iniciando aplicação Next.js..."
cd /app/fsw-barber && exec npm run dev
