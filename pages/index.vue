<template>
    <div>
   <HomePage/>
   <div>
    <ul v-for="item in data">
      <li >{{ item.title }}</li>
    </ul>
        </div>
    </div>
</template>

<script setup>

const config = useRuntimeConfig();
const getAPI = config.public.apiBase;
 const {data} = await useFetch(`${getAPI}/comics`);
 console.log(data.value.length);
</script>
<style  scoped>

</style>