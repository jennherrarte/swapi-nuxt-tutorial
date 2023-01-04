<!-- Please remove this file from your project -->
<template>
  <section>
    <Header />
    <NavBar />

    <DynamicCard title="Starships" endpoint="/starships" v-slot="{ item }">
      <h2>
        {{ item.name }}
      </h2>

      StarWars specific data...
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
.hello {
  color: red;
}
</style>
