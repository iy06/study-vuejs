import Vue from 'vue'
// コンポーネントのオブジェクトをimportする
// .vueファイルはvue-cliのwebpackのvue-loaderによって使用できる
import LikeNumber from './components/LikeNumber.vue'
import App from './App.vue'


Vue.config.productionTip = false

// グローバルコンポーネント
Vue.component('LikeNumber', LikeNumber);

new Vue({
  render: h => h(App),
}).$mount('#app')
