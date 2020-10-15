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
          <li class="header-menu-item">
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
  headerThemeClass = "dark-theme";
  currentPosition = "Home";
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
  z-index: 10;
}
.dark-theme {
  background-color: transparent;
  color: white;
  a {
    &.active,
    &:hover {
      text-shadow: 0 0 1px white, 0 0 1px white;
      text-decoration-line: underline;
    }
  }
}
.light-theme {
  background-color: white;
  opacity: 0.75;
  color: black;
  a {
    &.active,
    &:hover {
      text-shadow: 0 0 1px black, 0 0 1px black;
      text-decoration-line: underline;
    }
  }
}
.header-content {
  position: static;
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
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
  padding: 10px;
  text-align: center;
  flex-shrink: 1;
  a {
    color: inherit;
    text-decoration-line: none;
  }
}
.top-text-container {
  display: flex;
  background-image: url("../assets/big-img.jpg");
  height: 100vh;
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
