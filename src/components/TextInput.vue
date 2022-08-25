<template lang="pug">
.form-el
  label(for="fname") First Name
  input(type="text" name="fname")
</template>

<style lang="sass" scoped>
.form-el
  display: flex
  flex-direction: column

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
    &:hover
      border-color: #F7249A
      border-right-width: 1px
</style>

<script>
export default {

}
</script>