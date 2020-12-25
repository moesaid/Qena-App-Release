<template>
   <div class="grid lg:grid-flow-col md:grid-flow-row gap-10 justify-center items-center py-10 px-20">
      <div class="grid grid-cols-5 items-center justify-center gap-6">
         <img class="col-span-2" :src="require('~/assets/images/landing/paper.png.webp')" alt="" />
         <div class="col-span-3">
            <h1 class="font-bold text-xl capitalize">More time working.</h1>
            <p class="capitalize">integrates and automates every step of your business so it runs seamlessly</p>
         </div>
      </div>
      <div class="grid grid-cols-5 items-center justify-center gap-6">
         <div class="col-span-3 text-right">
            <h1 class="font-bold text-xl capitalize">free set of tools</h1>
            <p class="capitalize">Get a flawless & free digital record of all your project, all without the hassle.</p>
         </div>
         <img class="col-span-2" :src="require('~/assets/images/landing/money.png.webp')" alt="" />
      </div>
   </div>
</template>

<script>
   export default {
      name: 'info',
   };
</script>

<style scoped lang="scss"></style>
