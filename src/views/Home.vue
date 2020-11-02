<template>
  <div class="main">
    <div
      class="modalMask"
      :class="{ modalMaskHidden: isModalMaskHidden }"
      @click="onModalMaskClicked"
    />
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
          <a href="/">Demo</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
      <div class="menuButton" @click="onMenuButtonClicked">
        <svg
          viewBox="0 0 20 20"
          class="threeLineIcon"
          focusable="false"
          aria-hidden="true"
        >
          <path
            d="M19 11H1a1 1 0 0 1 0-2h18a1 1 0 1 1 0 2zm0-7H1a1 1 0 0 1 0-2h18a1 1 0 1 1 0 2zm0 14H1a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2z"
          ></path>
        </svg>
      </div>
    </div>
    <div class="content">
      <div class="topImage">
        <div class="topImageTextContainer">
          <div class="pretitle">
            We serve high-end custom-tailor.
          </div>
          <div class="pretitle">
            We help launch your clothing line from development to production.
          </div>
          <div class="pretitle">
            Quality / Lower Cost / No Minimum Order Quantity
          </div>
          <a href="/contact" class="top-button">Contact Now</a>
        </div>
        <img src="../assets/big-img.jpg" />
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
  currentPosition = "Home";
  isHeaderDark = false;
  isNavigationHidden = true;
  isModalMaskHidden = true;
  modalMaskClickHandler: any = null;
  mounted() {
    //给window添加一个滚动滚动监听事件
    window.addEventListener("scroll", this.handleScroll);
  }
  onModalMaskClicked() {
    if (this.modalMaskClickHandler != null) {
      this.modalMaskClickHandler();
    }
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
    if (!this.isNavigationHidden) {
      this.modalMaskClickHandler = function() {
        this.onMenuButtonClicked();
      };
    } else {
      this.modalMaskClickHandler = null;
    }
  }
}
</script>

<style lang="scss" scoped>
.modalMask {
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  margin: 0px;
}
.modalMaskHidden {
  display: none;
}
.header {
  --color: black;
  --background-color: rgb(200, 200, 200, 0.75);
  color: var(--color);
  background-color: var(--background-color);
  display: flex;
  align-items: center;
  top: 0px;
  position: sticky;
  z-index: 1000;
}
.headerDark {
  --color: white;
  --background-color: rgb(50, 50, 50, 0.75);
}
.logo {
}
.title {
  text-align: center;
  font-size: 1.2rem;
}
ul {
  list-style-type: none;
  li {
    text-align: center;
    a {
      width: 100%;
      color: inherit;
      text-decoration-line: none;
    }
  }
}
.navigation {
  z-index: 1000;
  position: absolute;
  width: 80vw;
  height: 100vh;
  left: 20vw;
  top: 0px;
  margin: 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background: white;
  li {
    width: 100%;
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
.threeLineIcon{
  width: 20px;
  height: 20px;
}
.content {
  width: 100%;
}
.topImage {
  img {
    margin-top: -10rem;
    height: auto;
    width: 100%;
  }
}
.topImageTextContainer {
  z-index: 100;
  top: 0px;
  left: 0px;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
@media (min-width: 800px) {
  .header {
    z-index: initial;
  }
  .menuButton {
    display: none;
  }
  .navigation {
    flex-grow: 1;
    z-index: auto;

    flex-direction: row;
    justify-content: flex-end;
    flex-wrap: wrap;
    position: static;
    width: auto;
    height: auto;
    background-color: initial;
    li {
      border-bottom: 2px solid transparent;
      &:active,
      &:hover {
        text-shadow: 0 0 1px var(--color), 0 0 1px var(--color);
        border-bottom: 2px solid var(--color);
      }
      width: initial;
      height: initial;
      margin: 0 5%;
    }
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
