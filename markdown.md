// creating vue app
const app = Vue.createApp({
	data: function(){
		return {
			courseGoalA: 'Finish the course and learn Vue!',
			courseGoalB: 'Master Vue and build amazing apps!',
			vueLink: 'https://vuejs.org/',
		};
	},
	methods: {
		outputGoal() {
			const randomNumber = Math.random();

			if (randomNumber < 0.5) {
				return this.courseGoalA;
			} else {
				return this.courseGoalB;
			}
		},
	},
});

// connecting to the section by referring the ID
app.mount('#user-goal');