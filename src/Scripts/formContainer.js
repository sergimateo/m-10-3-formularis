import FormField from './../components/FormField'

export default {
  name: 'app-form-container',
  components: {
    'app-form-field': FormField
  },
  data() {
    return {
      items: [
        {
          id: 1,
          type: 'text',
          state: '',
          country: 'ES',
          coord: {
            lon: 2.69748,
            lat: 42.20187
          }
        },
        {
          id: 2,
          type: 'checkbox',
          state: '',
          country: 'BR',
          coord: {
            lon: -40.519039,
            lat: -2.79352
          }
        },
        {
          id: 3,
          type: 'button',
          state: '',
          country: 'NO',
          coord: {
            lon: 15.64007,
            lat: 78.218597
          }
        },
        {
          id: 4,
          type: 'text',
          state: '',
          country: 'ES',
          coord: {
            lon: 2.34958,
            lat: 41.553928
          }
        }
      ]
    }
  }
}
