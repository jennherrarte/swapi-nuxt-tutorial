<!-- Please remove this file from your project -->
<template>
  <section>
    <Header />
    <NavBar />
    <Card :is="cardType"/>
</section>
</template>

<script>
import NavBar from '.././components/NavBar.vue';
import Header from '.././components/Header.vue';
import StarshipsCard from '../components/sub/StarshipsCard.vue'

export default {
  data() {
    return {
      starships: [], 
      cardType: StarshipsCard
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
