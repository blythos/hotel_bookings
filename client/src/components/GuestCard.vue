<template lang="html">
  <div class="listItem">
    <h2>{{guest.name}}</h2>
    <p>{{guest.email}}</p>
    <div class="checkedIn">
      <p>Checked in?</p> &nbsp;
      <p v-if="guest.checkedIn">Yes!</p>
      <p v-if="!guest.checkedIn">Not yet...</p>
    </div>

    <EditGuest v-if="showForm" :guest="guest" />

    <button v-if="!showForm" @click="toggleForm">Show Edit Form</button>
    <button v-if="showForm" @click="toggleForm">Hide Edit Form</button>

    <div v-if="!showForm">
      <button v-if="!guest.checkedIn" @click="changeStatus">Check in</button>
      <button v-if="guest.checkedIn" @click="changeStatus">Check out</button>
    </div>

    <button @click="removeGuest">Delete</button>
  </div>
</template>

<script>
import {eventBus} from '@/main.js';
import Service from '@/services/Service.js';
import EditGuest from '@/components/EditGuest';

export default {
  name: "guest-card",
  props: ["guest"],
  data(){
    return {
      showForm: false
    }
  },
  methods: {
    removeGuest() {
      Service.deleteGuest(this.guest._id)
      .then(() => eventBus.$emit('guest-deleted', this.guest._id))
    },

    changeStatus(){
      this.guest.checkedIn ? this.guest.checkedIn=false : this.guest.checkedIn=true;

      const id = this.guest._id;
      const newStatus = {
        checkedIn:this.guest.checkedIn};

      Service.editGuest(newStatus, this.guest._id)
      .then (editedGuest => eventBus.$emit('guest-edited', editedGuest));
    },

    toggleForm(){
      this.showForm ? this.showForm=false : this.showForm=true;
    }

  },
  components:{
    EditGuest
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
