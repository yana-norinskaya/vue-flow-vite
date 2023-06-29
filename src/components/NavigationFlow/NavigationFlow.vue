<script setup lang="ts">
import { useCssModule } from "vue";
const $style = useCssModule();

</script>
<template>
	<nav :class="$style.nav">
	</nav>
</template>
<style module>
.nav {
  width: 80px;
  background: var(--background-color);
  height: 100vh;
  border-right: 3px solid var(--border-primary-color);
}
</style>
