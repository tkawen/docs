---
title: "@tkawen/mystoq-maystro-bridge"
description: "Maystro Delivery integration for Mystoq."
---

**English** — Maystro Delivery bridge for Mystoq stores

<div dir="rtl">

**عربي** — جسر تكامل مع شركة التوصيل Maystro لمتاجر Mystoq.

</div>

## Install · التثبيت

```bash
npm install @tkawen/mystoq-maystro-bridge
```

---

> Open helper to bridge a [Maystro Delivery](https://maystro-delivery.com)
> account with a [Mystoq](https://mystoq.com) store.

```bash
npm install @tkawen/mystoq-maystro-bridge
```

```js
import { MaystroBridge } from "@tkawen/mystoq-maystro-bridge";
const maystro = new MaystroBridge({ apiToken: process.env.MAYSTRO_TOKEN });
const order = await maystro.createOrder({ order: mystoqOrder, productPrice: 3490 });
```

Mystoq supports Maystro natively. This is for custom integrations.

## License

MIT.

---

## 🏛️ TKAWEN Ecosystem · منظومة تكوّن

> **EN** — Part of **TKAWEN**, Algeria's software ecosystem: commerce, certification, meetings and AI infrastructure. One organisation, one trust layer.

<div dir="rtl">

> **عربي** — جزء من **تكوّن**، المنظومة البرمجية الجزائرية: تجارة، توثيق، اجتماعات، وبنية ذكاء اصطناعي. مؤسّسة واحدة، طبقة ثقة واحدة.

</div>

**Packages · الحزم:** `@tkawen/mystoq-sdk` · `@tkawen/mystoq-react` · `@tkawen/mystoq-mcp-server` · `@tkawen/mystoq-seo-toolkit` · `@tkawen/mystoq-maystro-bridge` · `@tkawen/mystoq-whatsapp-bridge` · `@tkawen/mystoq-yalidine-bridge` · `@tkawen/liqaa-js` · `@tkawen/liqaa-react`

**MCP Gateway:** [mcp.tkawen.com](https://mcp.tkawen.com) — official in the [Model Context Protocol Registry](https://registry.modelcontextprotocol.io) (`com.tkawen/intelligence-gateway`)

**Web:** [tkawen.com](https://tkawen.com) · **Author · المؤلّف:** Hartem Yaakoub · **License:** MIT
