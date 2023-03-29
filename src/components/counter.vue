<template>
  <div>
    <div>
      the number is: {{startingNumber + number}}
    </div>
    <button @click="incrementNumber" ref="button">add one</button>
  </div>
</template>

<script>
export default {
  name: 'counter-component',
  data() {
    return {
      number: 0,
    };
  },
  props: {
    startingNumber: {
      type: Number,
      default: 0,
    },
    obj: {
      type: Object,
      default: () => ({
        name: 'test',
        value: 'test'
      }),
      validator: (val) => Object.keys(val).includes('name') && Object.keys(val).includes('value')
    }
  },
  methods: {
    incrementNumber() {
      this.number += 1;
      if ((this.number + this.startingNumber) % 3 === 0) this.$emit('three', this.number);
    },
  },
};
</script>
