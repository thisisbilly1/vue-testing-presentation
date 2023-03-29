<template>
  <div>
    <div>
      the number is: {{stateCounter}}
    </div>
    <button @click="incrementNumber" ref="button">add one</button>
    <button @click="incrementNumber2" ref="button">add two</button>
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
  computed: {
    stateCounter() {
      return this.$store.state.counterNumber;
    },
  },
  methods: {
    incrementNumber() {
      this.$store.dispatch('changeNumber', 1);
    },
    incrementNumber2() {
      this.$store.commit('CHANGE_NUMBER', 2);
    },
  },
};
</script>
