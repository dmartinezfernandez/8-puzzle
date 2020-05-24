<template>
  <div id="app">
    <Board :imageSrc="require('./assets/default.jpg')" class="board"/>
    <aside>
      8-puzzle
      <br />
      <img src="./assets/default.jpg" style="width: 60px; height: 60px;" />
      <div style="width: 120px; height: 120px; overflow: hidden;">
      <img src="./assets/default.jpg" style="width: 240px; height: 240px; margin-left: -120px;" />
      </div>
      <br />
      <label for="file" style="cursor: pointer;">
        <u>Choose a file...</u>
        <input type="file" name="file" id="file" style="width: 0px; opacity: 0; overflow: hidden;" />
      </label>
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
      <footer class="darker">&copy; 2020 Daniel Martínez Fernández<br>MIT License</footer>
    </aside>
  </div>
</template>

<script>
import Board from "./components/Board.vue";

export default {
  name: "App",
  components: {
    Board
  },
  setup() {
    console.log("debugging...");
    let x = 2;
    x++;
    console.log(x);
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
</style>>
