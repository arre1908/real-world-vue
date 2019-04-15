import Vue from "vue";
import Router from "vue-router";
import EventList from "./views/EventList.vue";
import EventCreate from "./views/EventCreate.vue";
import EventShow from "./views/EventShow.vue";
import FileNotFound from "./views/FileNotFound.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "event-list",
      component: EventList
    },
    {
      path: "/event/:id",
      name: "event-show",
      component: EventShow,
      props: true
    },
    {
      path: "/event/create",
      name: "event-create",
      component: EventCreate,
      alias: "/create"
    },
    {
      path: "/home",
      redirect: { name: "event-list" }
    },
    {
      path: "*",
      component: FileNotFound
    }
  ]
});
