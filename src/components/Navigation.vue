<template>
  <div class="container">
    <nav class="flex">
      <h1 class="logo"><a href="#"><span>QUIZZ</span><br>app</a></h1>
      <ol class="flex">
        <li><a href="#">Create</a></li>
        <li><a href="#">Discover</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contacts</a></li>
      </ol>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navigation"
}
</script>

<style scoped>

nav {
  padding: 1em 0;
  justify-content: space-between;
  text-align: center;
}

ol {
  gap: 2em;
}

li {
  align-self: center;
  list-style: none;
}

a {
  text-transform: uppercase;

}

span {
  font-size: 2em;
}

@media (min-width: 1000px) {
  a {
    font-size: 1.5em;
  }
}
</style>