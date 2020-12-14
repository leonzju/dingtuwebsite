<template>
  <div class="main">
    <div
      class="modalMask"
      :class="{ modalMaskHidden: isModalMaskHidden }"
      @click="onModalMaskClicked"
    />
    <div class="header" :class="{ headerDark: isHeaderDark }">
      <div class="logo" />
      <div class="title">湖南鼎图智能科技有限公司</div>
      <ul class="navigation" :class="{ navigationHidden: isNavigationHidden }">
        <li class="navigationHeader">
          <div class="logo" />
          <div class="title">湖南鼎图智能科技有限公司</div>
          <div class="closeButton" @click="onMenuCloseButtonClicked">X</div>
        </li>
        <li>
          <a href="/#introduction">公司介绍</a>
        </li>
        <li>
          <a href="/#solution">解决方案</a>
        </li>
        <li>
          <a href="/#product">产品服务</a>
        </li>
        <li>
          <a href="/#case">应用案例</a>
        </li>
        <li>
          <a href="/#contact">联系我们</a>
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
      <div class="topImageTextContainer" id="introduction">
        <div class="preTitle">公司介绍</div>
        <div class="middleTitle">
          湖南鼎图智能科技有限公司是一家以虚拟现实系统开发、智能制造服务技术、高性能计算系统方案为核心的高科技企业。公司秉承“科技改变世界”为宗旨，通过高性能仿真分析、数字样机与数字孪生、大数据处理和分析、以及虚拟交互可视化，助力企业提升数字化、网络化和智能化水平，变革传统生产、制造、销售和维护等模式，提高产品全生命周期性能和效率。
        </div>
        <div class="postTitle"></div>
        <a href="/#contact" class="topButton">立即联系</a>
      </div>
      <div class="solutionContainer" id="solution">
        <div class="solutionText">行业解决方案</div>
        <div class="solutionItemContainer">
          <div class="solutionItem">
            <div class="solutionItemText">轨道交通</div>
            <img src="../assets/svg_01.png" />
          </div>
          <div class="solutionItem">
            <div class="solutionItemText">海洋</div>
            <img src="../assets/svg_02.png" />
          </div>
          <div class="solutionItem">
            <div class="solutionItemText">医学</div>
            <img src="../assets/svg_03.png" />
          </div>
          <div class="solutionItem">
            <div class="solutionItemText">教育教学</div>
            <img src="../assets/svg_03.png" />
          </div>
          <div class="solutionItem">
            <div class="solutionItemText">工程机械</div>
            <img src="../assets/svg_03.png" />
          </div>
          <div class="solutionItem">
            <div class="solutionItemText">软件开发</div>
            <img src="../assets/svg_03.png" />
          </div>
        </div>
        <a href="/#contact" class="topButton">立即实践</a>
      </div>
      <div class="productContainer" id="product">
        <div class="productText">产品和服务</div>
        <div class="productItemContainer">
          <div class="productItem">
            <div class="productItemText">虚拟现实仿真软件开发</div>
            <img src="../assets/svg_01.png" />
          </div>
          <div class="productItem">
            <div class="productItemText">智能制造及轻量化设计</div>
            <img src="../assets/svg_02.png" />
          </div>
          <div class="productItem">
            <div class="productItemText">高性能计算系统集成与服务</div>
            <img src="../assets/svg_03.png" />
          </div>
          <div class="productItem">
            <div class="productItemText">图像处理与数据分析</div>
            <img src="../assets/svg_03.png" />
          </div>
          <div class="productItem">
            <div class="productItemText">在线产品三维可视化设计</div>
            <img src="../assets/svg_03.png" />
          </div>
          <div class="productItem">
            <div class="productItemText">三维数字化系统开发技术咨询</div>
            <img src="../assets/svg_03.png" />
          </div>
        </div>
        <a href="/#contact" class="topButton">我想进一步了解。</a>
      </div>
      <div class="caseContainer" id="case">
        <div class="caseText">应用案例</div>
        <div class="caseItemContainer">
          <div class="caseItem">
            <div class="caseItemText">工业互联网海量异构数据融合</div>
            <img src="../assets/case1.png" />
          </div>
          <div class="caseItem">
            <div class="caseItemText">复杂系统时空四维连续演化建模方法</div>
            <img src="../assets/case2.png" />
          </div>
        </div>
        <a href="/#contact" class="topButton">我想获取更多成功应用案例资料。</a>
      </div>

      <div class="caseContainer" id="case"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
  props: {},
})
export default class Home extends Vue {
  currentPosition = "Home";
  isHeaderDark = false;
  isNavigationHidden = true;
  isModalMaskHidden = true;
  modalMaskClickHandler?: () => void = undefined;
  mounted() {
    //给window添加一个滚动滚动监听事件
    window.addEventListener("scroll", this.handleScroll);
  }
  onModalMaskClicked() {
    if (this.modalMaskClickHandler != undefined) {
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
      this.modalMaskClickHandler = function () {
        this.onMenuButtonClicked();
      };
    } else {
      this.modalMaskClickHandler = undefined;
    }
  }
  onMenuCloseButtonClicked() {
    this.onMenuButtonClicked();
  }
}
</script>

<style lang="scss" scoped>
.modalMask {
  position: fixed;
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
  --background-color: rgb(255, 255, 255, 0.75);
  --logo: url("../assets/logo-img.png");
  color: var(--color);
  background-color: var(--background-color);
  display: flex;
  align-items: center;
  justify-content: space-around;
  top: 0px;
  position: sticky;
  z-index: 1000;
  height: 50px;
}
.headerDark {
  --color: white;
  --background-color: rgb(50, 50, 50, 0.75);
  --logo: url("../assets/logo-img-white.png");
}
.logo {
  background-image: var(--logo);
  background-size: contain;
  width: 30px;
  height: 24px;
  margin: 0px 4px 0px 10px;
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
      color: black;
      @media (min-width: 800px) {
        color: inherit;
      }
      text-decoration-line: none;
    }
  }
}
.navigation {
  z-index: 1000;
  position: absolute;
  width: 80vw;
  height: 100vh;
  left: 0px;
  top: 0px;
  margin: 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background: white;
  padding: 0px;
  .navigationHeader {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 51px;
    margin: 0px;
    padding: 0px;
    border-bottom: 1px solid gray;
    color: black;
    @media (min-width: 800px) {
      display: none;
    }
    .logo {
      background-image: url("../assets/logo-img.png");
      background-size: contain;
      width: 30px;
      height: 24px;
    }
    .closeButton {
      cursor: pointer;
      font-size: 1.5rem;
    }
  }
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
  margin-right: 1rem;
  fill: var(--color);
}
.threeLineIcon {
  width: 20px;
  height: 20px;
  margin: 4px;
}
.content {
  width: 100%;
}
.topImageTextContainer {
  width: 100vw;
  height: calc(100vh + 50px);
  margin-top: -50px;
  background-image: url("../assets/big-img-m.jpg");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: white;
  .preTitle {
    margin-top: 20vh;
    width: 90%;
    font-size: 4rem;
    text-align: center;
  }
  .middleTitle {
    width: 90%;
    font-size: 2rem;
    text-align: center;
  }
  .postTitle {
    width: 90%;
    font-size: 2rem;
    text-align: center;
  }
  .topButton {
    color: white;
    font-size: 2rem;
    text-align: center;
    margin-bottom: 10vh;
    border: 1px solid #fff;
    border-radius: 2px;
    padding: 2vh 8vw;
    text-decoration-line: none;
    &:hover {
      background-color: #f5f5f5;
      color: black;
    }
  }
}
.solutionContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  .solutionText {
    margin: 10vh 0px;
    width: 90%;
    font-size: 4rem;
    text-align: center;
  }
  .solutionItemContainer {
    display: flex;
    flex-flow: wrap;
    .solutionItem {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      @media (min-width: 800px) {
        width: 33%;
      }
      .solutionItemText {
        width: 90%;
        font-size: 2rem;
        text-align: center;
      }
      img {
        width: 200px;
        height: 200px;
      }
    }
  }
  .topButton {
    color: black;
    font-size: 2rem;
    text-align: center;
    margin: 10vh 0px;
    border: 1px solid black;
    border-radius: 2px;
    padding-left: 26px;
    padding-right: 26px;
    padding-top: 10px;
    padding-bottom: 10px;
    text-decoration-line: none;
    &:hover {
      background-color: black;
      color: white;
    }
    cursor: pointer;
  }
}
.productContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  color: white;
  .productText {
    margin: 10vh 0px;
    width: 90%;
    font-size: 4rem;
    text-align: center;
  }
  .productItemContainer {
    display: flex;
    flex-flow: wrap;
    .productItem {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      @media (min-width: 800px) {
        width: 33%;
      }
      .productItemText {
        width: 90%;
        font-size: 2rem;
        text-align: center;
      }
      img {
        width: 200px;
        height: 200px;
      }
    }
  }
  .topButton {
    color: black;
    font-size: 2rem;
    text-align: center;
    margin: 10vh 0px;
    border: 1px solid black;
    border-radius: 2px;
    padding-left: 26px;
    padding-right: 26px;
    padding-top: 10px;
    padding-bottom: 10px;
    text-decoration-line: none;
    &:hover {
      background-color: black;
      color: white;
    }
    cursor: pointer;
  }
}
.caseContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  .caseText {
    margin: 10vh 0px;
    width: 90%;
    font-size: 4rem;
    text-align: center;
  }
  .caseItemContainer {
    display: flex;
    flex-flow: wrap;
    .caseItem {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      @media (min-width: 800px) {
        width: 100%;
      }
      .caseItemText {
        width: 90%;
        font-size: 2rem;
        text-align: center;
      }
      img {
        width: 75vw;
        //height: 75vw;
      }
    }
  }
  .topButton {
    color: black;
    font-size: 2rem;
    text-align: center;
    margin: 10vh 0px;
    border: 1px solid black;
    border-radius: 2px;
    padding-left: 26px;
    padding-right: 26px;
    padding-top: 10px;
    padding-bottom: 10px;
    text-decoration-line: none;
    &:hover {
      background-color: black;
      color: white;
    }
    cursor: pointer;
  }
}

@media (min-width: 800px) {
  .header {
    z-index: 10;
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
    :last-child {
      border-bottom: initial;
      text-align: center;
      text-decoration-line: none;
      padding: 2px 6px;
      &:active,
      &:hover {
        text-shadow: initial;
        border-bottom: initial;
      }
      a {
        background-color: var(--color);
        color: var(--background-color);
        border-radius: 4px;
        text-decoration-line: none;
      }
    }
  }
  .navigationHidden {
    display: flex;
  }
  .topImageTextContainer {
    background-image: url("../assets/big-img.jpg");
  }
}
@media (min-width: 1200px) {
  :root {
    font-size: 1em;
  }
}
</style>
