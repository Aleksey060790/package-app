<template>
  <div class="container">
    <Header />
    <Main
      v-bind:packages="packages"
      v-bind:stats="stats"
    />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import Main from '@/components/Main.vue';
import Footer from '@/components/Footer.vue';
import getStats, { getPackages } from '@/api/packages';

export default {
  data() {
    return {
      pageNumber: 0,
      packages: [],
      stats: [],
    };
  },
  name: 'Home',
  components: {
    Header,
    Main,
    Footer,
  },
  async mounted() {
    this.packages = await getPackages();
    this.stats = await getStats();
    console.log(this.stats);
  },
};
</script>
<style scoped lang="scss">
  .container {
    max-width: 1000px;
    margin: 0 auto;
  }
</style>
