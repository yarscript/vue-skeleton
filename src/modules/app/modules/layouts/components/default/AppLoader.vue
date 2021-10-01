<template>
<div class="AppLoader">
  <div class="loader"></div>
</div>
</template>

<script>
export default {
  name: "AppLoader"
}
</script>

<style lang="scss">
.AppLoader {
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
}
.loader {
  width: 75px;
  height: 75px;
  margin: 0;
  background: transparent;
  border-top: 4px solid #E21E24;
  border-right: 4px solid transparent;
  border-radius: 50%;
  -webkit-animation: 1s spin linear infinite;
  animation: 1s spin linear infinite;
}
</style>