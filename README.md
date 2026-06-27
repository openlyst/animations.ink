# animations.ink

Project showcase and landing page by [HttpAnimations](https://gitlab.com/HttpAnimations).

## Stack

- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://typescriptlang.org)

## Development

```sh
npm run dev     # dev server
npm run build   # production build
npm run check   # lint + typecheck
```

## Deploy

Set up a Next.js project on your provider of choice. The static export can be served from any web server.

### Docker

```sh
docker build -t animations .
docker run -p 3000:3000 animations
```

A Dockerfile and nginx config are included for containerized deployment.
