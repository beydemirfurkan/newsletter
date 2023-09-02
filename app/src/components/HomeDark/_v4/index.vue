<template>
  <div>
    <video-pop-up />
    <drawer @toggleSidebar="toggleSidebar" :sidebar="sidebar" />
    <header-one
      class="header-dark"
      image="logo-2.png"
      :darkClass="{ menuItem: 'newspark-dark-menu-items' }"
      @toggleSidebar="toggleSidebar"
    />
    <post-gallery
      class="pt-50"
      :darkClass="{
        section: 'post_gallery_sidebar_dark',
        item: 'gallery_item_dark',
      }"
    />
    <features :dark="true" />
    <trending-news
      :dark="true"
      :darkClass="{
        title: 'section-title-2',
        item: 'trending-news-item-dark',
        news_section: 'trending-news-post-items-dark',
        news_item: 'gallery_item_dark',
      }"
    />
    <single-play-post class="single-play-post-dark-area" />
    <video-news
      :dark="true"
      class="video-news-dark"
      :darkClass="{
        section: 'video-news-box-dark',
        section_2: 'video-news-post-item-dark',
        news_item: 'gallery_item_dark',
      }"
    />
    <home-one-post-area :dark="true" />
    <footer-dark />
    <back-to-top />
  </div>
</template>

<script>
import Drawer from "../../Mobile/Drawer.vue";
import VideoPopUp from "../../Utility/VideoPopUp.vue";
import HeaderOne from "../../Utility/Header/index";
import PostGallery from "../../Home/PostGallery.vue";
import Features from "../../Home/Features.vue";
import TrendingNews from "../../Home/TrendingNews.vue";
import SinglePlayPost from "../../Home/SinglePlayPost.vue";
import VideoNews from "../../Home/VideoNews.vue";
import HomeOnePostArea from "../../_Containers/HomeOnePostArea.vue";
import BackToTop from "../../Helpers/BackToTop.vue";
import FooterDark from "../../Utility/Footer/FooterDark.vue";
export default {
  components: {
    VideoPopUp,
    Drawer,
    HeaderOne,
    PostGallery,
    Features,
    TrendingNews,
    SinglePlayPost,
    VideoNews,
    HomeOnePostArea,
    BackToTop,
    FooterDark,
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

<style>
/* play post */
.single-play-post-area .single-play-box {
  padding: 23px 12px !important;
}
</style>