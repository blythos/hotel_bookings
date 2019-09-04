<template lang="html">
  <div id="guest-list">
    <select v-model="selectedChoice" v-on:select="toggleList">
      <option >All</option>
      <option >Checked-In</option>
    </select>
    <div class="booking" v-for= "(guest, index) of guests" :key="index">
      <GuestCard :guest="guest"/>
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
  components: {
    GuestCard
  },
  methods: {
    toggleList(){
      if (this.selectedChoice === "All"){

      }
    }
  }
}
</script>

<style lang="css" scoped>
#guest-list{
  margin: 1em 0 auto;
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: lightpink;
}
select{
  width: 30%;
  margin: 0 auto;
}
</style>
