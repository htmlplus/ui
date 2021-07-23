<template>
  <div>
    <Switch v-model="checked" @click="ch" @opened1="ch"/>
    <!-- <Switch v-model="checked" @pluschange="ch" />
    <Switch v-model="checked" @plus-change="ch" /> -->
     {{ checked }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Switch } from "@htmlplus/vue";

export default defineComponent({
  components: {
    Switch,
  },
  data() {
    return {
      checked: true,
    };
  },
  methods: {
    ch() {
      alert('ch');
    },
  },
});
</script>