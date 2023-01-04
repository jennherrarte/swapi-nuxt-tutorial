<template>
  <section>
    <Header />
    <NavBar />
    <div class="grid">
      <div class="col">
        <h1>Planets</h1>
      </div>

      <div class="col">
        <h1>Films</h1>
      </div>

      <div class="col">
        <h1>Starship</h1>
      </div>
    </div>
  </section>
</template>


<script>
import NavBar from '.././components/NavBar.vue';
import Header from '.././components/Header.vue';

export default {
    name: "IndexPage",
    data() {
        return {
          favorite_starships: []
        };
    },
    mounted() {
      console.log(this.favorite_starships)
      this.$emit('addFavoriteStarship', this.favorite_starships)
    },
    components: { Header, NavBar }
}

</script>

<style lang="scss" scoped>
.grid {
  display: flex;
  flex-direction: row;
  background-color: map-get($colors, 'tertiary');
}

.col {
  width: 50%;
}
</style>