<template>
  <div>
    {{counter}}
    <button @click="incrementCounter">add</button>
  </div>
</template>

<script>
import mixin from './mixin';

export default {
  name: 'MixinExample',
  mixins: [mixin]
};
</script>
