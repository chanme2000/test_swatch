<template>
  <section
    :style="{ backgroundImage: `url(${bgUrl})`, height: `${windowHeight}px` }"
    @wheel.prevent="onWheel"
  >
    <article>
      <p :style="{ color: section.color }">{{ section.title }}</p>
      <span :style="{ color: section.color === '#d4164c' ? '#111' : '#fff' }">{{ section.desc }}</span>
    </article>
    <img
      v-for="(img, i) in section.images"
      :key="i"
      :src="getImgUrl(img)"
      :class="`p${index + 1}${i + 1}`"
      :style="getImageStyle(i)"
    />
  </section>
</template>

<script>
export default {
  name: 'Section',
  props: {
    section: Object,
    index: Number,
    mousePos: Object,
  },
  emits: ['scrollUp', 'scrollDown'],
  data() {
    return {
      windowHeight: window.innerHeight,
      basePositions: {
        0: [
          { right: 20, bottom: 20 },
          { right: 130, bottom: -40 },
          { right: 60, bottom: 180 },
        ],
        1: [
          { right: 180, bottom: 30 },
          { right: 130, bottom: -40 },
        ],
        2: [
          { right: 180, bottom: 30 },
          { right: 110, bottom: -270 },
          { right: -70, bottom: -130 },
        ],
        3: [
          { right: 20, bottom: -120 },
          { right: 0, bottom: -180 },
        ],
      },
    };
  },
  computed: {
    bgUrl() {
      return require (`@/assets/img/${this.section.bg}`);
    },
  },
  methods: {
    getImgUrl(imgName) {
      return require (`@/assets/img/${imgName}`);
    },
    getImageStyle(i) {
      const { x, y } = this.mousePos;
      const base = this.basePositions[this.index]?.[i] || {
        right: 0,
        bottom: 0,
      };
      return {
        position: 'absolute',
        right: `${base.right + x / 30}px`,
        bottom: `${base.bottom + y / 30}px`,
        transition: 'transform 0.1s',
      };
    },
    onWheel(e) {
      if (e.deltaY > 0) {
        this.$emit('scrollDown');
      } else {
        this.$emit('scrollUp');
      }
    },
  },
};
</script>