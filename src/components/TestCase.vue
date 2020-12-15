<template>
  <real-digital-form :action="url" :method="method" @submit="check">
    <real-digital-textfield v-for="(input, key) in inputs" :key="`input-${key}`"
        :name="input.name"
        :invalid="input.invalid"
        v-model="input.value"
    ></real-digital-textfield>

    <real-digital-button>Send</real-digital-button>
  </real-digital-form>
</template>

<script>
import RealDigitalForm from './RealDigitalForm'
import RealDigitalTextfield from './RealDigitalTextfield'
import RealDigitalButton from './RealDigitalButton'
import validator from '../validator.js'

export default {
  name: 'TestCase',
  components: { RealDigitalForm, RealDigitalTextfield, RealDigitalButton },
  data: function () {
    return {
      url: '/script.php',
      method: 'POST',
      inputs: [
        { name: 'name', value: 'myname', validation: '[a-z]+' },
        { name: 'phone', value: '12345', validation: '[0-9]+' },
        { name: 'subject', value: '' }
      ]
    }
  },
  methods: {
    check () {
      console.log('check')
      this.inputs.forEach(i => {
        !validator(i.value, i.validation) ? this.$set(i, 'invalid', true) : this.$delete(i, 'invalid')
      })
    },
    send () {},
    inputChange (newValue) {

    }
  }
}
</script>
