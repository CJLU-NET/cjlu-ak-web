<template>
  <div
    class="fixed top-0 bottom-0 left-0 right-0 overflow-hidden flex justify-center items-center bg-[url(@/assets/bg/1.png)] bg-fixed bg-center bg-cover z-[-100]"
  ></div>
  <div
    class="fixed top-0 bottom-0 left-0 right-0 overflow-hidden flex justify-center items-center backdrop-blur-sm backdrop-saturate-50 z-[-90]"
  ></div>
  <div
    class="absolute top-0 bottom-0 left-0 right-0 overflow-auto px-2"
    @scroll="scrolling"
    :style="{ background: scroll_bg }"
  >
    <div
      class="w-full h-full flex justify-center items-center space-x-50 flex-col <sm:space-x-0"
    >
      <div class="flex items-center justify-between">
        <img
          class="h-[7rem] md:h-[8rem] drop-shadow-2xl select-none"
          src="./assets/img/cjlu.png"
          alt=""
        />
        <div class="md:pl-5"></div>
        <img
          class="h-[7rem] md:h-[8rem] drop-shadow-2xl select-none"
          src="./assets/img/arknights.png"
          alt=""
        />
      </div>

      <div class="mt-10 flex flex-col items-center justify-center text-white">
        <p
          class="text-[5rem] sm:text-[6rem] drop-shadow-2xl font-sans antialiased tracking-wider"
        >
          计量杯
        </p>
        <p class="text-2xl animate-pulse drop-shadow-2xl">Arknights</p>
      </div>
    </div>
    <div class="max-w-screen-lg m-auto flex flex-col items-center py-24">
      <section id="rules">
        <p class="title text-5xl max-w-full text-center my-24">比赛规则</p>

        <div
          class="rounded-lg backdrop-blur-lg hover:backdrop-blur-2xl backdrop-saturate-100 hover:backdrop-saturate-50 shadow hover:shadow-lg duration-300 md:px-12 lg:px-24 px-6 py-12 mx-2 md:mx-12"
        >
          <ul class="list-disc list-left text-center text-white leading-7">
            <li>使用集成战略作为比赛场景，要求指定难度开局</li>
            <li>使用通关结算分数进行排名，分数细则详情查看加分规则</li>
            <li>禁止使用外挂和恶性BUG，违反时成绩无效化处理</li>
            <li class="italic">由于每届规则都有所变动，请查看详情</li>
          </ul>
        </div>
      </section>
      <section id="history">
        <p class="title text-5xl max-w-full text-center my-24">历届比赛</p>

        <div class="flex flex-wrap justify-center">
          <div
            class="rounded-lg backdrop-blur-lg hover:backdrop-blur-2xl backdrop-saturate-100 hover:backdrop-saturate-50 shadow hover:shadow-lg duration-300 text-center text-white lg:px-24 px-6 py-12 m-4 cursor-pointer select-none items-start"
            v-for="(competition, idx) in competitions"
            @click="competition.toggle = !competition.toggle"
            :class="{ 'card-fullscreen': competition.toggle }"
          >
          <div class="flex flex-col">
            <div class="flex flex-col">
            <p class="text-2xl font-bold">{{ competition.title }}</p>
            <p class="text-xl">{{ competition.date }}</p>
          </div>
            
            <component :is="competition.content" v-if="competition.toggle" class="mt-4"></component>
          </div>
          
          </div>
        </div>
      </section>
      <section id="contact">
        <p class="title text-5xl max-w-full text-center my-24">关注我们</p>

        <div class="flex flex-wrap justify-center">
          <!-- <a
          href="https://space.bilibili.com/3493293604211076"
          target="_blank"
          class="btn relative border-2 border-white rounded flex h-15 w-15 m-2"
        >
          <div class="relative z-1 w-full flex items-center p-2">
            <img class="w-full" src="/img/bilibili.svg" alt="">
          </div>
        </a> -->
          <a
            href="http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=GiTyRc5QpWkTUX1NnarbDcLhj1oo9J4t&authKey=ziAf%2F61Z4t1mxC5nEBlPAiCfiMmeDesGzoDvoUhs2K9bcaRbdhD83B5HAUiLBBHC&noverify=0&group_code=702944381"
            target="_blank"
            class="btn relative border-2 border-white rounded flex h-15 w-15 m-2"
            content="QQ群：量大大量太拉博士摆烂群（702944381）"
            v-tippy
          >
            <div class="relative w-full flex items-center p-1.5">
              <img class="w-full" src="./assets/img/qq.svg" alt="" />
            </div>
          </a>

          <a
            href="https://www.douyin.com/user/MS4wLjABAAAAyCdlRgr27SFX_54tlooRtv76ACCZVdreW_tLiDymzyDDBLMq1cRoP8G_yTY7GM57"
            target="_blank"
            class="btn relative border-2 border-white rounded flex h-15 w-15 m-2"
            content="抖音：中国计量大学E-sports达人社"
            v-tippy
          >
            <div class="relative w-full flex items-center p-1.5">
              <img class="w-full" src="./assets/img/douyin.svg" alt="" />
            </div>
          </a>
        </div>
      </section>
      <section id="footer" class="mt-24">
        <div class="py-5">
          <p
            class="text-center text-white text-2xl font-bold drop-shadow-2xl my-2"
          >
            友情链接
          </p>
          <ul class="flex flex-col sm:flex-row justify-center items-center">
            <li class="px-2">
              <a
                href="https://www.cjlu.edu.cn"
                target="_blank"
                class="text-white"
                >中国计量大学</a
              >
            </li>
            <li class="px-2">
              <a href="https://bbs.cjlu.cc" target="_blank" class="text-white"
                >量见论坛</a
              >
            </li>
            <li class="px-2">
              <a href="https://cp.cjlu.cc" target="_blank" class="text-white"
                >便民平台</a
              >
            </li>
            <li class="px-2">
              <a href="https://mc.cjlu.cc" target="_blank" class="text-white"
                >计量MC</a
              >
            </li>
          </ul>
        </div>
        <div>
          <p class="text-center text-sm text-white italic drop-shadow-xl">
            Made with <span class="text-lg">❤️</span> by
            <a href="https://fosky.top" target="_blank" class="underline"
              >FoskyM</a
            >
            &copy; 2024
          </p>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="jsx">
import { h, ref } from "vue";
const scroll_bg = ref("rgba(21, 91, 243, 0.025)");
const scrolling = (e) => {
  const clientHeight = e.target.clientHeight;
  const scrollHeight = e.target.scrollHeight;
  const scrollTop = e.target.scrollTop;
  if (scrollTop * 2 > clientHeight) {
    scroll_bg.value = `rgba(21, 91, 243, 0.125)`;
  } else {
    scroll_bg.value = `rgba(21, 91, 243, ${scrollTop / clientHeight / 4})`;
  }
};

import img1 from './assets/img/competition/1.jpg'
import img2 from './assets/img/competition/2.jpg'

const competitions = ref([
  {
    title: "第一届",
    date: "2023年5月2日",
    content: h('div', {}, [
      h('img', { src: img1, alt: "第一届海报", class: "w-full h-auto" }),
    ]),
    toggle: false,
  },
  {
    title: "第二届",
    date: "2024年3月22日",
    content: h('div', {}, [
      h('img', { src: img2, alt: "第二届海报", class: "w-full h-auto" }),
    ]),
    toggle: false,
  },
]);
</script>

<style scoped></style>
