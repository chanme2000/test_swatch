<template>
  <div id="app">
    <header>
      <h1>
        <a href="#"><img src="./assets/img/logo.png" alt="Logo"></a>
      </h1>
      <ul id="sns">
        <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
        <li><a href="#"><i class="fa-brands fa-x-twitter"></i></a></li>
        <li><a href="#"><i class="fa-brands fa-youtube"></i></a></li>
      </ul>
      <ul id="menu">
        <li
          v-for="(item, i) in sections"
          :key="i"
          :class="{ on: currentSection === i }"
        >
          <a href="#" @click.prevent="scrollToSection(i)">{{ item.title }}</a>
        </li>
      </ul>
    </header>
    <main @mousemove="updateMouse">
      <Section
        v-for="(section, i) in sections"
        :key="i"
        :index="i"
        :section="section"
        :mousePos="mousePos"
        @scrollUp="scrollToSection(i - 1)"
        @scrollDown="scrollToSection(i + 1)"
      />
    </main>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import Section from './components/Section.vue';

export default {
  name: 'App',
  components: {
    Section
  },
  setup() {
    const sections = [
      {
        title: 'Full Blossom',
        desc: 'Lorem ipsum dolor sit amet',
        bg: 'bg1.jpg',
        images: ['obj11.png', 'obj12.png', 'obj13.png'],
        color: '#d4164c'
      },
      {
        title: 'Be Colorful',
        desc: 'Lorem ipsum dolor sit amet',
        bg: 'bg2.jpg',
        images: ['obj21.png', 'obj22.png'],
        color: '#fff'
      },
      {
        title: 'Time On Board',
        desc: 'Lorem ipsum dolor sit amet',
        bg: 'bg3.jpg',
        images: ['obj31.png', 'obj32.png', 'obj33.png'],
        color: '#ffec6a'
      },
      {
        title: 'Shiny Addict',
        desc: 'Lorem ipsum dolor sit amet',
        bg: 'bg4.jpg',
        images: ['obj41.png', 'obj42.png'],
        color: '#005a89'
      }
    ];

    const currentSection = ref(0);
    const mousePos = ref({ x: 0, y: 0 });

    const scrollToSection = (index) => {
      if (index < 0 || index >= sections.length) return;
      const top = window.innerHeight * index;
      window.scrollTo({ top, behavior: 'smooth' });
      currentSection.value = index;
    };

    const updateMouse = (e) => {
      mousePos.value = { x: e.pageX, y: e.pageY };
    }

    const updateCurrentSection = () => {
      const scrollTop = window.scrollY;
      const winHeight = window.innerHeight;
      currentSection.value = Math.round(scrollTop / winHeight);
    };

    onMounted(() => {
      window.addEventListener('scroll', updateCurrentSection);
    });

    return {
      sections,
      currentSection,
      scrollToSection,
      updateMouse,
      mousePos
    };
  }
};
</script>
