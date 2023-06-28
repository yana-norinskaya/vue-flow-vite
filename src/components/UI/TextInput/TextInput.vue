<script setup lang="ts">
import { ref } from "vue";
import { useCssModule } from "vue";
interface TextInputProps {
	modelValue: string;
	error?: string;
}
const $style = useCssModule();
  
const props: TextInputProps = defineProps({
	modelValue: {
		type: String,
		required: true,
	},
	error: {
		type: String,
		default: "",
	},
});
const propsValue = ref(props.modelValue);
const emit = defineEmits(["update:modelValue"]);
const handleInput = (event: Event) => {
	propsValue.value = (event.target as HTMLInputElement).value;
	emit("update:modelValue", propsValue.value);
};
</script>
<template>
	<input
		v-model="propsValue"
		type="text"
		:class="[$style.input, error ? $style.error : '']"
		@input="handleInput"
	>
	<span
		v-if="error"
		class="error-message"
	>{{ error }}</span>
</template>
  <style module lang="scss">
  .input {
    width: 100%;
    border-radius: 5px;
    padding: 6px;
    border: 2px solid var(--border-secondary-color);
  }
  .error {
    border-color: red;
  }
  .error-message {
    color: red;
  }
  </style>
  