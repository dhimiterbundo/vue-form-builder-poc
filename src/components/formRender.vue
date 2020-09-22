<template>
  <div class="RormRender" v-if="this.configuration !== null">
    <FormRenderer :form-configuration="configuration" v-model="formInputData" />
    <button @click="click()">submit</button>
  </div>
</template>

<script>
import { FormRenderer } from "v-form-builder";

export default {
  name: 'FormRender',
  components: {
    FormRenderer
  },
  data: () => ({
    formInputData: null,
    configuration: null
  }),
  created: function() {
    this.getData();
  },

  methods: {
    getData() {
      this.axios.get("http://localhost:3000/forms/4").then(res => {
        this.configuration = res.data;
      });
    },
    click() {
      console.log(this.formInputData);
    }
  }
};
</script>
