<template>
  <div class="main">
    <div class="modalMask" :class="{modalMaskHidden: isModalMaskHidden}"/>
    <div class="header" :class="{ headerDark: isHeaderDark }">
      <img class="logo" src="../assets/logo_black.png" />
      <div class="title">
        湖南鼎图智能科技有限公司
      </div>
      <ul class="navigation" :class="{ navigationHidden: isNavigationHidden }">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Solution</a>
        </li>
        <li>
          <a href="/">Product</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
      <div class="menuButton" @click="onMenuButtonClicked">
        <img src="../assets/skype.png" />
      </div>
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
  currentPosition = "Home";
  isHeaderDark = false;
  isNavigationHidden = true;
  isModalMaskHidden = true;
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
      this.isHeaderDark = false;
    } else {
      this.isHeaderDark = true;
    }
  }
  unmounted() {
    //离开该页面需要移除这个监听的事件
    window.removeEventListener("scroll", this.handleScroll);
  }
  onMenuButtonClicked() {
    this.isNavigationHidden = !this.isNavigationHidden;
    this.isModalMaskHidden = !this.isModalMaskHidden;
  }
}
</script>

<style lang="scss" scoped>
.modalMask{
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 100;
  width:100vw;
  height:100vh;
  background-color: rgba(0, 0, 0, 0.5);
  margin: 0px;
}
.modalMaskHidden{
  display: none;
}
.header {
  background-color: transparent;
  color: black;
  display: flex;
  align-items: center;
}
.headerDark {
  background-color: black;
  color: white;
}
.logo {
}
.title {
  text-align: center;
  font-size: 1.5rem;
}
ul {
  list-style-type: none;
  li {
    margin: 0 5%;
  }
}
.navigation {
  z-index: 1000;
  position:absolute;
  width: 80vw;
  height: 100vh;
  left: 20vw;
  top: 0px;
  margin: 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background: black;
  li{
    width: 50%;
    height: 2rem;
    margin: 2rem 0rem;
  }
}
.navigationHidden {
  display: none;
}
.menuButton {
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
}
@media (min-width: 800px) {
  .menuButton {
    display: none;
  }
  .navigation {
    flex-grow: 1;
    z-index: auto;
    
    justify-content: flex-end;
    flex-wrap: wrap;
    position: static;
    width: auto;
    height: auto;
    background-color: initial;
  }
  .navigationHidden {
  display: flex;
}
}
@media (min-width: 1200px) {
  :root {
    font-size: 1em;
  }
}
</style>
