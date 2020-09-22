<template>
  <div>
    <FormBuilder v-model="test"></FormBuilder>
    <button @click="click()">Test</button>
  </div>
</template>

<script>
import { FormBuilder } from "v-form-builder";

export default {
  name: 'FormBuilderTest',
  components: { FormBuilder },
  data: () => ({
    test: {},
    configuration: {}
  }),
  methods: {
    click() {
      console.log(this.configuration);
      this.axios.post('http://localhost:3000/forms', this.test).then((res)=>{
        console.log(res);
      })
    }
  }
};
</script>