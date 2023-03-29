<template>
  <div v-if="apiResponse">
    the api response is: {{apiResponse}}
  </div>
  <div v-else>loading...</div>
</template>

<script>
import { callApi } from './apiHelper';

export default {
  name: 'APIexample',
  data() {
    return {
      apiResponse: null,
      error: false,
      testComp: 0,
    };
  },
  props: {
    url: {
      type: String,
      default: 'http://localhost:5000/'
    }
  },
  computed: {
    test() {
      return this.testComp + 1;
    }
  },
  methods: {
    async getData() {
      try {
      this.apiResponse = await callApi(this.url);
      } catch (e) {
        this.error = e
      }
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
