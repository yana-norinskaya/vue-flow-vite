<script setup lang="ts">
import { computed } from "vue";


interface IInputLabelProps{
	label: string
	symbol: string
}
const props = defineProps<IInputLabelProps>();
const textSymbol = computed(() => {
	return `Символов	${ props.symbol.length } из 128`;
});
</script>

<template>
	<div :class="$style.input">
		<p :class="$style.input_label">
			{{ props.label }}
		</p>
		<slot></slot>
		<p :class="$style.input_symbol">
			{{ textSymbol }}
		</p>
	</div>
</template>

<style scoped module lang="scss">
.input{
	display: flex;
	flex-direction: column;
	gap: 10px;
	width: 100%;
	&_label{
		font-size: 15px;
		color: var(--border-secondary-color);
		font-weight: 600;
	}
	&_symbol{
		font-size: 13px;
		color: var(--text-color-secondary);
	}
}
</style>
