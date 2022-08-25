<template lang="pug">
#resumeOuter
  .editor-side.k-row.row-left
    .cv-form-outer
      Panel(sectionTitle="selam")
        TextInput
        //- .form-el
        //-   label(for="fname") Last Name
        //-   input(type="text" name="fname")
  .preview-side.k-row.row-right
    .p sag taraf


</template>

<script>
import Panel from './components/Panel.vue'
import TextInput from './components/TextInput.vue'
export default {
  components: {Panel,TextInput}
}
</script>
<style scoped lang="sass">
#resumeOuter
  display: flex
  padding: 15px
  .k-row
    width: 50%

</style>
