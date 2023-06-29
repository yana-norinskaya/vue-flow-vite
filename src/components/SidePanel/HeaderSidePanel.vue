<script setup lang="ts">
import IconLogo from "../UI/Icons/IconLogo.vue";
import IconClose from "../UI/Icons/IconClose.vue";

const emit = defineEmits(["toggle-visible-side-panel"]);

const toggleVisibleSidePanel = () => {
	emit("toggle-visible-side-panel");
};

</script>

<template>
	<div :class="$style.header">
		<icon-logo fill="var(--primary-color)" />
		<div :class="$style.header_wrap_title">
			<h3 :class="$style.header_title">
				Новая команда
			</h3>
			<p :class="$style.header_id">
				ID 12345678
			</p>
		</div>
		<icon-close @click="toggleVisibleSidePanel" />
	</div>
</template>
<style module scoped lang="scss">

  .header {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    padding: 0 10px;
		padding-bottom: 10px;
		.header_wrap_title{
			display: flex;
			flex-direction: column;
			width: 100%;
			border-right: 2px solid var(--border-primary-color);
			gap: 3px;
		}
    .header_title {
      font-size: 16px;
    }
		.header_id{
			font-size: 12px;
			color: var(--border-secondary-color);
		}
  }


</style>
