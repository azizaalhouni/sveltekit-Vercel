import { v as views } from "../../chunks/views.js";
function match(param) {
  return param in views;
}
export {
  match
};
