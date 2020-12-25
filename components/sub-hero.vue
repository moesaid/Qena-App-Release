<template>
   <div class="sub grid lg:grid-cols-2 md:grid-cols-1">
      <h1>Spend time on your work, not losing track of it.</h1>
      <div class="flex justify-end items-center">
         <nuxt-link to="download">download</nuxt-link>
      </div>
   </div>
</template>

<script>
   export default {
      name: 'sub-hero',
   };
</script>

<style scoped lang="scss">
   .sub {
      margin: 0px 80px 80px 80px;
      padding: 50px;
      border-radius: 5px;
      background-color: blue;
      color: #fff;
   }
   h1 {
      font-size: 44px;
   }
   a {
      font-size: 17px;
      text-align: right;
      background-color: #fff;
      color: blue;
      padding: 10px 40px;
      border-radius: 5px;
      text-transform: capitalize;
   }

   @media (max-width: 900px) {
      h1 {
         text-align: center;
         font-size: 15px;
      }
      a {
         margin-top: 10px;
         text-align: center;
         width: 100%;
      }
   }
</style>
