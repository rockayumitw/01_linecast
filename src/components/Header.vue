<template>
  <header class="header bg-white fixed-top pb-lg-2 pt-lg-2 pb-md-2 pt-md-2">
    <div class="container">
          <nav class="navbar navbar-expand-md">
            <router-link class="navbar-brand" to="/"><img src="../assets/_img/logo.fw_-e1576461164273.png" alt=""></router-link>
            <button
        class="navbar-toggler x collapsed"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
      </button>
      <div class="navbar-collapse collapse bg-white" id="navbarCollapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" @click.prevent="selectMenu('worthCase')" href="/">超值方案</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click.prevent="selectMenu('service')" href="/">服務項目</a>
          </li>
          <li class="nav-item ">
            <a class="nav-link" @click.prevent="selectMenu('video')" href="/">影片介紹</a>
          </li>
          <li class="nav-item ">
            <a class="nav-link" @click.prevent="selectMenu('gallery')" href="/">介面設計</a>
          </li>
          <li class="nav-item ">
            <a class="nav-link" @click.prevent="selectMenu('team')" href="/">成功案例</a>
          </li>
          <li class="nav-item ">
            <a class="nav-link" @click.prevent="selectMenu('contact')" href="/">聯絡我們</a>
          </li>
          <!-- <li class="nav-item active">
            <router-link class="nav-link" to="/About">
              {{ $t('about') }}
              <span class="sr-only">(current)</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/News">{{ $t('news') }}</router-link>
          </li>
          <li class="nav-item">
            <span v-html="$t('email')"></span>
          </li>-->
        </ul>
        <form class="form-inline mt-2 mt-md-0">
          <!--語言切換-->
          <!-- <Language /> -->
          <!-- <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> -->
        </form>
      </div>
    </nav>
    </div>
  </header>
</template>

<script>
import $ from 'jquery'

export default {
  mounted () {
    $(window).resize(function () {
      $(window).scroll(function () {
        var headerHeight = $('header').height()
        if ($(document).scrollTop() > 50) {
          $('.header').addClass('fixedTop')
          $('#progress-container-el').css('top', headerHeight + 'px')
        } else {
          $('.header').removeClass('fixedTop')
          $('#progress-container-el').css('top', headerHeight + 'px')
        }
      })
    })
    // this.calcProgressPosition()
  },
  compued: {
  },
  methods: {
    selectMenu (select) {
      $('html, body').stop().animate({
        scrollTop: $('.' + select).offset().top - 160
      }, 400)
    }
    // calcProgressPosition () {
    //   $(window).resize(function () {
    //     $(window).scroll(function () {
    //       var headerHeight = $('header').height()
    //       console.log(headerHeight)
    //     }).trigger('scroll')
    //   }).trigger('resize')
    // }
  }
}
</script>
