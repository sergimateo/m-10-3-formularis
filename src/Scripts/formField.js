/* eslint-disable no-useless-escape */
import ConfirmPwdField from './../components/ConfirmPwdField'

export default {
  name: 'app-form-field',
  components: {
    ConfirmPwdField
  },
  data() {
    return {
      cosita: 'Holi',
      checkField: true,
      confirmpwditems: {
        id: 1,
        inputidtag: 'repeat-password-input',
        inputclass: 'form-control',
        type: 'password',
        label: 'Confirm Password',
        labelclass: 'control-label',
        placeholder: 'Confirm Password',
        required: true
      }
    }
  },
  methods: {
    fieldValidate(event) {
      switch (this.dataitem.inputidtag) {
        case 'your-name-input':
          if (event.target.value === '') {
            // this.dataitem.inputName.classList.add('is-invalid')
            this.dataitem.errortext = 'This field is required'
            this.checkField = false
          } else if (!this.validateName(event.target.value)) {
            this.dataitem.errortext =
              'Your name must have between 6 and 13 characters'
            this.checkField = false
          } else {
            // inputName.classList.remove('is-invalid')
            this.dataitem.errortext = ''
            this.checkField = true
          }
          this.updateContent(event.target.value)
          break
        case 'mobile-input':
          if (event.target.value === '') {
            // this.dataitem.inputName.classList.add('is-invalid')
            this.dataitem.errortext = 'This field is required'
            this.checkField = false
          } else if (!this.validateMobile(event.target.value)) {
            this.dataitem.errortext = 'Your phone number must have 9 digits'
            this.checkField = false
          } else {
            // inputName.classList.remove('is-invalid')
            this.dataitem.errortext = ''
            this.checkField = true
          }
          this.updateContent(event.target.value)
          break
        case 'postal-code-input':
          if (event.target.value === '') {
            // this.dataitem.inputName.classList.add('is-invalid')
            this.dataitem.errortext = 'This field is required'
            this.checkField = false
          } else if (!this.validatePostalCode(event.target.value)) {
            this.dataitem.errortext = 'Your Postal Code must have 5 digits'
            this.checkField = false
          } else {
            // inputName.classList.remove('is-invalid')
            this.dataitem.errortext = ''
            this.checkField = true
          }
          this.updateContent(event.target.value)
          break
        case 'email-input':
          if (event.target.value === '') {
            // this.dataitem.inputName.classList.add('is-invalid')
            this.dataitem.errortext = 'This field is required'
            this.checkField = false
          } else if (!this.validateEmail(event.target.value)) {
            this.dataitem.errortext = 'Please enter a valid email address'
            this.checkField = false
          } else {
            // inputName.classList.remove('is-invalid')
            this.dataitem.errortext = ''
            this.checkField = true
          }
          this.updateContent(event.target.value)
          break
        case 'password-input':
          if (event.target.value === '') {
            // this.dataitem.inputName.classList.add('is-invalid')
            this.dataitem.errortext = 'This field is required'
            this.checkField = false
          } else if (!this.validatePassword(event.target.value)) {
            this.dataitem.errortext =
              'Your password needs to be between 6 and 13 characters long, only letters and at least one uppercase and one lowercase'
            this.checkField = false
          } else {
            // inputName.classList.remove('is-invalid')
            this.dataitem.errortext = ''
            this.checkField = true
          }

          console.log(this.dataitem.value)
          break
        default:
          break
      }
      this.dataitem.value = event.target.value
      this.$emit('contentChanged', this.dataitem.value)
      // checkField = false
      // if (checkField) {
      //   return true
      // } else {
      //   return false
      // }

      // this.btnCount++
    },
    updateContent(val) {
      this.dataitem.value = val
      this.$emit('contentChanged', this.dataitem.value)
    },
    //RegEx test functions
    validateName(name) {
      let regex = /^(?=.*?[a-zA-Z\ñ\ç]).{6,13}$/
      return regex.test(name) ? true : false
    },
    validateMobile(number) {
      let regex = /^(?=.*?[0-9]).{9}$/
      return regex.test(number) ? true : false
    },
    validatePostalCode(number) {
      let regex = /^(?=.*?[0-9]).{9}$/
      return regex.test(number) ? true : false
    },
    validateEmail(email) {
      let regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
      return regex.test(email) ? true : false
    },
    validatePassword(password) {
      let regex = /^(?=.*?[a-zA-Z\ñ\ç]).{6,13}$/
      return regex.test(password) ? true : false
    }
  },
  props: ['dataitem']
}

//   // Check confirm password, if they don't match, clear both password fields and try again
//   // A1sdfghj
//   if (inputRepeatPassword.value == '') {
//     inputPassword.classList.add('is-invalid')
//     document.getElementById('repeat-password-error').textContent =
//       'This field is required'
//     checkForm = false
//   } else if (inputRepeatPassword.value != inputPassword.value) {
//     inputRepeatPassword.classList.add('is-invalid')
//     inputPassword.value = ''
//     inputRepeatPassword.value = ''
//     document.getElementById('repeat-password-error').textContent =
//       'Your password does not match. Try again.'
//     checkForm = false
//   } else {
//     inputRepeatPassword.classList.remove('is-invalid')
//     document.getElementById('repeat-password-error').textContent = ''
//   }

//   console.log(checkForm)

//   if (checkForm) {
//     return true
//   } else {
//     return false
//   }
// }
