<template>
  <div>
    <video-pop-up />
    <drawer @toggleSidebar="toggleSidebar" :sidebar="sidebar" />
    <header-three @toggleSidebar="toggleSidebar" />
    <post-play class="mt-100" :datas="post" />
    <trending-post :datas="trendingPost" :buisnessData="buisnessData" />
    <international-post
      :internationalPost="internationalPost"
      :opinionPost="opinionPost"
      :scienceNews="scienceNews"
    />
    <Footer />
    <back-to-top />
  </div>
</template>

<script>
import HeaderThree from "../Utility/HomeThree/index";
import PostPlay from "./PostPlay.vue";
import post from "../Data/post";
import trendingPost from "../Data/TrendingHomeThree";
import internationalPost from "../Data/InernationalPost";
import TrendingPost from "./TrendingPost.vue";
import InternationalPost from "./InternationalPost.vue";
import Footer from "./Footer.vue";
import Drawer from "../Mobile/Drawer.vue";
import VideoPopUp from "../Utility/VideoPopUp.vue";
import BackToTop from "../Helpers/BackToTop.vue";
export default {
  components: {
    HeaderThree,
    PostPlay,
    TrendingPost,
    InternationalPost,
    Footer,
    Drawer,
    VideoPopUp,
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

<style></style>
