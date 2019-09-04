<template lang="html">
  <div class="listItem">
    <h2>{{guest.name}}</h2>
    <p>{{guest.email}}</p>
    <div class="checkedIn">
      <p>Checked in?</p>
      <p v-if="guest.checkedIn">Yes!</p>
      <p v-if="!guest.checkedIn">Not yet...</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "guest-card",
  props: ["guest"]

}
</script>

<style lang="css" scoped>
.listItem{
  border: 2px black solid;
  border-width: 4px;
}

.checkedIn{
  display: flex;
  flex-direction: row;
}
</style>
