# ⚛️ useNotification hook

`useNotification` is a React Hook API abstraction for native browser [Notification API](https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API).

### Usage

```
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

### Handlers

- `notify` - show notification
- `close` - close latest instance of notification

### Options

For a list of options and event handler please see [this link](https://developer.mozilla.org/en-US/docs/Web/API/Notification])
