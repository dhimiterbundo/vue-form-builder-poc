<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>This is a form builder Demo </h2>
  <div>
    Main package  <a target="_blank" href="https://github.com/sethsandaru/vue-form-builder"><strong>https://github.com/sethsandaru/vue-form-builder</strong></a><br>
    This demo uses <a target="_blank" href="https://github.com/typicode/json-server">JSON-Server</a> as a mock server.<br>
    <hr>
<strong>Dependencies</strong> of the Vue Form Builder, from the version 2.0.0 and above. Here is the list:<br>

Vue JS (obviously) - But it won't be built together with the final library bundle<br><br>
<strong>vuedraggable</strong> vuedraggable: From Sortable.JS which is very lightweight and much lighter than JQuery + JQuery UI<br>
<strong>deep-equal</strong> : A simple method to check the Form Configuration<br>
<strong>Datepicker</strong>  - LitePicker (Super lightweight, ~5KB): <a target="_blank" href="https://wakirin.github.io/Litepicker/">https://wakirin.github.io/Litepicker/</a><br>
<strong>DayJS</strong>  - Parse/Formatting date (2KB): <a target="_blank" href="https://day.js.org/en/">https://day.js.org/en/</a>

  </div>
  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
