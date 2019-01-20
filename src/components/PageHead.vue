<template >
  <div class="headerContainer">
    
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showContent: '我不把今天的事情留给明天，因为我知道明天是永远不会来临的。现在就去行动吧！即使我的行动不会带来快乐与成功。但是动而失败总比坐而待毙好。行动也许不会结出快乐的果实，但是没有行动，所有的果实都无法收获!'
      }
    },
    mounted() {
      // this._renderContent()
    },
    methods: {
      _renderContent() {
        let _content = this.showContent.split('')
        _content.map(v => {
          setTimeout(() => {
            console.log('vvv', v)
          }, 1000)
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .headerContainer {
    width: 100%;
    height: 200px;
    background: rgba(135, 206, 235, 1)
  }
</style>
