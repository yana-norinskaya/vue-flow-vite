import { Node } from "@vue-flow/core";

export const initialNodes: Node[] = [
	{
		id: "1",
		label: "/start",
		type: "custom",
		position: { x: 200, y: 100 },

		data: {
			comment:
				"Блок комментарий не должен сокращаться, точнее обрезаться и переводиться в многоточие",
			actions: [
				{ id: "20", name: "Кнопка1" },
				{ id: "21", name: "Кнопка2" },
				{ id: "22", name: "Кнопка3" },
			],
			style: {
				borderColor: "var(--primary-color)",
				bgColor: "var(--background-color)"
			}
		},
	},
	{
		id: "2",
		label: "Название действия",
		position: { x: 700, y: 0 },
		type: "action",
		connectable: true,
		data: {
			comment:
				"Блок комментарий не должен сокращаться, точнее обрезаться и переводиться в многоточие",
			actions: [
				{ id: "20", name: "Кнопка1" },
				{ id: "21", name: "Кнопка2" },
				{ id: "22", name: "Кнопка3" },
			],
			style: {
				borderColor: "var(--node-border-secondary)",
				bgColor: "var(--node-bg-secondary)"
			}
		},
	},
	{
		id: "3",
		label: "Название действия",
		position: { x: 700, y: 400 },
		type: "action",
		connectable: true,
		data: {
			comment:
				"Блок комментарий не должен сокращаться, точнее обрезаться и переводиться в многоточие",
			actions: [
				{ id: "20", name: "Кнопка1" },
				{ id: "21", name: "Кнопка2" },
				{ id: "22", name: "Кнопка3" },
			],
			style: {
				borderColor: "var(--node-border-secondary)",
				bgColor: "var(--node-bg-secondary)"
			}
		},
	},

];

export const initialConnections = [
	{
		id: "e1-2",
		sourceHandle:"20",
		source: "1",
		target: "2",
		animated: true,
		markerEnd: {
			type: "arrow",
			color: "#d373c0",
			width: 10,
			height: 10,
		},
		style: () => ({
			stroke: "#d373c0",
			strokeWidth: 5,
		}),
	},
	{
		id: "e1-3",
		sourceHandle:"22",
		source: "1",
		target: "3",
		animated: true,
		markerEnd: {
			type: "arrow",
			color: "#d373c0",
			width: 10,
			height: 10,
		},
		style: () => ({
			stroke: "#d373c0",
			strokeWidth: 5,
		}),
	},
];


