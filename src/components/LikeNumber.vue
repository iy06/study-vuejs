<template>
  <div>
    <p >いいね({{ halfNumber }})</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
export default {
  // props受け取る側はキャメルケース
  props: {
    // propsに対してバリデーションを記載する
    totalNumber: {
      type: Number,
      default: 10
    }
  },
  computed: {
    halfNumber() {
      return this.totalNumber / 2;
    }
  },
  methods: {
    increment() {
      return this.$emit("my-click", this.totalNumber + 1);
    }
  }
};
</script>

<style scoped>
  div {
    border: solid 1px blue;
  }
</style>