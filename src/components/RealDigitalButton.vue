<template>
    <button :type="type" @click="click" :class="$style.button">
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

<style module>
  .button {
    line-height: 1.15;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4.8rem;
    width: 100%;
    border-width: 0;
    border-radius: .2rem;
    padding-left: 2.4rem;
    padding-right: 2.4rem;
    font-size: 1.4rem;
    font-weight: 700;
    color: #fff;
    text-decoration: none;
    cursor: pointer;
    transition-property: background-color,border-color;
    transition-duration: .15s;
    transition-timing-function: ease-in-out;
    background-color: #003a70;
  }
</style>
