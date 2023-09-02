<template>
  <div>
    <video-pop-up />
    <drawer @toggleSidebar="toggleSidebar" :sidebar="sidebar" />
    <header-two @toggleSidebar="toggleSidebar" />
    <video-style-post :videoNews="videoNews" />
    <home-two-post-style-two :datas="playPost" />
    <posts
      :trending="trendingPost"
      :features="featurePost"
      :businessPost="buisnessPost"
      :mostViews="mostViews"
      :finance="finance"
    />
    <posts-two :morePost="morePost" />
    <others :sports="sports" :otherfinance="otherfinance" />
    <Footer />
    <back-to-top />
  </div>
</template>

<script>
import Drawer from "../../Mobile/Drawer.vue";
import VideoPopUp from "../../Utility/VideoPopUp.vue";
import headerTwo from "../../Utility/HeaderTwo/index";
import trendingPost from "../../Data/HomeTwoPost";
import BackToTop from "../../Helpers/BackToTop.vue";
import VideoStylePost from "../VideoStylePost.vue";
import HomeTwoPostStyleTwo from "../../_Containers/HomeTwoPostStyleTwo.vue";
import PostsTwo from "../PostsTwo.vue";
import Posts from "../Posts.vue";
import Others from "../Others.vue";
import Footer from "../../HomeTwo/Footer.vue";
export default {
  components: {
    VideoPopUp,
    Drawer,
    headerTwo,
    BackToTop,
    VideoStylePost,
    HomeTwoPostStyleTwo,
    PostsTwo,
    Posts,
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
  methods: {
    toggleSidebar() {
      this.sidebar = !this.sidebar;
    },
  },
};
</script>

<style>
</style>