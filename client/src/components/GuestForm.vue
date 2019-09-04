<template lang="html">
  <form id="guest-add-form">
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
      <label for="checkIn">Checked In?</label>
      <input type="checkbox" id="checkIn" v-model="checkIn">
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
      checkIn: false
    }
  }
}
</script>

<style lang="css" scoped>
label{
  min-width: 20%;
  display: inline-block;
}
.formItem{
  margin-bottom: 10px;
}
</style>
