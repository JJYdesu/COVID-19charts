<template>
	<div id="login-page">
		<div class="form">
			<div v-if="!isLogin" class="register-form">
				<input type="text" placeholder="User Name" />
				<input type="password" placeholder="Password" />
				<input type="email" placeholder="User email" />
				<button @click="Register">Register</button>
				<p class="msg">
					Already Registered ?
					<a href="#" @click="toLogin">Login</a>
				</p>
			</div>

			<div v-if="isLogin" class="login-form">
				<input type="text" placeholder="User Name" />
				<input type="password" placeholder="Password" />
				<button>Login</button>
				<p class="msg">
					Not Registered ?
					<a href="#" @click="toRegister">Register</a>
				</p>
			</div>
		</div>
		<button @click="test">test</button>
	</div>
</template>

<script>
import axios from 'axios'

export default {
	data() {
		return {
			isLogin: false,
		}
	},

	methods: {
		test() {
			console.log('hello')
		},
		Register() {
			axios.get('http://localhost:3000/mysql').then((res) => {
				console.log(res)
			})
		},
		toLogin() {
			this.isLogin = true
		},
		toRegister() {
			this.isLogin = false
		},
	},
}
</script>

<style scoped>
@import '../css/login.css';
</style>
