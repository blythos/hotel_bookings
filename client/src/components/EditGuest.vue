<template lang="html">
  <form id="guest-edit-form" v-on:submit="handleEditSubmit">
    <h2>Edit guest</h2>

    <div class="formItem">
      <label for="name">Enter name:</label>
      <input required type="text" id="name" v-model="name">
    </div>

    <div class="formItem">
      <label for="email">Enter email address:</label>
      <input required type="email" id="email" v-model="email">
    </div>

    <div class="formItem">
      <label for="checkedIn">Checked In?</label>
      <input type="checkbox" id="checkedIn" v-model="checkedIn">
    </div>

    <input type="submit" value="Save" />

  </form>
</template>

<script>
import Service from '@/services/Service.js'
import {eventBus} from '@/main.js'
export default {
  name: 'edit-guest',
  data() {
    return {
      name: this.guest.name,
      email: this.guest.email,
      checkedIn: this.guest.checkedIn
    }
  },
  methods: {
    handleEditSubmit(e){
      e.preventDefault();

      const guest = {
        name: this.name,
        email: this.email,
        checkedIn: this.checkedIn
      }

      Service.editGuest(guest, this.guest._id)
      .then(res => eventBus.$emit('guest-edited', res))

      Service.getGuests()

    }

  },
  props: ['guest']
}
</script>

<style lang="css" scoped>
</style>
