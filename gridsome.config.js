// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: '假装文艺浪',
  titleTemplate:'假装文艺浪',
  siteDescription: '个人博客',   
  plugins: [
    {
      //读取本地文件，转化md
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'BlogPost',
        path: './content/blog/**/*.md',
      }
    },
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: process.env.GRIDSOME_API_URL,
        // apiURL: 'http://localhost:1337/',
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['posts'],
        // singleTypes: ['impressum'],
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        // loginData: {
        //   identifier: '',
        //   password: ''
        // }
      }
    }
  
  ],
  templates: {
    StrapiPosts: [
      {
        path: '/posts/:id',
        component: './src/templates/Post.vue'
      }
    ]
    // StrapiTags: [
    //   {
    //     path: '/tag/:id',
    //     component: './src/templates/Tag.vue'
    //   }
    // ]
  }
}
