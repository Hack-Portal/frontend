FROM node:18-alpine AS base
RUN apk add --no-cache libc6-compat
WORKDIR /app

FROM base AS deps
ENV CI=true
COPY package.json package-lock.json ./
COPY apps/client/package.json apps/client/
RUN \
    # モノリポのルートディレクトリから依存関係をインストール
    npm ci && \
    # apps/clientディレクトリに移動して、依存関係をインストール
    cd apps/client && npm ci

FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/apps/client/node_modules ./apps/client/node_modules

COPY . .
RUN cd apps/client && npm run build



FROM base AS runner

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

WORKDIR /app
COPY --from=builder /app/apps/client/public ./public
RUN mkdir -p apps/client/.next
RUN chown nextjs:nodejs apps/client/.next
COPY --from=builder --chown=nextjs:nodejs /app/apps/client/.next/standalone ./apps/client/
COPY --from=builder --chown=nextjs:nodejs /app/apps/client/.next/static ./apps/client/.next/static
COPY --from=builder --chown=nextjs:nodejs /app/apps/client/.env.local /app/apps/client


USER nextjs

ENV PORT=8080

EXPOSE 8080

CMD ["node", "apps/client/server.js"]