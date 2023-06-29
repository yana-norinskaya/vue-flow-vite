<template>
	<div :class="$style.frame">
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
import { useCssModule } from "vue";
const $style = useCssModule();

</script>

<style module>
.frame {
	display: flex;
  align-items: center;
  background: white;
	padding: 0 10px;
  border: 2px solid var(--border-primary-color);
  border-radius: 10px;
	height: var(--height-element-top-panel);
}
</style>
