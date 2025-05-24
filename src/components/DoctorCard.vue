<script setup lang="ts">
defineProps<{title: String, doctors: string }> ();
</script>
<template>
         
 <div class="max-w-sm mx-auto bg-gray-200 shadaw-md rounded-lg p-8  hover:shadaw-md transform hover:scale-110 transition">
  <slot></slot>
  <div class="p-6">
    <h2 class="text-xl font-semibold text-gray-800">{{ title}}</h2>
    <p class="text-gray-600 mt-2">
      This is a simple card built with Tailwind CSS. You can use it to display content beautifully.
    </p>
    <button class="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded cursor-pointer">
     Booking Now !!
    </button>
  </div>
</div>

</template>