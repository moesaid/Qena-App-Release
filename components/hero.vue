<template>
   <div id="hero">
      <div class="top">
         <div class="info">
            <h1>Everything you need to run your freelance business.</h1>
            <p>Do what you love. We'll handle the paperwork.</p>
         </div>
         <div class="img-wrapper">
            <img src="~/assets/images/product/transparent/1.png" alt="product" />
         </div>
      </div>
      <div class="bottom">
         <snow></snow>
      </div>
   </div>
</template>

<script>
   export default {
      name: 'hero',
      components: {},
      data() {
         return {};
      },
   };
</script>

<style scoped lang="scss">
   .ball {
      position: absolute;
      border-radius: 100%;
      opacity: 0.7;
   }
   #hero {
      padding-top: 100px;
      height: 1300px;
      position: relative;
      overflow: hidden;
      .top {
         position: absolute;
         z-index: 1;
         left: 0;
         top: 0;
         width: 100%;
         height: 100%;
         display: flex;
         flex-direction: column;
         justify-content: flex-end;
         align-items: center;
      }
      .bottom {
         position: absolute;
         left: 0;
         top: 0;
         width: 100%;
         height: 100%;
      }

      .info {
         margin-top: 100px;
         width: 900px;
         text-align: center;
         text-transform: capitalize;
         h1 {
            font-size: 4rem;
            font-weight: 900;
            line-height: 4rem;
         }
         p {
            font-size: 2rem;
            opacity: 0.7;
            margin-top: 30px;
         }
      }

      .img-wrapper {
         margin-top: 30px;
         width: 1200px;
         overflow: hidden;
         iframe {
            width: 1000px;
         }
         img {
            width: 100%;
         }
      }
   }

   @media (max-width: 1200px) {
      #hero {
         height: 800px;
         .info {
            padding: 50px 40px;
            width: 100%;
            h1 {
               font-size: 3rem;
            }
            p {
               font-size: 1.5rem;
            }
         }
         .img-wrapper {
            width: 100%;
         }
      }
   }
</style>
