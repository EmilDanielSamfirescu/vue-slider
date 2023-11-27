const {createApp} = Vue;
    createApp({
        data(){
            return {
                count: 0,
                autoplay: null,
                slides: [
                    {
                        image: 'img/01.webp',
                        title: 'Marvel\'s Spiderman Miles Morale',
                        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                    }, {
                        image: 'img/02.webp',
                        title: 'Ratchet & Clank: Rift Apart',
                        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                    }, {
                        image: 'img/03.webp',
                        title: 'Fortnite',
                        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                    }, {
                        image: 'img/04.webp',
                        title: 'Stray',
                        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                    }, {
                        image: 'img/05.webp',
                        title: "Marvel's Avengers",
                        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                    }
                ]
            }
        },
        methods: {
            nextButton(){
                // console.log('click next');
                if(this.count < this.slides.length - 1){
                    this.count++;
                } else {
                    this.count = 0;
                }

            },
            prevButton(){
                // console.log('click prev');
                if(this.count > 0){
                    this.count--;
                } else {
                    this.count = this.slides.length - 1;
                }
            },
            //click sulla singola immagine piccola e appare quella grande
            clickThumb(i){
                // console.log("cliccata", i);
                return this.count = i;
            },
            stopAutoPlay(){
                console.log("stop");
                clearInterval(this.autoplay);
                this.autoplay = null;

            },
            restartAutoPlay(){
                console.log("start");
                this.autoplay = setInterval(this.nextButton, 1000);
            
            },

        },
        created(){
            this.autoplay = setInterval(this.nextButton, 1000);
        }
    }).mount(`#app`);




    // nextButton (){
    //     // console.log(`ciao`);
    //     if (this.count < this.slides.length - 1){
    //         this.count++;
    //     } else {
    //         this.count = 0;
    //     }
    // },
    // prevButton (){
    //     // console.log(`ciaone`);
    //     if (this.count > 0){
    //     this.count--;
    //     } else {
    //     this.count = this.slides.length - 1;
    //     }
    // },
    // activeIndex(i) {
    //     // return (index == count ? `active` : ``);
    //     if(i == this.count) {
    //         return "active";
    //     } else {
    //         return " "
    //     }
    // },
    // changeImg(i){
    //     console.log(i);
    //     this.counter = i;
    // }