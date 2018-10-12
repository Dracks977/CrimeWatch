<template>
	<section class="container">
		<div v-if='user && user.rank && user.rank !== "Agent"' class="card bg-light">
			<article class="card-body mx-auto" style="max-width: 400px;">
				<h4 class="card-title mt-3 text-center">Add a crimes</h4>
				<br>
				<form>
					<div class="form-group input-group">
						<input v-model='form.compnos' class="form-control" placeholder="compnos" type="number">
						<input v-model='form.naturecode' class="form-control" placeholder="naturecode" type="text">
					</div> <!-- form-group// -->
					<div class="form-group input-group">
						<input v-model='form.incident_type_description' class="form-control" placeholder="incident_type_description" type="text">
					</div> <!-- form-group// -->   
					<div class="form-group input-group">
						<input v-model='form.main_crimecode' class="form-control" placeholder="main_crimecode" type="text">
					</div> <!-- form-group// -->       
					<div class="form-group input-group">
						<input v-model='form.reptdistrict' class="form-control" placeholder="reptdistrict" type="text">
						<input v-model='form.reportingarea' class="form-control" placeholder="reportingarea" type="number">
					</div> <!-- form-group// -->
					<div class="form-group input-group">
						<input v-model='form.fromdate' class="form-control" placeholder="fromdate (2015-05-12T00:10:00)" type="text">
					</div> <!-- form-group// -->
					<div class="form-group input-group">
						<input v-model='form.weapontype' class="form-control" placeholder="weapontype" type="text">
					</div> <!-- form-group// -->
					<div class="form-group input-group">
						<select   v-model='form.shooting' class="form-control">
							<option disabled value="">shooting</option>
							<option> true </option>
							<option> false </option>
						</select>
						<select  v-model='form.domestic' class="form-control">
							<option disabled value="">domestic</option>
							<option> true </option>
							<option> false </option>
						</select>
					</div> <!-- form-group// -->
					<div class="form-group input-group">
						<input v-model='form.shift' class="form-control" placeholder="shift" type="text">
					</div> <!-- form-group// -->
					<div class="form-group input-group">
						<input v-model='form.ucrpart' class="form-control" placeholder="ucrpart" type="text">
					</div> <!-- form-group// -->
					<div class="form-group input-group">
						<input v-model='form.x' class="form-control" placeholder="x" type="float">
						<input v-model='form.y' class="form-control" placeholder="y" type="float">
					</div> <!-- form-group// -->
					<div class="form-group input-group">
						<input v-model='form.streetname' class="form-control" placeholder="streetname" type="text">
						<input v-model='form.xstreetname' class="form-control" placeholder="xstreetname" type="text">
					</div> <!-- form-group// -->
					<div class="form-group input-group">
						<input v-model='form.location' class="form-control" placeholder="location (42.30119026, -71.07299707)" type="text">
					</div> <!-- form-group// -->                           
					<div class="form-group">
						<div @click='submit()' class="btn btn-primary btn-block"> Submit  </div>
					</div> <!-- form-group// -->                                                      
				</form>
			</article>
		</div> <!-- card.// -->
	</section>
</template>

<script>

	export default {
		data(){
			return {
				form : {
					"compnos": null,
					"naturecode": null,
					"incident_type_description": null,
					"main_crimecode": null,
					"reptdistrict": null,
					"reportingarea": null,
					"fromdate": null,
					"weapontype": null,
					"shooting": '',
					"domestic": "",
					"shift": null,
					"ucrpart": null,
					"x": null,
					"y": null,
					"streetname": null,
					"xstreetname": null,
					"location": null
				}
			}
		},
		mounted: () => {

		},
		computed: {
			user () { 
				if (process.browser && localStorage.getItem('vuex')) {
					let user = JSON.parse(localStorage.getItem('vuex'))
					return user.user
				}
				return null
			}
		},
		methods: {
			submit() {
				this.$axios.post('http://localhost:3100/crimes',this.form).then(response => {
					this.$router.push({
						path: '/dashbord'
					})
				}).catch(e => {
					console.log(e)
				})
			}
		}
	}
</script>

<style>
.container {
	margin-top: 2%; /* poussé de la moitié de hauteur de viewport */
}
body {
	background-image: url('~assets/gplaypattern.png');
}
</style>

