<template>
  <div class="container">
    <PageHead />
    <div class="content">
      <div class="left">
        <Calendar />
      </div>
      <div class="right">
        我是右边内容
      </div>
    </div>
  </div>
</template>

<script>
  import PageHead from 'components/PageHead'
  import Calendar from 'components/Calendar'

  export default {
    name: 'index',
    components: {
      PageHead,
      Calendar
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    .content {
      display: flex;
      justify-content: space-between;
    }
  }
</style>