<template>
<div class="carouselArea">
    <div class="mask">
        <div class="container">
            <div class="contentArea mx-auto text-center">
                <h1 class="title text-white">官方帳號 最佳方案
                    <div class="slognArea">
                        <p class="slogn"></p>
                    </div>
                </h1>
                <p class='sub-title text-white'>有更好的方法！</p>
                <div class="btnArea">
                <a target="_blank" href="http://s.linecast.me/download.html" class="btn btn-secondary-outline btn-lg text-white">AppStore</a>
                <a target="_blank" href="http://s.linecast.me/download.html" class="btn btn-secondary-outline btn-lg  text-white">Googleplay</a>
                </div>
            </div>
        </div>
    </div>
        <!-- <div class="box" style="width:300px;height:300px;border:1px solid red"></div> -->
</div>
</template>

<script>
import $ from 'jquery'
// import gsap from 'gsap'

export default {
  data () {
    return {
      slogn: ['超值月費', '客製標籤', '好友清單']
    }
  },
  mounted () {
    this.rotate()
  },
  methods: {
    rotate () {
      var ct = $('.carouselArea .slogn').data('term') || 0
      $('.carouselArea .slogn').data('term', ct === this.slogn.length - 1 ? 0 : ct + 1).text(this.slogn[ct]).fadeIn().delay(2000).fadeOut(200, this.rotate)
    }
  }
}
</script>
