import { ref, Ref } from "vue";
import { useVueFlow } from "@vue-flow/core";

interface AddNodeResult {
	handleSubmit: () => void;
	setLabel: (value: string) => void;
	setComment: (value: string) => void;
	label: Ref<string>;
	comment: Ref<string>;
}

export function useAddNode(): AddNodeResult {
	const { addNodes } = useVueFlow();

	const label: Ref<string> = ref("");
	const comment: Ref<string> = ref("");

	const setLabel = (value: string) => {
		label.value = value;
	};

	const setComment = (value: string) => {
		comment.value = value;
	};

	const handleSubmit = () => {
		const newNode = {
			id: String(Date.now()),
			label: label.value,
			type: "custom",
			position: { x: 300, y: 300 },
			data: {
				comment: comment.value,
			},
		};

		addNodes(newNode);

		label.value = "";
		comment.value = "";
	};

	return { handleSubmit, setLabel, setComment, label, comment };
}
