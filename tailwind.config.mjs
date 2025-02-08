/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: '#D16BA5', // Trendy purple-pink
					foreground: '#FFFFFF' // White for contrast
				},
				secondary: {
					DEFAULT: '#C850C0', // Vibrant magenta-pink
					foreground: '#FFFFFF' // White for contrast
				},
				muted: {
					DEFAULT: '#E0E0E0', // Soft gray for muted elements
					foreground: '#6B7280' // Darker gray for text
				},
				accent: {
					DEFAULT: '#8E44AD', // Rich purple as an accent
					foreground: '#FFFFFF' // White for legibility
				},
				destructive: {
					DEFAULT: '#E74C3C', // Bold red for destructive actions
					foreground: '#FFFFFF' // White for contrast
				},
				border: '#D1D5DB', // Light gray for subtle borders
				input: '#F3F4F6', // Light gray for input backgrounds
				ring: '#9CA3AF', // Mid-gray for focus rings
				chart: {
					'1': '#D16BA5',
					'2': '#C850C0',
					'3': '#8E44AD',
					'4': '#6C5CE7', // Deep indigo for variety
					'5': '#3498DB' // Cool blue as a contrast
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
};

