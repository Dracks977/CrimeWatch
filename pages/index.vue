<template>
  <section class="container">
    <div class="card bg-light">
      <article class="card-body mx-auto" style="max-width: 400px;">
        <h4 class="card-title mt-3 text-center">Create Account</h4>
        <br>
        <form>
          <div class="form-group input-group">
            <div class="input-group-prepend">
              <span class="input-group-text"> <i class="fa fa-user"></i> </span>
            </div>
            <input v-model='form.name' class="form-control" placeholder="name" type="text">
          </div> <!-- form-group// -->
          <div class="form-group input-group">
            <div class="input-group-prepend">
              <span class="input-group-text"> <i class="fa fa-user"></i> </span>
            </div>
            <input v-model='form.surname' class="form-control" placeholder="surname" type="text">
          </div> <!-- form-group// -->
          <div class="form-group input-group">
            <div class="input-group-prepend">
              <span class="input-group-text"> <i class="fa fa-envelope"></i> </span>
            </div>
            <input v-model='form.email' class="form-control" placeholder="Email address" type="email">
          </div> <!-- form-group// -->
          <div class="form-group input-group">
            <div class="input-group-prepend">
              <span class="input-group-text"> <i class="fa fa-building"></i> </span>
            </div>
            <select v-model='form.rank' class="form-control">
              <option selected="" value="Agent">Agent</option>
              <option value="Détective">Détective</option>
              <option value="Chef de la police">Chef de la police</option>
            </select>
          </div> <!-- form-group// -->
          <div class="form-group input-group">
            <div class="input-group-prepend">
              <span class="input-group-text"> <i class="fa fa-clock"></i> </span>
            </div>
            <select  v-model='form.seniority' class="form-control">
             <option>1960</option>
             <option>1961</option>
             <option>1962</option>
             <option>1963</option>
             <option>1964</option>
             <option>1965</option>
             <option>1966</option>
             <option>1967</option>
             <option>1968</option>
             <option>1969</option>
             <option>1970</option>
             <option>1971</option>
             <option>1972</option>
             <option>1973</option>
             <option>1974</option>
             <option>1945</option>
             <option>1976</option>
             <option>1977</option>
             <option>1978</option>
             <option>1979</option>
             <option>1980</option>
             <option>1981</option>
             <option>1982</option>
             <option>1983</option>
             <option>1984</option>
             <option>1985</option>
             <option>1986</option>
             <option>1987</option>
             <option>1988</option>
             <option>1989</option>
             <option>1990</option>
             <option>1991</option>
             <option>1992</option>
             <option>1993</option>
             <option>1994</option>
             <option>1995</option>
             <option>1996</option>
             <option>1997</option>
             <option>1998</option>
             <option>1999</option>
             <option>2000</option>
             <option>2001</option>
             <option>2002</option>
             <option>2003</option>
             <option>2004</option>
             <option>2005</option>
             <option>2006</option>
             <option>2007</option>
             <option>2008</option>
             <option>2009</option>
             <option>2010</option>
             <option>2011</option>
             <option>2012</option>
             <option>2013</option>
             <option>2014</option>
             <option>2015</option>
             <option>2016</option>
             <option>2017</option>
             <option>2018</option>
           </select>
         </div> <!-- form-group end.// -->
         <div class="form-group input-group">
          <div class="input-group-prepend">
            <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
          </div>
          <input v-model='form.password' class="form-control" placeholder="password" type="password">
        </div> <!-- form-group// -->                                   
        <div class="form-group">
          <div @click='submit()' class="btn btn-primary btn-block"> Create Account  </div>
        </div> <!-- form-group// -->      
        <p class="text-center">Have an account? <a href="">Log In</a> </p>                                                                 
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
          name : '',
          surname : '',
          email : '',
          rank : 'Agent',
          seniority : '1963',
          activated: 'ko',
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
</style>

