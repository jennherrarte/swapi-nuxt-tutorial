
<template>
  <section>
    <Header />
    <NavBar />
    <Card :planets="planets" />
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
