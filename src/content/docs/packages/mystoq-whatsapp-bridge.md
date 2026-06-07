---
title: "@tkawen/mystoq-whatsapp-bridge"
description: "WhatsApp Cloud API bridge for Mystoq."
---

**English** — WhatsApp Cloud API bridge for Mystoq stores

<div dir="rtl">

**عربي** — جسر WhatsApp Cloud API لمتاجر Mystoq (طلبات وإشعارات).

</div>

## Install · التثبيت

```bash
npm install @tkawen/mystoq-whatsapp-bridge
```

---

> Open helper for the [WhatsApp Cloud API](https://developers.facebook.com/docs/whatsapp/cloud-api)
> integration with [Mystoq](https://mystoq.com) stores.

```bash
npm install @tkawen/mystoq-whatsapp-bridge
```

```js
import { WhatsAppBridge } from "@tkawen/mystoq-whatsapp-bridge";
const wa = new WhatsAppBridge({
  phoneNumberId: process.env.META_PHONE_ID,
  accessToken: process.env.META_TOKEN,
});

await wa.sendOrderConfirmation("+213555000000", order);
```

In Algeria, WhatsApp is the #1 commerce channel. Every Mystoq merchant
should leverage it.

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
