<template>
	<section v-if='user && user.rank && user.rank == "Chef de la police"' class="toped">
		<div>
			<vue-good-table
			:columns="columns"
			:rows="rows"
			:sort-options="{
			enabled: true
		}"
		>
		<template slot="table-row" slot-scope="props" class="has-text-centered">
			<span v-if="props.column.field == 'Actions'">
				<div v-if="props.row.activated === 'no'" class="field is-grouped">
					<p class="control">
						 <button @click='approuve(props.row)' class="btn btn-primary btn-block">Approuve</button>
					</p>
				</div>
			</span>
			<span v-else>
				{{props.formattedRow[props.column.field]}}
			</span>
		</template>
	</vue-good-table>
</div>
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
			this.fetchData()
		},
		methods: {
			fetchData() {
				this.$axios.get('http://localhost:8000/api/members').then(response => {
					this.rows = response.date
				}).catch(e => {
					window.alert(e)
				})
			},
			approuve(client) {
				this.$axios.put('http://localhost:8000/api/members/' + client.id, {activated : 'yes'}).then((response) => {
					client.activated = 'yes'
				}).catch((e) => {
					window.alert(e)
				})
				
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
				columns: [
				{
					label: 'ID',
					field: 'id',
					type: 'number',
				},
				{
					label: 'Name',
					field: 'name',
					filterOptions: {
				  	  enabled: true, // enable filter for this column
				      placeholder: '...' // placeholder for filter input				  
				  },
				},
				{
					label: 'Surname',
					field: 'firstname',
					filterOptions: {
				  	  enabled: true, // enable filter for this column
				      placeholder: '...' // placeholder for filter input				  
				  },
				},
				{
					label: 'Email',
					field: 'email',
					filterOptions: {
				  	  enabled: true, // enable filter for this column
				      placeholder: '...' // placeholder for filter input				  
				  },
				},
				{
					label: 'Rank',
					field: 'rank',
					filterOptions: {
				  	  enabled: true, // enable filter for this column
				  	  filterDropdownItems: ['Agent', 'Détective', 'Chef de la police']				  
				  	},
				  },
				  {
				  	label: 'Seniority',
				  	field: 'seniority',
				  	type: 'number',
				  },
				  {
				  	label: 'Activated',
				  	field: 'activated',
				  	filterOptions: {
				  	  enabled: true, // enable filter for this column
				  	  filterDropdownItems: ['yes', 'no']				  
				  	},
				  },
				  {
				  	label: 'Created On',
				  	field: 'created_at',
				  	type: 'date',
				  	dateInputFormat: 'YYYY-MM-DD hh:mm:ss',
				  	dateOutputFormat: 'DD-MM-YYYY',
				  },
				  {
				  	label: 'Actions',
				  	field: 'Actions'
				  }
				  ],
				  //pensez a l'enlever
				  rows: [
				  {
				  	"id": 1,
				  	"name": "DUQUESNE",
				  	"firstname": "Florian",
				  	"password": "test",
				  	"email": "",
				  	"rank": "agent",
				  	"seniority": "2010",
				  	"activated": "no",
				  	"created_at": "2018-10-08 20:59:10",
				  	"updated_at": "2018-10-08 20:59:10"
				  },
				  {
				  	"id": 2,
				  	"name": "DUQUESNE",
				  	"firstname": "Florian",
				  	"password": "test",
				  	"email": "test@email.com",
				  	"rank": "agent",
				  	"seniority": "2010",
				  	"activated": "no",
				  	"created_at": "2018-10-08 21:00:44",
				  	"updated_at": "2018-10-08 21:00:44"
				  }
				  ],
				}
			}
		}
	</script>