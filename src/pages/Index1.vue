<template>
  <Layout>
    <!-- Page Header -->
    <header class="masthead" style="background-image: url('/img/home-bg.jpg')">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="site-heading">
              <h1>假装文艺浪</h1>
              <span class="subheading">语言是这么不可靠，我们确由着语言决定一切。 ——《笑场》</span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="post-preview" v-for="edge in $page.posts.edges" :key="edge.node.id">
            <g-link :to="'/posts/'+ edge.node.id">
              <h2 class="post-title">
               {{edge.node.title}}
              </h2>
              <!-- <h3 class="post-subtitle">
                Problems look mighty small from 150 miles up
              </h3> -->
            </g-link>
            <p class="post-meta">Posted by
              <a href="#">JZWYL</a>
              {{ edge.node.created_at}}
            </p>
            <!-- <p>
              <span v-for="tag in edge.node.tags" :key="tag.id">
                <g-link :to="'/tag/' + tag.id">{{tag.title}}</g-link>
                &nbsp;&nbsp;
              </span>
            </p> -->
              <hr>
          </div>
          <pager :info="$page.posts.pageInfo" />
        </div>
      </div>
    </div>

    <hr>
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

</style>>


