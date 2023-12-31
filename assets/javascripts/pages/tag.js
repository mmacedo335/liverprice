import { FilterComponent } from '../components/vndaComponents.js';
import InfinityScroll from '../components/infinityScroll';
import { updatePriceBlock } from '../components/utilities.js';

const Tag = {
  init: function () {
    FilterComponent.init()
    updatePriceBlock()
    InfinityScroll.init()
  },
};

window.addEventListener('DOMContentLoaded', () => {
  Tag.init()
})
