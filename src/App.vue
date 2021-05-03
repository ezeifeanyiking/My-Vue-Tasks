<template>
  <AppHeader />
  <div class="flex w-full">
    <router-view></router-view>
  </div>
  <AppFooter />
</template>

<script>
  import AppHeader from './components/AppHeader'
  import AppFooter from './components/AppFooter'
 
export default {
  components: { AppHeader, AppFooter },

}
</script>

<style>

</style>