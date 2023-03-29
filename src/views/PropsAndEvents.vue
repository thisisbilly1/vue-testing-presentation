<template>
  <counter
    @three="logThree"
    :startingNumber="0"
  >
  </counter>
</template>

<script>
import counter from '@/components/counter.vue';

export default {
  name: 'PropsAndEvents',
  components: { counter },
  methods: {
    logThree(number) {
      console.log('three has been reached!', number);
    },
  },
};
</script>
