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
            <CButton @click="submitForm()"  right-icon="arrow-forward" width="20%"  variant-color="vue" variant="outline">
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

    }
  },
  methods: {
   submitForm() {
     this.sendContactToLambdaFunction()
   },

   resetForm(){
     this.form.contactEmail = ''
     this.form.contactName = ''
     this.form.contactMessage= ''
   },
   async sendContactToLambdaFunction() {
     try {
       const response = await this.$axios.$post('/.netlify/functions/contact-mail', {
         issuerName: this.form.contactName,
         issuerEmail: this.form.contactEmail,
         message: this.form.contactMessage
       })
        this.$toast({
        title: 'Mail sent',
        description: response,
        status: 'success',
        duration: 10000,
        isClosable: true
      })
       this.resetForm()
       console.log('response message', response)

     } catch (err) {
        this.$toast({
        title: 'An error occured',
        description: err,
        status: 'error',
        duration: 10000,
        isClosable: true
      })
     }

   }
  }
}
</script>
