const app = Vue.createApp({
	data() {
		return {
			myName: 'Flávio Mota',
			myAge: 33,
			imageURL: 'https://avatarfiles.alphacoders.com/128/thumb-128984.png',
		};
	},
	methods: {
		myAgePlusFive() {
			return this.myAge + 5;
		},

		getRandomNumber() {
			return Math.random();
		},
	},
});

app.mount('#chart');