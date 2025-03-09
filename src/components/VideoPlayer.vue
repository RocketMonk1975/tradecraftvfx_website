<template>
  <div class="video-container" :class="{ 'autoplay': autoplay, 'with-controls': controls }">
    <video 
      :src="require('@/assets/videos/' + src)" 
      :poster="poster ? require('@/assets/images/' + poster) : ''"
      :autoplay="autoplay" 
      :loop="loop" 
      :muted="muted"
      :controls="controls"
      :playsinline="playsinline"
      class="video-element"
    ></video>
    <div v-if="showOverlay" class="video-overlay">
      <slot name="overlay"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoPlayer',
  props: {
    src: {
      type: String,
      required: true
    },
    poster: {
      type: String,
      default: null
    },
    autoplay: {
      type: Boolean,
      default: false
    },
    loop: {
      type: Boolean,
      default: false
    },
    muted: {
      type: Boolean,
      default: true
    },
    controls: {
      type: Boolean,
      default: false
    },
    playsinline: {
      type: Boolean,
      default: true
    },
    showOverlay: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.video-container {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 8px;
  background-color: #000;
}

.video-element {
  width: 100%;
  display: block;
}

.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
  color: white;
}

.autoplay.with-controls .video-overlay {
  pointer-events: none;
}
</style>
