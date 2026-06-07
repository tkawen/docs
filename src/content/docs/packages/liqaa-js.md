---
title: "@tkawen/liqaa-js"
description: "Official TypeScript SDK for LIQAA video meetings."
---

**English** — Official TypeScript SDK for LIQAA Cloud — drop-in video calls + messaging for any website

<div dir="rtl">

**عربي** — الحزمة الرسمية بلغة TypeScript لـ LIQAA — منصّة الاجتماعات المرئية الجزائرية.

</div>

## Install · التثبيت

```bash
npm install @tkawen/liqaa-js
```

---

> Official TypeScript SDK for [LIQAA Cloud](https://liqaa.io) — drop-in video calls and messaging for any website.

[![npm](https://img.shields.io/npm/v/@tkawen/liqaa-js)](https://www.npmjs.com/package/@tkawen/liqaa-js)
[![license](https://img.shields.io/npm/l/@tkawen/liqaa-js)](LICENSE)

## Install

```bash
npm install @tkawen/liqaa-js
# or
pnpm add @tkawen/liqaa-js
# or
yarn add @tkawen/liqaa-js
```

## Quick start

```ts
import { LIQAA } from '@tkawen/liqaa-js';

const liqaa = await LIQAA.init({
  publicKey: 'pk_live_xxxxxxxxxxxxxxxxxxxxx',
  sdkToken:  'eyJhbGciOi...',  // short-lived JWT from your server
  accent:    '#1d4ed8',
});

document.querySelector('#call-btn')!.addEventListener('click', () => {
  liqaa.startCall('support@yoursite.com', 'Support team');
});
```

A floating bubble appears in the bottom-right of the page (or bottom-left if `position: 'left'`). Clicking your button starts a video call inside the bubble — no redirect.

## Get an SDK token

Your server signs your user identity with your secret key (`sk_live_…`) and exchanges it for a short-lived (1 hour) browser-safe token:

```ts
// On your server (Node example):
const r = await fetch('https://liqaa.io/api/public/v1/sdk-token', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer sk_live_...',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    public_key: 'pk_live_...',
    identity_base64: btoa(JSON.stringify({ email: user.email, name: user.name, ts: Math.floor(Date.now()/1000) })),
    signature: hmacSha256(identity, sk),
  }),
});
const { sdk_token } = await r.json();
```

Pass `sdk_token` to the browser. Full server-side examples: [liqaa.io/docs](https://liqaa.io/docs).

## API

### `LIQAA.init(options)`

```ts
type LIQAAInitOptions = {
  publicKey: string;       // pk_live_… or pk_test_…
  sdkToken:  string;       // short-lived JWT from your server
  accent?:   string;       // brand color (default '#1d4ed8')
  position?: 'left' | 'right'; // default 'right'
  rtl?:      boolean;      // auto-detected from <html dir>
  apiBase?:  string;       // override (default https://liqaa.io/api/public/v1)
  embedBase?: string;      // override (default https://liqaa.io)
  scriptSrc?: string;      // override (default https://liqaa.io/sdk.js)
};
```

Returns a `LIQAAClient`:

| Method | Description |
|--------|-------------|
| `show()` | Open the bubble panel. |
| `hide()` | Close the bubble panel. |
| `toggle()` | Toggle the bubble panel. |
| `openConversationWith(email, name?)` | Open chat thread with a user. |
| `startCall(email, name?)` | Start an instant video call. |
| `on(event, handler)` | Listen for SDK events. Returns an unsubscribe function. |

### Events

```ts
liqaa.on('call.started', (data) => console.log('call started', data));
liqaa.on('call.ended',   (data) => console.log('call ended', data));
liqaa.on('message.sent', (data) => analytics.track('liqaa.message.sent', data));
```

## Frameworks

- **React:** [`@tkawen/liqaa-react`](https://www.npmjs.com/package/@tkawen/liqaa-react) — hooks + components.
- **Vue / Svelte / Solid:** Use `@tkawen/liqaa-js` directly. Call `LIQAA.init()` once on mount.

## Browser support

Modern evergreen browsers (Chrome, Firefox, Safari, Edge — last 2 versions). For older browsers, transpile with your bundler.

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
