<template>
  <div>
    <video-pop-up />
    <drawer @toggleSidebar="toggleSidebar" :sidebar="sidebar" />
    <header-three @toggleSidebar="toggleSidebar" />
    <section class="trending-area pt-85">
      <div class="container custom-container">
        <div class="row">
          <template v-for="(data, index) in buisnessData">
            <div :key="index" class="col-lg-4 col-md-6">
              <div class="trending-image-post mt-30">
                <img :src="require(`@/assets/images/${data.image}`)" alt="" />
                <div class="trending-image-content">
                  <div class="post-meta">
                    <div class="meta-categories">
                      <a href="#">TECHNOLOGY</a>
                    </div>
                    <div class="meta-date">
                      <span>March 26, 2020</span>
                    </div>
                  </div>
                  <h3 class="title">
                    <a href="#"
                      >Japan’s virus success has puzzled the world. Is its luck
                      running out?</a
                    >
                  </h3>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </section>
    <trending-post :datas="trendingPost" :buisnessData="buisnessData" />
    <post-play :datas="post" />
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
import Drawer from "../../Mobile/Drawer.vue";
import VideoPopUp from "../../Utility/VideoPopUp.vue";
import post from "../../Data/post";
import trendingPost from "../../Data/TrendingHomeThree";
import internationalPost from "../../Data/InernationalPost";
import HeaderThree from "../../Utility/HomeThree/index";
import TrendingPost from "../TrendingPost.vue";
import PostPlay from "../PostPlay.vue";
import InternationalPost from "../InternationalPost.vue";
import Footer from "../Footer";
import BackToTop from "../../Helpers/BackToTop.vue";
export default {
  components: {
    VideoPopUp,
    Drawer,
    HeaderThree,
    TrendingPost,
    PostPlay,
    InternationalPost,
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