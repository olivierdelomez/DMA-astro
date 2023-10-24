/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare namespace astroHTML.JSX {
  export interface FormHTMLAttributes extends HTMLAttributes<"form"> {
    netlify?: boolean;
  }
}