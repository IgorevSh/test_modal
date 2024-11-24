<template>
  <div class="modal_wrapper" v-if="modelValue">
    <div class="modal_card">
      <div class="modal_content">
        <div class="modal_title">
          {{ title }} <button @click="closeModal">Закрыть</button>
        </div>
        <div class="modal_body">
          <list-folders
            @select="
              (val) => {
                selectedFolder = val;
              }
            "
            :selectedFolder="selectedFolder"
            :folders="mockFolders"
          ></list-folders>
        </div>
        <div class="modal_footer">
          <button @click="selectFolder">Ок</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, ref } from "vue";
import ListFolders from "@/components/ListFolders.vue";
import Folder from "@/assets/interfaces/FolderInterface";
const emits = defineEmits(["select", "update:modelValue"]);
const props = defineProps<{
  modelValue?: boolean;
  title?: string;
}>();
const selectedFolder = ref("");
const mockFolders: Folder[] = [
  {
    id: 1,
    name: "Папка 1",
    children: [
      { id: 2, name: "Папка 1.1", children: [] },
      {
        id: 3,
        name: "Папка 1.2",
        children: [{ id: 4, name: "Папка 1.2.1", children: [] }],
      },
    ],
  },
  { id: 5, name: "Папка 2", children: [] },
];
function selectFolder(): void {
  closeModal();
  if (selectedFolder.value) {
    emits("select", selectedFolder.value);
  }
}
function closeModal(): void {
  emits("update:modelValue", false);
}
</script>

<style scoped>
.modal_wrapper {
  background-color: rgba(0, 0, 0, 0.5);
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
}
.modal_card {
  background-color: white;
  max-width: 80%;
  width: 600px;
  max-height: 60vh;
  border-radius: 15px;
  padding: 15px;
}
.modal_body {
  width: min-content;
}
.modal_title {
  font-size: 24px;
  font-weight: 700;
  position: relative;
}
.modal_title button {
  position: absolute;
  right: 10px;
  cursor: pointer;
  top: 5px;
}
.modal_footer button {
  cursor: pointer;
  padding: 0 20px;
}
</style>
