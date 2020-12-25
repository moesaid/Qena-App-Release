<template>
   <div>
      <navbar></navbar>
      <single-hero
         img="7"
         title="Get paid on time with smart, flexible invoicing."
         info="Join thousands of freelancers getting paid faster with invoice automation, partial payments and more."
         :items="items"
      ></single-hero>
      <sub-hero></sub-hero>
      <d-footer></d-footer>
   </div>
</template>

<script>
   export default {
      name: 'invoicing',
      data() {
         return {
            items: [
               {
                  title: 'Automate It',
                  info:
                     'Use smart invoicing to automatically create your next invoice, remind your client for payment, accrue an overdue late fee and send you read-receipts.',
               },
               {
                  title: 'Always Get Paid',
                  info:
                     'Using Bonsai’s global payment options and smart invoicing features, freelancers get paid an average of 13 days faster and have 3x fewer late payments.',
               },
               {
                  title: 'Invoice Like A Pro',
                  info:
                     'Leverage powerful features like attachment-locking, tipping and partial payments to invoice like a pro. When you’re on-the-go, use the mobile app.',
               },
            ],
         };
      },
   };
</script>

<style scoped></style>
