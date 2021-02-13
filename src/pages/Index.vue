<template>
  <Layout>
  <div class="container_1">
    <!-- 轮播图 -->
    <div class="banner">
      <swiper ref="mySwiper" class="swiper" :options="swiperOption" >
        <swiper-slide v-for="item in loopImg" :key="item.id">
          <g-link to="/about">
            <img :src="item.imgsrc" alt="">
          </g-link>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
    <!-- 右侧边栏 -->
    <div class="side_Right">
      <div></div>
      <ul>
        <li>JavaScript</li>
        <li>海贼王</li>
        <li>鬼灭之刃</li>
        <li>一番赏</li>
        <li>Vue</li>
        <li>Node</li>
        <li>HTML</li>
      </ul>
    </div>
  </div>
  <!-- 模玩模块 -->
   <div class="Modu">
    <p>模玩动态</p>
    <div class="newMo">
      <el-card shadow="hover">
        <g-link to="/about">
          <img src="../assets/images/1.jpg" alt="">
          <div class="M_container">
            <p class="M_title">炭次郎的三大傻</p>
            <p class="M_sapn">
              <span>鬼灭之刃</span>
              <span>眼镜蛇s</span>
            </p>
            <p class="M_time">  2020/2020</p>
          </div>
        </g-link>
      </el-card>
      <el-card shadow="hover">
        <g-link>
          <img src="../assets/images/1.jpg" alt="">
          <div class="M_container">
            <p class="M_title">炭次郎的三大傻</p>
            <p class="M_sapn">
              <span>鬼灭之刃</span>
              <span>眼镜蛇s</span>
            </p>
            <p class="M_time">  2020/2020</p>
          </div>
        </g-link>
      </el-card>
       <el-card shadow="hover">
        <g-link>
          <img src="../assets/images/1.jpg" alt="">
          <div class="M_container">
            <p class="M_title">炭次郎的三大傻</p>
            <p class="M_sapn">
              <span>鬼灭之刃</span>
              <span>眼镜蛇s</span>
            </p>
            <p class="M_time">  2020/2020</p>
          </div>
        </g-link>
      </el-card>
    
    </div>
  </div>
  </Layout>
</template>

<page-query>
query ($page: Int) {
  posts:  allStrapiPosts (perPage: 2, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
			node{
  			id
        title
        content
        published_at
        updated_at
        created_at
			}
    }
  }
  
}
</page-query>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import { Pager } from 'gridsome'
export default {
  name: 'HomePage',
  metaInfo: {
    title: 'Hello, world!d'
  },
  components: {
    Pager,
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  data () {
    return {
      loopImg: [
        {
          id: 1,
          imgsrc: require('../assets/images/1.jpg')
        },
        {
          id: 2,
          imgsrc: require('../assets/images/3.jpg')
        },
        {
          id: 3,
          imgsrc: require('../assets/images/3.jpg')
        },
        {
          id: 4,
          imgsrc: require('../assets/images/1.jpg')
        }
      ],
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        effect: 'fade',
        loop: true,
        autoplay: {
          delay: 1500,
          stopOnLastSlide: false,
          /* 触摸滑动后是否继续轮播 */
          disableOnInteraction: true
        },
        // 滑动速度
        speed: 800,
        // 滑动方向
        direction: 'horizontal',
        // 小手掌抓取滑动
        grabCursor: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      option: {

      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper
    }
  }
}
</script>
<style  scoped >
a:hover {
  text-decoration: none;
}
.container_1 {
  display: flex;
  justify-content: space-between;
}
.side {
  background-color: red;
  width: 200px;
}
.side_Right {
  /* background-color: red; */
  /* display: flex; */
  position: relative;
  width: 300px;
  /* padding: 20px; */

/* float: left; */
  /* opacity: 0.3 */
  /* font-size: 20px; */
}
.side_Right div {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url('../assets/images/2.jpg');
  background-size:cover;
  opacity: 0.5
}
.side_Right ul {
  position: absolute;
}
.side_Right li {
  width: 100px;
  opacity: 11;
  margin: 10px 0;
  color: rgb(51, 50, 50);
}
.banner {
  display: flex;
  /* width: 1200px; */
  height: 400px;
  /* margin-left: 10%; */
  /* margin: 0 auto; */
  z-index: -1;
}
.pw {
  display: flex;
  width: 370px;
  align-items: flex-start;
  text-align: left;
  padding: 5px 10px;
  margin-right: 10px;
  background-color: rgb(120, 206, 233);
}
.pw ul {
  padding: 0;
  margin:0;
}
.pw li {
  list-style: none;
}
.swiper {
  width: 800px;
  height: 400px;
}

.swiper-slide {
    display: flex;
    justify-content: center;
    align-items:flex-end;
    text-align: center;
    font-weight: bold;
    /* // font-size: $font-size-huge * 2; */
    background-color: white;
   
  }
 .swiper-slide img {
      width: 100%;
      height: 100%;
    }

.el-card__body {
  padding: 0!important;
}
.newArticl {
  display: flex;
  justify-content: space-around;
}
.el-card {
  width: 300px;
  height: 270px;
}

/* newMo 模玩模块*/
.Modu {
  width: 100%;
}
.newMo {
  display: flex;
  width: 100%;
  /* height: 300px; */
  /* justify-content: space-around; */
  justify-content: space-between;
}
.newMo p {
  margin: 5px 0;
}
.newMo img {
  width: 100%;
}

.M_title {
  font-size: 20px;
  /* font-weight: 700; */
  height: 32px;
  /* background-color: red; */
  line-height: 32px;
}
.M_sapn span{
  color: #fff;
  font-size: 16px;
  margin-right: 8px;
  border-radius:25%;
  border: 1px solid rgb(207, 44, 44);
  background-color: rgb(226, 63, 63);
}
.M_time {
  font-size: 16px;
}
</style>


