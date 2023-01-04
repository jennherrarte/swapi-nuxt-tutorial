
<template>
  <section>
    <Header />
    <NavBar />

    <DynamicCard title="Films" endpoint="/films" v-slot="{ item }">
      <h2>
        {{ item.title }}
      </h2>

      <p>title: {{ item.title }}</p>
      <p>produced by: {{ item.producer }}</p>
      <p>directed by: {{ item.director }}</p>
      <p>episode: {{ item.episode_id }}</p>
      <p>release date: {{ item.release_date }}</p>
    </DynamicCard>
  </section>
</template>

<script>
import NavBar from '.././components/NavBar.vue';
import Header from '.././components/Header.vue';

export default {
  components: { NavBar, Header }
}
</script>

<style>

</style>
