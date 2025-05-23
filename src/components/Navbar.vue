<script setup lang="js">
import { ref } from 'vue';
import {RouterLink} from 'vue-router'
let isMenuHidden =ref(true);
</script>
<template>
           <div v-if="isMenuHidden === false"
  @click="isMenuHidden = !isMenuHidden"
   class="h-screen w-screen fixed md:hidden bg-opacity-70"> </div>
  <nav class="max-w-full mx-auto bg-gray-100">
<div class="flex justify-between items-center">
  <div class="flex space-x-4">
    <div>
     <RouterLink to="/">
      <span class="block p-4 text-lg font-bold bg-gradient-to-r from-green-500 to-blue-500 text-transparent bg-clip-text">Doctors App</span>
     </RouterLink>
    </div>
    <ul class="hidden md:flex space-x-2  items-center"> 
          <li>
            <RouterLink to="/" class="nav-item">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/doctors" class="nav-item">Doctors</RouterLink>
          </li>
          <li>
            <RouterLink to="/contacts" class="nav-item">Contacts</RouterLink>
          </li>
        </ul>
  </div>
 <div class=" hidden md:flex space-x-2 items-center mr-2 ">
        <RouterLink to="/login" class="text-2xl bg-gradient-to-r from-green-600 to bg-blue-400 py-2 px-4 text-gray-100 rounded hover:bg-pink-300 hover:text-gray-700">Signup</RouterLink>
        <RouterLink to="/singup" class="text-2xl bg-gradient-to-r from-green-600 to bg-blue-400 py-2 px-4 text-gray-100 rounded">Login</RouterLink>
      </div>
      <button class="md:hidden cursor-pointer mr-3" @click="isMenuHidden = !isMenuHidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
         <path fill-rule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
         </svg>
      </button>
      
</div>
  <div class="bg-blue-100 w-64 fixed md:hidden  transform left-0 top-0 h-screen flex  flex-col space-y-10 items-center justify-center transition" :class="{'-translate-x-64': isMenuHidden}">
     <h4 class=" text-3xl bg-text-clip text-transparent text-transperent bg-gradient-to-r from-green-500 bg-blue-500 bg-clip-text">Doctors App</h4>
     <ul class="w-64 text-center">
      <li>
        <RouterLink to="/" class=" block border-b border-blue-200 py-5 px-3 font-semibold  hover:bg-blue-200 rounded  shadow-lg">Home</RouterLink>
      </li>
      <li>
        <RouterLink to="/" class=" block border-b border-blue-200 py-5 px-3 font-semibold  hover:bg-blue-200 rounded-2xl  shadow-lg">Doctors</RouterLink>
      </li>
      <li>
        <RouterLink to="/" class=" block border-b border-blue-200 py-5 px-3 font-semibold  hover:bg-blue-200  rounded-2xl  shadow-lg">Contacts</RouterLink>
      </li>
     </ul>
     <div class="flex space-x-2 mt-10">
        <RouterLink to="/" class="bg-gradient-to-r from-green-600 to bg-green-300 py-2 px-4 text-gray-100 rounded">Login</RouterLink>
        <RouterLink to="/" class="bg-gradient-to-r from-green-600 to bg-green-300 py-2 px-4 text-gray-100 rounded">Singup</RouterLink>
      </div>
  </div>
  </nav> 
</template>