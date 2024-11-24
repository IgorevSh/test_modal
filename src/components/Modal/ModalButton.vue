<template>
  <button style="cursor: pointer" @click="showModal = true">Открыть</button>

  <modal-window @select="customEmit" v-model="showModal" :title="'test'" />
</template>

<script setup lang="ts">
import ModalWindow from "@/components/Modal/ModalWindow.vue";
import { ref } from "vue";

const showModal = ref(true);
function customEmit(id: string): void {
  alert(`Выбранный id ${id}`);
}
</script>

<style scoped></style>
