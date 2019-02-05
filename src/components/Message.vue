<template>
  <div class="message">
    {{msg}}
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  }
}
</script>

<style lang="scss" scoped>
  .message {
    position: fixed;
    bottom: 10px;
    margin: 0 auto;
    background: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
  }
</style>
