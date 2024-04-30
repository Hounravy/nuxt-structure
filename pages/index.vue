<template>
    <div>
   <PagesHomePage :products="products"/>
    </div>
</template>

<script setup>

<<<<<<< HEAD
const {apiBase} = useRuntimeConfig().public;
 const { data: products } = await useFetch(`${apiBase}/products?limit=12&sort=desc`);

=======
const config = useRuntimeConfig();
const getAPI = config.public.apiBase;
 const {data} = await useFetch(`${getAPI}/comics`);
>>>>>>> 289c7ce618b077f4c54e7b002639f0d815112ebb
</script>
<style  scoped>

</style>