<script setup lang="ts">
import { computed } from "vue";

interface IContainerNodeProps{
	borderColor?: string,
	bgColor?: string,
}

const props = defineProps<IContainerNodeProps>();
const containerStyle = computed(() => ({
	"border": `2px solid ${props.borderColor ?? "var(--border-primary-color)"}`,
	"background": props.bgColor ?? "white"
}));
</script>

<template>
	<div
		:class="$style.container"
		:style="containerStyle"
	>
		<slot></slot>
	</div>
</template>

<style module scoped>
.container {
	position: relative;
  display: flex;
  flex-direction: column;
  height: fit-content;
  width: var(--width-node);
  padding: 10px;
  gap: 10px;
  border-radius: 20px;
	cursor: pointer;
}
</style>
