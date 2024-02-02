<script setup>
import { ref } from 'vue'
import child from './components/Child.vue'

const pocketMoney = ref('부모 컴포넌트로부터 <✉️>을 전달 받았어요!')
</script>

<template>
	<!-- <child/> -->
	<child :pocketMoney="pocketMoney" />
</template>
