<template>
  <div>
    <nav class="header-navbar navbar-expand-md navbar navbar-with-menu navbar-static-top navbar-dark bg-gradient-x-grey-blue navbar-border navbar-brand-center">
        <div class="navbar-wrapper">
            <div class="navbar-header">
                <ul class="nav navbar-nav flex-row">
                    <li class="nav-item mobile-menu d-md-none mr-auto"><a class="nav-link nav-menu-main menu-toggle hidden-xs" href="#"><i class="feather icon-menu font-large-1"></i></a></li>
                    <li class="nav-item"><a class="navbar-brand" href="#"><img class="brand-logo" alt="stack admin logo" src="../assets/custom-logo.png">
                        </a>
                    </li>
                </ul>
            </div>
            <div class="navbar-container content">
                <div class="collapse navbar-collapse" id="navbar-mobile">
                    <ul class="nav navbar-nav mr-auto float-left">
                        <li class="nav-item d-none d-md-block"><a class="nav-link nav-menu-main menu-toggle hidden-xs" href="#"><i class="feather icon-menu"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    <div class="header-navbar navbar-expand-sm navbar navbar-horizontal navbar-static navbar-light navbar-without-dd-arrow navbar-shadow menu-border" role="navigation" data-menu="menu-wrapper">
      <!-- Horizontal menu content-->
      <div class="navbar-container main-menu-content" data-menu="menu-container">
          <!-- include ../../../includes/mixins-->
          <ul class="nav navbar-nav" id="main-menu-navigation" data-menu="menu-navigation">
              <li class="nav-item"><a class="nav-link" href="#" ><span data-i18n="Account">Account</span></a>
              </li>
              <li class="nav-item"><a @click="logout"  class="nav-link" style="cursor: pointer;"><span data-i18n="Logout">Logout</span></a>
              </li>
          </ul>
      </div>
      <!-- /horizontal menu content-->
  </div>

  </div>
</template>
<script>
  import Storage from '@/utils/storage.js'
  export default {
    name: 'Navbar',
    props: {
      
    },
    data(){
        return {

        }
    },
    methods : {
        logout(){
            Storage.remove("token")
            this.$router.push('/login')
        }
    },
    mounted(){
      require('../app-assets/js/core/app-menu.js');
  }
}
</script>

<style scoped>

.brand-logo {
    width: 220px;
    height: auto;
}

@media (min-width: 576px) { 

}

@media (min-width: 768px) { 

}

@media (min-width: 992px) { 

}

@media (min-width: 1200px) { 

}
</style>
