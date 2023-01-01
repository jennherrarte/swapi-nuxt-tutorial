<template>
 <div>
  <Header />
 
  <HomeCard />
  </div>
</template>

<script>
import HomeCard from '../components/HomeCard.vue';

export default {
    name: "IndexPage",
    data() {
        return {
            pages: ["Starships", "Films", "Planets"]
        };
    },
    components: { HomeCard }
}

</script>
