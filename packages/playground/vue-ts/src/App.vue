<template>
  <div>
    <Switch v-model="checked" /> {{checked}}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  Switch
} from "./components";

export default defineComponent({
  components: {
    Switch
  },
  data() {
    return {
      checked: true
    }
  }
})
</script>