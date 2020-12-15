<template>
    <form :action="action" :method="method" @submit="submit">
        <slot></slot>
    </form>
</template>

<script>
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
  methods: {
    submit (e) {
      e.preventDefault()
      this.$emit('submit')
    }
  }
}
</script>
