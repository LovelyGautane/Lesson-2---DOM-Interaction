const app = Vue.createApp({
    data() {
        return {
            myName: 'Lovely Gautane',
            myAge: 21
        };
    },
    methods: {
        age() {
            return this.myAge + 5;
        }
    }
});

app.mount('#assignment'); 