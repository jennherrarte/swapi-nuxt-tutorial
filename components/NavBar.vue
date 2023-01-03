<template>
  <section>
    <div v-for="(page, index) in pages" :key="index">
      <nuxt-link :to="page"><button>{{ page }}</button></nuxt-link>
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