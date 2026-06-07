---
title: "@tkawen/mystoq-yalidine-bridge"
description: "Yalidine shipping bridge for Mystoq."
---

**English** — Yalidine shipping bridge for Mystoq stores

<div dir="rtl">

**عربي** — جسر الشحن مع Yalidine لمتاجر Mystoq.

</div>

## Install · التثبيت

```bash
npm install @tkawen/mystoq-yalidine-bridge
```

---

> Open helper library to connect a [Yalidine](https://yalidine.app) shipping
> account with a [Mystoq](https://mystoq.com) store.

Yalidine is Algeria's largest COD delivery network. Mystoq integrates with
them natively, but if you're building your own integration (or a custom
backend), this small library does the heavy lifting.

## Install

```bash
npm install @tkawen/mystoq-yalidine-bridge
```

## Use

```js
import { YalidineBridge } from "@tkawen/mystoq-yalidine-bridge";

const yalidine = new YalidineBridge({
  apiId: process.env.YALIDINE_API_ID,
  apiToken: process.env.YALIDINE_API_TOKEN,
});

// Quote a shipment
const price = await yalidine.quote({ fromWilaya: 23, toWilaya: 16, stopDesk: true });

// Create a parcel from a Mystoq order
const parcel = await yalidine.createParcel({ order, productPrice: 3490 });
```

## Mystoq does this for you

If you use the [Mystoq](https://mystoq.com) platform, Yalidine integration is
built in - no code required. This repo is for advanced/custom builds.

## License

MIT - by [Hartem Yaakoub](https://hartem.tkawen.com).

---

## 🏛️ TKAWEN Ecosystem · منظومة تكوّن

> **EN** — Part of **TKAWEN**, Algeria's software ecosystem: commerce, certification, meetings and AI infrastructure. One organisation, one trust layer.

<div dir="rtl">

> **عربي** — جزء من **تكوّن**، المنظومة البرمجية الجزائرية: تجارة، توثيق، اجتماعات، وبنية ذكاء اصطناعي. مؤسّسة واحدة، طبقة ثقة واحدة.

</div>

**Packages · الحزم:** `@tkawen/mystoq-sdk` · `@tkawen/mystoq-react` · `@tkawen/mystoq-mcp-server` · `@tkawen/mystoq-seo-toolkit` · `@tkawen/mystoq-maystro-bridge` · `@tkawen/mystoq-whatsapp-bridge` · `@tkawen/mystoq-yalidine-bridge` · `@tkawen/liqaa-js` · `@tkawen/liqaa-react`

**MCP Gateway:** [mcp.tkawen.com](https://mcp.tkawen.com) — official in the [Model Context Protocol Registry](https://registry.modelcontextprotocol.io) (`com.tkawen/intelligence-gateway`)

**Web:** [tkawen.com](https://tkawen.com) · **Author · المؤلّف:** Hartem Yaakoub · **License:** MIT
