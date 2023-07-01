<script setup lang="ts">
import { NodeProps, Handle, Position, useVueFlow } from "@vue-flow/core";
import ContentFrame from "../UI/ContentFrame/ContentFrame.vue";
import { onMounted } from "vue";

interface ICustomNodeActionProps extends NodeProps{
	offsetX?: number,
	offsetY?: number
}
const { addNodes } = useVueFlow();

const props = defineProps<ICustomNodeActionProps>();

const emit = defineEmits(["updateNodeInternals", "connect"]);

function updateInternals() {
	emit("updateNodeInternals");
}

onMounted(() => {
	updateInternals();
});

function addNewActionNode() {
	const newNode = {
		id: Date.now().toString(),
		type: "action",
		label: "Название команды",
		data: { comment: "Создать задачу" },
		position: { x: props.offsetX ?? 400, y: props.offsetY ?? 400 },
	};
	addNodes(newNode);
}
</script>

<template>
	<content-frame
		v-for="action in props.data.actions"
		:key="action.id"
		bg-color="var(--secondary-light-color)"
		border-color="var(--secondary-color)"
		@click="addNewActionNode"
	>
		{{ action.name }}
		<handle
			:id="action.id"
			class="custom-handle"
			type="source"
			:position="Position.Right"
			connectable="single"
		/>
	</content-frame>
</template>

