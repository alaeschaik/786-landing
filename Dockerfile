# Build the static export (next.config.js uses output: "export")
FROM node:22-alpine AS build
WORKDIR /app

COPY package*.json ./
# package-lock.json is gitignored, so fall back to npm install when it's missing
RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi

COPY . .
# Contact form email delivery (see docs/EMAIL_SETUP.md); pass with --build-arg
ARG NEXT_PUBLIC_EMAILJS_SERVICE_ID
ARG NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
ARG NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
ARG NEXT_PUBLIC_EMAILJS_SEND_CONFIRMATION
ARG NEXT_PUBLIC_CONTACT_EMAIL
RUN npm run build

# Serve the generated files with nginx
FROM nginx:1.27-alpine
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/out /usr/share/nginx/html

EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s --retries=3 \
  CMD wget -qO- http://127.0.0.1/ >/dev/null || exit 1
