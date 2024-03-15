const { createApp } = Vue

createApp({
    data() {
        return {
            activeIndex: 0,
            messageSent: "",
            searchingContact: "",
            flag: false,
            filteredContact: [],
            toggleMsgMenu: false,
            activeMsgIndex: null,
            showClassMenu: 'shown',
            contacts: [
                {
                    name: 'Michele',
                    avatar: './assets/img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './assets/img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './assets/img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './assets/img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './assets/img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Debora',
                    avatar: './assets/img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Carlos',
                    avatar: './assets/img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Martin',
                    avatar: './assets/img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ]
        }
    },
    methods: {
        showMessages(contact) {
            const contactIndex = this.contacts.indexOf(contact);
            this.activeIndex = contactIndex;

        },
        sendMessage(index) {

            const newMessage = {
                date: this.currentDate(),
                message: this.messageSent,
                status: 'sent'
            };

            this.contacts[index].messages.push(newMessage);
            setTimeout(this.replyMessage(index), 1000)
            this.messageSent = "";
        },
        replyMessage(index) {

            const newMessage = {
                date: this.currentDate(),
                message: 'ok',
                status: 'received'
            };

            this.contacts[index].messages.push(newMessage);
        },
        currentDate() {
            const currentDate = new Date();
            let minutes = 0;
            if (currentDate.getMinutes() < 10) {
                minutes = '0' + currentDate.getMinutes();
            } else {
                minutes = currentDate.getMinutes();
            }
            const dateTime = currentDate.getDate() + "/"
                + (currentDate.getMonth() + 1) + "/"
                + currentDate.getFullYear() + " "
                + currentDate.getHours() + ":"
                + minutes;

            return dateTime;
        },
        searchContact() {

            const searchingString = this.searchingContact.charAt(0).toUpperCase() + this.searchingContact.slice(1).toLowerCase();

            this.filteredContact = this.contacts.filter((contact, index) => {

                if (contact.name.includes(searchingString)) {
                    this.flag = true
                    return contact;
                }
            });

        },
        removeMsg(index) {

            /* this.check();    */
            /* console.log(this.contacts[this.activeIndex].messages); */
            let msgArray = this.contacts[this.activeIndex].messages;
            console.log(msgArray);

            msgArray.splice(index, 1);

            console.log(msgArray);

            this.showClassMenu = null;
            /* let msgIndex = msgArray.indexOf(msg); */
            
            

        },
        lastMsgIndex(contact) {
            return contact.messages.length - 1;

        },
        check() {
            console.log(this.contacts[this.activeIndex].messages);
        },
        dropDownMenu(msg){
            
            this.toggleMsgMenu = !this.toggleMsgMenu; 

            const msgIndex = this.contacts[this.activeIndex].messages.indexOf(msg);
            
            if (msg[msgIndex] === this.contacts[this.activeIndex].messages[this.activeMsgIndex]) {
                this.activeMsgIndex = msgIndex;
                
            }
              
        }

    },
    mounted() {

    }

}).mount('#app')

