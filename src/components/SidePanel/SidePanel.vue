<script setup lang="ts">
import TextInput from "../UI/TextInput/TextInput.vue";
import HeaderSidePanel from "./HeaderSidePanel.vue";
import ContentFrame from "../UI/ContentFrame/ContentFrame.vue";
import InputLabel from "../UI/InputLabel/InputLabel.vue";
import { useAddNode } from "@/hooks/useAddNode";
import CustomButton from "../UI/CustomButton/CustomButton.vue";

const {handleSubmit, setLabel, label, setComment, comment} = useAddNode();
const emit = defineEmits(["show-panel", "updateNodeInternals"]);

const showPanel = () => {
	emit("show-panel");
};
</script>

<template>
	<aside :class="$style.aside">
		<header-side-panel @show-panel="showPanel" />
		<content-frame
			direction="column"
			gap="20px"
		>
			<input-label
				label="Название команды:"
				:symbol="label"
			>
				<TextInput
					placeholder="Название этапа"
					:model-value="label"
					@update:model-value="setLabel"
				/>
			</input-label>
			<input-label
				label="Комментарий"
				:symbol="comment"
			>
				<TextInput
					placeholder="Коменатрий"
					:model-value="comment"
					@update:model-value="setComment"
				/>
			</input-label>
			<custom-button @click="handleSubmit">
				Создать
			</custom-button>
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
	gap: 5px;
  border-radius: 10px;
  background-color: var( --background-color);
  border: 2px solid var(--border-primary-color);
}
</style>
