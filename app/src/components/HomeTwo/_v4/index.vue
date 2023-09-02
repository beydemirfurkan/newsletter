<template>
  <div>
    <video-pop-up />
    <drawer @toggleSidebar="toggleSidebar" :sidebar="sidebar" />
    <header-two @toggleSidebar="toggleSidebar" />
    <posts
      :trending="trendingPost"
      :features="featurePost"
      :businessPost="buisnessPost"
      :mostViews="mostViews"
      :finance="finance"
    />
    <home-two-post-style-two :datas="playPost" />
    <video-style-post :videoNews="videoNews" />
    <posts-two :morePost="morePost" />
    <others :sports="sports" :otherfinance="otherfinance" />
    <Footer />
    <back-to-top />
  </div>
</template>

<script>
import Drawer from "../../Mobile/Drawer.vue";
import VideoPopUp from "../../Utility/VideoPopUp.vue";
import HeaderTwo from "../../Utility/HeaderTwo/index";
import Posts from "../Posts.vue";
import trendingPost from "../../Data/HomeTwoPost";
import BackToTop from "../../Helpers/BackToTop.vue";
import HomeTwoPostStyleTwo from "../../_Containers/HomeTwoPostStyleTwo.vue";
import VideoStylePost from "../VideoStylePost.vue";
import PostsTwo from "../PostsTwo.vue";
import Others from "../Others.vue";
import Footer from "../../HomeTwo/Footer.vue";
export default {
  components: {
    VideoPopUp,
    Drawer,
    HeaderTwo,
    Posts,
    BackToTop,
    HomeTwoPostStyleTwo,
    VideoStylePost,
    PostsTwo,
    Others,
    Footer,
  },
  data: () => ({
    sidebar: false,
    trendingPost: trendingPost.trending,
    featurePost: trendingPost.features,
    buisnessPost: trendingPost.buisness,
    mostViews: trendingPost.trending,
    finance: trendingPost.finance,
    videoNews: trendingPost.videoNews,
    morePost: trendingPost.morePost,
    playPost: trendingPost.posts,
    sports: trendingPost.sports,
    otherfinance: trendingPost.otherfinance,
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
    topToBottom() {
      const result = document.querySelector(".go-top");
      if (
        document.body.scrollTop > window.innerHeight ||
        document.documentElement.scrollTop > window.innerHeight
      ) {
        result.classList.add("active");
      } else {
        result.classList.remove("active");
      }
    },
  },
};
</script>

<style>
</style>