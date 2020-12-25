<template>
   <header id="nav" class="py-5 px-10 border-black grid grid-flow-col items-center justify-between">
      <nuxt-link to="/" class="relative logo">
         <h1 class="text-3xl capitalize font-black text-black">qena</h1>
         <p class="alpha uppercase italic">pre-alpha</p>
      </nuxt-link>

      <div class="hidden lg:block">
         <nuxt-link v-for="item in nav" :key="item.index" class="nav-item" :to="item.link">{{ item.title }}</nuxt-link>
      </div>

      <div>
         <nuxt-link
            class="header-btn capitalize font-bold tracking-wider rounded shadow-lg duration-300 bg-black text-white px-10 py-3"
            to="download"
         >
            download
         </nuxt-link>
      </div>
   </header>
</template>

<script>
   export default {
      name: 'navbar',
      data() {
         return {
            nav: [
               { title: 'Clients management', link: 'clients-management' },
               { title: 'Proposal', link: 'proposal' },
               { title: 'Contract', link: 'contract' },
               { title: 'Time tracking', link: 'time-tracking' },
               { title: 'Task management', link: 'task-management' },
               { title: 'invoicing', link: 'invoicing' },
               { title: 'Color pallets', link: 'color-pallets' },
            ],
         };
      },
   };
</script>

<style scoped lang="scss">
   .logo {
      p {
         color: #000;
      }
   }
   #nav {
      position: absolute;
      z-index: 9;
      left: 0;
      top: 0;
      width: 100%;
   }
   .alpha {
      font-size: 8px;
      font-weight: 600;
   }
   .nav-item {
      margin: 0 10px;
      color: #000;
      text-transform: capitalize;
      font-size: 14px;
      font-weight: 600;
      transition: all 0.3s ease-in-out;
      &:hover {
         color: blue;
      }
   }
   .nuxt-link-active {
      color: blue;
   }
   .header-btn {
      &:hover {
         background-color: blue;
         box-shadow: 0 4px 6px -1px rgba(blue, 0.1), 0 2px 4px -1px rgba(blue, 0.2);
      }
   }
</style>
