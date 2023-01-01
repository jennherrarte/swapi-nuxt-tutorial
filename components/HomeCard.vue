<template>
  <section>
    <div v-for="(page, index) in pages" :key="index">
      <nuxt-link :to="page"><h1>{{ page }}</h1></nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      pages: ['Starships', 'Films', 'People']
    }
  },
}
</script>