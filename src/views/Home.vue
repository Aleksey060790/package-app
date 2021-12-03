<template>
  <div class="container">
    <Header />
    <Main v-bind:packages="packages" />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import Main from '@/components/Main.vue';
import Footer from '@/components/Footer.vue';
import getPackages from '@/api/packages';

export default {
  data() {
    return {
      packages: [],
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
  },
};
</script>
<style scoped lang="scss">
  .container {
    max-width: 1000px;
    margin: 0 auto;
  }
</style>
