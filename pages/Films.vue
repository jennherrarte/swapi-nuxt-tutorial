
<template>
  <section>
    <Header />
    <NavBar />
    <Card :films="films" />
  </section>
</template>

<script>
import NavBar from '.././components/NavBar.vue';
import Header from '.././components/Header.vue';

export default {
  data() {
    return {
      films: []
    };
  },
  mounted() {
    this.getFilms();
  },
  methods: {
    async getFilms() {
      const res = await this.$axios.$get("/films");
      this.films = res.results;
      return this.films;
    }
  },
  components: { NavBar, Header }
}
</script>

<style>

</style>
