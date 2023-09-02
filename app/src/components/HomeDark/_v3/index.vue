<template>
  <div>
    <video-pop-up />
    <drawer @toggleSidebar="toggleSidebar" :sidebar="sidebar" />
    <header-one image="logo-2.png" @toggleSidebar="toggleSidebar" />
    <single-play-post />
    <video-news />
    <features class="mt-150 pb-50" />
    <post-gallery class="pt-50" />
    <trending-news />
    <home-one-post-area class="pt-5" />
    <footer-dark />
    <back-to-top />
  </div>
</template>

<script>
import Drawer from "../../Mobile/Drawer.vue";
import VideoPopUp from "../../Utility/VideoPopUp.vue";
import HeaderOne from "../../Utility/Header/index";
import BackToTop from "../../Helpers/BackToTop.vue";
import SinglePlayPost from "../../Home/SinglePlayPost.vue";
import VideoNews from "../../Home/VideoNews.vue";
import Features from "../../Home/Features.vue";
import PostGallery from "../../Home/PostGallery.vue";
import HomeOnePostArea from "../../_Containers/HomeOnePostArea.vue";
import TrendingNews from "../../Home/TrendingNews.vue";
import FooterDark from "../../Utility/Footer/FooterDark.vue";
export default {
  components: {
    VideoPopUp,
    Drawer,
    HeaderOne,
    BackToTop,
    SinglePlayPost,
    VideoNews,
    Features,
    PostGallery,
    HomeOnePostArea,
    TrendingNews,
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