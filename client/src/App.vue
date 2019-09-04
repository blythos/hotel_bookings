<template lang="html">
  <div class="">
    <h1>Chez Codeclan</h1>
    <GuestForm />
    <GuestsList :guests="guests"/>

  </div>

</template>

<script>
import Service from "./services/Service.js"
import GuestForm from './components/GuestForm';
import GuestsList from './components/GuestsList';
import {eventBus} from '@/main.js'

export default {
  name: 'app',
  data(){
    return{
      guests: []
    }
  },
  updated() {
    Service.getGuests()
    .then(guests => this.guests = guests)
  },
  mounted() {
    Service.getGuests()
    .then(guests => this.guests = guests)

    eventBus.$on('guest-added', (guest) => {
      this.guests.push(guest)
    })

    eventBus.$on('guest-deleted', (id) => {
      let index = this.guests.findIndex(guest => guest._id === id);
      this.guests.splice(index, 1);
    })

    eventBus.$on('guest-edited', (updatedGuest) => {
      let index = this.guests.findIndex(guest => guest._id === updatedGuest._id);
      this.guests[index] = updatedGuest;
    })


  },
  components:{
    GuestForm,
    GuestsList
  }

}
</script>

<style lang="css" scoped>
</style>
