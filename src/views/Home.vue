<template>
  <div class='home'>
    <Header/>
    <Carousel/>
    <WorthCase/>
    <Service/>
    <Video/>
    <Gallery/>
    <Counter/>
    <Team/>
    <Contact/>
    <GoTop/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Carousel from '@/components/Home/Carousel.vue'
import WorthCase from '@/components/Home/WorthCase.vue'
import Service from '@/components/Home/Service.vue'
import Video from '@/components/Home/Video.vue'
import Gallery from '@/components/Home/Gallery.vue'
import Counter from '@/components/Home/Counter.vue'
import Team from '@/components/Home/Team.vue'
import Contact from '@/components/Home/Contact.vue'
import GoTop from '@/components/GoTop.vue'
import Footer from '@/components/Footer.vue'
import $ from 'jquery'

export default {
  name: 'home',
  created () {
    this.animationShow()
  },
  mounted () {
    this.counter()
  },
  methods: {
    animationShow () {
      $(window).on('scroll load', function () {
        $('.fade-content').each(function (i) {
          var bottomOfobject = $(this).offset().top + $(this).outerHeight() / 8
          var bottomOfwindow = $(window).scrollTop() + $(window).height()
          if (bottomOfwindow > bottomOfobject) {
            $(this).addClass('active')
            if ($('.counter .fade-content').hasClass('counterArea')) {
              // vm.counter()
              // console.log('this')
            }
          } else {
            $(this).removeClass('active')
          }
        })
      })
    },
    counter () {
      $('.number').each(function () {
        $(this).prop('Counter', 0).animate({
          Counter: $(this).text()
        }, {
          duration: 5000,
          easing: 'swing',
          step: function (now) {
            $(this).text(Math.ceil(now))
          }
        })
      })
    }
  },
  components: {
    Header,
    Carousel,
    WorthCase,
    Service,
    Video,
    Gallery,
    Counter,
    Team,
    Contact,
    GoTop,
    Footer
  }
}
</script>
