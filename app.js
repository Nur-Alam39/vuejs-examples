// Electric BILL Calculator
new Vue({
el: '#app1',
data: {
		watt: 0,
		hour: 0,
		rate: 0,
		day: 0,
		image1: 'assets/images/vue_logo.png',
		image2: 'assets/images/bootstrap4.jpg'
	  },
	computed: {
		result() {
		    	return (parseFloat(this.watt) * parseFloat(this.hour) * parseFloat(this.rate) * parseFloat(this.day)) / 1000;
		    }
		  }
		});

//BMI Calculator
new Vue({
  el: '#app2',
  data: {
    age: 0,
    Height: 0,
    weight: 0,
    gender: 0,
  },
  computed: {
  	result() {
    	return (parseFloat(this.age) * parseFloat(this.height));
    }
  }
});

//VAT Calculator
new Vue({
    el: '#app3', //Attach to element id app
    data: {
        covid_19_all_news: [],
     //Blank country array
    },

    mounted() { //When element is mounted, look up data
        axios
            .get('https://newsapi.org/v2/everything?q=COVID&from=2020-03-16&sortBy=publishedAt&apiKey=e9ee4fa558844943a04a65ad36d019e9&pageSize=100&page=2')
            .then(response => 
            {
                this.covid_19_all_news = response.data
            })
            .catch(error =>(
                console.log(error)
                ));
    }

});

///Codeforces Contest API
const app = new Vue({
		el: '#app4',
		data: {
			contests: []
		},
		created () {
			fetch('https://codeforces.com/api/contest.list')
			.then(response => response.json())
			.then(json => {
			 this.contests = json.result	
			})
		}
});




///Country API
new Vue({
    el: '#app5', //Attach to element id app
    data: {
        countries_list: [] //Blank country array
    },

    mounted() { //When element is mounted, look up data
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(response => 
			{
                this.countries_list = response.data
			})
            .catch(error =>(
                console.log(error)
                ));
    }

});

///Weather API
new Vue({
  el: '#app7',
  data: {
    coord: 0,
    main: []
  },
  created () {
			fetch('http://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=483167eba07508bd7e5084cb6e6af43a')
			.then(response => response.json())
			.then(json => {
			 this.coord = json.coord,
			 this.main = json.main;	
			})
		}
});

///All contest list API

new Vue({
    el: '#app8', //Attach to element id app
    data: {
        contests: [] //Blank country array
    },

    mounted() { //When element is mounted, look up data
        axios
            .get('https://www.kontests.net/api/v1/all')
            .then(response => 
			{
                this.contests = response.data
			})
            .catch(error =>(
                console.log(error)
                ));
    }

});

new Vue({
    el: '#app9', //Attach to element id app
    data: {
        covid_19_all_countries: [],
        covid_19_total: [] //Blank country array
    },

    mounted() { //When element is mounted, look up data
        axios
            .get('https://corona.lmao.ninja/v2/countries?sort=cases')
            .then(response => 
			{
                this.covid_19_all_countries = response.data
			})
            .catch(error =>(
                console.log(error)
                ));
    }

});

new Vue({
    el: '#app10', //Attach to element id app
    data: {
        covid_19_total: [] //Blank country array
    },

    mounted() { //When element is mounted, look up data
        axios
            .get('https://corona.lmao.ninja/v2/all')
            .then(response => 
			{
                this.covid_19_total = response.data
			})
            .catch(error =>(
                console.log(error)
                ));
    }

});

new Vue({
    el: '#app11', //Attach to element id app
    data: {
        covid_19_bangladesh: [] //Blank country array
    },

    mounted() { //When element is mounted, look up data
        axios
            .get('https://corona.lmao.ninja/v2/countries/bangladesh')
            .then(response => 
			{
                this.covid_19_bangladesh = response.data
			})
            .catch(error =>(
                console.log(error)
                ));
    }

});

new Vue({
    el: '#app12', //Attach to element id app
    data: {
        covid_19_yesterday: [] //Blank country array
    },

    mounted() { //When element is mounted, look up data
        axios
            .get('https://corona.lmao.ninja/v2/countries?sort=cases')
            .then(response => 
            {
                this.covid_19_yesterday = response.data
            })
            .catch(error =>(
                console.log(error)
                ));
    }

});



