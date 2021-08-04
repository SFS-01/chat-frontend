<template>
    <li @click="onClick" :class="{ selected: selected }">
        <div class="align-items-center">
          <div class="row">
            <div class="col-2">
              <div class="avatar avatar-busy m-0 mr-50"><img src="/../../app-assets/images/portrait/small/avatar-s-26.png" height="36" width="36" alt="sidebar user image">
                  <i></i>
              </div>
            </div>
            <div class="col-8">
              <div class="chat-sidebar-name pl-1 pr-3">
                  <span class="text-muted"><b>{{user.username}}</b><span style="font-size: 0.8rem;">{{ user.self ? " (yourself)" : "" }}</span></span>
              </div>
            </div>
            <div class="col-2">
              <div class="status">
                <status-icon :connected="user.connected" /><span style="font-size: 0.9rem;"><!-- {{ status }} --></span>
              </div>
            </div>
          </div>
            <!-- <div v-if="user.hasNewMessages" class="new-messages">!</div> -->
        </div>
    </li>
</template>

<script>
import StatusIcon from "./StatusIcon";
export default {
  name: 'Contact',
  components: {
    StatusIcon
  },
  props: {
    user: Object,
    selected: Boolean
  },
  mounted(){

  },
  methods:{
    onClick(){
        this.$emit("select");
        this.$store.commit("setSelectedType", "user");
    }
  },
  computed: {
    status() {
      return this.user.connected ? "online" : "offline";
    },
  },
}
</script>

<style scoped>
.selected{
  background-color: #e8e7ea ;
}

.new-messages {
  color: white;
  background-color: red;
  width: 20px;
  border-radius: 5px;
  text-align: center;
  float: right;
  margin-top: 10px;
}
</style>
