<template>
  <div>
    <h1>Event Listing</h1>
    <EventCard />
    <MediaBox>
      <h3 slot="heading">Named slot 1</h3>
      <template slot="paragraph">
        <h4>Named slot 2</h4>
        <p>Also named slot 2</p>
      </template>
    </MediaBox>
  </div>
</template>

<script>
import EventCard from "@/components/EventCard.vue";
import MediaBox from "@/components/MediaBox.vue";

export default {
  components: {
    EventCard,
    MediaBox
  }
};
</script>
