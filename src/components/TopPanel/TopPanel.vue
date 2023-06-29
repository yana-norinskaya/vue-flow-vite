<script setup lang="ts">
import PublishButton from "../UI/PublishButton/PublishButton.vue";
import ContentFrame from "../UI/ContentFrame/ContentFrame.vue";
import IconPlus from "../UI/Icons/IconPlus.vue";
import ToggleActionButtons from "../ToggleActionButtons/ToggleActionButtons.vue";
import { useCssModule } from "vue";
const $style = useCssModule();

</script>
<template>
	<div :class="$style.top_panel">
		<publish-button>Опубликовать</publish-button>
		<content-frame><icon-plus /></content-frame>
		<toggle-action-buttons />
	</div>
</template>
<style module lang="scss">
.top_panel{
  width: 100%;
  z-index: 1001;
  position: absolute;
  top: 0;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  gap: 10px;


}
</style>
