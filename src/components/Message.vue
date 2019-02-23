<template>
  <div class="message">
    <div class="content">{{msg}}</div>
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
    width: 100%;
    position: fixed;
    bottom: 10px;

    .content {
      width: 200px;
      margin: 0 auto;
      background: rgb(0, 0, 0);
      color: rgb(255, 255, 255);
      padding: 8px 20px;
      border-radius: 10px;
      font-size: 14px;
      text-align: center;
    }
  }
</style>
