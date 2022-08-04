<script setup>
defineProps({
	product: { type: Object, required: true },
	count: { type: Number, required: true },
})

defineEmits(['updateCount', 'clear'])
</script>
<template>
	<li>
		<span class="text-slate-900">{{ product.name }}</span>
		<span class="whitespace-nowrap">
			<AppCountInput
				:model-value="count"
				@update:modelValue="$emit('updateCount', $event)"
			/>
			<span class="inline-block w-12 text-right text-slate-900"
				>${{ count * product.price }}</span
			>
			<span
				class="ml-4 text-slate-900 hover:cursor-pointer"
				@click="$emit('clear')"
			>
				<fa icon="trash-alt" />
			</span>
		</span>
	</li>
</template>
