<template>
	<button
		:class="$style.button"
		@click="handleClick"
	>
		<slot />
	</button>
</template>

<script setup lang="ts">
import { useCssModule } from "vue";
const $style = useCssModule();


const handleClick = () => {
	console.log("Click");
};
</script>

<style module>
.button {
	background: var(--border-primary-color);
	padding: 0 10px;
	border: 2px solid var(--border-primary-color);
	color: white;
	border-radius: 10px;
	height: var(--height-element-top-panel);
	font-size: 19px;
	font-weight: bold;
}
</style>
