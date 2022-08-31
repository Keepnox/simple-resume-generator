<template lang="pug">
#panel.container
  .panel-header
    .panel-header-section
      .title
        p {{sectionTitle}}
      .buttons
        button.remove-button(v-if="type === 'job-item'" @click="$emit('k-click')") RM
        button.close-button(@click="panelActive = !panelActive") x
  transition(name="selam")
    .panel-body(:class="{'active': panelActive}")
      .content
        slot
</template>


<script>
export default {
  props: ["sectionTitle", "type", "k-click"],
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
  margin-bottom: 22px
  // scrollbar-gutter: revert
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
    max-height: 0
    transition: max-height .5s ease-in-out
    &.active
      max-height: 500px
      transition: max-height .5s ease-in-out
      overflow-y: scroll
      .panel-body
        overflow: auto
    .content
      padding: 14px 24px

</style>