---
title: "@tkawen/mystoq-mcp-server"
description: "MCP server exposing Mystoq tools to AI agents."
---

**English** — Model Context Protocol server for Mystoq - let Claude AI agents read your store

<div dir="rtl">

**عربي** — خادم Model Context Protocol لـ Mystoq — يتيح لوكلاء الذكاء الاصطناعي استعمال أدوات Mystoq مباشرة.

</div>

## Install · التثبيت

```bash
npm install @tkawen/mystoq-mcp-server
```

---

> Model Context Protocol server for [Mystoq](https://mystoq.com) -
> let Claude (and other AI agents) read your store live.

[![MCP](https://img.shields.io/badge/MCP-2024--11--05-purple)](https://modelcontextprotocol.io)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## What is MCP?

The [Model Context Protocol](https://modelcontextprotocol.io) is an open
standard for connecting AI assistants to data sources. With this server,
your Mystoq store becomes a live "tool" that any MCP-aware agent
(Claude Desktop, Cursor, custom agents) can query.

## Use with Claude Desktop

Add to `~/Library/Application Support/Claude/claude_desktop_config.json`
(or the equivalent on your OS):

```json
{
  "mcpServers": {
    "mystoq": {
      "command": "npx",
      "args": ["-y", "@tkawen/mystoq-mcp-server"],
      "env": {
        "MYSTOQ_API_KEY": "your_key",
        "MYSTOQ_TENANT": "your-store"
      }
    }
  }
}
```

Then ask Claude things like:
- "List my 10 most recent orders"
- "Which wilaya generates the most COD orders this week?"
- "Find products with low stock"

## Tools exposed

- `list_products(limit?)` - products in your store
- `list_orders(status?)` - orders (optionally filtered)
- `list_wilayas()` - 58 Algerian wilayas

## License

MIT.

Built by [Hartem Yaakoub](https://hartem.tkawen.com).

---

## 🏛️ TKAWEN Ecosystem · منظومة تكوّن

> **EN** — Part of **TKAWEN**, Algeria's software ecosystem: commerce, certification, meetings and AI infrastructure. One organisation, one trust layer.

<div dir="rtl">

> **عربي** — جزء من **تكوّن**، المنظومة البرمجية الجزائرية: تجارة، توثيق، اجتماعات، وبنية ذكاء اصطناعي. مؤسّسة واحدة، طبقة ثقة واحدة.

</div>

**Packages · الحزم:** `@tkawen/mystoq-sdk` · `@tkawen/mystoq-react` · `@tkawen/mystoq-mcp-server` · `@tkawen/mystoq-seo-toolkit` · `@tkawen/mystoq-maystro-bridge` · `@tkawen/mystoq-whatsapp-bridge` · `@tkawen/mystoq-yalidine-bridge` · `@tkawen/liqaa-js` · `@tkawen/liqaa-react`

**MCP Gateway:** [mcp.tkawen.com](https://mcp.tkawen.com) — official in the [Model Context Protocol Registry](https://registry.modelcontextprotocol.io) (`com.tkawen/intelligence-gateway`)

**Web:** [tkawen.com](https://tkawen.com) · **Author · المؤلّف:** Hartem Yaakoub · **License:** MIT
