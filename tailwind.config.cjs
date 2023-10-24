/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,md,mdx}'],
	theme: {
		extend: {
      backgroundImage: {
        'arrow': "url('/arrow.svg')",
      }
    },
	},
	plugins: [],
}
