<template>
  <div>
    <div class="header">
      <div class="header-content" :style="headerContentStyle">
        <div class="logo" :class="{ light: isLightTheme }"></div>
        <ul class="header-menu">
          <li class="header-menu-item">
            <a href="/">Home</a>
          </li>
          <li class="header-menu-item">
            <a href="/contact">Development</a>
          </li>
          <li class="header-menu-item">
            <a href="/contact">Production</a>
          </li>
          <li class="header-menu-item">
            <a href="/contact">Pricing</a>
          </li>
          <li class="header-menu-item">
            <a href="/contact">About Us</a>
          </li>
          <li class="header-menu-item">
            <a href="/contact">FAQ</a>
          </li>
          <li class="header-menu-item-button">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="top-text-container">
      <div class="top-text-minor">We serve high-end custom-tailor.</div>
      <div class="top-text-main">
        We help launch your clothing line from development to production.
      </div>
      <div class="top-text-minor">
        Quality / Lower Cost / No Minimum Order Quantity
      </div>
      <a href="/contact" class="button">Contact Now</a>
    </div>
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
  position: fixed;
  width: 100%;
  z-index: 10;
}
.header-content {
  position: static;
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--background-color);
  opacity: var(--opacity);
  color: var(--color);
}
.logo {
  margin-left: 20px;
  width: 85px;
  height: 28px;
  background-image: url("../assets/logo_white.png");
}
.logo.light {
  background-image: url("../assets/logo_black.png");
}
.header-menu {
  list-style: none;
  display: flex;
  display: -webkit-flex;
  width: 40%;
  justify-content: space-between;
}
.header-menu-item {
  margin-right: 5px;
  padding: 8px;
  text-align: center;
  &:active,
  &:hover {
    text-shadow: 0 0 1px var(--color), 0 0 1px var(--color);
    border-bottom: 2px solid var(--color);
  }
  a {
    color: inherit;
    text-decoration-line: none;
  }
}
.header-menu-item-button {
  margin-right: 5px;
  padding: 10px;
  text-align: center;
  text-decoration-line: none;
  a {
    margin-right: 20px;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 2px;
    padding-bottom: 2px;
    background-color: var(--color);
    color: var(--invert-color);
    border-radius: 4px;
    text-decoration-line: none;
  }
}
.top-text-container {
  display: flex;
  background-image: url("../assets/big-img.jpg");
  height: 150vh;
  width: 100%;
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.top-text-main {
  color: white;
  font-size: 56px;
  text-align: center;
  width: 60%;
}
.top-text-minor {
  color: white;
  font-size: 32px;
  text-align: center;
  width: 60%;
  margin: 30px;
}
.button {
  color: white;
  font-size: 32px;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 10px;
  border: 1px solid #fff;
  border-radius: 2px;
  padding-left: 26px;
  padding-right: 26px;
  padding-top: 10px;
  padding-bottom: 10px;
  text-decoration-line: none;
  &:hover {
    background-color: #f5f5f5;
    color: black;
  }
}
</style>
