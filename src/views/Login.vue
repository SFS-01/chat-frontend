<template>
  <div class="app-content content">
    <div class="content-overlay"></div>
    <div class="content-wrapper">
        <div class="content-header row">
        </div>
        <div class="content-body">
            <section class="row flexbox-container">
                <div class="col-12 d-flex align-items-center justify-content-center">
                    <div class="col-lg-4 col-md-8 col-10 p-0">
                        <div class="card border-grey border-lighten-3 m-0">
                            <div class="card-header border-0">
                                <div class="card-title text-center">
                                    <div class="p-1"><img class="brand-logo" src="../assets/custom-logo.png" alt="branding logo"></div>
                                </div>
                            </div>
                            <div class="card-content">
                                <div class="card-body">
                                    <form autocomplete="off" @submit.prevent="login_" class="form-horizontal form-simple" novalidate>
                                        <fieldset class="form-group position-relative has-icon-left mb-0">
                                            <input v-model="form.email" type="text" class="form-control form-control-lg" style="font-size: 1.1rem;" id="email" placeholder="Email" required>
                                            <div v-if="error.email" class="error">{{error_message.email}}</div>
                                        </fieldset>
                                        <fieldset class="form-group position-relative has-icon-left mt-1">
                                            <input v-model="form.password" type="password" class="form-control form-control-lg" style="font-size: 1.1rem;" id="password" placeholder="Password" required>
                                            <div v-if="error.password" class="error">{{error_message.password}}</div>
                                        </fieldset>
                                        <div class="form-group row">
                                            <!-- <div class="col-sm-6 col-12 text-center text-sm-left">
                                                <fieldset>
                                                    <input type="checkbox" id="remember-me" class="chk-remember">
                                                    <label for="remember-me"> Remember Me</label>
                                                </fieldset>
                                            </div> -->
                                            <div class="col-12 text-center"><a href="recover-password.html" class="card-link">Forgot Password?</a></div>
                                        </div>
                                        <button type="submit" class="btn btn-primary btn-lg btn-block" style="font-size: 1.1rem;"><i class="feather icon-unlock"></i> Login</button>
                                    </form>
                                </div>
                            </div>
                            <div class="card-footer">
                                <div class="">
                                   <!--  <p class="float-sm-left text-center m-0"><a href="recover-password.html" class="card-link">Recover password</a></p> -->
                                    <p class="text-center m-0">A new user? <a href="register-simple.html" class="card-link">Sign Up</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</div>
</template>
<script>
// @ is an alias to /src
import AuthService from '@/services/auth.js'
import Storage from '@/utils/storage.js'

export default {
  name: 'Home',
  mixins: [AuthService],
  data(){
    return {
        form : {
            email: '',
            password: ''
        },
        error : {
            email: false,
            password: false
        },
        error_message : {
            email: '',
            password: ''
        }
    }
  },
  methods: {
    login_(){
      this.resetErrors();
      this.login(this.form, this.loginCallback)
    },
    loginCallback(response){
        if(response.status == 1){
           Storage.set("token", response.data.auth.access_token);

           let user =  {
                id: response.data.user.id,
                external_id: response.data.user.external_id,
                email: response.data.user.email,
                firstname: response.data.user.firstname,
                lastname: response.data.user.lastname,
                username: response.data.user.username,
                organization: response.data.user.organization,
                organization_email: response.data.user.alternative_email,
                roles: response.data.user.roles,
                permissions: response.data.user.permissions
            }

           Storage.setAsJson("user", user);

           if(Storage.get("user", undefined) != "undefined"){
               this.$store.commit("setUser", user);
               this.$router.push({name: 'Chat'})
           }
        } else {
            if(Object.prototype.toString.call(response.data.errors) === '[object Array]'){
                response.data.errors.forEach(element => {
                    if(element.field == 'email'){
                        this.error.email = true;
                        this.error_message.email = element.message;
                    }
                    else if(element.field == 'password'){
                        this.error.password = true;
                        this.error_message.password = element.message;
                    } else {
                        this.error.password = true;
                        this.error_message.password = element;
                    }
                });
            }
        }
     },
     resetErrors(){
        for (const property in this.error) {
            this.error[property] = false;
        }
        for (const property in this.error_message) {
            this.error_message[property] = "";
        }
     }
  }
}
</script>

<style>
    body {
      background-color: #fff;
      overflow: hidden;
    }
</style>

<style scoped>
  .error{
    padding-top: 5px;        
    padding-bottom: 5px;
    color: #d80f0f;
    font-size: 0.8rem;
    float: right;        
  }
  .brand-logo {
      width: 220px;
      height: auto;
  }
  .content-wrapper{
    margin-top: 10%;
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
  
