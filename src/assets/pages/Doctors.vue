  <script setup>
  //Logi
 import DoctorCard from "../../components/DoctorCard.vue";
</script>   

<template>
  <div class="w-full px-10 p-10">
  <div class="grid grid-cols-1 md:grid-cols-4 gap-10">
   <DoctorCard title="Dr. Asma Moutu">
    <img class="w-full h-48 object-cover" src="../Images/Dr. Asma Moutu.jpg" alt="Card image">
   </DoctorCard>
   <DoctorCard title="Dr. Hamca Jaoila">
    <img class="w-full h-48 object-cover" src="../Images/Dr. Hamca Jaoila.jpg" alt="Card image">
   </DoctorCard>
   <DoctorCard title="Dr. Muhsim">
    <img class="w-full h-48 object-cover" src="../Images/Dr. Muhsim.avif" alt="Card image">
   </DoctorCard>
   <DoctorCard title="Dr. SHaarir">
    <img class="w-full h-48 object-cover" src="../Images/Dr.SHaarir.jpg" alt="Card image">
   </DoctorCard>
   
   
  </div>
  </div>
   <!-- Content Section -->
 

  <!-- Footer -->
  <footer class="bg-white border-t py-6 text-center">
    <p class="text-gray-600">&copy; 2025 MySite. All rights reserved.</p>
  </footer>
</template>