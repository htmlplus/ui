<template>
  <div>
    <div class="center">
      <PlusDialogToggler connector="dialog-animation"> Open </PlusDialogToggler>
    </div>
    <PlusDialog portal animation="fade" connector="dialog-animation">
      <PlusDialogContent>
        <PlusDialogHeader> Dialog Title </PlusDialogHeader>
        <PlusDialogBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </PlusDialogBody>
        <PlusDialogFooter>
          <button @click="increase">
            Clicked {{ count }} {{ count === 1 ? "time" : "times" }}
          </button>
          <PlusDialogToggler> Close </PlusDialogToggler>
        </PlusDialogFooter>
      </PlusDialogContent>
    </PlusDialog>
  </div>
</template>

<script>
import {
  PlusDialog,
  PlusDialogBody,
  PlusDialogContent,
  PlusDialogFooter,
  PlusDialogHeader,
  PlusDialogToggler,
} from "@htmlplus/vue-original";

export default {
  components: {
    PlusDialog,
    PlusDialogBody,
    PlusDialogContent,
    PlusDialogFooter,
    PlusDialogHeader,
    PlusDialogToggler,
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
