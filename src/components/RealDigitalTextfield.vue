<template>
 <div :class="$style.fieldSet">
    <label :for="id" v-text="name" :class="$style.label"/>
    <input :id="id" type="text" :value="value" :class="[$style.input, {[$style.errorField]: invalid}]" @input="change">
    <div v-if="invalid" :class="$style.errorText" v-text="errorMessage" />
 </div>

</template>

<script>
export default {
  name: 'real-digital-textfield',
  props: {
    name: String,
    invalid: {
      type: Boolean,
      default: false
    },
    value: {
      typ: String,
      default: ''
    }
  },
  data: function () {
    return {
      inputValue: this.value,
      errorMessage: 'Please check this field',
      id: null
    }
  },
  methods: {
    change (e) {
      e.preventDefault()
      this.$emit('input', e.target.value)
      return false
    }
  },
  mounted () {
    this.id = this._uid
  }
}
</script>

<style module>
.fieldSet {
  margin-bottom: 1em;
}
.label {
  display: block;
}
.input {
  border: 1px solid silver;
}
.errorField {
  border-color: red;
}
.errorText {
  color: red;
}
</style>
