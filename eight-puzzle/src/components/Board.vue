<template>
  <div class="grid-container" :key="componentKey">
    <!-- Why :key="componentKey"? Read this: https://michaelnthiessen.com/force-re-render/ -->
    <Tile
      v-for="(number, index) in game.board"
      :key="index"
      :number="number"
      :row="game.getRow(index) + 1"
      :column="game.getColumn(index) + 1"
      :imageSrc="imageSrc"
      :opacity="game.isBlank(index) ? '0.05' : '1'"
      :canSlide="game.canSlide(index)"
      @click="onClick(index, componentKey)"
      class="tile"
    />
  </div>
</template>

<script>
import Tile from "./Tile.vue";
import model from "./model.js";
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
  setup(props) {
    const game = reactive(model.game);
    const componentKey = ref(false);
    const onClick = i => {
      if (model.game.slide(i)) {
        componentKey.value = !componentKey.value;
      }
      console.log(
        "Move: " +
          i +
          ", count: " +
          model.game.count +
          ", board: " +
          game.board.join()
      );
    };
    const refresh = () => {
      componentKey.value = !componentKey.value;
    };
    return {
      game,
      componentKey,
      onClick,
      refresh
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