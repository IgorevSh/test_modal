<template>
  <ul class="list_folders">
    <li v-for="file in folders" :key="file.id">
      <span
        :class="`
          ${
            file.children?.length
              ? showChildren[file.id]
                ? 'folder_open'
                : 'folder_close'
              : ''
          } ${file.id == selectedFolder ? 'selected_row' : ''}`"
        @click="clickNode(file.id)"
        >{{ file.name }}</span
      >
      <list-folders
        :selectedFolder="selectedFolder"
        @select="clickNode"
        v-if="!!showChildren[file.id]"
        :folders="file.children"
      ></list-folders>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, ref } from "vue";
const emit = defineEmits(["select"]);
import Folder from "@/assets/interfaces/FolderInterface";
const props = defineProps<{
  folders?: Folder[];
  selectedFolder?: string;
}>();
const showChildren = ref({} as { [key: string]: boolean });
function clickNode(id: string | number): void {
  showChildren.value[String(id)] = !showChildren.value[String(id)];
  emit("select", id);
}
</script>

<style scoped>
.list_folders {
  list-style: none;
  font-size: 18px;
  padding: 0;
  left: 40px;
  position: relative;
}
.list_folders li span {
  white-space: nowrap;
  position: relative;
  cursor: pointer;
}
.list_folders li span::before {
  content: " ";
  height: 10px;
  width: 10px;
  display: inline-block;
  padding: 5px 10px;
  position: absolute;
  right: 10px;
  top: -5px;
  left: -30px;
}
span.folder_open::before,
span.folder_close::before {
  height: 10px;
  width: 10px;
  display: inline-block;
  padding: 5px 10px;
}
span.folder_open::before {
  content: "▲" !important;
}
span.folder_close::before {
  content: "▼" !important;
}
.selected_row {
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
