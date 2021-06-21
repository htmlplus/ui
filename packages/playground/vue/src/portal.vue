<template>
  <div>
    <div class="center">
      <DialogToggler connector="dialog-animation"> Open </DialogToggler>
    </div>
    <Dialog portal animation="fade" connector="dialog-animation">
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

<script>
import {
  Dialog,
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogToggler,
} from "@htmlplus/vue";

export default {
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
};
</script>

<style>
.center {
  text-align: center;
}
</style>
