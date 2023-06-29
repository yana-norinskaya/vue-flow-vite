<script setup lang="ts">
import { VueFlow  } from "@vue-flow/core";
import { Background, BackgroundVariant } from "@vue-flow/background";
import { Controls } from "@vue-flow/controls";
import TopPanel from "@/components/TopPanel/TopPanel.vue";
import SidePanel from "@/components/SidePanel/SidePanel.vue";
import {useToggleVisibleSidePanel} from "@/hooks/useToggleVisibleSidePanel.ts";
import { computed } from "vue";


const styleBackground = computed(() => ({background: "var(--background-color)"}));
const {isVisibleSidePanel, toggleVisibleSidePanel} = useToggleVisibleSidePanel();

</script>

<template>
	<VueFlow :class="$style.vue_flow">
		<top-panel @toggle-visible-side-panel="toggleVisibleSidePanel" />
		<side-panel
			v-if="isVisibleSidePanel"
			@toggle-visible-side-panel="toggleVisibleSidePanel"
		/>
		<Controls :class="$style.controls" />
		<Background
			:variant="BackgroundVariant.Lines"
			:gap="100"
			:style="styleBackground"
			pattern-color="var(--border-primary-color)"
		/>
	</VueFlow>
</template>

<style module scoped>
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
