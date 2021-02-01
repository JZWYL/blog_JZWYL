<template>
  <Layout>
    <!-- Main Content -->
    <div class="cardContainer" >
        <el-card shadow="hover" :body-style="{width:'400px', margin:'0'}"
        v-for="edge in $page.posts.edges" :key="edge.node.id">
            <g-link :to="'/posts/'+ edge.node.id">
              <h2 class="post-title">
               {{edge.node.title}}
              </h2>
            </g-link>
            <!-- 日期格式化 -->
            <p class="post-meta"> {{ edge.node.created_at}} </p>
            <p>
                <span>javaScript</span> |
                <span>HTML</span> |
                <span>Vue</span>
            </p>
        </el-card>

        <!-- <el-card>
            <pager :info="$page.posts.pageInfo" />
        </el-card> -->
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
import { Pager } from 'gridsome'
export default {
  name: 'HomePage',
  metaInfo: {
    title: 'Hello, world!d'
  },
  components: {
    Pager
  }
}
</script>

<style  scoped>
.el-card {

    margin-bottom: 20px;

}
.post-preview {
    display: flex;
   
    justify-content: center;
}
.cardContainer {
    display: flex;
    justify-content: space-around;
}
</style>>


