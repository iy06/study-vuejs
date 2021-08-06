<template>
  <div>
    <h1>About</h1>
    <input type="text">
  </div>
</template>


<script>
export default {
  destroyed() {
    console.log("destroyed");
  },
  // keep-aliveを使用した動的コンポーネントは下記のライフサイクルを使用する。
  deactivated() {
    console.log("deactivated!")
  },
  activated() {
    console.log("activated!")
  }
}
</script>