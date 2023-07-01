<script setup lang="ts">
import { computed } from "vue";

interface IContentFrameProps{
	direction?: "row" | "column",
	borderColor?: string,
	bgColor?: string,
	gap?: string
}

const props = defineProps<IContentFrameProps>();

const frameStyle = computed(() => ({
	"flex-direction": props.direction ?? "row",
	"border": `2px solid ${props.borderColor ?? "var(--border-primary-color)"}`,
	"background": props.bgColor ?? "white",
	"gap": props.gap ?? ""
}));
</script>

<template>
	<div
		:class="$style.frame"
		:style="frameStyle"
	>
		<slot></slot>
	</div>
</template>

<style module scoped>
.frame {
	display: flex;
  align-items: center;
	padding: 10px;
  border-radius: 10px;
	height: 100%;
	position: relative;
}
</style>
