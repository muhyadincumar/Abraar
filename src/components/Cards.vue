<script setup lang="ts">
defineProps<{title: String, doctors: number }>();
</script>
<template>
   <div class="bg-gray-200 shadaw-md rounded-lg p-8 text-center hover:shadaw-md transform hover:scale-110 transition">
    <div class="flex items-center justify-center mb-3">
    <slot></slot>

</div>
    <h1 class="text-2xl">{{title}}</h1>
    <span>{{ doctors }} Doctors</span>
    <slot name="bottom"></slot>
  </div>
</template>