import fs from 'node:fs';
import path from 'node:path';

const MONO = 'D:/F/tkawen-packages/packages';
const DOCS = 'D:/F/tkawen-docs/src/content/docs';

const META = {
  'mystoq-sdk': 'Official Mystoq JavaScript SDK — cash-on-delivery ecommerce for Algeria & MENA.',
  'mystoq-react': 'React components for Mystoq storefronts.',
  'mystoq-mcp-server': 'MCP server exposing Mystoq tools to AI agents.',
  'mystoq-seo-toolkit': 'SEO/GEO toolkit for Mystoq stores.',
  'mystoq-maystro-bridge': 'Maystro Delivery integration for Mystoq.',
  'mystoq-whatsapp-bridge': 'WhatsApp Cloud API bridge for Mystoq.',
  'mystoq-yalidine-bridge': 'Yalidine shipping bridge for Mystoq.',
  'liqaa-js': 'Official TypeScript SDK for LIQAA video meetings.',
  'liqaa-react': 'React hooks and components for LIQAA.',
};
const ORDER = Object.keys(META);

// clean default scaffold content
for (const d of ['guides', 'reference']) fs.rmSync(path.join(DOCS, d), { recursive: true, force: true });
fs.mkdirSync(path.join(DOCS, 'packages'), { recursive: true });

// ---- home (splash) ----
const cards = ORDER.map(s => `  <Card title="@tkawen/${s}" icon="open-book">
    ${META[s]}
    [Docs →](/packages/${s}/)
  </Card>`).join('\n');

fs.writeFileSync(path.join(DOCS, 'index.mdx'), `---
title: TKAWEN Developer Docs
description: Official documentation for the TKAWEN ecosystem — packages, SDKs and the MCP gateway.
template: splash
hero:
  tagline: |
    Algerian software ecosystem — commerce, certification, meetings & AI.
    منظومة برمجية جزائرية — تجارة، توثيق، اجتماعات، وذكاء اصطناعي.
  actions:
    - text: Getting Started · ابدأ
      link: /getting-started/
      icon: right-arrow
    - text: GitHub
      link: https://github.com/tkawen/packages
      variant: minimal
      icon: external
---

import { Card, CardGrid } from '@astrojs/starlight/components';

## Packages · الحزم

<CardGrid>
${cards}
</CardGrid>

## MCP · البوّابة

The **[TKAWEN Intelligence Gateway](/mcp/)** exposes the whole ecosystem to AI agents over the Model Context Protocol — official in the [MCP Registry](https://registry.modelcontextprotocol.io).

<div dir="rtl">

**بوّابة تكوّن الذكية** تتيح للمنظومة كاملة أن تُستعمَل من وكلاء الذكاء الاصطناعي عبر بروتوكول MCP — رسمية في السجلّ العالمي.

</div>
`);

// ---- getting started ----
const installRows = ORDER.map(s => `| \`@tkawen/${s}\` | \`npm i @tkawen/${s}\` |`).join('\n');
fs.writeFileSync(path.join(DOCS, 'getting-started.md'), `---
title: Getting Started · البداية
description: Install and use the TKAWEN packages.
---

## English

All TKAWEN libraries live under the **\`@tkawen\`** npm organisation and the single open-source monorepo [\`tkawen/packages\`](https://github.com/tkawen/packages).

\`\`\`bash
npm install @tkawen/mystoq-sdk
\`\`\`

| Package | Install |
| --- | --- |
${installRows}

<div dir="rtl">

## عربي

كل مكتبات تكوّن تحت منظّمة **\`@tkawen\`** على npm، وفي مستودع مفتوح المصدر واحد [\`tkawen/packages\`](https://github.com/tkawen/packages). ثبّت أي حزمة بـ \`npm i @tkawen/<الاسم>\`.

</div>
`);

// ---- mcp ----
fs.writeFileSync(path.join(DOCS, 'mcp.md'), `---
title: TKAWEN Intelligence Gateway (MCP)
description: One MCP endpoint for the whole TKAWEN ecosystem.
---

## English

**[mcp.tkawen.com](https://mcp.tkawen.com)** is a unified Model Context Protocol gateway. Connect one MCP client and you get every platform's tools — namespaced as \`<service>__<tool>\` (e.g. \`mystoq__search_stores\`, \`certify__verify_certificate\`) — plus the meta tools \`tkawen_overview\`, \`tkawen_recommend\` and \`tkawen_verify\`.

It is **official** in the [Model Context Protocol Registry](https://registry.modelcontextprotocol.io) as \`com.tkawen/intelligence-gateway\` (22 tools).

\`\`\`json
{
  "mcpServers": {
    "tkawen": { "url": "https://mcp.tkawen.com/" }
  }
}
\`\`\`

<div dir="rtl">

## عربي

**mcp.tkawen.com** بوّابة MCP موحّدة: عميل واحد يمنحك أدوات كل المنصّات (متاجر، توثيق...) + أدوات عُليا (نظرة شاملة، ترشيح، تحقّق). رسمية في السجلّ العالمي باسم \`com.tkawen/intelligence-gateway\` (22 أداة).

</div>
`);

// ---- package pages (from monorepo READMEs) ----
for (const s of ORDER) {
  const readme = fs.readFileSync(path.join(MONO, s, 'README.md'), 'utf8');
  const body = readme.replace(/^\s*#\s+.*\n/, '').trim();
  const fm = `---\ntitle: "@tkawen/${s}"\ndescription: "${META[s].replace(/"/g, "'")}"\n---\n\n`;
  fs.writeFileSync(path.join(DOCS, 'packages', `${s}.md`), fm + body + '\n');
}

console.log('docs content generated:', ORDER.length + 3, 'pages');
