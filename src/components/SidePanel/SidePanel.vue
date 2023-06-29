<script setup lang="ts">
import TextInput from "../UI/TextInput/TextInput.vue";
import HeaderSidePanel from "./HeaderSidePanel.vue";
import ContentFrame from "../UI/ContentFrame/ContentFrame.vue";
import InputWithLabel from "../UI/InputWithLabel/InputWithLabel.vue";

const emit = defineEmits(["toggle-visible-side-panel"]);

const toggleVisibleSidePanel = () => {
	emit("toggle-visible-side-panel");
};

</script>

<template>
	<aside :class="$style.aside">
		<header-side-panel @toggle-visible-side-panel="toggleVisibleSidePanel" />
		<content-frame direction="column">
			<input-with-label
				label="Название команды:"
				symbol="Символов 15 из 128"
			>
				<TextInput
					placeholder="Название этапа"
				/>
			</input-with-label>
		</content-frame>
	</aside>
</template>
<style module scoped lang="scss">
.aside {
  position: absolute;
  padding: 10px;
  top: 10px;
  right: 10px;
  width: 300px;
  height: fit-content;
  z-index: 10;
  border-radius: 10px;
  background-color: var( --background-color);
  border: 2px solid var(--border-primary-color);
}
</style>
