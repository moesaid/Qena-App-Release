<template>
   <div>
      <navbar></navbar>
      <single-hero
         img="3"
         title="Make proposals that help you win more work."
         info="Win more business with customizable proposals. Save time and money, create proposals within seconds and get paid at signing."
         :items="items"
      ></single-hero>
      <sub-hero></sub-hero>
      <d-footer></d-footer>
   </div>
</template>

<script>
   export default {
      name: 'proposal',
      data() {
         return {
            items: [
               {
                  title: 'E-Signing',
                  info: 'Sign and approve proposals and contracts online.',
               },
               {
                  title: 'Automatic Invoices',
                  info: 'Your invoices automatically created based on your proposal’s terms.',
               },
               {
                  title: 'Automatic Reminders',
                  info:
                     'The app automatically sends reminders to your clients to remind them to approve your proposals.',
               },
               {
                  title: 'Templates & Branding',
                  info: 'Use flexible proposal templates to add your own branding and offerings.',
               },
               {
                  title: 'Service Packages',
                  info: 'Add single or multiple package options to your proposals that your clients can choose from.',
               },
               {
                  title: 'Look Professional',
                  info:
                     'Create high-quality proposals in seconds with your project details and payment options. Send it off for electronic-approval or copy the secure link to send it yourself.',
               },
            ],
         };
      },
   };
</script>

<style scoped></style>
