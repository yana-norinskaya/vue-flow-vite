<script setup lang="ts">
import TextInput from "@/components/UI/TextInput/TextInput.vue";
import { ref } from "vue";
const title = ref("");
function setValue(val: string) {
	title.value = val;
}
</script>
<template>
	<span>{{ title }}</span>
	<TextInput
		:model-value="title"
		@update:model-value="setValue"
	/>
</template>
