<template>
   <div>
      <navbar></navbar>
      <single-hero
         img="6"
         title="Simple tasks built for your project workflow."
         info="Prioritize the week for your ongoing projects and create reusable task templates for new ones."
         :items="items"
      ></single-hero>
      <sub-hero></sub-hero>
      <d-footer></d-footer>
   </div>
</template>

<script>
   export default {
      name: 'task-management',
      data() {
         return {
            items: [
               {
                  title: 'Keep It Simple',
                  info:
                     'Whether you’re managing tasks for your business or specific projects, you can add new instantly. You can even set up custom templates for new projects.',
               },
               {
                  title: 'Tie It Together',
                  info:
                     'Track time on your tasks and the timesheet will show what was completed when billing your client. Continue billing hours for a project’s ongoing tasks easily.',
               },
               {
                  title: 'Assign To Collaborators',
                  info:
                     'Have multiple people on a particular project? Add a collaborator for free any time to manage tasks together without granting full access to the project.',
               },
            ],
         };
      },
   };
</script>

<style scoped></style>
