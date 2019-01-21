<template >
  <div class="headerContainer">
    <span class="text">{{text}}</span>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        text: '很多人说我很自信,我不是自信,而是梦想激励着我,青春的年纪不自信,怎叫青春'
      }
    },
    mounted() {
    }
  }
</script>

<style lang="scss" scoped>
  .headerContainer {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;

    .text {
      padding: 0 0 0 20px;
      line-height: 40px;
      background: linear-gradient(to right, rgb(0, 0, 255), rgb(255, 0, 0));
      -webkit-background-clip: text;
      color: transparent;
    }
  }
</style>
