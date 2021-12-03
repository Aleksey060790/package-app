<template>
  <div class="footer">
    <div class="footer__info">
      <p>Author: Aleksey Senchenko</p>
      <a class="footer__link" href="https://github.com/Aleksey060790/package-app">View on GitHub</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg: String,
  },
};
</script>
<style scoped lang="scss">
  .footer {
    background-color: darkorange;
    border-radius: 0px 0px 25px 25px ;
    padding: 10px;
    &__link{
      text-decoration: none;
      color: azure;
    }
  }
</style>
