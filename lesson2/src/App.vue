<template>
  <div>
    <ColorChanger @updateBackgroundColor="applyBackgroundColor" />
  </div>
</template>

<script setup>
import ColorChanger from "./components/ColorChanger.vue";

const applyBackgroundColor = (color) => {
  document.body.style.backgroundColor = color;
};
</script>

<style scoped></style>
