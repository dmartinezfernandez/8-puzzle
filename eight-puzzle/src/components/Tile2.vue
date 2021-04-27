<template>
  <canvas
    ref="tile"
    :title="number"
    :style="{
      'grid-row': row,
      'grid-column': column,
      width: 'var(--tile-side)',
      height: 'var(--tile-side)',
      overflow: 'hidden',
      cursor: canSlide ? 'pointer' : 'default',
      opacity: opacity,
    }"
  />
</template>
<script>
import { ref } from "vue";
const src = require("../assets/default.jpg");

export default {
  name: "Tile2",

  props: {
    number: String,
    row: Number,
    column: Number,
    opacity: String,
    canSlide: Boolean,
  },

  setup(props) {
    const tile = ref(null);
    const image = new Image();
    const i = parseInt(props.number) - 1,
      row = Math.trunc(i / 3),
      column = i % 3;
    image.onload = () => {
      const sw = image.naturalWidth / 3,
        sh = image.naturalHeight / 3,
        dx = 0,
        dy = 0,
        dw = tile.value.width,
        dh = tile.value.height,
        sx = column * sw,
        sy = row * sh;
      tile.value
        .getContext("2d")
        .drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
    };
    image.src = src;
    return {
      tile,
    };
  },
};
</script>