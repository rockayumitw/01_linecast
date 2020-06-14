<template>
    <section class="gallery text-center pb-5 pt-5">
        <div class="container">
            <h5 class="sub-title mb-2">眼見為憑</h5>
            <h1 class="title mt-0">介面設計</h1>
            <p class="content">
                持續精進介面設計 不斷開發創新功能
            </p>
            <!--內容-->
            <div v-masonry transition-duration="1s" origin-left="true"  item-selector=".item" class="row no-gutters">
                <div v-masonry-tile class="item col-lg-4 col-md-6 col-sm-6 col-xs-6">
                    <a href="/">
                        <img class="img-fluid" src="../../assets/_img/HomeTitle.jpg" alt="">
                    </a>
                </div>
                <div v-masonry-tile class="item col-lg-4 col-md-6 col-sm-6 col-xs-6">
                    <a href="/">
                        <img class="img-fluid"   src="../../assets/_img/IMG_2447-576x1024.png" alt="">
                    </a>
                </div>
                <div v-masonry-tile class="item col-lg-4 col-md-6 col-sm-6 col-xs-6 text-sm-center text-xs-left">
                    <a href="/">
                        <img class="img-fluid" src="../../assets/_img/IMG_2445-576x1024.png" alt="">
                    </a>
                </div>
                <div v-masonry-tile class="item col-lg-4 col-md-6 col-sm-6 col-xs-6 text-sm-center text-xs-left">
                    <a href="/">
                        <img class="img-fluid" src="../../assets/_img/IMG_2446-576x1024.png" alt="">
                    </a>
                </div>
                <div v-masonry-tile class="item col-lg-4 col-md-6 col-sm-6 col-xs-6 text-sm-center text-xs-left">
                    <a href="/">
                        <img class="img-fluid" src="../../assets/_img/3.jpg" alt="">
                    </a>
                </div>
                <div v-masonry-tile class="item col-lg-4 col-md-6 col-sm-6 col-xs-6 text-sm-center text-xs-left">
                    <a href="/">
                        <img class="img-fluid" src="../../assets/_img/1.jpg" alt="">
                    </a>
                </div>
            </div>
            <hr/>
        </div>
    </section>
</template>

<script>
// import $ from 'jquery'
export default {
  components: {
  },
  mounted () {
    // this.$nextTick(this.runMasonry)
  },
  methods: {
    runMasonry () {
    //   this.$nextTick(() => {
    //     this.masonry = new Masonry(this.$refs.masonry, {
    //       itemSelector : '.item',
    //       fitWidth     : true,
    //     })
    //   })
    }
  }
}
</script>
