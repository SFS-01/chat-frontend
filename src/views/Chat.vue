<template>
  <div>
    <div class="app-content content">
      <div class="sidebar-left">
        <div class="sidebar">
            <!-- app chat user profile left sidebar start -->
            <div class="chat-user-profile">
                <header class="chat-user-profile-header text-center border-bottom">
                    <span class="chat-profile-close">
                        <i class="feather icon-x"></i>
                    </span>
                    <div class="my-2">

                        <img src="/../../app-assets/images/portrait/small/avatar-s-11.png" class="round mb-1" alt="user_avatar" height="100" width="100">

                        <h5 class="mb-0">John Doe</h5>
                        <span>Designer</span>
                    </div>
                </header>
                <div class="chat-user-profile-content">
                    <div class="chat-user-profile-scroll">
                        <h6 class="text-uppercase mb-1">ABOUT</h6>
                        <p class="mb-2">It is a long established fact that a reader will be distracted by the readable content .</p>
                        <h6>PERSONAL INFORAMTION</h6>
                        <ul class="list-unstyled mb-2">
                            <li class="mb-25">email@gmail.com</li>
                            <li>+1(789) 950 -7654</li>
                        </ul>
                        <h6 class="text-uppercase mb-1">CHANNELS</h6>
                        <ul class="list-unstyled mb-2">
                            <li><a href="javascript:void(0);"># Devlopers</a></li>
                            <li><a href="javascript:void(0);"># Designers</a></li>
                        </ul>
                        <h6 class="text-uppercase mb-1">SETTINGS</h6>
                        <ul class="list-unstyled">
                            <li class="mb-50 "><a href="javascript:void(0);" class="d-flex align-items-center"><i class="feather icon-tag mr-50"></i>
                                    Add
                                    Tag</a></li>
                            <li class="mb-50 "><a href="javascript:void(0);" class="d-flex align-items-center"><i class="feather icon-star mr-50"></i>
                                    Important Contact</a>
                            </li>
                            <li class="mb-50 "><a href="javascript:void(0);" class="d-flex align-items-center"><i class="feather icon-image mr-50"></i>
                                    Shared
                                    Documents</a></li>
                            <li class="mb-50 "><a href="javascript:void(0);" class="d-flex align-items-center"><i class="feather icon-trash-2 mr-50"></i>
                                    Deleted
                                    Documents</a></li>
                            <li><a href="javascript:void(0);" class="d-flex align-items-center"><i class="feather icon-x-circle mr-50"></i>
                                    Blocked
                                    Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- app chat user profile left sidebar ends -->
            <!-- app chat sidebar start -->
            <div class="chat-sidebar card">
                <span class="chat-sidebar-close">
                    <i class="feather icon-x"></i>
                </span>
                <div class="chat-sidebar-search">
                    <div class="d-flex align-items-center">
                        <div class="chat-sidebar-profile-toggle">
                            <div class="avatar">
                                <img src="/../../app-assets/images/portrait/small/avatar-s-11.png" alt="user_avatar" height="36" width="36">
                            </div>
                        </div>
                        <fieldset class="form-group position-relative has-icon-left mx-75 mb-0">
                            <input type="text" class="form-control round" id="chat-search" placeholder="Search">
                            <div class="form-control-position">
                                <i class="feather icon-search text-dark"></i>
                            </div>
                        </fieldset>
                    </div>
                </div>
                <div class="chat-sidebar-list-wrapper pt-2">

                    <h6 class="px-2 pb-25 mb-0">CHANNELS<i class="feather icon-plus float-right cursor-pointer"></i></h6>
                    <ul class="chat-sidebar-list" style="padding-bottom: 5%;">
                        <Channel v-for="channel in channels"
                        :key="channel.channelID"
                        :channel="channel"
                        :selected="selectedItem === channel"
                        @select="onSelectChannel(channel)"/>
                    </ul>

                    <h6 class="px-2 pt-2 pb-25 mb-0">PRIVATE CHATS</h6>
                    <ul class="chat-sidebar-list" style="padding-bottom: 15%;">
                        <Contact v-for="user in users"
                        :key="user.userID"
                        :user="user"
                        :selected="selectedItem === user"
                        @select="onSelectUser(user)"
                        />
                    </ul>
                </div>
            </div>
            <!-- app chat sidebar ends -->
        </div>
      </div>
      <!-- <MainContent/> -->
      <MessagePanel 
      :item="selectedItem"
      :type="selectedType"
      @message="onMessage"/>
    </div>
    <div class="sidenav-overlay"></div>
    <div class="drag-target"></div>
  </div>
</template>

<script>
// @ is an alias to /src
/* import SideContent from '@/components/SideContent.vue'; */
import MainContent from '@/components/MainContent.vue';
import Channel from '@/components/Channel.vue';
import Contact from '@/components/Contact.vue'
import MessagePanel from '@/components/MessagePanel.vue';
import Storage from '@/utils/storage.js';
import socket from "./../socket";


export default {
  name: 'Chat',
  components: {
    Channel,
    Contact,
    MessagePanel,
    MainContent
  },
  data(){
    return {
      selectedType: "",
      selectedItem: null,
      users: [],
      channels: [],
    }
  },
  methods : {
    openConnection(user){
        socket.auth = {
          user: {
            id: user.id,
            username: user.username,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email
          }
        };
        socket.connect();
    },

    onMessage(content) {
      if(this.selectedType == "user"){
        if (this.selectedItem) {
          socket.emit("private message", {
            content,
            to: this.selectedItem.userID,
          });
          this.selectedItem.messages.push({
            content,
            fromSelf: true
          });
        }
      } else {
        //Message to channel
        /* if (this.selectedItem) {
          socket.emit("private message", {
            content,
            to: this.selectedItem.userID,
          });
          this.selectedItem.messages.push({
            content,
            fromSelf: true
          });
        } */
      }
    },

    onSelectUser(user) {
      this.selectedItem = user;
      this.selectedType = "user";
      user.hasNewMessages = false;
    },

    onSelectChannel(channel) {
      this.selectedItem = channel;
      this.selectedType = "channel";
      channel.hasNewMessages = false;
    },
  },
  created(){
    if(this.$store.state.user.id > 0) {
      this.openConnection(this.$store.state.user);
    }

    socket.on("connect", () => {
      this.users.forEach((user) => {
        if (user.self) {
          user.connected = true;
        }
      });
    });

    socket.on("disconnect", () => {
      this.users.forEach((user) => {
        if (user.self) {
          user.connected = false;
        }
      });
    });

    const initReactiveProperties = (user) => {
      user.connected = true;
      user.messages = [];
      user.hasNewMessages = false;
    };

    socket.on("users", (users) => {
      users.forEach((user) => {
        user.self = user.userID === socket.id;
        initReactiveProperties(user);
      });
      
      this.users = users.sort((a, b) => {
        if (a.self) return -1;
        if (b.self) return 1;
        if (a.username < b.username) return -1;
        return a.username > b.username ? 1 : 0;
      });
    });

    socket.on("user connected", (user) => {
      initReactiveProperties(user);
      this.users.push(user);
      console.log(this.users)
    });

    socket.on("user disconnected", (id) => {
      for (let i = 0; i < this.users.length; i++) {
        const user = this.users[i];
        if (user.userID === id) {
          user.connected = false;
          break;
        }
      }
    });

    socket.on("private message", ({ content, from }) => {
      for (let i = 0; i < this.users.length; i++) {
        const user = this.users[i];
        if (user.userID === from) {
          user.messages.push({
            content,
            fromSelf: false,
          });
          if (user !== this.selectedItem) {
            user.hasNewMessages = true;
          }
          break;
        }
      }
    });
  },
  destroyed(){
    socket.off("connect");
    socket.off("disconnect");
    socket.off("users");
    socket.off("user connected");
    socket.off("user disconnected");
    socket.off("private message");
  },
  mounted(){
    this.$nextTick(function(){
      var chatSidebarListWrapper = $(".chat-sidebar-list-wrapper"),
      chatOverlay = $(".chat-overlay"),
      chatContainer = $(".chat-container"),
      chatSidebarProfileToggle = $(".chat-sidebar-profile-toggle"),
      chatProfileToggle = $(".chat-profile-toggle"),
      chatSidebarClose = $(".chat-sidebar-close"),
      chatProfile = $(".chat-profile"),
      chatUserProfile = $(".chat-user-profile"),
      chatProfileClose = $(".chat-profile-close"),
      chatSidebar = $(".chat-sidebar"),
      chatArea = $(".chat-area"),
      chatStart = $(".chat-start"),
      chatSidebarToggle = $(".chat-sidebar-toggle");

      if (!$.app.menu.is_touch_device()) {
        if (chatSidebarListWrapper.length > 0) {
          var menu_user_list = new PerfectScrollbar(".chat-sidebar-list-wrapper");
        }
        if ($(".chat-user-profile-scroll").length > 0) {
          var profile_sidebar_scroll = new PerfectScrollbar(".chat-user-profile-scroll");
        }
        if (chatContainer.length > 0) {
          var chat_user_user = new PerfectScrollbar(".chat-container");
        }
        if ($(".chat-profile-content").length > 0) {
          var chat_profile_content = new PerfectScrollbar(".chat-profile-content");
        }
      } else {
        $('.chat-sidebar-list-wrapper').css('overflow', 'scroll');
        $('.chat-user-profile-scroll').css('overflow', 'scroll');
        $('.chat-container').css('overflow', 'scroll');
        $('.chat-profile-content').css('overflow', 'scroll');
      }
      chatSidebarProfileToggle.on("click", function () {
        chatUserProfile.addClass("show");
        chatOverlay.addClass("show");
      });
      chatProfileToggle.on("click", function () {
        chatProfile.addClass("show");
        chatOverlay.addClass("show");
      });
      chatProfileClose.on("click", function () {
        chatUserProfile.removeClass("show");
        chatProfile.removeClass("show");
        if (!chatSidebar.hasClass("show")) {
          chatOverlay.removeClass("show");
        }
      });
      chatSidebarClose.on("click", function () {
        chatSidebar.removeClass("show");
        chatOverlay.removeClass("show");
      });
      chatOverlay.on("click", function () {
        chatSidebar.removeClass("show");
        chatOverlay.removeClass("show");
        chatUserProfile.removeClass("show");
        chatProfile.removeClass("show");
      });

      $(".chat-sidebar-list-wrapper ul li").on("click", function () {
        if ($(".chat-sidebar-list-wrapper ul li").hasClass("active")) {
          $(".chat-sidebar-list-wrapper ul li").removeClass("active");
        }
        $(this).addClass("active");
        if ($(".chat-sidebar-list-wrapper ul li").hasClass("active")) {
          chatStart.addClass("d-none");
          chatArea.removeClass("d-none");
        } else {
          chatStart.removeClass("d-none");
          chatArea.addClass("d-none");
        }
      });
      
      $(".chat-icon-favorite i").on("click", function (e) {
        $(this).parent(".chat-icon-favorite").toggleClass("warning");
        $(this).toggleClass("bxs-star bx-star");
        e.stopPropagation();
      });
      
      if ($(window).width() < 992) {
        chatSidebarToggle.on("click", function () {
          chatSidebar.addClass("show");
          chatOverlay.addClass("show");
        });
      }
      
      $(".chat-sidebar-list li").on("click", function () {
        chatContainer.animate({
          scrollTop: chatContainer[0].scrollHeight
        }, 400)
      });

      
      $(".menu-toggle").click(function () {
        chatSidebar.removeClass("show");
        chatOverlay.removeClass("show");
        chatUserProfile.removeClass("show");
        chatProfile.removeClass("show");
      });

      
      $("#chat-search").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        if (value != "") {
          $(".chat-sidebar-list-wrapper .chat-sidebar-list li").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
          });
        } else {
          
          $(".chat-sidebar-list-wrapper .chat-sidebar-list li").show();
        }
      });
      
      $(window).on("resize", function () {
        
        if ($(window).width() > 992) {
          if (chatOverlay.hasClass("show")) {
            chatOverlay.removeClass("show");
          }
        }
        
        if ($(window).width() < 992) {
          chatSidebarToggle.on("click", function () {
            chatSidebar.addClass("show");
            chatOverlay.addClass("show");
          });
        }
        
        if ($(window).width() > 992) {
          chatSidebarToggle.on("click", function () {
            chatOverlay.removeClass("show");
          });
        }
      });
    });
  }
}
</script>
