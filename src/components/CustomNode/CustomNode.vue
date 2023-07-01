<script setup lang="ts">
import { NodeProps, defineProps, defineEmits } from "@vue-flow/core";
import ContentFrame from "../UI/ContentFrame/ContentFrame.vue";
import ContainerNode from "../UI/ContainerNode/ContainerNode.vue";
import IconLogo from "../UI/Icons/IconLogo.vue";
import { onMounted, computed } from "vue";

const props = defineProps<NodeProps>();

const emit = defineEmits(["updateNodeInternals"]);

function updateInternals() {
	emit("updateNodeInternals");
}

const colorBg = computed(() => {
	if(props.data.style){
		return props.data.style.bgColor;
	}else{
		return "var(--background-color)";
	}
});

const colorBorder = computed(() => {
	if(props.data.style){
		return props.data.style.borderColor;
	}else{
		return "var(--primary-color)";
	}
});

onMounted(() => {
	updateInternals();
});
</script>

<template>
	<container-node
		:bg-color="colorBg"
		:border-color="colorBorder"
	>
		<div :class="$style.header">
			<icon-logo width="20" />
			<p :class="$style.label">
				{{ props.label }}
			</p>
		</div>
		<content-frame bg-color="var(--background-color)">
			<p>{{ props.data.comment }}</p>
		</content-frame>
		<slot></slot>
	</container-node>
</template>

<style scoped module lang="scss">
.header{
	display: flex;
	gap: 10px;
	align-items: center;
	padding: 5px 10px;
}
.label {
  font-weight: bold;
  background-color: var(--primary-color);
  color: white;
  padding: 4px;
  border-radius: 5px;
  width: fit-content;
}
</style>
