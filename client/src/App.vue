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
  mounted() {
    Service.getGuests()
    .then(guests => this.guests = guests)

    eventBus.$on('guest-added', (guest) => {
      this.guests.push(guest)
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
