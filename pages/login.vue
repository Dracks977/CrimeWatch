<template>
  <section class="container">
    <div class="card bg-light">
      <article class="card-body mx-auto" style="max-width: 400px;">
        <h4 class="card-title mt-3 text-center">Connect</h4>
        <br>
        <form>
          <div class="form-group input-group">
            <div class="input-group-prepend">
              <span class="input-group-text"> <i class="fa fa-envelope"></i> </span>
            </div>
            <input v-model='form.email' class="form-control" placeholder="Email address" type="email">
          </div> <!-- form-group// -->
         <div class="form-group input-group">
          <div class="input-group-prepend">
            <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
          </div>
          <input v-model='form.password' class="form-control" placeholder="password" type="password">
        </div> <!-- form-group// -->                                   
        <div class="form-group">
          <div @click='submit()' class="btn btn-primary btn-block"> Login  </div>
        </div> <!-- form-group// -->      
        <p class="text-center">You don't have an account? <router-link :to="'/'">Register</router-link> </p>                                                                 
      </form>
    </article>
  </div> <!-- card.// -->
</section>
</template>

<script>

  export default {
    layout: 'empty',
    data(){
      return {
        form : {
          email : '',
          password : ''
        }
      }
    },
    mounted: () => {

    },
    methods: {
      submit() {
        this.$axios.post('http://localhost:8000/api/members',this.form).then(response => {
          alert(response.data)
        }).catch(e => {
          alert(e)
        })
      }
    }
  }
</script>

<style>
.container {
  margin-top: 50vh; /* poussé de la moitié de hauteur de viewport */
  transform: translateY(-50%); /* tiré de la moitié de sa propre hauteur */
}
body {
  background-image: url('~assets/gplaypattern.png');
}
</style>

