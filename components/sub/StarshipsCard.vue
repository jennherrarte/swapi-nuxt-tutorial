<!-- Please remove this file from your project -->
<template>
  <section>
    <h1>starship card </h1>
    <div v-for="(starship, index) in starships" :key="index">
      <h1 class="starships">starships</h1>
      <p>Name: {{ starship.name }}</p>
      <p>Model: {{ starship.model }}</p>
      <p>Starship Class: {{ starship.starship_class }}</p>
      <p>Hyperdrive Rating: {{ starship.hyperdrive_rating }}</p>
      <p>Cargo Capacity: {{ starship.cargo_capacity }}</p>
      <button @click="addFavoriteStarship(index)">Favorite</button>
    </div>
</section>
</template>

<script>



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
}
</script>

<style>
.hello {
  color: red;
}
</style>