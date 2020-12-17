<template>
 <div>
    <label :for="id" v-text="name" :class="$style.label"/>
    <input :id="id" type="text" v-model="inputValue" :class="$style.input" @input="change">
 </div>

</template>

<script>
export default {
  name: 'real-digital-textfield',
  props: {
    name: String,
    validation: String
  },
  data: function () {
    return {
      inputValue: '',
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
