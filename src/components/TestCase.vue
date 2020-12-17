<template>
  <real-digital-form action="https://httpbin.org/post" method="POST" ref="rdForm">
    <real-digital-textfield name="name" validation="[a-z]+"></real-digital-textfield>
    <p v-if="hasError('name')" :class="$style.error">Please check this field</p>

    <real-digital-textfield name="phone" validation="[0-9]+"></real-digital-textfield>
    <p v-if="hasError('phone')" :class="$style.error">Please check this field</p>

    <real-digital-textfield name="subject"></real-digital-textfield>

    <real-digital-button @click="$refs.rdForm.submit()">Send</real-digital-button>
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
      errors: []
    }
  },
  methods: {
    hasError (name) {
      return this.$refs.rdForm && this.$refs.rdForm.errors.includes(name)
      // console.log(this.$refs.rdForm)
    },
    check (fields) {
      this.errors = fields.filter(f => !validator(f.value, f.validation)).map(f => f.name)
    }
  },
  mounted () {
    this.$refs.rdForm.$on('onSubmit', (data) => {
      // manipulate data
      data.name = data.name + '_manipulated'
    })

    this.$refs.rdForm.$on('onResponse', (response) => {
      // handle server response
      console.log(response)
    })
  }

}
</script>

<style module>
.error {
  color: red;
  margin: 0;
}
</style>
