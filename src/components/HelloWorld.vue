<template>
  <div class="hello">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <p>
      Solution Platform for Empty House Problem In Hokkaido. <br>
      Sponcered by Hokkaido University.
      <!-- <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>. -->
    </p>
    <!-- <h3>Installed CLI Plugins</h3> -->
    <h3>HOST REGISTER FORM</h3>
    <ul>
      <li>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdd1L-RufdegiAyxMt6QVht2n1VeNCpIzild465XCnKdolCuQ/viewform" target="_blank" rel="noopener">
          HOST REGISTER FORM
        </a>
      </li>
    </ul>
    <h3>AIDS SUPPORTER REGISTER FORM</h3>
    <ul>
      <li>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfsDdJqyvHDpN5Jnw0GBV44S5UDqOHyJbtoNb23nqNyaaR31w/viewform" target="_blank" rel="noopener">
          AIDS SUPPORTER REGISTER FORM
        </a>
      </li>
    </ul>
    <h3>HOKUDAI HACKASON</h3>
    <ul>
      <li>
        <a href="https://router.vuejs.org" target="_blank" rel="noopener">
          HOKUDAI HACKASON
        </a>
      </li>
    </ul>
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
<style scoped>
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
