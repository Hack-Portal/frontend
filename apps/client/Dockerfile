FROM node:18-alpine AS base

# プロジェクトの全ファイルをコピーした後、turbo prune [workspace] --dockerコマンドを実行して、必要なファイルのみを残します。
FROM base AS builder
ENV CI=true
RUN apk add --no-cache libc6-compat
RUN apk update
# Set working directory
WORKDIR /app
RUN npm install -g turbo
COPY . .
RUN  turbo prune client --docker

# Add lockfile and package.json's of isolated subworkspace
# builderステージで生成したpruned（削減された）データを使用して依存関係をインストールします。
FROM base AS installer
RUN apk add --no-cache libc6-compat
RUN apk update
WORKDIR /app

# First install the dependencies (as they change less often)
COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/package-lock.json ./package-lock.json
COPY --from=builder /app/tsconfig.json ./tsconfig.json
RUN npm install

# Build the project
COPY --from=builder /app/out/full/ .
RUN npx turbo run build --filter client 


FROM base AS runner
WORKDIR /app

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=installer /app/apps/client/next.config.js .
COPY --from=installer /app/apps/client/package.json .

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=installer --chown=nextjs:nodejs /app/apps/client/.next/standalone ./
COPY --from=installer --chown=nextjs:nodejs /app/apps/client/.next/static ./apps/client/.next/static
COPY --from=installer --chown=nextjs:nodejs /app/apps/client/public ./apps/client/public
 



ENV PORT=8080

EXPOSE 8080

CMD ["node", "apps/client/server.js"]