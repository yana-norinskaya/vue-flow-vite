<script setup lang="ts">
import { computed } from "vue";

interface IIconPlusProps{
	fill?: string,
	width?: number,
	height?: number,
	isReverse?: boolean
}
const props: IIconPlusProps = defineProps({
	fill: {
		type: String,
		default: "var(--text-color)"
	},
	width: {
		type: Number,
		default: 30
	},
	height: {
		type: Number,
		default: 30
	},
	isReverse: {
		type: Boolean,
		default: false
	}
});

const pixelWidth = computed(() => props.width + "px");
const pixelHeight = computed(() => props.height + "px");

</script>
<template>
	<svg
		id="Layer_1"
		:fill="props.fill"
		:class="{ 'reverse_icon': props.isReverse }"
		:width="pixelWidth"
		:height="pixelHeight"
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		viewBox="0 0 100 100"
		enable-background="new 0 0 100 100"
		xml:space="preserve"
	>
		<g>
			<path
				d="M74.656,56.818c3.895,3.729,5.788,8.795,5.788,15.491c0,1.104,0.896,2,2,2s2-0.885,2-1.989
		c0-7.736-2.362-13.91-7.022-18.369C66.646,43.639,46.325,44.551,30,45.269c-2.28,0.101-4.461,0.211-6.499,0.28L38.428,30.62
		c0.781-0.781,0.781-2.047,0-2.828s-2.048-0.781-2.828,0L17.479,45.915c-0.375,0.375-0.586,0.884-0.586,1.414
		s0.211,1.039,0.586,1.414l18.123,18.12c0.391,0.391,0.902,0.586,1.414,0.586s1.024-0.195,1.415-0.586
		c0.781-0.781,0.781-2.048,0-2.828L24.142,49.75c1.915-0.11,3.932-0.261,6.033-0.354C44.919,48.748,65.114,47.688,74.656,56.818z"
			/>
		</g>
	</svg>
</template>
<style scoped>
.reverse_icon{
	transform: scaleX(-1);
  transform-origin: center;
  transform-box: fill-box;
}
</style>
