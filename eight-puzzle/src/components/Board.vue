<template>
  <div class="grid-container">
    <Tile :number="1" :row="1" :column="1" :imageSrc="imageSrc" class="tile" />
    <Tile :number="2" :row="1" :column="2" :imageSrc="imageSrc" class="tile" />
    <Tile :number="3" :row="1" :column="3" :imageSrc="imageSrc" class="tile" />
    <Tile :number="4" :row="2" :column="1" :imageSrc="imageSrc" class="tile" />
    <Tile :number="5" :row="2" :column="2" :imageSrc="imageSrc" class="tile" />
    <Tile :number="6" :row="2" :column="3" :imageSrc="imageSrc" class="tile" />
    <Tile :number="7" :row="3" :column="1" :imageSrc="imageSrc" class="tile" />
    <Tile :number="8" :row="3" :column="2" :imageSrc="imageSrc" class="tile" />
  </div>
</template>

<script>
import Tile from "./Tile.vue";

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
    console.log(props.imageSrc);
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