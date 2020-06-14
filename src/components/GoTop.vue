<template>
<div class="back-top mx-auto">
    <a class="mx-auto text-center bottom" @click.prevent = "goTop()" href="#app">
        <i class="fa fa-angle-double-up wow flash" data-wow-duration="2s" style="visibility: visible; animation-duration: 2s; animation-name: flash;"></i>
  </a>
</div>
</template>

<script>
import $ from 'jquery'

export default {
  mounted () {
  },
  methods: {
    goTop () {
      $('html, body').stop().animate({
        scrollTop: 0
      }, 400)
    }
  }
}
</script>
