<template>
  <div>
    <!-- 名前付きslot -->
    <slot name="title" :user="user">
      <h1>フォールバックコンテンツ</h1>
    </slot>
    <hr>
    <slot name="number">
      <p>いいねの数</p>
    </slot>

    <p>{{ headerText }}</p>
  </div>
</template>

<script>
export default {
  props:[ "headerText" ],
  data() {
    return {
      user: {
        firstName: "Yuki",
        lastName: "Inoue"
      }
    }
  }
}
</script>

<style>
  /* slotのstyleは子コンポーネントでもできる。 */
  h1 {
    color: red;
  }
</style>