
<template>
  <section>
    <Header />
    <NavBar />

    <DynamicCard title="Films" endpoint="/films" v-slot="{ item }">
      <h2>
        {{ item.title }}
      </h2>

      Films specific data...
    </DynamicCard>
  </section>
</template>

<script>
import NavBar from '.././components/NavBar.vue';
import Header from '.././components/Header.vue';

export default {
  components: { NavBar, Header }
}
</script>

<style>

</style>
