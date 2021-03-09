import FormField from './../components/FormField'

export default {
  name: 'app-form-container',
  components: {
    FormField
  },
  data() {
    return {
      registermsg: 'v ole como mola',
      showForm: true,
      falseForm: false,
      items: [
        {
          id: 1,
          checkField: false,
          errortext: 'This field is required',
          inputidtag: 'your-name-input',
          inputclass: 'form-control',
          type: 'text',
          label: 'Your Name',
          labelclass: 'control-label',
          placeholder: 'John Doe / Jane Doe',
          required: true,
          value: ''
        },
        {
          id: 2,
          checkField: false,
          errortext: 'This field is required',
          inputidtag: 'mobile-input',
          inputclass: 'form-control',
          type: 'text',
          label: 'Mobile Phone Number',
          labelclass: 'control-label',
          placeholder: '123456789',
          required: true,
          value: ''
        },
        {
          id: 3,
          checkField: false,
          errortext: 'This field is required',
          inputidtag: 'postal-code-input',
          inputclass: 'form-control',
          type: 'text',
          label: 'Postal/Zip Code',
          labelclass: 'control-label',
          placeholder: '08080',
          required: true,
          value: ''
        },
        {
          id: 4,
          checkField: false,
          errortext: 'This field is required',
          inputidtag: 'email-input',
          inputclass: 'form-control',
          type: 'email',
          label: 'E-mail',
          labelclass: 'control-label',
          placeholder: 'mail@domain.com',
          required: true,
          value: ''
        },
        {
          id: 5,
          checkField: false,
          errortext: 'This field is required',
          inputidtag: 'password-input',
          inputclass: 'form-control',
          type: 'password',
          label: 'Password',
          labelclass: 'control-label',
          placeholder: 'Password',
          required: true,
          value: ''
        }
      ]
    }
  },
  methods: {
    checkForm(event) {
      event.preventDefault()
      this.falseForm = false
      this.items.forEach(item => {
        if (!item.checkField) {
          this.falseForm = true
          console.log('holi')
        } else {
          console.log('true')
        }
      })
      if (!this.falseForm) {
        this.toggleForm()
      }
      // this.showForm = this.falseForm
    },
    toggleForm() {
      this.showForm = !this.showForm
    }
  }
}
