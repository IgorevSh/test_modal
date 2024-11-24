<template>
  <button style="cursor: pointer" @click="showModal = true">Открыть</button>

  <modal-window @select="customEmit" v-model="showModal" :title="modalTitle" />
</template>

<script setup lang="ts">
import ModalWindow from "@/components/Modal/ModalWindow.vue";
import { ref } from "vue";

const showModal = ref(false);
const modalTitle = ref("test");
function customEmit(id: string): void {
  alert(`Выбранный id ${id}`);
}
</script>

<style scoped></style>
