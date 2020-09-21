<template>
  <div class="container">
    <CBox
      v-bind="mainStyles[colorMode]"
      d="flex"
      w="100vw"
      h="100vh"
      flex-dir="column"
      justify-content="center"
    >
      <CHeading textAlign="center" mb="4"> Serverless Contact form </CHeading>
       <CFlex justify="center" width="full" direction="column" align="center" >
         <CBox mb="3">
            <CIconButton
              mr="3"
              :icon="colorMode === 'light' ? 'moon' : 'sun'"
              @click="toggleColorMode"
              :aria-label="`Switch to ${colorMode === 'light' ? 'dark' : 'light'} mode`"
            />
          </CBox>

         <ContactForm />

       </CFlex>
    </CBox>
  </div>
</template>

<script lang="js">
import {
  CBox,
  CTextarea,
  CButton,
  CFormControl,
  CFormLabel,
  CIconButton,
  CInput,
  CFormHelperText,
  CFlex,
  CHeading,
  CLink
} from '@chakra-ui/vue'
import ContactForm from '~/components/contactForm'
import TestContact from '~/components/testContact'

export default {
  name: 'App',
  inject: ['$chakraColorMode', '$toggleColorMode'],
  components: {
    CBox,
    CTextarea,
    CButton,
    CFormControl,
    CIconButton,
    CFormLabel,
    CInput,
    CFormHelperText,
    CFlex,
    CHeading,
    CLink,
    ContactForm,
    TestContact
  },
  data () {
    return {
      showModal: false,
      mainStyles: {
        dark: {
          bg: 'gray.700',
          color: 'whiteAlpha.900'
        },
        light: {
          bg: 'white',
          color: 'gray.900'
        }
      }
    }
  },
  computed: {
    colorMode () {
      return this.$chakraColorMode()
    },
    theme () {
      return this.$chakraTheme()
    },
    toggleColorMode () {
      return this.$toggleColorMode
    }
  },
  methods: {
    showToast () {
      this.$toast({
        title: 'Account created.',
        description: "We've created your account for you.",
        status: 'success',
        duration: 10000,
        isClosable: true
      })
    }
  }
}
</script>
