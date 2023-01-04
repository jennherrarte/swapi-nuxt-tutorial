
<template>
  <section>
    <Header />
    <NavBar />

    <DynamicCard title="Planets" endpoint="/planets" v-slot="{ item }">
      <h2>
        {{ item.name }}
      </h2>

      Planets specific data...
    </DynamicCard>
  </section>
</template>

<script>
import NavBar from '.././components/NavBar.vue';
import Header from '.././components/Header.vue';

export default {
  data() {
    return {
      planets: []
    };
  },
  mounted() {
    this.getPlanets();
  },
  methods: {
    async getPlanets() {
      const res = await this.$axios.$get("/planets");
      this.planets = res.results;
      return this.planets;
    }
  },
  components: { NavBar, Header }
}
</script>

<style>

</style>
