<template>
  <div class="layout">
    <el-container>
      <el-header>
        <div class="nav">
          <g-link class="index" to="/">假装文艺浪</g-link>
          <div class="navRight" id="">
            <ul class="navRight-ul">
              <li class="navRight-li">
                <g-link class="linkStyle" to="/about" >模玩</g-link>
              </li>
              <li class="navRight-li">
                <g-link class="linkStyle" to="/post" >文章</g-link>
              </li>
              <li class="navRight-li">
                <g-link class="linkStyle" to="/about" >关于我</g-link>
              </li>
              <li class="navRight-li" to="/about">
                <g-link class="linkStyle" to="/contact">联系我</g-link>
              </li>
            </ul>
          </div>
        </div>
      </el-header>
      <el-main>
          <!-- 子组件出口 默认插槽 -->
          <div class="cleanNav"></div>
          <slot/>
          Main</el-main>
      <el-footer>Footer
          <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-10 mx-auto">
              <ul class="list-inline text-center">
                <li class="list-inline-item">
                  <a href="#">
                    <span class="fa-stack fa-lg">
                      <i class="fas fa-circle fa-stack-2x"></i>
                      <i class="fab fa-twitter fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#">
                    <span class="fa-stack fa-lg">
                      <i class="fas fa-circle fa-stack-2x"></i>
                      <i class="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#">
                    <span class="fa-stack fa-lg">
                      <i class="fas fa-circle fa-stack-2x"></i>
                      <i class="fab fa-github fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li>
              </ul>
              <p class="copyright text-muted">Copyright &copy; Your Website 2020</p>
            </div>
          </div>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>



<style scoped>

main {
  width: 1200px;
  margin: 0 auto;
  padding: 0;
}
header {
    width: 100%;
    position: fixed;
    padding: 0;
    z-index: 999;
    /* background: url('/img/home-bg.jpg'); */
    background-color: rgb(56, 74, 124);
}

a {
    color: #fff;
}

/* a:focus {
    color: #0085A1;
    text-decoration: none;
  } */
  a:hover {
    text-decoration: none;
    color: #0085A1;
    
  }
.nav {
    display: flex;
}
.index {
    flex: 1;
    font-size: 30px;
    line-height: 60px;
    padding-left: 12%;

}
.navRight {
    flex: 4;
    /* background-color: pink; */
    line-height: 60px;
    justify-items: flex-end;
}
.navRight-ul {
    display: flex;
    justify-content: flex-end;
    padding-right: 16%;
}
.navRight-li {
    padding: 0 20px;
    font-size: 16px;
}

.cleanNav {
    height: 60px;
}

/* 记得删除main */
/* main {
    height: 2000px;
} */
</style>
