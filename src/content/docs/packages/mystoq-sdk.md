---
title: "@tkawen/mystoq-sdk"
description: "Official Mystoq JavaScript SDK — cash-on-delivery ecommerce for Algeria & MENA."
---

**English** — Official Mystoq JavaScript SDK - simplest COD ecommerce for Algeria & MENA

<div dir="rtl">

**عربي** — الحزمة الرسمية لـ Mystoq بلغة JavaScript — أبسط طريقة لإطلاق متجر دفع-عند-الاستلام في الجزائر والمنطقة العربية.

</div>

## Install · التثبيت

```bash
npm install @tkawen/mystoq-sdk
```

---

> Official JavaScript / TypeScript SDK for [Mystoq](https://mystoq.com) -
> the simplest way to launch a cash-on-delivery online store in Algeria & MENA.

[![npm](https://img.shields.io/badge/npm-coming%20soon-blue)](https://www.npmjs.com/package/@tkawen/mystoq-sdk)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Mystoq](https://img.shields.io/badge/Mystoq-mystoq.com-1d4ed8)](https://mystoq.com)

## Install

```bash
npm install @tkawen/mystoq-sdk
```

## Quickstart

```js
import { MystoqClient } from "@tkawen/mystoq-sdk";

const mystoq = new MystoqClient({
  apiKey: process.env.MYSTOQ_API_KEY,
  tenant: "your-store",
});

// List products
const products = await mystoq.listProducts({ limit: 20 });

// Create an order (COD = pay on delivery)
const order = await mystoq.createOrder({
  customer: { name: "Yaakoub", phone: "+213 555 12 34 56" },
  items: [{ product_id: "p_123", quantity: 2 }],
  shipping: { wilaya: "Annaba", commune: "El Bouni" },
  payment_method: "cod",
});

console.log("Order #" + order.id + " created");
```

## What Mystoq does

- 5-minute storefront setup for cash-on-delivery commerce
- Native integration with Yalidine, Maystro, Stop Desk (58 Algerian wilayas)
- 13 currencies across MENA
- WhatsApp Commerce baked in
- FakeShield: AI model that cuts COD return rates by up to 30%
- Free tier, no commission on sales

→ https://mystoq.com

## Other SDKs

- PHP: [`mystoq-php-sdk`](https://github.com/hartemyaakoub/mystoq-php-sdk)
- Python: [`mystoq-python-sdk`](https://github.com/hartemyaakoub/mystoq-python-sdk)
- CLI: [`mystoq-cli`](https://github.com/hartemyaakoub/mystoq-cli)
- OpenAPI spec: [`mystoq-openapi`](https://github.com/hartemyaakoub/mystoq-openapi)
- Postman collection: [`mystoq-postman`](https://github.com/hartemyaakoub/mystoq-postman)

## License

MIT - see [LICENSE](LICENSE).

Built by [Hartem Yaakoub](https://hartem.tkawen.com) for the
[TKAWEN ecosystem](https://tkawen.com).

---

## 🏛️ TKAWEN Ecosystem · منظومة تكوّن

> **EN** — Part of **TKAWEN**, Algeria's software ecosystem: commerce, certification, meetings and AI infrastructure. One organisation, one trust layer.

<div dir="rtl">

> **عربي** — جزء من **تكوّن**، المنظومة البرمجية الجزائرية: تجارة، توثيق، اجتماعات، وبنية ذكاء اصطناعي. مؤسّسة واحدة، طبقة ثقة واحدة.

</div>

**Packages · الحزم:** `@tkawen/mystoq-sdk` · `@tkawen/mystoq-react` · `@tkawen/mystoq-mcp-server` · `@tkawen/mystoq-seo-toolkit` · `@tkawen/mystoq-maystro-bridge` · `@tkawen/mystoq-whatsapp-bridge` · `@tkawen/mystoq-yalidine-bridge` · `@tkawen/liqaa-js` · `@tkawen/liqaa-react`

**MCP Gateway:** [mcp.tkawen.com](https://mcp.tkawen.com) — official in the [Model Context Protocol Registry](https://registry.modelcontextprotocol.io) (`com.tkawen/intelligence-gateway`)

**Web:** [tkawen.com](https://tkawen.com) · **Author · المؤلّف:** Hartem Yaakoub · **License:** MIT
