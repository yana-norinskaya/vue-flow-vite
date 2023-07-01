<script setup lang="ts">
import { onMounted } from "vue";
import { EdgeProps } from "@vue-flow/core";

const props = defineProps<EdgeProps>();
onMounted(() => {
	console.log(props);
});
</script>

<template>
	<svg>
		<defs>
			<marker
				id="arrow"
				viewBox="0 0 10 10"
				refX="10"
				refY="5"
				markerWidth="6"
				markerHeight="6"
				orient="auto-start-reverse"
			>
				<path
					:fill="props.data.color"
					d="M 0 0 L 10 5 L 0 10 z"
				/>
			</marker>
		</defs>
		<line
			:x1="props.sourceX"
			:y1="props.sourceY"
			:x2="props.targetX"
			:y2="props.targetY"
			:stroke="props.data.color"
			stroke-width="3"
			marker-end="url(#arrow)"
		/>
	</svg>
</template>
