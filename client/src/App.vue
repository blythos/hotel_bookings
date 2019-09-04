<template lang="html">
  <div class="">
    <h1>Chez Codeclan</h1>
    <GuestForm />
    <GuestsList />

  </div>

</template>

<script>
import GuestForm from './components/GuestForm';
import GuestsList from './components/GuestsList';

export default {
  name: 'app',
  components:{
    GuestForm,
    GuestsList
  }

}
</script>

<style lang="css" scoped>
</style>
