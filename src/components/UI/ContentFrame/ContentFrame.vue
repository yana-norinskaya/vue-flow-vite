<template>
	<div
		:class="$style.frame"
		:style="frameStyle"
	>
		<slot></slot>
	</div>
</template>
<script setup lang="ts">
import { computed } from "vue";

interface IContentFrameProps{
	direction?: "row" | "column"
}

const props = defineProps<IContentFrameProps>();
const frameStyle = computed(() => ({
	"flex-direction": props.direction ?? "row"

}));

</script>

<style module scoped>
.frame {
	display: flex;
  align-items: center;
  background: white;
	padding: 10px;
  border: 2px solid var(--border-primary-color);
  border-radius: 10px;
	height: 100%;
}
</style>
