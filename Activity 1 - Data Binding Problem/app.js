const app = Vue.createApp({
    data() {
        return {
            myName: 'Lovely Gautane',
            myAge: 21,
            url: 'https://segwitz.com/wp-content/uploads/2021/06/vuejs-development-malaysia.jpeg'
        };
    },
    methods: {
        age() {
            return this.myAge + 5;
        },
        One() {
            const random = Math.random();
            if(random < 0.5) {
                return '0'
            } else {
                return '1'
            }
        }
    }
});

app.mount('#assignment'); 