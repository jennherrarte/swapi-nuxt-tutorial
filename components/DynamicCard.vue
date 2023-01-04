<template>
  <div>
    <h1 v-if="title">
      {{ title }}
    </h1>

    <div v-for="(item, itemIndex) in items" :key="itemIndex">
      <slot :item="item"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null,
    },

    endpoint: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      items: [],
    };
  },

  created() {
    this.loadItems();
  },

  methods: {
    async loadItems() {
      const res = await this.$axios.$get(this.endpoint)
      this.items = res.results
    },
  },
}
</script>
