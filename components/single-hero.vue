<template>
   <div>
      <div class="single-hero">
         <div class="info lg:w-1/4 md:w-3/4">
            <h1 class="font-bold text-3xl tracking-wider leading-10 mb-4">{{ title }}</h1>
            <p class="text-gray-600 text-lg">{{ info }}</p>
         </div>
         <img :src="require(`~/assets/images/product/transparent/${img}.png`)" :alt="title" />
         <div class="shape"></div>
      </div>
      <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-10 p-20">
         <div v-for="item in items" class="mb-5">
            <h1 class="font-bold mb-2">{{ item.title }}</h1>
            <p>{{ item.info }}</p>
         </div>
      </div>
   </div>
</template>

<script>
   export default {
      name: 'single-hero',
      props: ['items', 'title', 'info', 'img'],
   };
</script>

<style scoped lang="scss">
   .single-hero {
      position: relative;
      padding-top: 100px;
      height: 800px;
      overflow: hidden;
      .info {
         position: absolute;
         left: 10%;
         top: 40%;
      }
      img {
         z-index: 1;
         position: absolute;
         right: -10%;
         width: 70%;
      }
      .shape {
         position: absolute;
         left: auto;
         top: -18%;
         right: -36%;
         bottom: auto;
         display: block;
         width: 90%;
         height: 150%;
         border-radius: 94px;
         background-color: rgba(blue, 0.02);
         transform: rotate(-23deg);
         border: 10px solid rgba(blue, 0.05);
      }
   }

   @media (max-width: 1200px) {
      .single-hero {
         display: flex;
         flex-direction: column;
         justify-content: flex-end;
         align-items: center;
         text-align: center;
         padding-top: 150px;
         height: auto;
         .info,
         img {
            position: relative;
         }
         .info {
            left: 0;
            top: 0;
         }
         img {
            width: auto;
            left: 0;
         }
      }
   }
</style>
