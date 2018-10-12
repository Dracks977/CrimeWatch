<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<a class="navbar-brand" href='/dashbord'>CrimeWatch</a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav mr-auto">
				<li v-if='user && user.rank && user.rank == "Chef de la police"' class="nav-item">
					<a class="nav-link" href="/admin">Admin</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/dashbord">Dashbord</a>
				</li>
				<li v-if='user && user.rank && user.rank !== "Agent"' class="nav-item">
					<a class="nav-link" href="/crimes/add">Add crime</a>
				</li>
			</ul>
			<form class="form-inline my-2 my-lg-0">
				<input class="form-control mr-sm-2" type="search" placeholder="Search crime" aria-label="Search">
				<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
			</form>
		</div>
	</nav>
</template>
<script type="text/javascript">
	export default {
		computed: {
			user () { 
				if (process.browser && localStorage.getItem('vuex')) {
					let user = JSON.parse(localStorage.getItem('vuex'))
					return user.user
				}
				return null
			}
		},
	}

</script>