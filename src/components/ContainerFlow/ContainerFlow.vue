<script setup lang="ts">
import { useCssModule } from "vue";

const $style = useCssModule();

</script>

<template>
	<div :class="$style.container">
		<slot></slot>
	</div>
</template>

<style module>
.container{
    display: grid;
    grid-template-columns: 80px auto;
    height: 100vh;
    width: 100vw;
}
</style>
