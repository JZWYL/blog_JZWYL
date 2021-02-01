<template>
  <Layout>
     <!-- Page Header -->
    <header class="masthead" style="background-image: url('img/about-bg.jpg')">
    <!-- <header class="masthead" > -->
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="page-heading">
            <!-- <h1>About Me</h1>
            <span class="subheading">This is what I do.</span> -->
          </div>
        </div>
      </div>
    </div>
    </header>

    <!-- Main Content -->
    <div class="container">
    <div class="row">
      <!-- card卡片 信息介绍 -->
      <div class="cardContent">
        <el-card class="box-card" :body-style="{ padding: '0px' }">
          <div class="xontent">
            <span>兴趣爱好</span>
            <p>模玩</p>
          </div>
        </el-card>
        <el-card class="box-card" :body-style="{ padding: '0px' }">
          <div class="xontent">
            <span>我妻一善 || 鬼灭之刃</span>
            <div>
              品牌：<span>Banner</span>
              价格： <span><i>￥</i>99</span>
            </div>
          </div>
        </el-card>
        <el-card class="box-card" :body-style="{ padding: '0px' }">
          <div class="xontent">
           
            <span>我妻一善 || 鬼灭之刃</span>
            <div>
              品牌：<span>Banner</span>
              价格： <span><i>￥</i>99</span>
            </div>
          </div>
        </el-card>
      </div>
    </div>
    </div>
  </Layout>
</template>

<script>
export default {
  name: 'AboutPage',
  metaInfo: {
    title: 'About us'
  }
}
</script>

<style scoped>
.cardContent {
  width: 100%;
  display: flex;
  /* justify-items: center; */
  /* justify-content: space-between; */
  justify-content: space-around;
}
.box-card {
  display: flex;
  /* flex: 1; */
  /* width: 270px; */
  /* height: 150px; */
}
</style>
