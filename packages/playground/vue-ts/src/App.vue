<template>
  <div>
    <div class="center">
      <DialogToggler connector="dialog-animation"> Open </DialogToggler>
    </div>
    <Dialog animation="fade" connector="dialog-animation">
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
    </Dialog>
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
  },
});
</script>