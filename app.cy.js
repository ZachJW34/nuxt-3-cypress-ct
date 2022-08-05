import { mount } from "cypress/vue";
import App from "./app.vue";

console.log({ App });

it("should render", () => {
  mount(App);
});
