<script setup lang="ts">
	import { ContextualMenu }from '@cnamts/synapse'
	import { ref } from 'vue'

	const items = [{
		text: 'section 1',
		hash: '#section-1',
	}, {
		text: 'section 2',
		hash: '#section-2',
	}, {
		text: 'section 3',
		hash: '#section-3',
	}, {
		text: 'section 4',
		hash: '#section-4',
	}, {
		text: 'section 5',
		hash: '#section-5',
	}]

	const items2 = [
		{
			text: 'Level 1',
			hash: '#example-1',
		},
		{
			text: 'Level 2',
			hash: '#example-2',
			level: 2,
		},
		{
			text: 'Level 3',
			hash: '#example-3',
			level: 3,
		},
		{
			text: 'Level 4',
			hash: '#example-4',
			level: 4,
		},
		{
			text: 'Level 5',
			hash: '#example-5',
			level: 5,
		},
		{
			text: 'Level 6',
			hash: '#example-6',
			level: 6,
		},
	]

	const hash = ref<string | null>('#section-1')
</script>

<template>
	<div class="wrapper">
		<div class="menu">
			<ContextualMenu
				v-model="hash"
				:items
			/>
		</div>
		<div class="content">
			<section id="section-1">
				<h2>section 1</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, quae eligendi modi, rem consectetur cum labore voluptate nostrum molestiae asperiores dolorum, saepe perspiciatis quisquam provident placeat aut distinctio minima dolor.
					Temporibus consequatur consectetur sequi. Sequi tempora velit soluta? Nam error, nesciunt molestiae provident possimus voluptas tempore porro at officia sint exercitationem dolore debitis eaque temporibus accusantium soluta? In, maxime excepturi.
				</p>
			</section>
			<section id="section-2">
				<h2>section 2</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, quae eligendi modi, rem consectetur cum labore voluptate nostrum molestiae asperiores dolorum, saepe perspiciatis quisquam provident placeat aut distinctio minima dolor.
					Temporibus consequatur consectetur sequi. Sequi tempora velit soluta? Nam error, nesciunt molestiae provident possimus voluptas tempore porro at officia sint exercitationem dolore debitis eaque temporibus accusantium soluta? In, maxime excepturi.
				</p>
			</section>
			<section id="section-3">
				<h2>section 3</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, quae eligendi modi, rem consectetur cum labore voluptate nostrum molestiae asperiores dolorum, saepe perspiciatis quisquam provident placeat aut distinctio minima dolor.
					Temporibus consequatur consectetur sequi. Sequi tempora velit soluta? Nam error, nesciunt molestiae provident possimus voluptas tempore porro at officia sint exercitationem dolore debitis eaque temporibus accusantium soluta? In, maxime excepturi.
				</p>
			</section>
			<section id="section-4">
				<h2>section 4</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, quae eligendi modi, rem consectetur cum labore voluptate nostrum molestiae asperiores dolorum, saepe perspiciatis quisquam provident placeat aut distinctio minima dolor.
					Temporibus consequatur consectetur sequi. Sequi tempora velit soluta? Nam error, nesciunt molestiae provident possimus voluptas tempore porro at officia sint exercitationem dolore debitis eaque temporibus accusantium soluta? In, maxime excepturi.
				</p>
			</section>
			<section id="section-5">
				<h2>section 5</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, quae eligendi modi, rem consectetur cum labore voluptate nostrum molestiae asperiores dolorum, saepe perspiciatis quisquam provident placeat aut distinctio minima dolor.
					Temporibus consequatur consectetur sequi. Sequi tempora velit soluta? Nam error, nesciunt molestiae provident possimus voluptas tempore porro at officia sint exercitationem dolore debitis eaque temporibus accusantium soluta? In, maxime excepturi.
				</p>
			</section>
		</div>
	</div>
	<ContextualMenu
		:items="items2"
	/>
</template>

<style lang="scss" scoped>
.wrapper {
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	place-items: center;
	min-height: 60dvh;
	width: 500px;
}
.menu {
	width: 200px;
}
.content {
	border: 1px solid black;
	height: 500px;
	overflow-y: auto;
	scroll-behavior: smooth;
}

section {
	padding: 20px;
}

section p {
	max-width: 300px;
}

</style>
