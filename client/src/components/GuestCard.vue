<template lang="html">
  <div class="listItem">
    <h2>{{guest.name}}</h2>
    <p>{{guest.email}}</p>
    <div class="checkedIn">
      <p>Checked in?</p> &nbsp;
      <p v-if="guest.checkedIn">Yes!</p>
      <p v-if="!guest.checkedIn">Not yet...</p>
    </div>
    <button @click="removeGuest">Delete</button>
  </div>
</template>

<script>
import {eventBus} from '@/main.js'
import Service from '@/services/Service.js'
export default {
  name: "guest-card",
  props: ["guest"],
  methods: {
    removeGuest() {
      Service.deleteGuest(this.guest._id)
      .then(() => eventBus.$emit('guest-deleted', this.guest._id))
    }
  }
}
</script>

<style lang="css" scoped>
.listItem{
  border: 2px black solid;
  border-radius: 4px;
}

.checkedIn{
  display: flex;
  flex-direction: row;
}
</style>
