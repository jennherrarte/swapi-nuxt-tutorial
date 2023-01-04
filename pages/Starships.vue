<!-- Please remove this file from your project -->
<template>
  <section>
    <Header />
    <NavBar />

    <DynamicCard title="Starships" endpoint="/starships" v-slot="{ item }">
      <h2>
        {{ item.name }}
      </h2>
      <p>Name: {{ item.name }}</p>
      <p>Model: {{ item.model }}</p>
      <p>Starship Class: {{ item.starship_class }}</p>
      <p>Hyperdrive Rating: {{ item.hyperdrive_rating }}</p>
      <p>Cargo Capacity: {{ item.cargo_capacity }}</p>
      <button v-on:click="addFavroite(item)">Favorite</button>
    </DynamicCard>
  </section>
</template>

<script>
import NavBar from '.././components/NavBar.vue';
import Header from '.././components/Header.vue';

export default {
  components: { NavBar, Header },
  data() {
    return {
    favorites: []
    }
  },
  methods: {
    addFavroite(item) {
      this.favorites.push(item)
      console.log(this.favorites)

    }


  }

}
</script>

<style>
.hello {
  color: red;
}
</style>
