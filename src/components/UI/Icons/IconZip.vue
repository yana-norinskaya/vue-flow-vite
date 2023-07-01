<script setup lang="ts">
import { computed } from "vue";

interface IIconPlusProps{
	width?: number,
	height?: number,
}

const props: IIconPlusProps = defineProps({
	width: {
		type: Number,
		default: 20
	},
	height: {
		type: Number,
		default: 20
	}
});

const pixelWidth = computed(() => props.width + "px");
const pixelHeight = computed(() => props.height + "px");

</script>
<template>
	<svg
		:width="pixelWidth"
		:height="pixelHeight"
		viewBox="0 0 11 15"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M0.21582 7.58747L1.01344 1.20648C1.06942 0.758693 1.45004 0.422852 1.90342 0.422852H6.622C7.0418 0.422852 7.38044 0.761492 7.38044 1.18129C7.38044 1.27085 7.36365 1.36321 7.33286 1.44717L6.03707 4.90074H9.93564C10.501 4.90074 10.9628 5.35972 10.9628 5.92785C10.9628 6.13496 10.9012 6.33646 10.7836 6.50718L5.40457 14.3715C5.23945 14.6122 4.96798 14.7549 4.67972 14.7549H4.59855C4.15916 14.7549 3.80093 14.3967 3.80093 13.9573C3.80093 13.8929 3.80933 13.8285 3.82612 13.7642L5.1415 8.48305H1.1114C0.616032 8.48305 0.21582 8.08284 0.21582 7.58747Z"
			fill="#FCA140"
		/>
	</svg>
</template>
