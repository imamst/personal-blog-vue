import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import AppLayout from "./layouts/AppLayout.vue";
import "./assets/tailwind.css";
import dayjs from "dayjs";
import UpdateLocale from "dayjs/plugin/updateLocale";
import "dayjs/locale/id";

dayjs.extend(UpdateLocale);
dayjs.locale('id');
dayjs.updateLocale('id', {
  months: [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"
  ]
});

createApp(App)
  .use(store)
  .use(router)
  .provide('dayjs', dayjs)
  .component("AppLayout", AppLayout)
  .mount("#app");
