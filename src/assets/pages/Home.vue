<script setup >
import Cards from '../../components/Cards.vue'
const handleSearch=() => {

}
</script>
<template>
          <div class="flex md:space-x-5 h-screen px-4 md:px-24 py-10 md:py-36">
    <div class="hidden md:block flex-1">
      <img src="/src/assets/undraw_medicine_hqqg.svg" />
    </div>
  <div class="flex-1">
     <div class=" ml-4 p-8 max-w-full bg-gray-50 shadow-lg rounded-lg"> 
    <h1 class="text-2xl text-gray-600 text-center font-semibold">Book Doctors</h1>
    <form @submit.prevent="handleSearch" class="mt-8 rounded-lg flex flex-col space-y-4">
      <div>
        <input placeholder="location" class="py-4 px-4 w-full outline-none ring-1 focus:ring rounded ">
      </div>
      <div>
      <select class="py-4 px-4 w-full outline-none ring-1 focus:ring rounded ">
      <option selected>Selected Gender</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
      </select>
      </div>

      <div>
      <select class="py-4 px-4 w-full outline-none ring-1 focus:ring rounded ">
      <option selected>Selected Speciality</option>
      <option value="Nerves">Nerves</option>
      <option value="Kalyo">Kalyo</option>
      <option value="Wadno">Wadno</option>
      <option value="ilko">ilko</option>
      </select>
      </div>

      <div class="mt-4 text-center text-3xl">
        <button type="submit" class=" cursor-pointer bg-gradient-to-r from-green-600 to bg-blue-400 text-white w-48 tracking-widest py-3 rounded-lg hover:bg-green-600">Search</button>
      </div>

    </form>
     </div>
  </div>
  </div>
 <div class="w-full px-10 p-10">
  <div class="grid grid-cols-1 md:grid-cols-4 gap-10">
    <!----card One-------->
    <Cards title="Nerves" :doctors="8">
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
   <path stroke-linecap="round" stroke-linejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5" />
    </svg>

       </Cards>
    <Cards  title="Dental" :doctors="14"> 
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-10">
  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 0 0-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634Zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 0 1-.189-.866c0-.298.059-.605.189-.866Zm2.023 6.828a.75.75 0 1 0-1.06-1.06 3.75 3.75 0 0 1-5.304 0 .75.75 0 0 0-1.06 1.06 5.25 5.25 0 0 0 7.424 0Z" clip-rule="evenodd" />
</svg>

    </Cards>
    <Cards title="Sergery" :doctors="4"> 
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-10">
  <path fill-rule="evenodd" d="M8.161 2.58a1.875 1.875 0 0 1 1.678 0l4.993 2.498c.106.052.23.052.336 0l3.869-1.935A1.875 1.875 0 0 1 21.75 4.82v12.485c0 .71-.401 1.36-1.037 1.677l-4.875 2.437a1.875 1.875 0 0 1-1.676 0l-4.994-2.497a.375.375 0 0 0-.336 0l-3.868 1.935A1.875 1.875 0 0 1 2.25 19.18V6.695c0-.71.401-1.36 1.036-1.677l4.875-2.437ZM9 6a.75.75 0 0 1 .75.75V15a.75.75 0 0 1-1.5 0V6.75A.75.75 0 0 1 9 6Zm6.75 3a.75.75 0 0 0-1.5 0v8.25a.75.75 0 0 0 1.5 0V9Z" clip-rule="evenodd" />
    </svg>
    </Cards>
    <Cards title="psychology" :doctors="9"> 
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-10">
     <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 0 0-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634Zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 0 1-.189-.866c0-.298.059-.605.189-.866Zm-4.34 7.964a.75.75 0 0 1-1.061-1.06 5.236 5.236 0 0 1 3.73-1.538 5.236 5.236 0 0 1 3.695 1.538.75.75 0 1 1-1.061 1.06 3.736 3.736 0 0 0-2.639-1.098 3.736 3.736 0 0 0-2.664 1.098Z" clip-rule="evenodd" />
    </svg> 
    <template v-slot:bottom>
      <Button text="Explore"></Button>
    </template>
    </Cards>
  </div>
  </div>
</template>