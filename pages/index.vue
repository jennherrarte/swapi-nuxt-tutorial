<template>
  <Tutorial />
</template>

<script>
export default {
  name: 'IndexPage',
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
  }
}

</script>
