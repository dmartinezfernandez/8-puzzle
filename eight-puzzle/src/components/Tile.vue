<template>
  <div
    :style="{
      'grid-row': row,
      'grid-column': column,
      'width': 'var(--tile-side)',
      'height': 'var(--tile-side)',
      'overflow': 'hidden',
      'cursor': canSlide ? 'pointer' : 'default',
      'opacity': opacity
      }"
    v-on:click="onclick(number, canSlide)"
  >
    <img
      :src="imageSrc"
      :title="number"
      :style="{
      'width': 'var(--board-side)',
      'height': 'var(--board-side)',
      'margin-left': 'calc(var(--tile-side) * -' + ((number - 1) % 3) + ')',
      'margin-top': 'calc(var(--tile-side) * -' + Math.trunc((number - 1) / 3) + ')'
      }"
    />
  </div>
</template>

<script>
import logic from "./logic.js";

export default {
  name: "Tile",
  props: {
    number: Number,
    row: Number,
    column: Number,
    imageSrc: String,
    opacity: String,
    canSlide: Boolean
  },
  methods: {
    onclick: (number, canSlide) => {
      if (!canSlide) console.log("Can't slide " + number + '.');
      else {
        console.log(number);
        logic.clicks.push(number);
        console.log(logic.clicks);
      }
    }
  },
  setup(props) {
    return {};
  }
};
</script>