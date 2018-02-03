import Vue from 'vue'

import { storiesOf } from '@storybook/vue'

import ButtonDefault from './button/Default.vue'

storiesOf('Button', module)
  .add('Default', () => ButtonDefault)
