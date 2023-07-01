<script setup lang="ts">
import { VueFlow, useVueFlow } from "@vue-flow/core";
import { Background, BackgroundVariant } from "@vue-flow/background";
import { Controls } from "@vue-flow/controls";
import TopPanel from "@/components/TopPanel/TopPanel.vue";
import SidePanel from "@/components/SidePanel/SidePanel.vue";
import {useToggle} from "@/hooks/useToggle.ts";
import { computed, onMounted, ref } from "vue";
import{ initialNodes, initialConnections} from "./initialNodes.ts";
import CustomNode from "../CustomNode/CustomNode.vue";
import CustomEdge from "../CustomEdge/CustomEdge.vue";
import CustomNodeAction from "@/components/CustomNodeAction/CustomNodeAction.vue";
import ActionNode from "@/components/ActionNode/ActionNode.vue";

const { addEdges } = useVueFlow({
	nodes: initialNodes,
	id: "options-api",
});
const {toggle, isActive} = useToggle();

const styleBackground = computed(() => ({background: "var(--background-color)"}));

const currentOffsetX = ref(0);
const currentOffsetY = ref(0);

function onPaneClick(event: MouseEvent ) {
	const { offsetX, offsetY  } = event;
	currentOffsetX.value = offsetX;
	currentOffsetY.value = offsetY;
}

onMounted(() => {
	addEdges(initialConnections);
});
</script>

<template>
	<VueFlow
		id="options-api"
		auto-connect
		fit-view-on-init
		:class="$style.vue_flow"
		:connection-radius="30"
		@pane-click="onPaneClick"
	>
		<template #node-custom="props">
			<custom-node
				v-bind="props"
			>
				<custom-node-action
					v-bind="props"
					:offset-x="currentOffsetX"
					:offset-y="currentOffsetY"
				/>
			</custom-node>
		</template>
		<template #node-action="props">
			<action-node
				:key="props.id"
				v-bind="props"
			/>
		</template>
		<template #edge-custom="props">
			<custom-edge
				v-bind="props"
			/>
		</template>
		<top-panel
			@show-panel="toggle"
		/>
		<side-panel
			v-if="isActive"
			@show-panel="toggle"
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
.btn{
	background-color: red;
	position: absolute;
	z-index: 1000;
}
</style>
