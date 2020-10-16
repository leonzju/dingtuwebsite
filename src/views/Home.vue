<template>
  <div class="main">
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
    <div id="first-item" class="top-text-container">
      <div class="top-text-minor">We serve high-end custom-tailor.</div>
      <div class="top-text-main">
        We help launch your clothing line from development to production.
      </div>
      <div class="top-text-minor">
        Quality / Lower Cost / No Minimum Order Quantity
      </div>
      <a href="/contact" class="top-button">Contact Now</a>
    </div>
    <div id="second-item" class="second-item-container">
      <div class="second-text-main">
        Do you struggle with your production?
      </div>
      <div class="second-questions-container">
        <div class="second-questions-item">
          <div class="second-questions-text">
            DO YOU NEED A FACTORY THAT CAN PRODUCE QUALITY GARMENTS?
          </div>
          <img class="second-questions-img" src="../assets/svg_01.png" />
        </div>
        <div class="second-questions-item">
          <div class="second-questions-text">
            ARE YOU TRYING TO SOURCE QUALITY FABRICS IN CHINA?
          </div>
          <img class="second-questions-img" src="../assets/svg_02.png" />
        </div>
        <div class="second-questions-item">
          <div class="second-questions-text">
            DO YOU WORRY ABOUT HOW YOUR PRODUCTION PARTNERS TREAT THEIR WORKERS?
          </div>
          <img class="second-questions-img" src="../assets/svg_03.png" />
        </div>
      </div>
      <a href="/contact" class="second-third-item-button">We Can Help</a>
    </div>
    <div id="third-item" class="third-item-container">
      <img src="../assets/third-item.jpg" class="third-item-img" />
      <div class="third-item-text-container">
        <div class="third-item-main">Development</div>
        <div class="third-item-minor">
          We provide the whole package of development. We start with listening
          to you, understanding your concept and your customers better. Together
          with you, we create patterns, do grading and make fit samples for your
          approval. We can even source fabrics in Italy, Japan, Korea, China
          from our large network of fabric vendors for you. During the sampling
          stage, we will provide pictures of muslin samples and revise samples
          for free before actual sample making. At the end of this development
          process, you will get your production-ready lines that you love.
        </div>
        <a href="/contact" class="second-third-item-button">Contact Now</a>
      </div>
    </div>
    <div id="fourth-item" class="third-item-container">
      <div class="third-item-text-container">
        <div class="third-item-main">Production</div>
        <div class="third-item-minor">
          No matter whether you wish to develop your line with us or you have
          already got your line developed, we work with you for your needs with
          a fast turnaround. No matter whether you are a made-to-order business,
          a small startup looking for ten pieces, or a larger brand in need of
          producing thousands of pieces, we work with you. There is no minimum
          order quantity requirement. We will refund basic sample fee and offer
          free pattern development for any order of more than one hundred
          production pieces.
        </div>
        <a href="/contact" class="second-third-item-button">Contact Now</a>
      </div>
      <img src="../assets/fourth-item.jpg" class="third-item-img" />
    </div>
    <div id="why-us" class="why-us-container">
      <div class="why-us-text">Why us?</div>
      <div class="commitment-img">
        <div class="why-us-text-container">
          <div class="third-item-main">Your brand, our commitment.</div>
          <div class="third-item-minor">
            At Seam Placement, we take pride in the techniques that our tailors
            are skilled at. French seam, engineering, embroidery, you name it.
            Every single one of our tailors has years of fashion production
            experience and holds a certificate of tailoring technician. We
            create quality clothes that last.
          </div>
          <a href="/contact" class="second-third-item-button"
            >Get Free Consultation</a
          >
        </div>
      </div>
      <div class="communication-img">
        <div class="why-us-text-container">
          <div class="third-item-main">Communication is everything.</div>
          <div class="third-item-minor">
            We start by listening to your vision and the concept of your line.
            We would like to understand your line and your customers better so
            we can develop the clothes that fit them. We also keep in touch with
            your in-house design and development team throughout the process to
            make sure what we deliver fits your vision.
          </div>
          <a href="/contact" class="second-third-item-button"
            >Get Free Consultation</a
          >
        </div>
      </div>
    </div>
    <div id="testimonial" class="testimonial-container">
      <div class="third-item-main">Testimonial</div>
      <div class="testimonial-item-minor">
        Having considered dozens of factories in China, we chose Seam Placement
        as our strategic partner. It is one of the best decisions that we have
        made. Seam Placement helped us launch our first customization line. They
        are still our sole production partner. We are extremely happy with the
        professionalism and work ethic of the team. Work with Seam Placement and
        you will not regret.
      </div>
      <div class="guest-sign-container">
        <div class="guest-sign">- Shangwei Ding, CEO of frilly.com</div>
        <img class="guest-sign-img" src="../assets/shang.png" />
      </div>
    </div>
    <div id="sayings" class="sayings">
      We love making clothes. We pay attention to every detail to make our
      products meet your expectation.
    </div>
    <div class="contact-title">Contact</div>
    <div id="contact" class="contact-container">
      <form class="contact-form">
        <div class="send-us-a-message">
          Send us a message.
        </div>
        <input type="text" placeholder="Name" class="contact-form-input-text" />
        <input
          type="text"
          placeholder="Email"
          class="contact-form-input-text"
        />
        <input
          type="text"
          placeholder="Company(optional)"
          class="contact-form-input-text"
        />
        <input
          type="text"
          placeholder="Leave a message."
          class="contact-form-input-text"
        />
        <button class="submit">SUBMIT</button>
      </form>
    </div>
    <div class="address-email-container">
      <div class="address-item">
        <img class="address-icon" src="../assets/address.png" />
        <div class="address-text">
          3rd Floor, Building No.17, Xinhua Group Creative Garden, No.59
          Shixiang Road, Xiacheng District, Hangzhou, Zhejiang, China
        </div>
      </div>
      <div class="address-item">
        <img class="address-icon" src="../assets/email.png" />
        <div class="address-text">
          jenny@seamplacement.com
        </div>
      </div>
      <div class="address-item">
        <img class="address-icon" src="../assets/skype.png" />
        <div class="address-text">
          Skype: seam placement
        </div>
      </div>
    </div>
    <div class="copyright">
      Copyright © 2019 Seamplacement. All rights reserved.
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
  width: 100px;
  height: 40px;
  background-size: 100% 100%;
  background-image: url("../assets/logo_white.png");
}
.logo.light {
  background-image: url("../assets/logo_black.png");
}
.header-menu {
  list-style: none;
  display: flex;
  display: -webkit-flex;
  width: 50%;
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
.top-button {
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
.second-item-container {
  display: flex;
  padding: 5px;
  margin-top: 100px;
  flex-direction: column;
  color: black;
  justify-content: center;
  align-items: center;
}
.second-text-main {
  font-size: 56px;
  margin: 80px;
}
.second-questions-container {
  display: flex;
  justify-content: space-between;
  align-items: space-between;
}
.second-questions-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex: 1;
}
.second-questions-text {
  text-align: center;
  width: 75%;
  margin-bottom: 50px;
}
.second-questions-img {
  width: 200px;
  height: 200px;
}
.second-third-item-button {
  color: black;
  font-size: 32px;
  text-align: center;
  margin-top: 80px;
  margin-bottom: 50px;
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
}
.third-item-container {
  display: flex;
}
.third-item-img {
  width: 45%;
  margin: 5%;
}
.third-item-text-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 48%;
  margin: 5% 2%;
}
.third-item-main {
  font-size: 40px;
  margin-bottom: 40px;
}
.third-item-minor {
  font-size: 16px;
  margin: 20px 0px 20px 0px;
}
.why-us-text {
  font-size: 40px;
  margin-bottom: 40px;
  text-align: center;
}
.commitment-img {
  background-image: url("../assets/fifth-item.jpg");
  height: 150vh;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}
.why-us-text-container {
  width: 40%;
  display: flex;
  background-color: darkgrey;
  opacity: 0.8;
  padding: 20px;
  margin: 40px;
  margin-bottom: 100px;
  flex-direction: column;
  align-items: flex-start;
}
.communication-img {
  background-image: url("../assets/sixth-item.jpg");
  height: 150vh;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
}
.testimonial-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
}
.testimonial-item-minor {
  font-size: 20px;
  margin: 80px;
}
.guest-sign-container {
  display: flex;
  width: 90%;
  justify-content: flex-end;
  align-items: center;
}
.guest-sign {
  margin-right: 20px;
  font-size: 20px;
}
.sayings {
  margin-top: 50px;
  background-image: url("../assets/rectangle.png");
  height: 200px;
  font-size: 30px;
  color: white;
  text-align: center;
  line-height: 200px;
}
.contact-title {
  font-size: 40px;
  margin-bottom: 40px;
  margin-top: 40px;
  text-align: center;
}
.contact-container {
  margin-top: 50px;
  background-image: url("../assets/map_location.png");
  height: 700px;
  font-size: 30px;
  color: white;
  text-align: center;
  line-height: 200px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
}
.contact-form {
  margin-right: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: white;
  padding: 20px;
  border-radius: 4px;
}
.send-us-a-message {
  font-size: 24px;
  color: black;
  line-height: 20px;
  margin-bottom: 20px;
}
.contact-form-input-text {
  border: 0px;
  border-bottom: 2px solid darkgrey;
  width: 300px;
  height: 40px;
  margin: 20px 20px;
  font-size: 24px;
  outline: none; // 去除选中状态边框
}
.submit {
  color: white;
  font-size: 24px;
  text-align: center;
  border: 1px solid black;
  border-radius: 2px;
  padding: 10px 0px;
  margin: 30px 40px;
  text-decoration-line: none;
  background-color: black;
  &:hover {
    background-color: white;
    color: black;
  }
}
.address-email-container {
  display: flex;
  margin: 40px 5%;
}
.address-item {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
}
.address-icon {
  margin: 10px;
}
.copyright {
  font-size: 26px;
  color: darkgray;
  text-align: center;
  margin: 40px 0px;
  padding-top: 20px;
  width: 100%;
  border-top: 1px solid gray;
}
</style>
