<template>
  <div class="main">
    <div class="header">
      <img class="logo" />
      <div class="nav-button" />
    </div>
    <div class="content" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
  props: {}
})
export default class Home extends Vue {
  //headerThemeClass = "dark-theme";
  currentPosition = "Home";
  isLightTheme = false;
  headerContentStyle = {
    "--background-color": "transparent",
    "--opacity": 1.0,
    "--color": "white",
    "--invert-color": "black"
  };
  mounted() {
    //给window添加一个滚动滚动监听事件
    window.addEventListener("scroll", this.handleScroll);
  }
  handleScroll() {
    //获取滚动条位置
    const scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;
    if (scrollTop <= 5) {
      this.headerContentStyle["--background-color"] = "transparent";
      this.headerContentStyle["--opacity"] = 1.0;
      this.headerContentStyle["--color"] = "white";
      this.headerContentStyle["--invert-color"] = "black";
      this.isLightTheme = false;
    } else {
      this.headerContentStyle["--background-color"] = "white";
      this.headerContentStyle["--opacity"] = 0.9;
      this.headerContentStyle["--color"] = "black";
      this.headerContentStyle["--invert-color"] = "white";
      this.isLightTheme = true;
    }
  }
  unmounted() {
    //离开该页面需要移除这个监听的事件
    window.removeEventListener("scroll", this.handleScroll);
  }
}
</script>

<style lang="scss" scoped>
.header {
}
.logo {
  float: left;
  background-image: url("../assets/logo_black.png");
  height: 2rem;
}
.nav-button {
  float: right;
}
</style>
