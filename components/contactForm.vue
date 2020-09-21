<template>

      <CBox textAlign="left" width="50%" >
        <form>
          <CFormControl>
            <CFormLabel for="name"> Name </CFormLabel>
            <CInput type="text" id="name" v-model="form.contactName" aria-describedby="name" />
          </CFormControl>

          <CFormControl>
            <CFormLabel for="email"> Email </CFormLabel>
            <CInput type="email" id="email" v-model="form.contactEmail" aria-describedby="email-helper-text" />
            <CFormHelperText id="email-helper-text">
              We'll never share your email.
            </CFormHelperText>
          </CFormControl>

          <CFormControl>
            <CFormLabel for="message"> Message </CFormLabel>
            <CTextarea v-model="form.contactMessage" placeholder="Type your message" />
          </CFormControl>
          <CBox  mt="12" d="flex" flex-dir="column" align="center" >
            <CButton @click="submitForm('contactForm')"  right-icon="arrow-forward" width="20%"  variant-color="vue" variant="outline">
            Submit
            </CButton>
          </CBox>
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
  data() {
    return {
      form: {
        contactName: '',
        contactEmail: '',
        contactMessage: ''
      },
      results: [],
      response: '_',
      error: null,
       rules: {
        name: [
          {
            required: true,
            message: 'Please tell me your name',
            trigger: 'blur',
          },
        ],
        email: [
          {
            required: true,
            message: 'Please enter a valid email address',
            trigger: 'blur',
          },
          {
            type: 'email',
            message: 'Please enter a valid email address',
            trigger: 'blur',
          },
        ],
      },
    }
  },
  methods: {
   submitForm(formName) {
     this.messages = []
     this.sendContactToLambdaFunction()
   },

   resetForm(){
     this.results = []
     this.form.contactMessage= ''
     this.form.contactEmail = ''
     this.form.contactName = ''
   },
  clearMessage () {
    this.resetForm()
  },
   async sendContactToLambdaFunction() {
     try {
       const response = await this.$axios.$post('/.netlify/functions/contact-mail', {
         issuerName: this.form.contactName,
         issuerEmail: this.form.contactEmail,
         message: this.form.contactMessage
       })
       this.resetForm()
       console.log('response message', response)
       this.result.push({
         type: 'success', text: response
       })
     } catch (err) {
       this.results.push({
         type: 'error',
         text: err.response
       })
     }

   }
  }
}
</script>
