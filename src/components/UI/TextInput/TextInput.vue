<script setup lang="ts">
import { computed, ref, useCssModule } from "vue";

interface ITextInputProps {
	placeholder?: string;
	modelValue?: string;
	error?: string;
}

const $style = useCssModule();

const props = defineProps<ITextInputProps>();
const internalValue = ref(props.modelValue);
const emit = defineEmits(["update:modelValue", "keyup" ]);

const handleInput = (event: Event) => {
	internalValue.value = (event.target as HTMLInputElement).value;
	emit("update:modelValue", internalValue.value);
};

const inputClasses  = computed(() => {
	return [ $style.input, props.error ? $style.error : "" ];
});
</script>

<template>
	<input
		:value="props.modelValue"
		:placeholder="props.placeholder"
		type="text"
		:class="inputClasses"
		@input="handleInput"
	>
	<span
		v-if="props.error"
		:class="$style.error_message"
	>{{ error }}</span>
</template>

<style module scoped>
.input {
  width: 100%;
  border-radius: 5px;
  padding: 6px;
  border: 2px solid var(--border-secondary-color);
  }
.error {
  border-color: red;
}
.error_message {
  color: red;
}
</style>
