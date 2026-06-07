---
title: "@tkawen/liqaa-react"
description: "React hooks and components for LIQAA."
---

**English** — React hooks and components for LIQAA Cloud — drop-in video calls + messaging

<div dir="rtl">

**عربي** — خطافات ومكوّنات React لـ LIQAA.

</div>

## Install · التثبيت

```bash
npm install @tkawen/liqaa-react
```

---

> React hooks + components for [LIQAA Cloud](https://liqaa.io). Built on top of [`@tkawen/liqaa-js`](https://www.npmjs.com/package/@tkawen/liqaa-js).

[![npm](https://img.shields.io/npm/v/@tkawen/liqaa-react)](https://www.npmjs.com/package/@tkawen/liqaa-react)

## Install

```bash
npm install @tkawen/liqaa-react @tkawen/liqaa-js
```

## Quick start

```tsx
import { LIQAAProvider, LIQAACallButton } from '@tkawen/liqaa-react';

function App() {
  return (
    <LIQAAProvider
      publicKey="pk_live_..."
      sdkToken={sdkTokenFromYourServer}
      accent="#1d4ed8"
    >
      <YourApp />
      <LIQAACallButton email="support@yoursite.com" name="Support">
        Talk to Support
      </LIQAACallButton>
    </LIQAAProvider>
  );
}
```

## Hooks

### `useLIQAA()`

Returns the LIQAA client (or `null` while still loading).

```tsx
import { useLIQAA } from '@tkawen/liqaa-react';

function CustomCallButton({ email }: { email: string }) {
  const liqaa = useLIQAA();
  return (
    <button onClick={() => liqaa?.startCall(email)} disabled={!liqaa}>
      Call
    </button>
  );
}
```

### `useLIQAAStatus()`

Returns `{ status: 'loading' | 'ready' | 'error', error: Error | null }`.

```tsx
const { status, error } = useLIQAAStatus();
if (status === 'error') return <div>Failed to load: {error?.message}</div>;
```

## Components

### `<LIQAAProvider>`

Wraps your app and initializes the SDK once. All `LIQAAInitOptions` from `@tkawen/liqaa-js` are accepted as props.

### `<LIQAACallButton email name>`

Drop-in button that starts a video call. Disabled until SDK is ready.

### `<LIQAAChatButton email name>`

Drop-in button that opens a chat thread.

## Server-side rendering

Both components are SSR-safe — they render the disabled fallback on the server. The SDK initializes on the client after hydration.

## TypeScript

Full types ship with the package. All callbacks are properly typed.

## License

[MIT](LICENSE) © TKAWEN GROUP

---

## 🏛️ TKAWEN Ecosystem · منظومة تكوّن

> **EN** — Part of **TKAWEN**, Algeria's software ecosystem: commerce, certification, meetings and AI infrastructure. One organisation, one trust layer.

<div dir="rtl">

> **عربي** — جزء من **تكوّن**، المنظومة البرمجية الجزائرية: تجارة، توثيق، اجتماعات، وبنية ذكاء اصطناعي. مؤسّسة واحدة، طبقة ثقة واحدة.

</div>

**Packages · الحزم:** `@tkawen/mystoq-sdk` · `@tkawen/mystoq-react` · `@tkawen/mystoq-mcp-server` · `@tkawen/mystoq-seo-toolkit` · `@tkawen/mystoq-maystro-bridge` · `@tkawen/mystoq-whatsapp-bridge` · `@tkawen/mystoq-yalidine-bridge` · `@tkawen/liqaa-js` · `@tkawen/liqaa-react`

**MCP Gateway:** [mcp.tkawen.com](https://mcp.tkawen.com) — official in the [Model Context Protocol Registry](https://registry.modelcontextprotocol.io) (`com.tkawen/intelligence-gateway`)

**Web:** [tkawen.com](https://tkawen.com) · **Author · المؤلّف:** Hartem Yaakoub · **License:** MIT
