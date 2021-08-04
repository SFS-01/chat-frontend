<template>
    <li @click="onClick">
        <h6 class="mb-0"># {{channel.name}}</h6>
    </li>
</template>

<script>
export default {
  name: 'Channel',
  props: {
    channel: ''
  },
  mounted(){

  },
  methods: {
    onClick(){
        this.$store.commit("setSelectedType", "contact");
    }
  }
}
</script>

<style scoped>

</style>
