<template lang="html">
  <div class="">
    <h1>Chez Codeclan</h1>
    <GuestForm />
    <GuestsList :guests="guests"/>

  </div>

</template>

<script>
import GuestForm from './components/GuestForm';
import GuestsList from './components/GuestsList';

export default {
  name: 'app',
  data(){
    return{
      guests: []
    }
  },
  components:{
    GuestForm,
    GuestsList
  }

}
</script>

<style lang="css" scoped>
</style>
