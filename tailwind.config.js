/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		fontFamily: {
  			
  			geistSans: [
  				'var(--font-geist-sans)'
  			]
  		},
		 
		  maxWidth: {
			container: "80rem",
		  },
		  boxShadow: {
			glow: "0 -16px 128px 0 hsla(var(--brand-foreground)) inset, 0 -16px 32px 0 hsla(var(--brand)) inset",
		  },
		  keyframes: {
			shine: {
				'0%': { 'background-position': '100%' },
				'100%': { 'background-position': '-100%' },
			  },
			"fade-in-up": {
			  "0%": { 
				opacity: "0",
				transform: "translateY(10px)"
			  },
			  "100%": {
				opacity: "1",
				transform: "translateY(0)"
			  }
			},
			"fade-in": {
			  "0%": {
				opacity: "0"
			  },
			  "100%": {
				opacity: "1"
			  }
			},
			"scale-in": {
			  "0%": {
				opacity: "0",
				transform: "scale(0.95)"
			  },
			  "100%": {
				opacity: "1",
				transform: "scale(1)"
			  },
			 
			},
			spotlight: {
				"0%": {
				  opacity: 0,
				  transform: "translate(-72%, -62%) scale(0.5)",
				},
				"100%": {
				  opacity: 1,
				  transform: "translate(-50%,-40%) scale(1)",
				}
			  },
			},
		  animation: {
			spotlight: "spotlight 2s ease .75s 1 forwards",
			"fade-in-up": "fade-in-up 0.5s ease-out forwards",
			"fade-in": "fade-in 0.5s ease-out forwards",
			"scale-in": "scale-in 0.5s ease-out forwards",
			shine: 'shine 5s linear infinite',
		  },
  		colors: {
			brand: "hsl(var(--brand))",
			"brand-foreground": "hsl(var(--brand-foreground))",
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
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},

  	}
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
}