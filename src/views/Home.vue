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
      <div class="introductionContainer" id="introduction">
        <div class="preTitle">公司介绍</div>
        <div class="middleTitle">
          湖南鼎图智能科技有限公司成立于2020年9月，是一家聚焦于VR（虚拟现实）/AR（增强现实）/MR（混合现实）软件开发和内容制作的技术驱动型公司。公司创始人和核心员工毕业于国内外顶尖高校，长期深耕于计算机图形学、虚拟现实和高性能计算等领域。公司具备完整的虚拟仿真硬件系统搭建和定制软件开发的全套解决方案，拥有自主研发高性能3D图形软件系统，和基于各种主流商业引擎或者开源平台进行深度定制开发和内容制作的技术能力，提供全方位的虚拟仿真定制开发技术服务。
        </div>
        <div class="postTitle"></div>
        <a href="/#contact" class="topButton">立即联系</a>
      </div>
      <div class="solutionContainer" id="solution">
        <div class="solutionText">行业解决方案</div>
        <div class="solutionItemContainer">
          <div class="solutionItem">
            <div class="solutionItemText">轨道交通</div>
            <img src="../assets/solution_01.png" />
          </div>
          <div class="solutionItem">
            <div class="solutionItemText">海洋</div>
            <img src="../assets/solution_02.png" />
          </div>
          <div class="solutionItem">
            <div class="solutionItemText">医学</div>
            <img src="../assets/solution_03.png" />
          </div>
          <div class="solutionItem">
            <div class="solutionItemText">教育教学</div>
            <img src="../assets/solution_04.png" />
          </div>
          <div class="solutionItem">
            <div class="solutionItemText">材料成型</div>
            <img src="../assets/solution_05.png" />
          </div>
          <div class="solutionItem">
            <div class="solutionItemText">软件开发</div>
            <img src="../assets/solution_06.png" />
          </div>
        </div>
        <a href="/#contact" class="topButton">立即实践</a>
      </div>
      <div class="productContainer" id="product">
        <div class="productText">产品和服务</div>
        <div class="productItemContainer">
          <div class="productItem">
            <div class="productItemText">虚拟现实仿真软件开发</div>
            <img src="../assets/product-1.jpeg" />
          </div>
          <div class="productItem">
            <div class="productItemText">智能制造及轻量化设计</div>
            <img src="../assets/product-2.png" />
          </div>
          <div class="productItem">
            <div class="productItemText">高性能计算系统集成与服务</div>
            <img src="../assets/product-3.jpeg" />
          </div>
          <div class="productItem">
            <div class="productItemText">图像处理与数据分析</div>
            <img src="../assets/product-4.jpeg" />
          </div>
          <div class="productItem">
            <div class="productItemText">三维产品设计及可视化</div>
            <img src="../assets/product-5.png" />
          </div>
          <div class="productItem">
            <div class="productItemText">数字孪生系统开发及咨询服务</div>
            <img src="../assets/product-6.jpeg" />
          </div>
        </div>
        <a href="/#contact" class="topButton">我想进一步了解。</a>
      </div>
      <div class="caseContainer" id="case">
        <div class="caseText">应用案例</div>
        <div class="caseItemContainer">
          <div class="caseItem">
            <div class="caseItemText">列车虚拟装配和维修系统</div>
            <img src="../assets/case-1-1.jpg" />
            <img src="../assets/case-1-2.jpg" />
            <img src="../assets/case-1-3.jpg" />
          </div>
          <div class="caseItem">
            <div class="caseItemText">
              数字化人体解剖学培训系统和医学专用领域仿真系统
            </div>
            <img src="../assets/case-2-1.jpg" />
            <img src="../assets/case-2-2.jpg" />
          </div>
          <div class="caseItem">
            <div class="caseItemText">医护培训和考核系统</div>
            <img src="../assets/case-3-1.jpg" />
          </div>
        </div>
        <a href="/#contact" class="topButton">我想获取更多成功应用案例资料。</a>
      </div>

      <div class="contactContainer" id="contact">
        <div class="contactItemContainer">
          <div class="contactItemInformation">
            <p class="contactItemTitle">联系我们</p>
            <p class="contactItemText">微信公众号：湖南鼎图智能科技有限公司</p>
            <p class="contactItemText">微信号：HNDTZN2020</p>
            <p class="contactItemText">电话：15873113796</p>
            <p class="contactItemText">
              地址：湖南省长沙市岳麓区潇湘南路182号奥克斯中心S5栋1506
            </p>
            <div class="contactItemText">
              <a href="mailto:wuping@dingtutech.com"
                >邮箱：wuping@dingtutech.com</a
              >
            </div>
          </div>
          <div class="contactItemMap">
            <img src="../assets/map_location.png" />
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div>
        营业执照注册号：91430104MA4RMAKX34 @2020-2025 湖南鼎图智能科技有限公司
        版权所有
      </div>
      <a href="https://beian.miit.gov.cn/">湘ICP备2021010368号-1</a>
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
  --background-color: rgb(255, 255, 255, 0.5);
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
  font-weight: bold;
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
  font-weight: bold;
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
.introductionContainer {
  width: 100vw;
  height: calc(100vh + 50px);
  margin-top: -50px;
  background-image: url("../assets/big-img-1-m.jpg");
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: white;
  .preTitle {
    margin: 25vh 5vh 0 5vh;
    //width: 90%;
    font-size: 2rem;
    text-align: center;
  }
  .middleTitle {
    //width: 90%;
     @media (min-width: 800px) {
        width: 40%;
      }
      margin: 5vh 5vh 0 5vh;
    font-size: 1.2rem;
    text-align: left;
    line-height: 2em;
  }
  .topButton {
    color: white;
    font-size: 1rem;
    text-align: center;
    margin: 5vh;
    border: 1px solid #2098c4;
    border-radius: 5px;
    padding: 5px 15px;
    text-decoration-line: none;
    background-color: #2098c4;
    &:hover {
      background-color: #f5f5f5;
      border: 1px solid #f5f5f5;
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
    font-size: 3rem;
    text-align: center;
  }
  .solutionItemContainer {
    display: flex;
    flex-flow: wrap;
    width: 75%;
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
        width: 110px;
        height: 110px;
        margin: 20px 20px 40px 20px;
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
  background-image: url("../assets/big-img-2.png");
  background-size: cover;
  color: white;
  .productText {
    margin: 10vh 0px;
    width: 90%;
    font-size: 3rem;
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
        width: 300px;
        height: 150px;
        margin: 20px 20px 40px 20px;
      }
    }
  }
  .topButton {
    color: white;
    font-size: 2rem;
    text-align: center;
    margin: 10vh 0px;
    border: 1px solid white;
    border-radius: 2px;
    padding-left: 26px;
    padding-right: 26px;
    padding-top: 10px;
    padding-bottom: 10px;
    text-decoration-line: none;
    &:hover {
      background-color: white;
      color: black;
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
    font-size: 3rem;
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

.contactContainer {
  display: flex;
  flex-flow: column;
  align-items: center;
  .contactItemContainer {
    display: flex;
    flex-flow: wrap;
    .contactItemInformation {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      @media (min-width: 800px) {
        width: 40%;
      }
      .contactItemTitle {
        width: 90%;
        font-size: 3rem;
        text-align: left;
        margin: 16px 10px;
      }
      .contactItemText {
        width: 90%;
        font-size: 1rem;
        text-align: left;
        margin: 16px 10px;
        a {
          width: 100%;
          color: black;
          @media (min-width: 800px) {
            color: inherit;
          }
          text-decoration-line: underline;
        }
      }
    }
    .contactItemMap {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: left;
      @media (min-width: 800px) {
        width: 60%;
      }
      img {
        height: 80vh;
        width: 100%;
        @media (min-width: 800px) {
            width: 100vh;
        }
      }
    }
  }
}

.footer {
  color: black;
  background-color: gray;
  font-size: 1rem;
  text-align: center;
  padding: 1rem 0px;
  a {
    color: black;
    text-decoration-line: none;
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
        //text-shadow: 0 0 1px var(--color), 0 0 1px var(--color);
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
  .introductionContainer {
    background-image: url("../assets/big-img-1.jpg");
  }
}
@media (min-width: 1200px) {
  :root {
    font-size: 1em;
  }
}
</style>
