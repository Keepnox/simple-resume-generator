<template lang="pug">
#panel.container
  .panel-header
    p {{sectionTitle}}
  .panel-body
    slot
</template>


<script>
export default {
  props: ["sectionTitle"]
}
</script>

<style lang="sass" scoped>
#panel

  background-color: white
  border: 1px solid #f0f0f0
  box-sizing: border-box
  padding: 0
  color: rgba(0,0,0,.85)
  background: #fff
  border-radius: 20px
  .panel-header
    box-sizing: border-box
    // min-height: 48px
    // margin-bottom: -1px
    padding: 0 24px
    color: rgba(0,0,0,.85)
    font-weight: 500
    font-size: 16px
    // background: transparent
    border-bottom: 1px solid #f0f0f0
  .panel-body
    padding: 14px 24px

</style>