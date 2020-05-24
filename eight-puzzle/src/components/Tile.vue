<template>
  <div :style="{'grid-row': row, 'grid-column': column,  'width': 'var(--tile-side)', 'height': 'var(--tile-side)', 'overflow': 'hidden'}">
    <img :src="imageSrc" :title="number"
    :style="{
      'width': 'var(--board-side)',
      'height': 'var(--board-side)',
      'margin-left': 'calc(var(--tile-side) * -' + ((number - 1) % 3) + ')',
      'margin-top': 'calc(var(--tile-side) * -' + Math.trunc((number - 1) / 3) + ')'
      }" />
    <!-- v-bind:style="{width: 'var(--board-side)', height: 'var(--board-side)', margin-left: 'calc(var(--tile-side) * -' + (column - 1) + ')'}" -->
  </div>
</template>

<script>
export default {
  name: "Tile",
  props: {
    number: Number,
    row: Number,
    column: Number,
    imageSrc: String
  },
  setup(props) {
    console.log('offset width ' + props.number + ': ' + ((props.number - 1) % 3));
    console.log('offset height ' + props.number + ': ' + Math.trunc((props.number - 1) / 3));
  }
};
</script>