<template>
  <div class="main">
    <div class="header" :class="{ headerDark: isHeaderDark }">
      <img class="logo" src="../assets/logo_black.png" />
      <div class="title">
        湖南鼎图智能科技有限公司
      </div>
      <ul class="navigation">
        <li>
          Home
        </li>
        <li>
          Solution
        </li>
        <li>
          Product
        </li>
        <li>
          Contact
        </li>
      </ul>
      <div class="menuButton">
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
}
</script>

<style lang="scss" scoped>
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
  flex-grow: 1;
  justify-content: flex-end;
  flex-wrap: wrap;
  display: none;
}
.menuButton {
}
@media (min-width: 800px) {
  .menuButon {
    display: none;
  }
  .navigation {
    display: flex;
  }
}
@media (min-width: 1200px) {
  :root {
    font-size: 1em;
  }
}
</style>
