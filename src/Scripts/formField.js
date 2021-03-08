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
            // this.dataitem.value = event.target.value
            // this.$emit('contentChanged', this.dataitem.value)
            this.checkField = false
          } else if (!this.validateName(event.target.value)) {
            this.dataitem.errortext =
              'Your name must have between 6 and 13 characters'
            this.checkField = false
          } else {
            // inputName.classList.remove('is-invalid')
            this.dataitem.errortext = 'Palante'
            this.checkField = true
            // this.dataitem.value = event.target.value
            // this.$emit('contentChanged', this.dataitem.value)
          }
          this.dataitem.value = event.target.value
          this.$emit('contentChanged', this.dataitem.value)
          console.log(this.dataitem.value)
          break
        case 'mobile-input':
          if (this.dataitem.value === '') {
            // this.dataitem.inputName.classList.add('is-invalid')
            this.dataitem.errortext = 'This field is required'
            // this.dataitem.value = event.target.value
            // this.$emit('contentChanged', this.dataitem.value)
            this.checkField = false
            console.log('Holi')
            // }
            // else if (!validateName(inputName.value)) {
            //   inputName.classList.add('is-invalid')
            //   document.getElementById('your-name-error').textContent =
            //     'Your name must have at least 3 characters'
            //   checkField = false
            // This field is required
          } else {
            // inputName.classList.remove('is-invalid')
            this.dataitem.errortext = 'Vamos'
          }
          this.dataitem.value = event.target.value
          this.$emit('contentChanged', this.dataitem.value)
          console.log(this.dataitem.value)
          break
        default:
          break
      }
      // checkField = false
      // if (checkField) {
      //   return true
      // } else {
      //   return false
      // }

      // this.btnCount++
    },
    //RegEx test functions
    validateName(name) {
      // eslint-disable-next-line no-useless-escape
      let regex = /^(?=.*?[a-zA-Z\ñ\ ]).{6,13}$/
      return regex.test(name) ? true : false
    },
    validateMobile(name) {
      // eslint-disable-next-line no-useless-escape
      let regex = /^(?=.*?[::digit::]).{9}$/
      return regex.test(name) ? true : false
    }
  },
  props: ['dataitem']
}

// formValidate()

// function formValidate() {
//   // var checkForm = true

//   // Check switch case

//   switch (this.dataitem.inputidtag) {
//     case 'your-name-input':
//       console.log('name')
//       break
//     case 'mobile-input':
//       console.log('mobile')
//       break
//     case 'postal-code-input':
//       console.log('zip code')
//       break
//     case 'email-input':
//       console.log('email')
//       break
//     case 'password-input':
//       console.log('pwd')
//       break
//     default:
//       break
//   }
// }
// Check name

//   if (inputName.value === '') {
//     inputName.classList.add('is-invalid')
//     document.getElementById('your-name-error').textContent =
//       'This field is required'
//     checkForm = false
//   } else if (!validateName(inputName.value)) {
//     inputName.classList.add('is-invalid')
//     document.getElementById('your-name-error').textContent =
//       'Your name must have at least 3 characters'
//     checkForm = false
//   } else {
//     inputName.classList.remove('is-invalid')
//     document.getElementById('your-name-error').textContent = ''
//   }

//   // Check email
//   if (inputEmail.value == '') {
//     inputEmail.classList.add('is-invalid')
//     document.getElementById('email-error').textContent =
//       'This field is required'
//     checkForm = false
//   } else if (!validateEmail(inputEmail.value)) {
//     inputEmail.classList.add('is-invalid')
//     document.getElementById('email-error').textContent =
//       'Please enter a valid email address'
//     checkForm = false
//   } else {
//     inputEmail.classList.remove('is-invalid')
//     document.getElementById('email-error').textContent = ''
//   }

//   // Check password

//   if (inputPassword.value == '') {
//     inputPassword.classList.add('is-invalid')
//     document.getElementById('password-error').textContent =
//       'This field is required'
//     checkForm = false
//   } else if (!validatePassword(inputPassword.value)) {
//     inputPassword.classList.add('is-invalid')
//     document.getElementById('password-error').textContent =
//       'Your password needs at least 8 characters long, and contain one uppercase letter and a number'
//     inputPassword.value = ''
//     checkForm = false
//   } else {
//     inputPassword.classList.remove('is-invalid')
//     document.getElementById('password-error').textContent = ''
//   }

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

//   // City name must not be empty

//   if (inputCity.value == '') {
//     inputCity.classList.add('is-invalid')
//     document.getElementById('city-error').textContent = 'This field is required'
//     checkForm = false
//   } else {
//     inputCity.classList.remove('is-invalid')
//     document.getElementById('city-error').textContent = ''
//   }

//   // Province select option must not be empty

//   if (inputProvince.value == 0) {
//     inputProvince.classList.add('is-invalid')
//     document.getElementById('province-error').textContent =
//       'This field is required'
//     checkForm = false
//   } else {
//     inputProvince.classList.remove('is-invalid')
//     document.getElementById('province-error').textContent = ''
//   }

//   // Check privacy policy

//   if (!gridCheck.checked) {
//     gridCheck.classList.add('is-invalid')
//     document.getElementById('checkbox-error').textContent =
//       'You must agree to the Privacy Policy'
//     checkForm = false
//   } else {
//     gridCheck.classList.remove('is-invalid')
//     document.getElementById('checkbox-error').textContent = ''
//   }

//   console.log(checkForm)

//   if (checkForm) {
//     return true
//   } else {
//     return false
//   }
// }

//RegEx test functions

// function validateName(name) {
//   // eslint-disable-next-line no-useless-escape
//   let regex = /^(?=.*?[a-zA-Z\ñ\ ]).{3,}$/
//   return regex.test(name) ? true : false
// }

// function validateEmail(email) {
//   let regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
//   return regex.test(email) ? true : false
// }

// function validatePassword(password) {
//   let regex = /^(?=.*?[A-Z])(?=.*?[0-9]).{8,}$/
//   return regex.test(password) ? true : false
// }
