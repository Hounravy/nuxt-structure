<template>
    <div>
   <HomePage/>
   <div>
    <ul v-for="item in ohDAta">
      <li >{{ item.slug }}</li>
    </ul>
        </div>
    </div>
</template>

<script setup>
import HomePage from '~/src/components/pages/home/HomePage.vue';

import { fetchDataByGet } from '~/src/services/strapi';
 const ohDAta = await fetch(
      fetchDataByGet('/comics')
    ).then((res) => res.json());
   

</script>
<style  scoped>

</style>