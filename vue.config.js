module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/vuex_todo_manager/'
  : '/',
  chainWebpack: config => {
      config
          .plugin('html')
          .tap(args => {
              args[0].title = "Vuex Todo Manager";
              return args;
          })
  }
}