<template>
   <div>
      <navbar></navbar>
      <single-hero
         img="4"
         title="Flexible contracts to secure your business."
         info="Create & e-sign contracts from vetted templates. Get peace of mind and get on with your work."
         :items="items"
      ></single-hero>
      <sub-hero></sub-hero>
      <d-footer></d-footer>
   </div>
</template>

<script>
   export default {
      name: 'contract',
      data() {
         return {
            items: [
               {
                  title: 'Vetted Templates',
                  info:
                     'Use structured freelance contract templates, your own custom agreements and even standard NDAs.',
               },
               {
                  title: 'Electronic Signature',
                  info: 'Send, sign and store your legally-bindings online contracts with your clients.',
               },
               {
                  title: 'Auto-Reminders',
                  info: 'Auto-remind your client for their signature and receive a notification when it is signed.',
               },
               {
                  title: 'Protect Your Business',
                  info:
                     'Vetted by thousands of freelancers and top contract lawyers, select from a variety of contract templates to get started. Then, add your own customizations for your business.',
               },
               {
                  title: 'Streamline E-Signature',
                  info:
                     'Use a legally-binding e-signature to speed up the formalities when onboarding a new client relationship. Send it via Bonsai or using your own secure link.',
               },
               {
                  title: 'Automate Reminders',
                  info:
                     'Once sending your contract, stay up-to-date with automatic reminders to your client, as well as notifications for viewing and counter-signing.',
               },
            ],
         };
      },
   };
</script>

<style scoped></style>
