<template>
  <div class="grid-container">
    <Tile
      v-for="(item, index) in game.board"
      v-bind:key="index"
      :number="item"
      :row="Math.floor(index / 3 + 1)"
      :column="1 + index % 3"
      :imageSrc="imageSrc"
      :opacity="game.isBlank(index) ? '0.05' : '1'"
      :canSlide="game.canSlide(index)"
      @click="onClick(item)"
      class="tile"
    />
  </div>
</template>

<script>
import Tile from "./Tile.vue";
import logic from "./logic.js";
import { ref, reactive } from "vue";

export default {
  name: "Board",
  components: {
    Tile
  },
  props: {
    msg: String,
    imageSrc: String
  },
  methods: {
    onClick: n => {
      console.log("Move: " + n);
    }
  },
  setup(props) {
    const game = reactive(logic.game);
    console.log(props.imageSrc);
    game.shuffle();
    //const board = ref(logic.game.board);
    //console.log(board.value);
    console.log(game.board);
    return {
      //board,
      game
    };
  }
};
</script>

<style scoped>
:root {
  --board-side: min(100vw, 100vh);
  --tile-side: calc(var(--board-side) / 3);
}

.grid-container {
  display: inline-grid;
  grid-template-columns: repeat(3, 1fr); /* var(--tile-side)*/
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 0px;
  padding: 0px;
  background-color: #21272a;
  width: var(--board-side);
  height: var(--board-side);
}
.tile {
  width: var(--tile-side);
  height: var(--tile-side);
}
</style>