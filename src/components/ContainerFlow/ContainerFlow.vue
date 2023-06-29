<template>
	<div :class="$style.container">
		<slot></slot>
	</div>
</template>

<style module scoped>
.container{
  display: grid;
  grid-template-columns: 80px auto;
  height: 100vh;
  width: 100vw;
}
</style>
