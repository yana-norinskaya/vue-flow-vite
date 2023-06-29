import { ref } from "vue";

export function useToggleVisibleSidePanel() {
	const isVisibleSidePanel = ref(false);

	const toggleVisibleSidePanel = () => {
		isVisibleSidePanel.value = !isVisibleSidePanel.value;
	};

	return {
		isVisibleSidePanel,
		toggleVisibleSidePanel,
	};
}
