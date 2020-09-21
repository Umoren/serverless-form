<template>
  <CBox>
    <form
      ref="form"
      :v-model="form"
      @submit.prevent="helloName(form.name)"
    >
      <h3> Hello, {name}</h3>
      <CInput type="text" id="name" v-model="form.name" aria-describedby="name" />
      <CBox  mt="12" d="flex" flex-dir="column" align="center" >
        <CButton
          right-icon="arrow-forward"
          width="20%"
          variant-color="vue"
          variant="outline"
          @click="helloNamePost(form.name)">
        Submit
        </CButton>

        <CButton
          right-icon="arrow-forward"
          width="20%"
          variant-color="vue"
          variant="outline"
          @click="helloNamePostError(form.name)">
          Error
        </CButton>
      </CBox>

        <p>Response: {{ response }}</p>
        <p v-if="error" style="color: red;">
          <strong>Error {{ error.status }}</strong>
          <br />
          {{ error.data }}
        </p>
    </form>
  </CBox>
</template>

<script>
import {
  CBox,
  CTextarea,
  CButton,
  CFormControl,
  CFormLabel,
  CIconButton,
  CInput,
  CFormHelperText,
  CFlex } from '@chakra-ui/vue'
export default {
    components: {
    CBox,
    CTextarea,
    CButton,
    CFormControl,
    CFormLabel,
    CIconButton,
    CInput,
    CFormHelperText,
    CFlex
  },
  data(){
    return {
      form: {
        name: ''
      },
      response: '_',
      error: null
    }
  },
  methods: {
    async helloNamePost(name) {
      try {
        const res = await this.$axios.$post(
           `/.netlify/functions/contact`, { name }
        )
        this.response = res
        this.error = null
      } catch (e) {
        this.error = e.response
        this.response = '_'
      }
    },
    async helloNamePostError(name) {
      try {
        const res = await this.$axios.$get(
          `/.netlify/functions/contact?name=${name}`
        )
        this.response = res
        this.error = null
      } catch (e) {
        this.error = e.response
        this.response = '_'
      }
    }
  }
}
</script>
