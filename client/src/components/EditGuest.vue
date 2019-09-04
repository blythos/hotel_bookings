<template lang="html">
  <form id="guest-edit-form" v-on:submit="handleAddSubmit">
    <h2>Add a new guest:</h2>

    <div class="formItem">
      <label for="name">Enter name:</label>
      <input :value="this.guest.name" type="text" id="name" v-model="name">
    </div>

    <div class="formItem">
      <label for="email">Enter email address:</label>
      <input :value="this.guest.email" type="text" id="email" v-model="email">
    </div>

    <div class="formItem">
      <label for="checkedIn">Checked In?</label>
      <input value="this.guest.email" type="checkbox" id="checkedIn" v-model="checkedIn">
    </div>

    <input type="submit" value="Save" />

  </form>
</template>

<script>
export default {
  name: 'edit-guest',
  props: ['guest']
}
</script>

<style lang="css" scoped>
</style>
