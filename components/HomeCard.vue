<template>
  <section class="card-container">
    <div v-for="(page, index) in pages" :key="index">
      <nuxt-link :to="page"><div class="card"><p>{{ page }}</p></div></nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      pages: ['Starships', 'Films', 'Planets', 'Favorites']
    }
  },
}
</script>

<style>
.card-container {
  display: flex;
  flex-direction: row;
}

.card {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px black solid;
  height: 200px;
  width:  360px;
  border-radius: 10px;
  margin: 20px;

}

.card p {
  font-size: 3rem;
}

a {
  text-decoration: none;
}

.starships {
  background-color: f4a24f;
}

.planets {
  background-color: #c63434;
}

.films {
  background-color: #580f0c;
}
</style>