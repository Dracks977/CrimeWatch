<template>
	<section  class="toped">
		<div class="card bg-light">
			<article class="card-body mx-auto" >
				<form>
					<div class="form-group input-group">
						<input v-model='search.naturecode' class="form-control" placeholder="naturecode" type="text">
					</div> <!-- form-group// -->
					<div class="form-group input-group">
						<input v-model='search.incident_type_description' class="form-control" placeholder="incident_type_description" type="text">
					</div> <!-- form-group// -->   
					<div class="form-group input-group">
						<input v-model='search.main_crimecode' class="form-control" placeholder="main_crimecode" type="text">
					</div> <!-- form-group// -->       
					<div class="form-group input-group">
						<input v-model='search.reptdistrict' class="form-control" placeholder="reptdistrict" type="text">
					</div> <!-- form-group// -->
					<div class="form-group input-group">
						<input v-model='search.weapontype' class="form-control" placeholder="weapontype" type="text">
					</div> <!-- form-group// -->
					<div class="form-group input-group">
						<select   v-model='search.shooting' class="form-control">
							<option disabled value="">shooting</option>
							<option> true </option>
							<option> false </option>
						</select>
						<select  v-model='search.domestic' class="form-control">
							<option disabled value="">domestic</option>
							<option> true </option>
							<option> false </option>
						</select>
					</div> <!-- form-group// -->
					<div class="form-group input-group">
						<input v-model='search.shift' class="form-control" placeholder="shift" type="text">
					</div> <!-- form-group// -->
					<div class="form-group input-group">
						<input v-model='search.ucrpart' class="form-control" placeholder="ucrpart" type="text">
					</div> <!-- form-group// -->
					<div class="form-group input-group">
						<input v-model='search.streetname' class="form-control" placeholder="streetname" type="text">
						<input v-model='search.xstreetname' class="form-control" placeholder="xstreetname" type="text">
					</div> <!-- form-group// -->                     
					<div class="form-group">
						<div @click='submit()' class="btn btn-primary btn-block"> Submit  </div>
					</div> <!-- form-group// -->                                                      
				</form>
			</article>
		</div> <!-- card.// -->
		<div v-if='user && user.rank'>
			<vue-good-table
			:columns="columns"
			:rows="rows"
			:sort-options="{
			enabled: true
		}"
		:pagination-options="{
		enabled: true,
		mode: 'records',
		perPage: 25,
		position: 'top',
		perPageDropdown: [25, 50, 100],
		dropdownAllowAll: false,
		setCurrentPage: 1,
		nextLabel: 'next',
		prevLabel: 'prev',
		rowsPerPageLabel: 'Rows per page',
		ofLabel: 'of',
		pageLabel: 'page', // for 'pages' mode
		allLabel: 'All',
	}"
	>
	<template slot="table-row" slot-scope="props" class="has-text-centered">
		<span v-if="props.column.field == 'Actions'">
			<div class="field is-grouped">
				<p class="control">
					<button @click='show(props.row)' class="btn btn-primary btn-block">Show</button>
				</p>
			</div>
		</span>
		<span v-else>
			{{props.formattedRow[props.column.field]}}
		</span>
	</template>
</vue-good-table>
</div>
<b-modal ref="myModalRef" size="lg" hide-footer centered title="Detail">
	<div class=" text-center">
		<vue-good-table
		:columns="mcolum"
		:rows="modal"
		/>
	</div>
</b-modal>
</section>
</template>
<style type="text/css">

thead th {
	text-align: center !important;
}
tbody td {
	text-align: center !important;
}
</style>
<script type="text/javascript">

	export default {
		created () {
		},
		methods: {
			hideModal () {
				this.$refs.myModalRef.hide()
			},
			submit() {
				this.$axios.get('http://localhost:3100/crimes', {params: this.search}).then(response => {
					console.log(response)
					this.rows = response.data
				}).catch(e => {
					console.log(e)
				})
			},
			show(client) {
				console.log(client)
				this.modal = new Array(client)
				this.$refs.myModalRef.show()
			}
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
		data(){
			return {
				modal : [{}],
				search : {
				  	"naturecode": null,
				  	"incident_type_description": null,
				  	"main_crimecode": null,
				  	"reptdistrict": null,
				  	"weapontype": null,
				  	"shooting": '',
				  	"domestic": '',
				  	"shift": null,
				  	"ucrpart": null,
				  	"streetname": null,
				  	"xstreetname": null
				},
				columns: [
				{
					label: 'Compnos',
					field: 'compnos',
					type: 'number',
				},
				{
					label: 'Code',
					field: 'naturecode',
					filterOptions: {
				  	  enabled: true, // enable filter for this column
				      placeholder: '...' // placeholder for filter input				  
				  },
				},
				{
					label: 'Type',
					field: 'incident_type_description',
					filterOptions: {
				  	  enabled: true, // enable filter for this column
				      placeholder: '...' // placeholder for filter input				  
				  },
				},
				{
					label: 'Main crime code',
					field: 'main_crimecode',
					filterOptions: {
				  	  enabled: true, // enable filter for this column
				      placeholder: '...' // placeholder for filter input				  
				  },
				},
				{
					label: 'Weapon Type',
					field: 'weapontype',
					filterOptions: {
				  	  enabled: true, // enable filter for this column
				      placeholder: '...' // placeholder for filter input				  
				  },
				},
				{
					label: 'Shooting',
					field: 'shooting',
					filterOptions: {
				  	  enabled: true, // enable filter for this column
				  	  filterDropdownItems: ['true', 'false']				  
				  	},
				  },
				  {
				  	label: 'Domestic',
				  	field: 'domestic',
				  	filterOptions: {
				  	  enabled: true, // enable filter for this column
				  	  filterDropdownItems: ['true', 'false']				  
				  	},
				  },
				  {
				  	label: 'Date',
				  	field: 'fromdate',
				  	type: 'date',
				  	dateInputFormat: 'YYYY-MM-DDThh:mm:ss',
				  	dateOutputFormat: 'DD-MM-YYYY',
				  },
				  {
				  	label: 'Actions',
				  	field: 'Actions'
				  }
				  ],
				  rows: [
				  // {
				  // 	"_id": "5bbe3f7f6148c052a6d69892",
				  // 	"compnos": 152038705,
				  // 	"naturecode": "SSA",
				  // 	"incident_type_description": "Ballist",
				  // 	"main_crimecode": "Ballist",
				  // 	"reptdistrict": "C11",
				  // 	"reportingarea": 0,
				  // 	"fromdate": "2015-05-12T00:10:00",
				  // 	"weapontype": "Other",
				  // 	"shooting": "False",
				  // 	"domestic": "False",
				  // 	"shift": "Last",
				  // 	"year": 2015,
				  // 	"month": 5,
				  // 	"day_week": "Tuesday",
				  // 	"ucrpart": "Part Two",
				  // 	"x": 771681.0593,
				  // 	"y": 2935070.74,
				  // 	"streetname": "ROSSETER ST",
				  // 	"xstreetname": "BULLARD ST",

				  // 	"location": "(42.30119026, -71.07299707)"
				  // }
				  ],
				  mcolum: [
				  {
				  	label: 'compnos',
				  	field: 'compnos',
				  },
				  {
				  	label: 'naturecode',
				  	field: 'naturecode',
				  },
				  {
				  	label: 'incident_type_description',
				  	field: 'incident_type_description',
				  },
				  {
				  	label: 'main_crimecode',
				  	field: 'main_crimecode',
				  },
				  {
				  	label: 'reptdistrict',
				  	field: 'reptdistrict',
				  },
				  {
				  	label: 'reportingarea',
				  	field: 'reportingarea',
				  },
				  {
				  	label: 'fromdate',
				  	field: 'fromdate',
				  },
				  {
				  	label: 'weapontype',
				  	field: 'weapontype',
				  },
				  {
				  	label: 'shooting',
				  	field: 'shooting',
				  },
				  {
				  	label: 'domestic',
				  	field: 'domestic',
				  },
				  {
				  	label: 'shift',
				  	field: 'shift',
				  },
				  {
				  	label: 'ucrpart',
				  	field: 'ucrpart',
				  },
				  {
				  	label: 'streetname',
				  	field: 'streetname',
				  },
				  {
				  	label: 'xstreetname',
				  	field: 'xstreetname',
				  },
				  {
				  	label: 'location',
				  	field: 'location',
				  }
				  ]
				}
			}
		}
	</script>