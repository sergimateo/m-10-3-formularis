export default {
  name: 'app-confirm-pwd-field',
  components: {},
  data() {
    return {
      cosita: 'Holi'
    }
  },
  methods: {
    confirmPwd(event) {
      if (event.target.value === '') {
        this.dataconfirmpwditem.errortext = 'This field is required'
        this.dataconfirmpwditem.checkField = false
      } else if (this.dataconfirmpwditem.pwdtoconfirm === event.target.value) {
        this.$parent.dataitem.checkField = true
        this.dataconfirmpwditem.checkField = true
        this.dataconfirmpwditem.errortext = ''
      } else if (this.dataconfirmpwditem.pwdtoconfirm !== event.target.value) {
        this.dataconfirmpwditem.errortext = 'Password does not match'
        this.dataconfirmpwditem.checkField = false
      }
      this.dataconfirmpwditem.value = event.target.value
      this.$emit('pwdContentChanged', this.dataconfirmpwditem.value)
    }
  },
  props: ['dataconfirmpwditem']
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
