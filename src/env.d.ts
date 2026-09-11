/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_CUSDIS_APP_ID?: string;
  readonly PUBLIC_CUSDIS_HOST?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
