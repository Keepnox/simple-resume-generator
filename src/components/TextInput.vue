<template lang="pug">
.form-el
  label(:for="inputName") {{inputName}}
  input(type="text" :name="inputName")
</template>

<script>
export default {
  props: ["inputName"]
}
</script>

<style lang="sass" scoped>
.form-el
  display: flex
  flex-direction: column
  margin-bottom: 22px
  label
    align-content: center
    font-size: 14px
    color: rgba(0,0,0,.85)
    max-width: 100%
    display: inline-flex
    padding-bottom: 8px
  input
    box-sizing: border-box
    margin: 0
    list-style: none
    position: relative
    display: inline-block
    width: 100%
    min-width: 0
    padding: 4px 11px
    color: rgba(0,0,0,.85)
    font-size: 14px
    line-height: 1.5715
    background-color: #fff
    background-image: none
    border: 1px solid #d9d9d9
    border-radius: 20px
    transition: all .3s
    outline-color: #F7249A
    &:hover
      border-color: #F7249A
      border-right-width: 1px
    &:focus-:visible
      outline-color: #f7249a !important
      border-color: #F7249A !important
      border-right-width: 1px
    &:focus
      border-color: #F7249A !important
      border-right-width: 1px
</style>
