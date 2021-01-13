import t from 'tap';

import { noop, ident } from './common';

t.test('noop', async t => {
  t.equals(typeof noop, 'function');
  t.doesNotThrow(noop);
});

t.test('ident', async t => {
  t.equals(ident, ident(ident));
});
