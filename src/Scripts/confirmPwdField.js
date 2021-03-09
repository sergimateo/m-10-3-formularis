export default {
  name: 'app-confirm-pwd-field',
  components: {},
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
