<script setup lang="ts">
import { NodeProps, Handle, Position } from "@vue-flow/core";
import ContentFrame from "../UI/ContentFrame/ContentFrame.vue";
import ContainerNode from "../UI/ContainerNode/ContainerNode.vue";
import IconZip from "../UI/Icons/IconZip.vue";
import { onMounted } from "vue";

const props = defineProps<NodeProps>();

const emit = defineEmits(["updateNodeInternals"]);

function updateInternals() {
	emit("updateNodeInternals");
}

onMounted(() => {
	updateInternals();
});
</script>

<template>
	<container-node
		bg-color="var(--action-bg-secondary)"
		border-color="var(--action-border-secondary)"
	>
		<p :class="$style.title">
			<IconZip />
			{{ props.label }}
		</p>
		<content-frame bg-color="var(--action-bg-secondary)">
			<p>{{ props.data.comment }}</p>
		</content-frame>
	</container-node>
	<Handle
		:id="`source_${props.id}`"
		type="source"
		:position="Position.Right"
	/>
	<Handle
		:id="`target_${props.id}`"
		type="target"
		:position="Position.Left"
	/>
</template>

<style scoped module>
.title {
    font-weight: bold;
		display: flex;
		font-size: 15px;
		gap: 10px;
    color: var(--text-color);
    padding: 4px;
  }
</style>
