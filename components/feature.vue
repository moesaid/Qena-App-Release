<template>
   <div class="lg:px-20 px-0 py-24 bg-white">
      <div class="flex flex-col items-center justify-center max-w-7xl mx-auto sm:px-2 lg:px-8">
         <div class="text-center w-4/6">
            <p class="capitalize mt-2 text-3xl leading-10 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
               Smart, seamless freelancer tools to build, manage, and grow your business.
            </p>
            <p class="mt-4 max-w-2xl text-xl text-gray-700 lg:mx-auto">
               Sign up for a free account and take your business to the next level. We offer a no-risk, no-hassle,
               satisfaction guarantee.
            </p>
         </div>

         <div class="mt-20 w-5/6">
            <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
               <div v-for="item in items" :key="item.index" class="flex">
                  <div>
                     <div class="flex items-center justify-center h-12 w-12 rounded-md bg-blue text-white">
                        <img :src="require(`~/assets/images/icons/${item.icon}.svg`)" :alt="item.info" />
                     </div>
                  </div>
                  <div class="ml-4">
                     <dt class="text-lg leading-6 font-bold text-gray-900 capitalize">{{ item.title }}</dt>
                     <dd class="mt-2 text-base text-gray-700">{{ item.info }}</dd>
                  </div>
               </div>
            </dl>
         </div>
      </div>
   </div>
</template>

<script>
   export default {
      name: 'feature',
      data() {
         return {
            items: [
               {
                  icon: 'proposal',
                  title: 'proposals',
                  info:
                     'Create and customize invoices, receive updates about payment timelines, and have automatic payment reminders sent on your behalf.\n',
               },
               {
                  icon: 'contract',
                  title: 'contracts',
                  info:
                     'Simply answer a few questions to generate an already vetted contract template. Once you hit send, the contract can be e-signed in minutes.',
               },
               {
                  icon: 'client',
                  title: 'clients',
                  info:
                     'Manage your clients and ongoing projects all in one place. Organize all the documents, files and payments together for you and your client.',
               },
               {
                  icon: 'project',
                  title: 'projects',
                  info:
                     "It's time to experience a project-planning solution that works the way you do—with flexibility.",
               },
               {
                  icon: 'time',
                  title: 'time tracking',
                  info:
                     "Easily track the time you're working, automatically populate timesheet and seamlessly switch between your projects for the day.",
               },
               {
                  icon: 'invoice',
                  title: 'Get Paid Faster',
                  info:
                     'Create and customize invoices, receive updates about payment timelines, and have automatic payment reminders sent on your behalf.',
               },
               {
                  icon: 'task',
                  title: 'task management',
                  info:
                     'Give your day more structure with simple task management on your projects. Track time for each task and stay up-to-date.',
               },
               {
                  icon: 'color',
                  title: 'color palettes',
                  info: 'Create the perfect palette or get inspired by thousands of beautiful color schemes.',
               },
            ],
         };
      },
   };
</script>

<style scoped lang="scss">
   img {
      width: 50%;
   }
   .text-blue {
      color: blue;
   }
   .bg-blue {
      background-color: blue;
   }
</style>
