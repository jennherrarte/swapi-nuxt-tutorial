<template>
  <div>
    <template v-if="isLoading">
      Loading...
    </template>

    <template v-else-if="data">
      <h1>
        {{ data.title }}
      </h1>

      <div>
        {{ data.content }}
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: true,
      data: null,
    };
  },

  created() {
    this.loadItems();
  },

  methods: {
    loadItems() {
      const pageSlug = this.$route.params.slug;

      console.log('Load data from API here based on slug: ', pageSlug);

      setTimeout(() => {
        this.data = {
          title: pageSlug,
          content: `This is the ${pageSlug} page.`,
        };

        this.isLoading = false;
      }, 2500);
    },
  },
}
</script>
