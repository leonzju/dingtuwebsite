<template>
  <div>
    <div class="header">
      <div class="header-content" :class="headerThemeClass">
        <div class="logo">
          <span>LOGO</span>
        </div>
        <ul class="header-menu" :class="headerThemeClass">
          <li class="header-menu-item">
            <a href="/">Home</a>
          </li>
          <li class="header-menu-item">
            <a href="/">Development</a>
          </li>
          <li class="header-menu-item">
            <a href="/">Production</a>
          </li>
          <li class="header-menu-item">
            <a href="/">Pricing</a>
          </li>
          <li class="header-menu-item">
            <a href="/contact">About Us</a>
          </li>
          <li class="header-menu-item">
            <a href="/contact">FAQ</a>
          </li>
          <li class="header-menu-item">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="img-text-container">
      <img class="top-big-img" src="../assets/big-img.jpg" />
      <div class="text-on-img-container">
        <div class="text-on-img">We serve high-end custom-tailor.</div>
        <div class="text-on-img">We serve high-end custom-tailor.</div>
        <div class="text-on-img">We serve high-end custom-tailor.</div>
      </div>
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
  headerThemeClass = "dark-theme";
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
      this.headerThemeClass = "dark-theme";
    } else {
      this.headerThemeClass = "light-theme";
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
}
.dark-theme {
  background-color: transparent;
  color: white;
}
.light-theme {
  background-color: white;
  color: black;
}
.header-content {
  position: static;
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
}
.header-menu {
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
}
.header-menu-item {
  margin-left: 5px;
  display: block;
  a {
    color: inherit;
    text-decoration-line: none;
  }
}
.img-text-container {
  display: flex;
}
.top-big-img {
  margin: 0;
  padding: 0;
  width: 100%;
  bottom: 0;
  display: block;
}
.text-on-img {
  color: white;
}
.text-on-img-container {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 5;
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  justify-content: flex-end;
}
</style>
