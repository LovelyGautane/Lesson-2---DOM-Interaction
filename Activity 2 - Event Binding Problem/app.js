const app = Vue.createApp({
    data() {
        return {
            output1: '',
            output2: ''
        };
    },
    methods: {
        submit() {
            alert('Have a nice day!');
        },
        set1(event) {
            this.output1 = event.target.value;
        },
        set2(event) {
            this.output2 = event.target.value;
        }
    }
});

app.mount('#assignment'); 