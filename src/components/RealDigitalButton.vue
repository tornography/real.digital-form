<template>
    <button :type="type" @click="click">
        <slot></slot>
    </button>
</template>

<script>
export default {
  name: 'real-digital-button',
  props: {
    type: {
      type: String,
      default: 'button'
    }
  },
  methods: {
    click () {
      this.$emit('click')
    }
  }
}
</script>
