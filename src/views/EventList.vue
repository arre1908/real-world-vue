<template>
  <div>
    <h1>Event Listing</h1>
    <router-link :to="{ name: 'event-show', params: { id: '1' } }">
      Show Event #1
    </router-link>
    <br />
    <router-link :to="{ name: 'event-show', params: { id: '2' } }">
      Show Event #2
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
