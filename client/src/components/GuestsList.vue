<template lang="html">
  <div id="guest-list">
    <h3>Please selected type of guests:</h3>
    <select v-model="selectedChoice" v-on:change="toggleList">
      <option >All</option>
      <option >Checked-In</option>
    </select>

    <div v-if= "checkedInSelected" class="checkedInListItem" v-for="(guest, index) of checkedInGuests" :key="index">
      <GuestCard :guest="guest" />
    </div>

    <div v-if="!checkedInSelected" class="allListItem" v-for= "(guest, index) of guests" :key="index">
      <GuestCard :guest="guest" />
    </div>

  </div>
</template>

<script>
import GuestCard from '@/components/GuestCard';

export default {
  name: "guests-list",
  props: ["guests"],
  data(){
    return {
      selectedChoice: "All",
      checkedInSelected: false
    }
  },
  computed: {
    checkedInGuests(){
      return this.guests.filter((guest) => {
        return guest.checkedIn
      })
    }
  },
  components: {
    GuestCard
  },
  methods: {
    toggleList(){
      if (this.selectedChoice === "All"){
        this.checkedInSelected = false;
      } else if (this.selectedChoice === "Checked-In") {
        this.checkedInSelected = true;
      }
    }
  }
}
</script>

<style lang="css" scoped>
#guest-list{
  margin: 1em 0 auto;
  display: flex;
  min-height:60vh;
  flex-direction: column;
  background-color: lightpink;
}
h3{
  margin: 0 auto;
}
select{
  width: 30%;
  margin: 0 auto;
}
</style>
