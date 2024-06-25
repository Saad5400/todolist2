import { purgeCss } from 'vite-plugin-tailwind-purgecss';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit';

export default defineConfig({
	plugins: [sveltekit(), purgeCss(), SvelteKitPWA({
		manifest: {
			name: 'متتبع المهام',
			short_name: 'متتبع المهام',
			launch_handler: {
				client_mode: 'auto',
			},
			theme_color: '#0000ff',
			orientation: 'portrait',
			description: 'تطبيق تتبع المهام',
			id: 'com.example.todo',
			icons: [
				{
					src: '/favicon.svg',
				}
			],
			screenshots: [
				{
					src: '/screenshot.png',
					sizes: '1280x720',
				}
			]
		}
	})]
});