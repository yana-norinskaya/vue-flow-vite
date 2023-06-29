<script setup lang="ts">
import ContainerFlow from "@/components/ContainerFlow/ContainerFlow.vue";
import VueFlow from "@/components/VueFlow/VueFlow.vue";
import NavigationFlow from "@/components/NavigationFlow/NavigationFlow.vue";
</script>
<template>
	<container-flow>
		<navigation-flow />
		<vue-flow />
	</container-flow>
</template>
