<template>
	<div :class="$style.frame">
		<slot></slot>
	</div>
</template>

<style module scoped>
.frame {
	display: flex;
  align-items: center;
  background: white;
	padding: 0 10px;
  border: 2px solid var(--border-primary-color);
  border-radius: 10px;
	height: var(--height-element-top-panel);
}
</style>
