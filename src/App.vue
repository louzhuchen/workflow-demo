<script setup lang="ts">
import { animate, useMotionValue, useTransform, RowValue } from "motion-v";
import { onUnmounted } from "vue";

const count = useMotionValue(0);
const rounded = useTransform(() => Math.round(count.get()));

let controls = animate(count, 100, { duration: 1 });

onUnmounted(() => {
  controls?.stop();
});
</script>

<template>
  <pre class="motion-pre">
    <RowValue :value="rounded" />
  </pre>
</template>

<style scoped>
.motion-pre {
  font-size: 64px;
  color: #4ff0b7;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
