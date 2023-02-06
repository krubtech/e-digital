import { App } from "@vue/runtime-core";
import InlineSvg from "vue-inline-svg";
import PageWrapper from "@/components/PageWrapper.vue";

export const installComponents = (app: App) => {
  app.component("PageWrapper", PageWrapper);
  app.component("inline-svg", InlineSvg);
};
