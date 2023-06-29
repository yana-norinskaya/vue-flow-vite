<script setup lang="ts">
import { computed, ref, useCssModule } from "vue";
const $style = useCssModule();

interface TextInputProps {
	modelValue: string;
	error?: string;
}

const props = defineProps<TextInputProps>();
const internalValue = ref(props.modelValue);
const emit = defineEmits(["update:modelValue"]);

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
		v-model="internalValue"
		type="text"
		:class="inputClasses"
		@input="handleInput"
	>
	<span
		v-if="props.error"
		:class="$style.error_message"
	>{{ error }}</span>
</template>

<style module scoped lang="scss">
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
