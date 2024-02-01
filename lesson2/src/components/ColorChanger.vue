<script setup>
import { ref, defineEmits } from "vue";

const emits = defineEmits(["updateBackgroundColor"]);
const palette = ["#ff6666", "#a0db8e", "#7eaab5", "#e6e6fa"];
const colorIndex = ref(0);

const triggerColorUpdate = () => {
  colorIndex.value = (colorIndex.value + 1) % palette.length;
  const color = palette[colorIndex.value];
  emits("updateBackgroundColor", color);
};
</script>

<template>
  <div :style="{ backgroundColor: palette[colorIndex] }" class="content-center">
    <button @click="triggerColorUpdate">Change Background Color</button>
  </div>
</template>

<style scoped>
.content-center {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #3e3e3e;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  transition:
    background-color 0.3s,
    transform 0.3s;
}

button:hover {
  background-color: #232323;
  transform: scale(1.05);
}

button:active {
  transform: scale(0.9);
}
</style>
