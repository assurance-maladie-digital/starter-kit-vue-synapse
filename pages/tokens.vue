<template>
	<div>
		<h1 class="text-primary">Tokens</h1>

		<h2 class="py-8">Heading</h2>
		<div
			:style="{ color: selectedColor, backgroundColor: '#e0e7f2' }"
			class="text-center"
		>
			<h1 class="my-1">h1. Design system heading</h1>
			<h2 class="my-1">h2. Design system heading</h2>
			<h3 class="my-1">h3. Design system heading</h3>
			<h4 class="my-1">h4. Design system heading</h4>
			<h5 class="my-1">h5. Design system heading</h5>
			<h6 class="my-1">h6. Design system heading</h6>
		</div>

		<h2 class="py-8">Couleurs du theme Vuetify</h2>
		<v-row v-for="(colorGroup, group) in groupedColors" :key="group">
			<v-col
				v-for="(color, name) in colorGroup"
				:key="name"
				class="d-flex child-flex color-box"
				:style="{
					backgroundColor: color,
					color: isDarkColor(color) ? 'white' : 'black',
				}"
			>
				<div class="text-center">
					{{ name }}
				</div>
			</v-col>
		</v-row>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	data() {
		return {
			selectedColor: '',
		}
	},
	computed: {
		groupedColors() {
			const colors: Record<string, string> = this.$vuetify.theme.themes
				.light
				? this.$vuetify.theme.themes.light.colors
				: {}
			const grouped: Record<string, string> = {}
			for (const color in colors) {
				if (color) {
					const group = color.split('-')[0] // Get the group name (e.g., 'blue', 'cyan')
					if (group && !grouped[group]) {
						grouped[group] = {}
					}
					if (group) {
						grouped[group][color] = colors[color]
					}
				}
			}
			return grouped
		},
	},
	methods: {
		isDarkColor(color: string) {
			const c = color.substring(1) // strip #
			const rgb = parseInt(c, 16) // convert rrggbb to decimal
			const r = (rgb >> 16) & 0xff // extract red
			const g = (rgb >> 8) & 0xff // extract green
			const b = (rgb >> 0) & 0xff // extract blue
			const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b // per ITU-R BT.709
			return luma < 128
		},
	},
})
</script>

<style scoped>
.color-box {
	width: 120px;
	min-height: 50px;
	margin: 10px;
	padding: 10px;
	cursor: pointer;
	border: black 1px solid;
	border-radius: 15px;
	box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
	transition: all 0.3s;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
