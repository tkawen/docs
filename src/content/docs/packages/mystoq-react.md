---
title: "@tkawen/mystoq-react"
description: "React components for Mystoq storefronts."
---

**English** — React components for Mystoq storefronts

<div dir="rtl">

**عربي** — مكوّنات React جاهزة لواجهات متاجر Mystoq.

</div>

## Install · التثبيت

```bash
npm install @tkawen/mystoq-react
```

---

> React component library for Mystoq storefronts.

```bash
npm install @tkawen/mystoq-react
```

```jsx
import { ProductCard } from "@tkawen/mystoq-react";

<ProductCard
  product={{ id: "p_1", name: "حقيبة جلد", price: 349000, image_url: "/bag.jpg", stock: 5 }}
  onAdd={p => addToCart(p)}
/>
```

## Components

- `<ProductCard />` - drop-in product card with COD-friendly defaults
- More coming: `<CartDrawer />`, `<CheckoutForm />`, `<WilayaPicker />`

## Why?

Building a storefront from scratch is slow. These components match the
[Mystoq](https://mystoq.com) backend out of the box.

## License

MIT.

By [Hartem Yaakoub](https://hartem.tkawen.com).

---

## 🏛️ TKAWEN Ecosystem · منظومة تكوّن

> **EN** — Part of **TKAWEN**, Algeria's software ecosystem: commerce, certification, meetings and AI infrastructure. One organisation, one trust layer.

<div dir="rtl">

> **عربي** — جزء من **تكوّن**، المنظومة البرمجية الجزائرية: تجارة، توثيق، اجتماعات، وبنية ذكاء اصطناعي. مؤسّسة واحدة، طبقة ثقة واحدة.

</div>

**Packages · الحزم:** `@tkawen/mystoq-sdk` · `@tkawen/mystoq-react` · `@tkawen/mystoq-mcp-server` · `@tkawen/mystoq-seo-toolkit` · `@tkawen/mystoq-maystro-bridge` · `@tkawen/mystoq-whatsapp-bridge` · `@tkawen/mystoq-yalidine-bridge` · `@tkawen/liqaa-js` · `@tkawen/liqaa-react`

**MCP Gateway:** [mcp.tkawen.com](https://mcp.tkawen.com) — official in the [Model Context Protocol Registry](https://registry.modelcontextprotocol.io) (`com.tkawen/intelligence-gateway`)

**Web:** [tkawen.com](https://tkawen.com) · **Author · المؤلّف:** Hartem Yaakoub · **License:** MIT
