<template>
   <div>
      <navbar></navbar>
      <single-hero
         img="2"
         title="The client management system for your small business"
         info="Our easy client database software improves organization, increases efficiency, and delights your clients every step of the way."
         :items="items"
      ></single-hero>
      <sub-hero></sub-hero>
      <d-footer></d-footer>
   </div>
</template>

<script>
   export default {
      name: 'clients-management',
      data() {
         return {
            items: [
               {
                  title: 'Client Management',
                  info: 'Add leads, existing clients and internal notes to keep track of all your contacts.',
               },
               {
                  title: 'Project Organization',
                  info: 'Fill your projects with all the documents, payments, tasks and timesheet you need.',
               },
               {
                  title: 'Free Collaboration',
                  info: 'Invite other contractors to your projects to manage tasks and track time together.',
               },
               {
                  title: 'Build Your Client List',
                  info:
                     'Quit losing clients in your inbox and have a reliable system to track them with your ongoing work together. Add them with all your notes, contacts and tags.',
               },
               {
                  title: 'Keep It Together',
                  info:
                     'Organize all the todos, files and documents for your projects. Your clients even get their own project view to manage payments and contracts you’ve sent.',
               },
               {
                  title: 'Work With Others',
                  info:
                     'Whether they’re a subcontractor or a co-worker, you can freely collaborate on projects with other users to assign them tasks and track time together.',
               },
            ],
         };
      },
   };
</script>

<style scoped></style>
