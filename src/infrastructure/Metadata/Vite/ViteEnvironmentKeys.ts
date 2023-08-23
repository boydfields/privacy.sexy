// Only variables prefixed with VITE_ are exposed to Vite-processed code
export const VITE_ENVIRONMENT_KEYS = {
  VERSION: 'VITE_APP_VERSION',
  NAME: 'VITE_APP_NAME',
  SLOGAN: 'VITE_APP_SLOGAN',
  REPOSITORY_URL: 'VITE_APP_REPOSITORY_URL',
  HOMEPAGE_URL: 'VITE_APP_HOMEPAGE_URL',
} as const;
