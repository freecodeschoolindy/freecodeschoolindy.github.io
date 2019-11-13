<template>
  <div class="loader"></div>
</template>

<script>
module.exports = {
  name: 'loading-spinner'
};
</script>

<style scoped>
.loader,
.loader:before,
.loader:after {
  width: 2.5em;
  height: 2.5em;
  border-radius: 50%;
  animation-fill-mode: both;
  animation: load7 1.8s infinite ease-in-out;
}
.loader {
  position: relative;
  margin: 80px auto;
  color: currentColor;
  font-size: 10px;
  text-indent: -9999em;
  animation-delay: -0.16s;
  transform: translateZ(0);
}
.loader:before,
.loader:after {
  content: '';
  position: absolute;
  top: 0px;
}
.loader:before {
  left: -3.5em;
  animation-delay: -0.32s;
}
.loader:after {
  left: 3.5em;
}
@keyframes load7 {
  0%,
  80%,
  100% {
    box-shadow: 0em 2.5em 0em -1.3em;
  }
  40% {
    box-shadow: 0em 2.5em 0em 0em;
  }
}
</style>
