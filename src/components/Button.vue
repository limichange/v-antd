<template>
  <div class="a-btn">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Button',
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang="less">
.a-btn {
  padding: 2px;
  display: inline-block;
  border: 1px solid gray;
}
</style>
