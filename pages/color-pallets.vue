<template>
   <div>
      <navbar></navbar>
      <single-hero
         img="8"
         title="The super fast color schemes generator!"
         info="Create the perfect palette or get inspired by thousands of beautiful color schemes."
         :items="items"
      ></single-hero>
      <sub-hero></sub-hero>
      <d-footer></d-footer>
   </div>
</template>

<script>
   export default {
      name: 'color-pallets',
      data() {
         return {
            items: [
               {
                  title: 'Color Picker',
                  info: 'Find that perfect color with our color picker and discover beautiful color harmonies.',
               },
               {
                  title: 'Color Chart',
                  info:
                     "Looking for some already great color combinations? Our color chart features flat design colors, Google's Material design scheme and the classic web safe color palette, all with Hex color codes.",
               },
               {
                  title: 'Color Library',
                  info:
                     'Sourcing colors for a new project? Just for fun? Get inspired by our color library containing over 100+ shades from peach to periwinkle, turquoise to taupe, and just about everything in-between.',
               },
            ],
         };
      },
   };
</script>

<style scoped></style>
