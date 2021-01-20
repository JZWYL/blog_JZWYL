<template>
    <Layput>
      <!-- Page Header -->
      <header class="masthead" :style="{
          backgroundImage: `url(http://81.68.167.56:1337${$page.post.cover.url})`
      }">
          <div class="overlay"></div>
          <div class="container">
          <div class="row">
              <div class="col-lg-8 col-md-10 mx-auto">
              <div class="post-heading">
                  <h1>{{ $page.post.title }}</h1>
                  <!-- <h2 class="subheading">Problems look mighty small from 150 miles up</h2> -->
                  <span class="meta">Posted by
                  <a href="#">JZWYL</a>
                  {{ $page.post.published_at }}</span>
              </div>
              </div>
          </div>
          </div>
      </header>

      <!-- Post Content -->
      <article>
            <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-10 mx-auto" v-html="mdToHtml($page.post.content)">
            
                </div>
            </div>
            </div>
      </article>
    </Layput>
</template>

<page-query>
query ($id: ID!) {
  post: strapiPosts (id: $id) {
    id
    title
    content
    published_at
    cover {
        url
    }
  }
}
</page-query>
<script>
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt()
// md.render('# hell')
export default {
    name: 'PostPage',
    methods: {
        mdToHtml (markdown) {
            return md.render(markdown)
        }
    },
}
</script>

<style scoped>

</style>