import FormField from './../components/FormField'

export default {
  name: 'app-form-container',
  components: {
    FormField
  },
  data() {
    return {
      items: [
        {
          id: 1,
          inputidtag: 'your-name-input',
          inputclass: 'form-control',
          type: 'text',
          label: 'Your Name',
          labelclass: 'control-label',
          placeholder: 'John Doe / Jane Doe',
          required: true
        },
        {
          id: 2,
          inputidtag: 'mobile-input',
          inputclass: 'form-control',
          type: 'number',
          label: 'Mobile Phone Number',
          labelclass: 'control-label',
          placeholder: '123456789',
          required: true
        },
        {
          id: 3,
          inputidtag: 'postal-code-input',
          inputclass: 'form-control',
          type: 'number',
          label: 'Postal/Zip Code',
          labelclass: 'control-label',
          placeholder: '12345',
          required: true
        },
        {
          id: 4,
          inputidtag: 'email-input',
          inputclass: 'form-control',
          type: 'email',
          label: 'E-mail',
          labelclass: 'control-label',
          placeholder: 'mail@domain.com',
          required: true
        },
        {
          id: 5,
          inputidtag: 'password-input',
          inputclass: 'form-control',
          type: 'password',
          label: 'Password',
          labelclass: 'control-label',
          placeholder: 'Password',
          required: true
        }
        // {
        //   id: 6,
        //   inputidtag: 'repeat-password-input',
        //   inputclass: 'form-control',
        //   type: 'password',
        //   label: 'Confirm Password',
        //   labelclass: 'control-label',
        //   placeholder: 'Confirm Password',
        //   required: true
        // },
        // {
        //   id: 7,
        //   inputidtag: 'province-input',
        //   inputclass: 'form-control',
        //   type: 'text',
        //   label: 'Province',
        //   labelclass: 'control-label',
        //   placeholder: 'Type Province',
        //   required: true
        // },
        // {
        //   id: 8,
        //   inputidtag: 'email-input',
        //   inputclass: 'form-control',
        //   type: 'search',
        //   label: 'E-mail',
        //   labelclass: 'control-label',
        //   placeholder: 'mail@domain.com'
        // },
        // {
        //   id: 9,
        //   inputidtag: 'address-text-input',
        //   inputclass: 'form-control',
        //   type: 'text',
        //   label: 'Address',
        //   labelclass: 'control-label',
        //   placeholder: 'Type Address'
        // },
        // {
        //   id: 10,
        //   inputidtag: 'address-text-input',
        //   inputclass: 'form-control',
        //   type: 'text',
        //   label: 'Address',
        //   labelclass: 'control-label',
        //   placeholder: 'Type Address'
        // }
      ]
    }
  }
}
