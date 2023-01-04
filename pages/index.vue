<template>
    <div class="home">
        <Header />
        <div class="card-section">
            <HomeCard />
        </div>
    </div>
</template>

<script>
import HomeCard from '../components/HomeCard.vue';

export default {
    name: "IndexPage",
    data() {
        return {
            pages: ["Starships", "Films", "Planets", "Favorites"]
        };
    },
    components: { HomeCard }
}

</script>

<style>
body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    /* height: 95vh; */
    background-color: #f7efd8;
    padding: 10px;
}

.card-section {
    display: flex;
    justify-content: center;
    align-content: center;
}
</style>