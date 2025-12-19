import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#0066FF',
                    50: '#E6F0FF',
                    100: '#CCE0FF',
                    200: '#99C2FF',
                    300: '#66A3FF',
                    400: '#3385FF',
                    500: '#0066FF',
                    600: '#0052CC',
                    700: '#003D99',
                    800: '#002966',
                    900: '#001433',
                },
                secondary: {
                    DEFAULT: '#00D9C5',
                    50: '#E6FBF9',
                    100: '#CCF7F3',
                    200: '#99EFE7',
                    300: '#66E7DB',
                    400: '#33DFCF',
                    500: '#00D9C5',
                    600: '#00AD9E',
                    700: '#008277',
                    800: '#00564F',
                    900: '#002B28',
                },
                support: {
                    DEFAULT: '#52C6F5',
                    50: '#EDF9FE',
                    100: '#DBF3FD',
                    200: '#B7E7FB',
                    300: '#93DBF9',
                    400: '#6FCFF7',
                    500: '#52C6F5',
                    600: '#419EC4',
                    700: '#317793',
                    800: '#214F62',
                    900: '#102831',
                },
                accent: {
                    purple: '#C9B3E5',
                    yellow: '#FFD700',
                },
                neutral: {
                    50: '#F9FAFB',
                    100: '#F3F4F6',
                    200: '#E5E7EB',
                    300: '#D1D5DB',
                    400: '#9CA3AF',
                    500: '#6B7280',
                    600: '#4B5563',
                    700: '#374151',
                    800: '#1F2937',
                    900: '#111827',
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                display: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
            },
            borderRadius: {
                'xl': '1rem',
                '2xl': '1.5rem',
                '3xl': '2rem',
            },
            boxShadow: {
                'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
                'glow': '0 0 20px rgba(0, 102, 255, 0.3)',
                'glow-secondary': '0 0 20px rgba(0, 217, 197, 0.3)',
            },
            animation: {
                'float': 'float 3s ease-in-out infinite',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                }
            }
        },
    },
    plugins: [],
};

export default config;
