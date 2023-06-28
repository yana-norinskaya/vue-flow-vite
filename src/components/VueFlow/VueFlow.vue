<script setup lang="ts">
import { VueFlow  } from "@vue-flow/core";
import { Background, BackgroundVariant } from "@vue-flow/background";
import { Controls } from "@vue-flow/controls";
import { useCssModule } from "vue";
const $style = useCssModule();

</script>

<template>
	<VueFlow :class="$style.vue_flow">
		<Controls :class="$style.controls" />
		<Background
			:variant="BackgroundVariant.Lines"
			:gap="100"
			style="background: #f4f9ff"
			pattern-color="#dedfdf"
		/>
	</VueFlow>
</template>

<style module>
.controls {
  display: flex;
  gap: 5px;
  padding: 10px;
  background: white;

}
.vue_flow {
  height: 100vh;
  width: 100%;
}
</style>