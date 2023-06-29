<script setup lang="ts">
import PublishButton from "../UI/PublishButton/PublishButton.vue";
import ContentFrame from "../UI/ContentFrame/ContentFrame.vue";
import IconPlus from "../UI/Icons/IconPlus.vue";
import ToggleActionButtons from "../ToggleActionButtons/ToggleActionButtons.vue";

const emit = defineEmits(["toggle-visible-side-panel"]);

const toggleVisibleSidePanel = () => {
	emit("toggle-visible-side-panel");
};

</script>
<template>
	<div :class="$style.top_panel">
		<publish-button>Опубликовать</publish-button>
		<content-frame @click="toggleVisibleSidePanel">
			<icon-plus />
		</content-frame>
		<toggle-action-buttons />
	</div>
</template>
<style module scoped>
.top_panel{
  width: 100%;
  z-index: 10;
  position: absolute;
  top: 10px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  gap: 10px;
	height: var(--height-element-top-panel);
}
</style>
