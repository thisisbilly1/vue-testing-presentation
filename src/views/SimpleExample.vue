<template>
  <div>
    <div>
      the number is: {{number}}
    </div>
    <button @click="incrementNumber" ref="exampleButton">add one</button>
  </div>
</template>

<script>
export default {
  name: 'SimpleExample',
  data() {
    return {
      number: 0,
    };
  },
  computed: {
    numberPlusOne() {
      return this.number + 1;
    },
  },
  methods: {
    incrementNumber() {
      this.number += 1; 
    },
  },
};
</script>
