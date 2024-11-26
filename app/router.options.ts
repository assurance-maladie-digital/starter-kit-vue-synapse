import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig>{
	// https://router.vuejs.org/api/interfaces/routeroptions.html#routes
	routes: (_routes) => [
		..._routes,
		{
			name: 'index',
			path: '/',
			component: () =>
				import('~/pages/home.vue').then((r) => r.default || r),
		},
	],
}
