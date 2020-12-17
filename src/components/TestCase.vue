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
      return this.errors.includes(name)
    }
  },
  mounted () {
    this.$refs.rdForm.$on('onError', (errors) => { this.errors = errors })

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
  margin: 0 0 1em;
}
</style>
