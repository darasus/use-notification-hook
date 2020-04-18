import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { useNotification } from '../src';
import ShowDocs from './util/ShowDocs';

const Demo = () => {
  const { notify, close } = useNotification('Some random title', {
    body: 'Some body',
    onClick: (e) => {
      console.log('CLICK EVENT', e);
    },
    onClose: (e) => {
      console.log('CLOSE EVENT', e);
    },
    onShow: (e) => {
      console.log('SHOW EVENT', e);
    },
    onError: (e) => {
      console.log('ERROR EVENT', e);
    },
  });

  return (
    <div>
      <button onClick={notify}>Notify</button>
      <button onClick={close}>Close</button>
    </div>
  );
};

storiesOf('useNotification', module)
  .add('Docs', () => <ShowDocs md={require('../docs/useNotification.md')} />)
  .add('Demo', () => <Demo />);
