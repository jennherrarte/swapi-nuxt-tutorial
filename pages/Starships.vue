<!-- Please remove this file from your project -->
<template>
  <section>
    <Header />
    <NavBar />
    <Card :starships="starships" />
</section>
</template>

<script>
import NavBar from '.././components/NavBar.vue';
import Header from '.././components/Header.vue';

export default {
  data() {
    return {
      starships: [] 
    }
  },
  mounted() {
    this.getStarships()
  },
  methods: {
    async getStarships() {
      const res = await this.$axios.$get('/starships')
      this.starships = res.results
      console.log(this.starships)
      return this.starships;
    }
  },
  components: { NavBar, Header }
}
</script>

<style>
.hello {
  color: red;
}
</style>
