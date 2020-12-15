<template>
  <real-digital-form action="https://httpbin.org/post" method="POST" @submit="check" ref="rdForm">
    <real-digital-textfield name="name" validation="[a-z]+"></real-digital-textfield>
    <real-digital-textfield name="phone" validation="[0-9]+"></real-digital-textfield>
    <real-digital-textfield name="subject"></real-digital-textfield>

    <real-digital-button @click="check">Send</real-digital-button>
  </real-digital-form>
</template>

<script>
import RealDigitalForm from './RealDigitalForm'
import RealDigitalTextfield from './RealDigitalTextfield'
import RealDigitalButton from './RealDigitalButton'
import validator from '../validator.js'
import api from '../api.js'

export default {
  name: 'TestCase',
  components: { RealDigitalForm, RealDigitalTextfield, RealDigitalButton },
  data: function () {
    return {}
  },
  methods: {
    check (e) {
      const textfields = this.$refs.rdForm.$children.filter(c => c.$options._componentTag === 'real-digital-textfield')
      console.log(textfields)
    },
    submit () {
      const data = {}
      this.inputs.forEach(i => {
        data[i.name] = i.value
      })

      api(this.method, this.url, data)
    }
  }
}
</script>
