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

        <CBox textAlign="left" width="50%">
          <form>
            <CFormControl>
              <CFormLabel for="name"> Name </CFormLabel>
              <CInput type="text" id="name" aria-describedby="name" />
            </CFormControl>

            <CFormControl>
              <CFormLabel for="email"> Email </CFormLabel>
              <CInput type="email" id="email" aria-describedby="email-helper-text" />
              <CFormHelperText id="email-helper-text">
                We'll never share your email.
              </CFormHelperText>
            </CFormControl>

            <CFormControl>
              <CFormLabel for="message"> Message </CFormLabel>
              <CTextarea placeholder="Type your message" />
            </CFormControl>
            <CBox  mt="12" d="flex" flex-dir="column" align="center" >
              <CButton  right-icon="arrow-forward" width="20%"  variant-color="vue" variant="outline">
              Submit
              </CButton>
            </CBox>
          </form>
        </CBox>

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
