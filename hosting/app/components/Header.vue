<template>
  <v-list class="header d-flex" align="center" width="100%">
    <v-list-item v-for="header in headers" :key="header.text" :to="header.to">
      <v-list-item-title>{{ header.text }}</v-list-item-title>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: 'HOME',
          to: '/',
        },
        {
          text: 'EVENT',
          to: '/',
        },
        {
          text: 'MEMBER',
          to: '/',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.header {
  padding: 0;
  background: transparent;
}
</style>
