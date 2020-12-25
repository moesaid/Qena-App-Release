<template>
   <div class="download">
      <navbar></navbar>
      <div class="flex justify-center text-center">
         <div class="py-48 ld:w-3/5">
            <h1 class="font-black text-4xl capitalize">Ready to check out qena app?</h1>
            <p class="text-4xl">Whether you’re a operating system is, we got you.</p>

            <div class="pt-24 px-10 grid lg:grid-cols-3 gap-10">
               <a
                  class="bg-black text-white text-xl py-4 rounded font-bold capitalize flex justify-center items-center"
                  href="https://github.com/moesaid/Qena-App-Release/releases/download/untagged-976f90f5d7eb5a13b5bc/Qena-0.1.0-mac.zip"
               >
                  <img class="w-4 mr-4" :src="require('~/assets/images/icons/apple.svg')" alt="apple" />
                  macOS
               </a>
               <a
                  class="bg-black text-white text-xl py-4 rounded font-bold capitalize flex justify-center items-center"
                  href="https://github.com/moesaid/Qena-App-Release/releases/download/untagged-976f90f5d7eb5a13b5bc/Qena-Setup-0.1.0.exe"
               >
                  <img class="w-4 mr-4" :src="require('~/assets/images/icons/windows.svg')" alt="windows" />
                  windows
               </a>
               <a
                  class="bg-black text-white text-xl py-4 rounded font-bold capitalize flex justify-center items-center"
                  href="https://github.com/moesaid/Qena-App-Release/releases/download/untagged-976f90f5d7eb5a13b5bc/Qena-0.1.0.AppImage"
               >
                  <img class="w-4 mr-4" :src="require('~/assets/images/icons/linux.svg')" alt="linux" />
                  linux
               </a>
            </div>
         </div>
      </div>
      <d-footer></d-footer>
   </div>
</template>

<script>
   export default {
      name: 'download',
   };
</script>

<style lang="scss">
   .download {
      .nuxt-link-active {
         background-color: blue;
         color: #fff !important;
      }
      .logo {
         background-color: transparent;
      }
   }
</style>
