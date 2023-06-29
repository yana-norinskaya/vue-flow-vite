<script setup lang="ts">

interface IInputWithLabelProps{
	label: string
	symbol: string
}
const props = defineProps<IInputWithLabelProps>();

</script>
<template>
	<div :class="$style.wrap">
		<p :class="$style.label">
			{{ props.label }}
		</p>
		<slot></slot>
		<p :class="$style.symbol">
			{{ props.symbol }}
		</p>
	</div>
</template>
<style scoped module lang="scss">
.wrap{
	display: flex;
	flex-direction: column;
	gap: 10px;
	width: 100%;
	.label{
		font-size: 15px;
		color: var(--border-secondary-color);
		font-weight: 600;
	}
	.symbol{
		font-size: 13px;
		color: var(--text-color-secondary);
	}
}
</style>
