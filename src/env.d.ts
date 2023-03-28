/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client-image" />

declare namespace astroHTML.JSX {
  export interface FormHTMLAttributes extends HTMLAttributes<"form"> {
    netlify?: boolean;
  }
}