<template>
  <div>
    <PlusSwitch :class="(checked ? 'a' : 'b') + ' ' + (t ? 'c' : 'd')" v-model="checked" @change="ch" />
    {{ checked }}
    <button @click="t = !t">
      toggle
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  PlusSwitch,
// } from "./components";
} from "@htmlplus/vue";


export default defineComponent({
  components: {
    PlusSwitch
  },
  data() {
    return {
      count: 0,
      checked: true,
      t: false,
    };
  },
  methods: {
    increase() {
      this.count++;
    },
    op() {
      alert(123);
    },
    ch() {
      alert("ch");
    },
  },
});
</script>