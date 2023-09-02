<template>
  <div>
    <video-pop-up />
    <drawer @toggleSidebar="toggleSidebar" :sidebar="sidebar" />
    <!--====== HEADER PART START ======-->
    <Header
      @toggleSidebar="toggleSidebar"
      class="header-dark"
      image="logo-2.png"
      :darkClass="{ menuItem: 'newspark-dark-menu-items' }"
    />
    <!--====== HEADER PART ENDS ======-->

    <!--====== POST PART START ======-->

    <!-- <post-part-home-one /> -->

    <!--====== POST PART ENDS ======-->

    <!--====== POST GALLERY PART START ======-->
    <post-gallery
      class="pt-50"
      :darkClass="{
        section: 'post_gallery_sidebar_dark',
        item: 'gallery_item_dark',
      }"
    />

    <!--====== POST GALLERY PART ENDS ======-->

    <!--====== FEATURE PART START ======-->
    <features :dark="true" />

    <!--====== FEATURE PART ENDS ======-->

    <!--====== TRENDING NEWS PART START ======-->
    <trending-news
      :dark="true"
      :darkClass="{
        title: 'section-title-2',
        item: 'trending-news-item-dark',
        news_section: 'trending-news-post-items-dark',
        news_item: 'gallery_item_dark',
      }"
    />
    <!--====== TRENDING NEWS PART ENDS ======-->

    <!--====== SINGLE PLAY POST PART START ======-->
    <single-play-post class="single-play-post-dark-area" />

    <!--====== VIDEO NEWS PART START ======-->

    <video-news
      :dark="true"
      class="video-news-dark"
      :darkClass="{
        section: 'video-news-box-dark',
        section_2: 'video-news-post-item-dark',
        news_item: 'gallery_item_dark',
      }"
    />

    <!--====== VIDEO NEWS PART ENDS ======-->

    <!--====== ALL POST PART START ======-->

    <home-one-post-area :dark="true" />

    <!--====== ALL POST PART ENDS ======-->

    <!--====== FOOTER PART START ======-->

    <footer-dark />

    <!--====== FOOTER PART ENDS ======-->

    <!--====== GO TO TOP PART START ======-->
    <back-to-top />
    <!--====== GO TO TOP PART ENDS ======-->
  </div>
</template>
<script>
import Header from "../Utility/Header/index";
// import PostPartHomeOne from "../Home/PostPartHomeOne.vue";
import PostGallery from "../Home/PostGallery.vue";
import Features from "../Home/Features.vue";
import TrendingNews from "../Home/TrendingNews.vue";
import SinglePlayPost from "../Home/SinglePlayPost.vue";
import VideoNews from "../Home/VideoNews.vue";

import Drawer from "../Mobile/Drawer.vue";
import VideoPopUp from "../Utility/VideoPopUp.vue";
import BackToTop from "../Helpers/BackToTop.vue";
import FooterDark from "../Utility/Footer/FooterDark.vue";
import HomeOnePostArea from "../_Containers/HomeOnePostArea.vue";
export default {
  components: {
    Header,
    // PostPartHomeOne,
    PostGallery,
    Features,
    TrendingNews,
    SinglePlayPost,
    VideoNews,
    Drawer,
    VideoPopUp,
    BackToTop,
    FooterDark,
    HomeOnePostArea,
  },
  data: () => ({
    sidebar: false,
  }),
  mounted() {
    document.body.classList.add("home-dark");
  },
  beforeDestroy() {
    document.body.classList.remove("home-dark");
  },
  methods: {
    toggleSidebar() {
      this.sidebar = !this.sidebar;
    },
  },
};
</script>

<style scoped>
/* play post */
.single-play-post-area .single-play-box {
  padding: 23px 12px !important;
}
</style>
