<script setup lang="ts">
import { NodeProps, Handle, Position, useVueFlow } from "@vue-flow/core";
import ContentFrame from "../UI/ContentFrame/ContentFrame.vue";
import { onMounted } from "vue";

interface ICustomNodeActionProps extends NodeProps{
	offsetX?: number,
	offsetY?: number
}
const { addNodes, addEdges, getEdges,findNode } = useVueFlow();

const props = defineProps<ICustomNodeActionProps>();

const emit = defineEmits(["updateNodeInternals", "connect"]);

function updateInternals() {
	emit("updateNodeInternals");
}

onMounted(() => {
	updateInternals();
});

function addNewActionNode(idParent: string, sourceHandle: string) {
	const positionParent = findNode(idParent)?.position;
	const sizeParent = findNode(idParent)?.dimensions;
	const posX = positionParent?.x && sizeParent?.width ? positionParent.x + (sizeParent?.width * 2) : 400;
	const posY = positionParent?.y ? positionParent?.y : 400;
	if(getEdges.value.every(edge => edge.sourceHandle !== sourceHandle)){
		const newNode = {
			id: Date.now().toString(),
			type: "action",
			label: "Название действия",
			data: { comment: "Создать задачу" },
			position: { x: posX, y: posY },
		};

		const newEdge = {
			id: `handle_${Date.now()}`,
			sourceHandle: sourceHandle,
			source: idParent,
			target: Date.now().toString(),
			animated: true,
			markerEnd: {
				type: "arrow",
				color: "#d373c0",
				width: 10,
				height: 10,
			},
			style: () => ({
				stroke: "#d373c0",
				strokeWidth: 5,
			}),

		};
		addNodes(newNode);
		addEdges(newEdge);
	}
}
</script>

<template>
	<content-frame
		v-for="action in props.data.actions"
		:key="action.id"
		bg-color="var(--secondary-light-color)"
		border-color="var(--secondary-color)"
		@click="addNewActionNode(props.id, action.id)"
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
