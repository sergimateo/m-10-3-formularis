import ConfirmPwdField from './../components/ConfirmPwdField'

export default {
  name: 'app-form-field',
  components: {
    ConfirmPwdField
  },
  data() {
    return {
      cosita: 'Holi',
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
  props: [
    // 'datatype',
    // 'dataplaceholder',
    // 'dataidtag',
    // 'datalabel',
    // 'dataclass',
    // 'datalabelclass',
    'dataitem'
  ]
}
