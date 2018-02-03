<template>
  <div :class="$style.Default">
    <AButton>Button</AButton>
  </div>
</template>

<script>
import AButton from '../../components/Button.vue'

export default {
  name: 'Default',
  components: {
    AButton
  },
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang="less" module>
.Default {}
</style>
