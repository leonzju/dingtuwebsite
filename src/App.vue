<template>
  <router-view />
</template>

<style lang="scss">
:root {
  font-size: 0.75em;
  font-family: Helvetica, Arial, sans-serif;
  box-sizing: border-box;
}
@media (min-width: 800px) {
  :root {
    font-size: 0.875em;
  }
}
@media (min-width: 1200px) {
  :root {
    font-size: 1em;
  }
}
*,
::before,
::after {
  box-sizing: inherit;
}
html,
body {
  margin: 0;
  padding: 0;
  // scrollbar-width: none; /* Firefox */
  // -ms-overflow-style: none; /* IE 10+ */
  // ::-webkit-scrollbar {
  //   display: none; /* Chrome Safari */
  // }
}
</style>
