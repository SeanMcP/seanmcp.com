---
title: "Create a useIsOnline React hook"
description:
  Using the Navigator's onLine property and online/offline events to create a
  custom React hook
tags:
- React
date: 2024-03-19T15:35-0400
verse:
---

There are two browser features that enable you to detect an internet connection
with JavaScript:

1. The Navigator interface's `onLine` property for the current state
2. The `online` and `offline` events for state changes

By combining these, we can create a custom React hook that tells us if the
browser is currently online.

```jsx
import * as React from "react";

// Check if window is available
const maybeWindow = typeof window === "undefined" ? null : window;

export default function useIsOnline() {
  const [isOnline, setIsOnline] = React.useState(
    // Read onLine value from navigator if available, otherwise fallback to true
    maybeWindow?.navigator.onLine ?? true
  );

  useEffect(() => {
    // Add event listeners on mount
    maybeWindow?.addEventListener("online", () => setIsOnline(true));
    maybeWindow?.addEventListener("offline", () => setIsOnline(false));

    // Remove event listeners on unmount
    return () => {
      maybeWindow?.removeEventListener("online", () => setIsOnline(true));
      maybeWindow?.removeEventListener("offline", () => setIsOnline(false));
    };
  }, []);

  // Return the online status
  return isOnline;
}
```

We can use this hook to display a banner when the user is running our app and
then goes offline:

```jsx
function App() {
    const isOnline = useIsOnline();
    return (
        <>
            {!isOnline && (
                <div role="alert">
                    You are offline. Changes will be synced when you reconnect.
                </div>
            )}
            {/* ... */}
        <>
    )
}
```

In newer versions of React you can
[use a hook like `useOnline`](https://github.com/uiwjs/react-use-online) which
depends on
[`useSyncExternalStore`](https://react.dev/reference/react/useSyncExternalStore).
