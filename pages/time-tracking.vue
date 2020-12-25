<template>
   <div>
      <navbar></navbar>
      <single-hero
         img="5"
         title="The robust time tracker made for your workflow."
         info="Manage your hours with ease with an all-in-one time tracker, timesheet and billing system."
         :items="items"
      ></single-hero>
      <sub-hero></sub-hero>
      <d-footer></d-footer>
   </div>
</template>

<script>
   export default {
      name: 'time-tracking',
      data() {
         return {
            items: [
               {
                  title: 'Invoice Hours',
                  info:
                     'Set a project’s hourly rate, start tracking time and bill time to your client with a click. Round the time up to make the billing even smoother.',
               },
               {
                  title: 'Centralize Timesheet',
                  info:
                     'Whether you’re tracking time as a team on a project or working solo, you can keep all your project’s timesheet in the same place to see the hours billed and to-be paid.',
               },
               {
                  title: 'Project-Based',
                  info:
                     'Track time on projects with your collaborators and see how many hours still need to be billed.',
               },
            ],
         };
      },
   };
</script>

<style scoped></style>
