<template lang="html">
  <form id="guest-add-form" v-on:submit="handleAddSubmit">
    <h2>Add a new guest:</h2>

    <div class="formItem">
      <label for="name">Enter name:</label>
      <input type="text" id="name" v-model="name">
    </div>

    <div class="formItem">
      <label for="email">Enter email address:</label>
      <input type="text" id="email" v-model="email">
    </div>

    <div class="formItem">
      <label for="checkedIn">Checked In?</label>
      <input type="checkbox" id="checkedIn" v-model="checkedIn">
    </div>

    <input type="submit" value="Save" />

  </form>
</template>

<script>
export default {
  name: "guest-form",
  data(){
    return {
      name: "",
      email: "",
      checkedIn: false
    }
  },
  methods: {
    handleAddSubmit(e){
      e.preventDefault();

      const guest = {
        name: this.name,
        email: this.email,
        checkedIn: this.checkedIn
      }

      //fetch request to POST


      this.name = this.email = "";
      this.checkedIn=false;

    }

  }
}
</script>

<style lang="css" scoped>
form{
  background-color: lightblue;
}
label{
  min-width: 20%;
  display: inline-block;
}
.formItem{
  margin-bottom: 10px;
}
</style>
