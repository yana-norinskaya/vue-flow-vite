<template>
	<button
		:class="$style.button"
		@click="handleClick"
	>
		<slot></slot>
	</button>
</template>

<script setup lang="ts">

const emit = defineEmits(["click"]);
const handleClick = () => {
	emit("click");
};
</script>

<style module scoped lang="scss">
.button {
	background: var(--border-primary-color);
	padding: 0 10px;
	border: 2px solid var(--border-primary-color);
	color: white;
	border-radius: 10px;
	height: var(--height-element-top-panel);
	font-size: 19px;
	font-weight: bold;
	transition: all 0.3s ease-in-out;
	&:hover{
		background-color: var(--border-secondary-color);
	}

}
</style>
