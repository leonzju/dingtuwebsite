<template>
  <div>
    <div class="header">
      <div class="header-content" :class="headerThemeClass">
        <div class="logo">
          <span>LOGO</span>
        </div>
        <ul class="header-menu">
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
    <img
      class="top-big-img"
      src="https://seamplacement.com/images/1543980364844865.jpg?w=2560&auto=format"
    />
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      headerThemeClass: "dark-theme"
    };
  },
  mounted() {
    //给window添加一个滚动滚动监听事件
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      //获取滚动条位置
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop <= 5) {
        this.headerThemeClass = "dark-theme";
      } else {
        this.headerThemeClass = "light-theme";
      }
    }
  },
  unmounted() {
    //离开该页面需要移除这个监听的事件
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style language = "scss" scoped>
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
}
.top-big-img {
  margin: 0;
  padding: 0;
  width: 100%;
  bottom: 0;
}
</style>