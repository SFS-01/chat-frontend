<template>
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
                    <ul class="chat-sidebar-list">
                        <li>
                            <h6 class="mb-0"># Devlopers</h6>
                        </li>
                        <li>
                            <h6 class="mb-0"># Designers</h6>
                        </li>
                    </ul>
                    <h6 class="px-2 pt-2 pb-25 mb-0">PRIVATE CHATS</h6>
                    <ul class="chat-sidebar-list">
                        <li>
                            <div class="d-flex align-items-center">
                                <div class="avatar avatar-busy m-0 mr-50"><img src="/../../app-assets/images/portrait/small/avatar-s-26.png" height="36" width="36" alt="sidebar user image">
                                    <i></i>
                                </div>
                                <div class="chat-sidebar-name pl-1">
                                    <h6 class="mb-0">Elizabeth Elliott</h6><span class="text-muted">Cake pie</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="d-flex align-items-center">
                                <div class="avatar avatar-online m-0 mr-50"><img src="/../../app-assets/images/portrait/small/avatar-s-7.png" height="36" width="36" alt="sidebar user image">
                                    <i></i>
                                </div>
                                <div class="chat-sidebar-name pl-1">
                                    <h6 class="mb-0">Kristopher Candy</h6><span class="text-muted">jelly jelly</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- app chat sidebar ends -->
        </div>
    </div>
</template>

<script>
export default {
  name: 'SideContent',
  props: {
    
  },
  mounted(){

  }
}
</script>

<style scoped>

</style>
