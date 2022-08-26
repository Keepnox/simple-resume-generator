<template lang="pug">
#panel.container
  .panel-header
    .panel-header-section
      .title
        p {{sectionTitle}}
      .buttons
        .close-button(@click="panelActive = !panelActive") x
  .panel-body(:class="{'active': panelActive}")
    .content
      slot
</template>


<script>
export default {
  props: ["sectionTitle"],
  data() {
    return {
      panelActive: true
    }
  },
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
    padding: 0 24px
    color: rgba(0,0,0,.85)
    font-weight: 500
    font-size: 16px
    border-bottom: 1px solid #f0f0f0
    .panel-header-section
      display: flex
      justify-content: space-between
      align-items: center
  .panel-body
    overflow: hidden
    max-height: 0px
    transition: .5s all cubic-bezier(1, 0, 1, 1),
    &.active
      max-height: 99999px
      transition: .5s all cubic-bezier(1, 0, 1, 1),
    .content
      padding: 14px 24px

</style>