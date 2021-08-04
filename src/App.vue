<template>
  <div>
   <Navbar v-show="$route.name != 'Login'" />
      <router-view :key="$route.fullPath"/>
    <Footer v-show="$route.name != 'Login'" />
  </div>
</template>

<script>
  // @ is an alias to /src
  import Navbar from '@/components/Navbar.vue'
  import Footer from '@/components/Footer.vue'
  import socket from "./socket";
  import Storage from '@/utils/storage.js'
  
  export default {
    name: 'Main',
    components: {
      Navbar,
      Footer
    },
    data() {
      return {
        transitionName: 'slide-left'
      }
    },
    methods: {

    },
    watch:{
      
    },
    created(){
      let current_user = Storage.get("user", undefined);
      if(current_user != undefined){
        this.$store.commit("setUser", JSON.parse(current_user));
      }
    },
    mounted(){
      socket.on("connect_error", (err) => {
        if (err.message === "invalid username") {
          this.usernameAlreadySelected = false;
        }
      });
    },
    destroyed(){
      socket.off("connect_error");
    }
  }
  </script>

<style lang="scss">
#app {

}
</style>
