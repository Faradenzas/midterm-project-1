<template>
  <Navigation></Navigation>
  <Create></Create>
</template>

<script>
import Navigation from "@/components/Navigation";
import Create from "@/components/Create";

export default {
  name: 'App',
  components: {
    Navigation,
    Create,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;700&display=swap');

*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-weight: 400;
  font-family: Montserrat, serif;
  text-align: center;
}


.container {
  width: 90%;
  margin: 0 auto;
}

.flex {
  display: flex;
  flex-direction: column;
  align-items: center;
}

a {
  text-decoration: none;
  color: black;
  font-weight: 400;
}

body {
  font-family: Montserrat, serif;
}

body::-webkit-scrollbar {
  display: none;
}

body {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

@media (min-width: 1000px) {
  .flex {
    flex-direction: row;
  }
}
</style>
