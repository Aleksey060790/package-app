<template>
  <div class="header">
    <div>Packages Application</div>
    <img
      class="header__logo"
      alt="Vue logo"
      src="../assets/logo.png"
    >
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String,
  },
};
</script>
<style scoped lang="scss">
  .header {
    background-color: darkorange;
    border-radius: 25px 25px 0px 0px;
    padding: 10px;
  }
  .header__logo {
    height: 50px
  }
</style>
