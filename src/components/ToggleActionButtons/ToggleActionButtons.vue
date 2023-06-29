<script setup lang="ts">
import ContentFrame from "../UI/ContentFrame/ContentFrame.vue";
import IconReturn from "../UI/Icons/IconReturn.vue";
import { useCssModule } from "vue";
const $style = useCssModule();
</script>
<template>
	<content-frame>
		<button
			:class="[$style.btn_return_left]"
		>
			<icon-return />
		</button>
		<button
			:class="[$style.btn_return_right]"
		>
			<icon-return :is-reverse="true" />
		</button>
	</content-frame>
</template>
<style module>
.btn_return_left{
		border-right: 2px solid var(--border-primary-color);
		padding-right: 10px;
	}
	.btn_return_right{
		padding-left: 10px;
	}
	.active{
		opacity: 0.4;
	}
</style>
