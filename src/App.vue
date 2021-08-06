<template>
  <div>
    <LikeHeader header-text="Hello Vue.js">
      <!-- slotはtemplateの中身をすべて送ることができる。 -->
      <template v-slot:title="slotProps">
        <h1>Totalのイイね数</h1>
        <p>{{ slotProps.user.firstName + slotProps.user.lastName }}</p>
      </template>

      <template v-slot:number>
        <h2>{{ number }}</h2>
      </template>
    </LikeHeader>

    <!-- props渡す側はケバブケース -->
    <LikeNumber :total-number="number" @my-click="incrementNumber"></LikeNumber>
    <LikeNumber :total-number="number" @my-click="incrementNumber"></LikeNumber>

    <!-- 動的コンポーネント -->
    <button @click="currentComponent = 'Home'">Home</button>
    <button @click="currentComponent = 'About'">About</button>

    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>


  </div>
</template>

<script>
  // ローカルコンポーネント
  import LikeHeader from './components/LikeHeader.vue';
  import About from './components/About.vue';
  import Home from './components/Home.vue';

  export default {
    data() {
      return {
        number: 10,
        currentComponent: "Home"
      }
    },
    components: {
      LikeHeader,
      About,
      Home
    },
    methods: {
      incrementNumber(value) {
        this.number = value;
      }
    }
  }
</script>

  // 親コンポーネントにsocpedを指定すると子コンポーネントまで反映される
<style>
  div {
    border: solid 1px red;
  }
</style>