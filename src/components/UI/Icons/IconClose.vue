<script setup lang="ts">
import { computed } from "vue";

interface IIconPlusProps{
	stroke?: string,
	width?: number,
	height?: number,
}

const props: IIconPlusProps = defineProps({
	stroke: {
		type: String,
		default: "var(--text-color)"
	},
	width: {
		type: Number,
		default: 40
	},
	height: {
		type: Number,
		default: 40
	}
});

const pixelWidth = computed(() => props.width + "px");
const pixelHeight = computed(() => props.height + "px");

</script>
<template>
	<svg
		:width="pixelWidth"
		:height="pixelHeight"
		:class="$style.icon"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<g id="Menu / Close_MD">
			<path
				id="Vector"
				d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18"
				:stroke="props.stroke"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</g>
	</svg>
</template>
<style scoped module lang="scss">
.icon{
	cursor: pointer;
}
</style>
