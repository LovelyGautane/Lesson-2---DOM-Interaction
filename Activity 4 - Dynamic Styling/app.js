const app = Vue.createApp({
    data() {
        return {
            style: '',
            color1: ''
        };
    },
    methods: {
        get(event) {
            this.style = event.target.value;
            if(this.style === 'user') {
                this.color1 = '';
            } else if(this.style === 'user1') {
                this.color1 = 'user1';
            } else if(this.style === 'user2') {
                this.color1 = 'user2';
            }
        }
    }
});

app.mount('#assignment'); 