<template>
  <Layout>
  <div class="container_1">
    <!-- 标签框 -->
    <div class="side">
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
    <div class="side_Right">
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
    <!-- <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="post-preview" v-for="edge in $page.posts.edges" :key="edge.node.id">
            <g-link :to="'/posts/'+ edge.node.id">
              <h2 class="post-title">
               {{edge.node.title}}
              </h2>
           
            </g-link>
            <p class="post-meta">Posted by
              <a href="#">JZWYL</a>
              {{ edge.node.created_at }}

            </p>
          </div>
          <p>大萨达打算多 的</p>
           <p>大萨达打算多 的</p>
            <p>大萨达打算多 的</p>
             <p>大萨达打算多 的</p>
              <p>大萨达打算多 的</p>
               <p>大萨达打算多 的</p>
          <pager :info="$page.posts.pageInfo" />
        </div>
      </div>
    </div> -->

  </div>
  <div>
    <p>最新文章</p>
    <div class="newArticl">
      <el-card>node的基本语法</el-card>
      <el-card>JavaScript的数据类型</el-card>
      <el-card>vue的事件应用</el-card>
      <el-card>大萨达撒</el-card>
      <el-card>GK是蛇魔</el-card>
    </div>
  </div>
   <div>
    <p>模玩动态</p>
    <div class="newArticl">
      <el-card>node的基本语法</el-card>
      <el-card>JavaScript的数据类型</el-card>
      <el-card>vue的事件应用</el-card>
      <el-card>大萨达撒</el-card>
      <el-card>GK是蛇魔</el-card>
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
          imgsrc: require('../assets/images/2.jpg')
        },
        {
          id: 3,
          imgsrc: require('../assets/images/3.jpg')
        },
        {
          id: 4,
          imgsrc: require('../assets/images/4.jpg')
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
          disableOnInteraction: false
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
.container_1 {
  display: flex;
  justify-content: space-between;
}
.side {
  background-color: red;
  width: 200px;
}
.side_Right {
  background-color: red;
  width: 400px;
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


.newArticl {
  display: flex;
  justify-content: space-around;
}
.el-card {
  width: 250px;
  height: 150px;
}
</style>


