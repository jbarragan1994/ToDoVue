import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faEdit,
  faTrash,
  faPlusCircle
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faHome, faEdit, faTrash, faPlusCircle);

Vue.component("font-awesome-icon", FontAwesomeIcon);
