# `useNotification`

React notification hook.

## Usage

```jsx
import useNotification from 'use-notification-hook';

const Demo = () => {
  const { notify, close } = useNotification('Notification title', {
    body: 'Notification body',
    onClose: (e) => {
      console.log(e);
    },
  });

  return (
    <div>
      <button onClick={notify}>Show notification</button>
      <button onClick={close}>Close notification</button>
    </div>
  );
};
```

## Reference

```ts
const { notify, close } = useNotification();
```

- **`notify`**_`: function`_ - show notification;
- **`close`**_`: boolean`_ - close latest instance of notification;
