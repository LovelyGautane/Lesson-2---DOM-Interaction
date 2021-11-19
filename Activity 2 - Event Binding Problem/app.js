const app = Vue.createApp({
    data() {
        return {
            output1: '',
            output2: ''
        };
    },
    methods: {
        submit() {
            alert('Have a nice day!')
        }
    }
});

app.mount('#assignment'); 