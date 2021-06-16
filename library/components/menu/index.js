import Menu from './menu.vue';
import MenuItem from './menu-item.vue';

export default function (vue) {
  vue.component('JMenu', Menu);
  vue.component('JMenuItem', MenuItem);
}
