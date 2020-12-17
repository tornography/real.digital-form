<template>
    <form :action="action" :method="method" @submit.prevent="submit">
        <slot></slot>
    </form>
</template>

<script>
import validator from '../validator.js'
import api from '../api.js'

export default {
  name: 'real-digital-form',
  components: {},
  props: {
    action: String,
    method: {
      type: String,
      validator: (value) => ['GET', 'POST', 'PUT'].includes(value),
      default: 'POST'
    }
  },
  data: function () {
    return {
      formData: {},
      errors: []
    }
  },
  computed: {
    textfields () { return this.$children.filter(c => c.$options._componentTag === 'real-digital-textfield') }
  },
  methods: {
    hasError (name) {
      return this.errors.includes(name)
    },
    check () {
      this.errors = this.textfields.filter(f => !validator(f.inputValue, f.validation)).map(f => f.name)
      this.$emit('onError', this.errors)
    },
    submit () {
      this.check()
      if (this.errors.length) {
        return
      }

      this.textfields.forEach(t => { this.formData[t.name] = t.inputValue })
      this.$emit('onSubmit', this.formData)

      api(this.method, this.action, this.formData).then((response) => {
        this.$emit('onResponse', response)
      })
    }
  }
}
</script>
