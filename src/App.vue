<template lang="pug">
#resumeOuter
  .editor-side.k-row.row-left
    .cv-form-outer
      Panel(sectionTitle="Personal Informations")
        TextInput(inputName="First Name"  v-model="workdata.userInfo.firstName")
        TextInput(inputName="Last Name" v-model="workdata.userInfo.lastName")
        TextInput(inputName="Position Title" v-model="workdata.userInfo.position")
        TextInput(inputName="Address" v-model="workdata.userInfo.address")
        TextInput(inputName="Phone" v-model="workdata.userInfo.phone")
        TextInput(inputName="EMail" v-model="workdata.userInfo.email")
        TextInput(inputName="Website" v-model="workdata.userInfo.website")

      Panel(sectionTitle="Job Experiences")
        Panel(v-for="(jd, index) in workdata.jobs" key="jd.id" :sectionTitle="'Job ' +( index + 1)" :data-id="jd.id" type="job-item" data-type="job-item" @k-click="removeJob(jd.id)")
          TextInput(inputName="Title" v-model="jd.title")
          TextInput(inputName="Date (May 2020 - Jun 2005)" v-model="jd.date")
          TextInput(inputName="Company Name and Information" v-model="jd.companyName")
          TextInput(inputName="Job Description" v-model="jd.description")
        button.keepnox-button(@click="addJob")  + Add Job

  .preview-side.k-row.row-right
    .p sag taraf


</template>

<script>
import Panel from './components/Panel.vue'
import TextInput from './components/TextInput.vue'
import {uuid} from "vue-uuid";
import workdata from "./assets/data.json"

export default {
  components: {Panel,TextInput},
  data() {
    return {
      workdata,
      jobData: [
        {
          id: uuid.v1(),
          title: "",
          date: "",
          companyName: "",
          jobDescription: ""
        },
      ],
    }
  },
  methods: {
    addJob() {
      this.jobData.push({
          id: uuid.v1(),
          title: "selam",
          date: "ataadsa",
          companyName: "sadsad",
          jobDescription: "sda"
        },
      );
    },
    removeJob(id) {
      this.jobData = this.jobData.filter(jd => jd.id != id);
    }
  }
}
</script>
<style scoped lang="sass">
#resumeOuter
  display: flex
  padding: 15px
  .k-row
    width: 50%
  .keepnox-button
    float: right
    margin-bottom: 15px
    background: white
    border: 1px solid var(--main-pink-color)
    padding: 5px 22px
    margin-right: 1px
    border-radius: 10px
    font-family: var(--main-font-3)
    color: rgba(0,0,0,.85)
    font-size: 14px

</style>
