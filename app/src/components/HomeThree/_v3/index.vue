<template>
  <div>
    <video-pop-up />
    <drawer @toggleSidebar="toggleSidebar" :sidebar="sidebar" />
    <header-three @toggleSidebar="toggleSidebar" />
    <international-post
      :internationalPost="internationalPost"
      :opinionPost="opinionPost"
      :scienceNews="scienceNews"
    />
    <trending-post :datas="trendingPost" :buisnessData="buisnessData" />
    <post-play :datas="post" />
    <Footer />
    <back-to-top />
  </div>
</template>

<script>
import headerThree from "../../Utility/HomeThree/index";
import Drawer from "../../Mobile/Drawer.vue";
import VideoPopUp from "../../Utility/VideoPopUp.vue";
import post from "../../Data/post";
import trendingPost from "../../Data/TrendingHomeThree";
import internationalPost from "../../Data/InernationalPost";
import InternationalPost from "../InternationalPost.vue";
import TrendingPost from "../TrendingPost.vue";
import PostPlay from "../PostPlay.vue";
import Footer from "../Footer";
import BackToTop from "../../Helpers/BackToTop.vue";
export default {
  components: {
    VideoPopUp,
    Drawer,
    headerThree,
    InternationalPost,
    TrendingPost,
    PostPlay,
    Footer,
    BackToTop,
  },
  data: () => ({
    sidebar: false,
    post: post.data,
    trendingPost: trendingPost.data,
    buisnessData: trendingPost.buisness,
    internationalPost: internationalPost.international,
    opinionPost: internationalPost.opinionNews,
    scienceNews: internationalPost.scienceNews,
  }),
  mounted() {
    document.body.classList.add("home-3-bg");
  },
  beforeDestroy() {
    document.body.classList.remove("home-3-bg");
  },
  created() {
    document.addEventListener("scroll", this.topToBottom);
  },
  methods: {
    toggleSidebar() {
      this.sidebar = !this.sidebar;
    },
  },
};
</script>

<style>
</style>