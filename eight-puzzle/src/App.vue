<template>
  <div id="app">
    <Board :imageSrc="require('./assets/default.jpg')" class="board" ref="board" />

    <!-- Controls -->
    <aside>
      8-puzzle
      <br />
      <br />
      <img
        src="./assets/default.jpg"
        style="width: calc(var(--tile-side) * 0.66); height: calc(var(--tile-side) * 0.66);"
      />
      <br />
      <div style="display: none;">
        <!-- Hidden file input: -->
        <input type="file" name="file" id="file" ref="fileInput" />
        <!-- Customized button for file input: -->
        <input type="button" value="Change picture..." @click="changePicture" />
        <br />
        <br />
      </div>
      <input type="button" value="Shuffle" @click="shuffle" />&nbsp;
      <input type="button" value="Initialize" @click="initialize" />
      <br />

      <!--        3x3 tiles square...
        <br />? https://codepen.io/Escu/pen/KVLBYP
        <br />
        <br />https://stackoverflow.com/questions/53810434/crop-the-image-using-javascript
        <br />https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage
        <br />
        <br />https://stackoverflow.com/questions/40177493/drawing-onto-a-canvas-with-vue-js
        <br />

        <br />https://www.cs.princeton.edu/courses/archive/spr10/cos226/assignments/8puzzle.html
      -->
      <br />
      <footer class="darker">
        &copy; 2020 Daniel Martínez Fernández
        <br />MIT License
      </footer>
    </aside>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import Board from "./components/Board.vue";
import model from "./components/model.js";

function doSomething(i) {
  i++;
}
export default {
  name: "App",
  components: {
    Board
  },
  setup() {
    const changePicture = ref(null);
    const fileInput = ref(null);
    const board = ref(null);
    onMounted(() => {
      changePicture.value = () => {
        // Trigger click event on file input HTML element from customized button.
        fileInput.value.click();
      };
    });
    const shuffle = ref(() => {
      model.game.shuffle();
      board.value.refresh();
    });
    const initialize = ref(() => {
      model.game.initialize();
      board.value.refresh();
    });
    return {
      changePicture,
      fileInput,
      board,
      shuffle,
      initialize
    };
  }
};
</script>

<style scoped>
.board {
  vertical-align: top;
}

aside {
  display: inline-block;
  padding: 8px;
}

input[type="file"] {
  width: 0px;
  opacity: 0;
  overflow: hidden;
}

input[type="button"] {
  background-color: #0043ce /* Blue 30 */;
  font: inherit;
  cursor: pointer;
}
</style>>
