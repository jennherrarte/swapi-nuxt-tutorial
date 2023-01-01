<!-- Please remove this file from your project -->
<template>
  <section>
    <div v-for="(starship, index) in starships" :key="index">
      <h1 class="starships">starships</h1>
      <p>Name: {{ starship.name }}</p>
      <p>Model: {{ starship.model }}</p>
      <p>Starship Class: {{ starship.starship_class }}</p>
      <p>Hyperdrive Rating: {{ starship.hyperdrive_rating }}</p>
      <p>Cargo Capacity: {{ starship.cargo_capacity }}</p>
    </div>
    <div v-for="(film, index) in films" :key="index">
      <h1 class="films">films</h1>
      <p>title: {{ film.title }}</p>
      <p>produced by: {{ film.producer }}</p>
      <p>directed by: {{ film.director }}</p>
      <p>episode: {{ film.episode_id }}</p>
      <p>release date: {{ film.release_date }}</p>
    </div>
    <div v-for="(planet, index) in planets" :key="index">
      <h1 class="planets">planets</h1>
      <p>name: {{ planet.name }}</p>
      <p>diameter: {{ planet.diameter }}</p>
      <p>population: {{ planet.population }}</p>
      <p>climate: {{ planet.climate }}</p>
      <p>terrain: {{ planet.terrain }}</p>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    starships: {
      type: Array,
      default: null,
    },
    films: {
      type: Array,
      default: null,
    },
    planets: {
      type: Array,
      default: null,
    }
  },
  computed: {
    starshipsData() {
      return this.starships
    },
    filmsData() {
      return this.films
    },
    planetsData() {
      return this.planets
    }
  }
}
</script>

<style  ang="scss">
.films,
.starships,
.planets {
  color: red;
}
</style>
