<template>
  <div>
    <div class="center">
      <DialogToggler connector="dialog-animation"> Open </DialogToggler>
      <!-- <plus-dialog-toggler connector="dialog-animation"> Open </plus-dialog-toggler> -->
    </div>
    <Dialog animation="fade" connector="dialog-animation" @open="op">
    <!-- <plus-dialog animation="fade" connector="dialog-animation" @plus-open="op"> -->
      <plus-dialog-content>
        <plus-dialog-header> Dialog Title </plus-dialog-header>
        <plus-dialog-body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </plus-dialog-body>
        <plus-dialog-footer>
          <plus-dialog-toggler> Close </plus-dialog-toggler>
        </plus-dialog-footer>
      </plus-dialog-content>
    <!-- </plus-dialog> -->
    </Dialog>
    <!-- <Dialog animation="fade" connector="dialog-animation">
      <DialogContent>
        <DialogHeader> Dialog Title </DialogHeader>
        <DialogBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </DialogBody>
        <DialogFooter>
          <button @click="increase">
            Clicked {{ count }} {{ count === 1 ? "time" : "times" }}
          </button>
          <DialogToggler> Close </DialogToggler>
        </DialogFooter>
      </DialogContent>
    </Dialog> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  Dialog,
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogToggler,
} from "./components";

export default defineComponent({
  components: {
    Dialog,
    DialogBody,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogToggler,
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increase() {
      this.count++;
    },
    op() {
      alert(123);
    },
  },
});
</script>