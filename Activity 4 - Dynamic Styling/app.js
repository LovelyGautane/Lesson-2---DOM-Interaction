const app = Vue.createApp({
    data() {
        return {
            style: '',
            color1: '',
            styleMe: '',
            colorMe: ''
        };
    },
    methods: {
        get(event) {
            this.style = event.target.value;
            if(this.style === 'user') {
                if(this.style === 'user1') {
                    this.color1 = 'user1';
                } else if(this.style === 'user2') {
                    this.color1 = 'user2';
                } else {
                    this.color1 = '';
                }
        },
        PickC(event) {
            this.styleMe = event.target.value;
            this.colorMe = this.styleMe;
        }
    }
});

app.mount('#assignment'); 