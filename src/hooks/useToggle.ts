import { ref } from "vue";

export function useToggle() {
	const isActive = ref(false);

	const toggle = () => {
		isActive.value = !isActive.value;
	};

	return {
		toggle,
		isActive,
	};
}
