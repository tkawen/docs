---
title: "@tkawen/mystoq-seo-toolkit"
description: "SEO/GEO toolkit for Mystoq stores."
---

**English** — Comprehensive SEO toolkit: llms.txt + sitemap + Schema.org JSON-LD + OpenGraph + hreflang. Built for the modern AI-aware web.

<div dir="rtl">

**عربي** — حزمة SEO/GEO شاملة: توليد llms.txt و sitemaps و JSON-LD لمتاجر Mystoq.

</div>

## Install · التثبيت

```bash
npm install @tkawen/mystoq-seo-toolkit
```

---

> **The SEO toolkit built for the AI-aware web.**
> llms.txt · sitemap · Schema.org JSON-LD · OpenGraph · hreflang · robots.txt — all in one zero-dependency package.

[![npm version](https://img.shields.io/npm/v/@tkawen/mystoq-seo-toolkit.svg)](https://www.npmjs.com/package/@tkawen/mystoq-seo-toolkit)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/hartemyaakoub/seo-toolkit?style=social)](https://github.com/hartemyaakoub/seo-toolkit)

---

## Why this exists

Most SEO libraries were built for a pre-LLM world. They generate sitemap.xml and Schema.org JSON-LD, but they ignore the new reality:

- **AI search engines** (ChatGPT, Claude, Perplexity, Google AI Overviews) read your site through `llms.txt`
- **AI crawlers** (GPTBot, ClaudeBot, PerplexityBot) need explicit `robots.txt` policy
- **Schema.org** is now the primary way LLMs understand your entity (Person, Organization, Product)
- **OpenGraph + Twitter** still drive 60%+ of social traffic
- **hreflang** is essential for any non-English site

This toolkit gives you all of it — **zero dependencies, ~12KB minified, ESM-first, TypeScript-ready**.

---

## Install

```bash
npm install @tkawen/mystoq-seo-toolkit
# or
pnpm add @tkawen/mystoq-seo-toolkit
# or
yarn add @tkawen/mystoq-seo-toolkit
```

---

## Quickstart

### Generate llms.txt (the new standard)

```js
import { generateLlmsTxt } from '@tkawen/mystoq-seo-toolkit';

const llms = generateLlmsTxt({
  title: 'Acme Corp',
  summary: 'Cloud infrastructure for emerging markets.',
  details: 'Acme provides identity, payments, and compute APIs serving 50+ countries.',
  sections: [
    {
      title: 'Documentation',
      links: [
        { text: 'Getting Started', url: 'https://acme.com/docs/start' },
        { text: 'API Reference', url: 'https://acme.com/api', note: 'OpenAPI 3.1' },
      ],
    },
    {
      title: 'Products',
      links: [
        { text: 'Identity', url: 'https://acme.com/identity' },
        { text: 'Payments', url: 'https://acme.com/payments' },
      ],
    },
  ],
  optional: [
    { text: 'Changelog', url: 'https://acme.com/changelog' },
  ],
});

// Write to public/llms.txt
import { writeFileSync } from 'node:fs';
writeFileSync('public/llms.txt', llms);
```

### Generate sitemap.xml with hreflang

```js
import { generateSitemap } from '@tkawen/mystoq-seo-toolkit';

const xml = generateSitemap([
  {
    loc: 'https://acme.com/',
    lastmod: new Date(),
    changefreq: 'daily',
    priority: 1.0,
    alternates: [
      { hreflang: 'en', href: 'https://acme.com/' },
      { hreflang: 'ar', href: 'https://acme.com/ar/' },
      { hreflang: 'x-default', href: 'https://acme.com/' },
    ],
  },
  { loc: 'https://acme.com/products', changefreq: 'weekly', priority: 0.8 },
]);
```

### Schema.org JSON-LD — every type

```js
import {
  schemaOrganization,
  schemaProduct,
  schemaFAQPage,
  schemaArticle,
  schemaPerson,
  jsonLdScript,
} from '@tkawen/mystoq-seo-toolkit';

const org = schemaOrganization({
  name: 'Acme Corp',
  url: 'https://acme.com',
  logo: 'https://acme.com/logo.png',
  founder: 'Jane Doe',
  sameAs: [
    'https://twitter.com/acme',
    'https://github.com/acme',
    'https://linkedin.com/company/acme',
  ],
});

// Drop into your HTML
const html = jsonLdScript(org);
// → <script type="application/ld+json">{ ... }</script>
```

### robots.txt with AI crawler awareness

```js
import { generateRobotsTxt } from '@tkawen/mystoq-seo-toolkit';

const robots = generateRobotsTxt({
  groups: [
    { userAgent: '*', allow: ['/'], disallow: ['/admin/', '/api/'] },
  ],
  aiCrawlers: 'allow',  // explicitly allows GPTBot, ClaudeBot, PerplexityBot, etc.
  sitemap: 'https://acme.com/sitemap.xml',
  host: 'acme.com',
});
```

### OpenGraph + Twitter Card

```js
import { generateOgTags, generateTwitterCard } from '@tkawen/mystoq-seo-toolkit';

const og = generateOgTags({
  title: 'How we built a cloud',
  description: 'A 4-year journey from idea to 50k customers.',
  url: 'https://acme.com/blog/cloud-platform',
  image: 'https://acme.com/og/cloud-platform.png',
  type: 'article',
  siteName: 'Acme Blog',
});

const tw = generateTwitterCard({
  card: 'summary_large_image',
  site: '@acme',
  creator: '@janedoe',
  title: 'How we built a cloud',
  image: 'https://acme.com/og/cloud-platform.png',
});
```

### hreflang cluster

```js
import { generateHreflangTags, validateHreflang } from '@tkawen/mystoq-seo-toolkit';

const pairs = [
  { hreflang: 'en', href: 'https://acme.com/products' },
  { hreflang: 'ar', href: 'https://acme.com/ar/products' },
  { hreflang: 'fr', href: 'https://acme.com/fr/products' },
  { hreflang: 'x-default', href: 'https://acme.com/products' },
];

const tags = generateHreflangTags(pairs);

const result = validateHreflang(pairs);
if (!result.ok) console.warn(result.warnings);
```

---

## CLI

```bash
# One-command setup
npx @tkawen/mystoq-seo-toolkit init

# Generates llms.txt, robots.txt, organization.jsonld in the current dir.
```

```bash
# Generate llms.txt from a config file
npx @tkawen/mystoq-seo-toolkit llmstxt llms.config.json > public/llms.txt
```

```bash
# Generate sitemap.xml from a JSON array of URLs
echo '[{"loc":"https://acme.com"}, {"loc":"https://acme.com/about"}]' > urls.json
npx @tkawen/mystoq-seo-toolkit sitemap urls.json > public/sitemap.xml
```

---

## What's included

| Module | What it generates | Spec |
|---|---|---|
| `llmstxt` | `llms.txt` + `llms-full.txt` | [llmstxt.org](https://llmstxt.org) |
| `sitemap` | sitemap.xml, sitemap index, image sitemap | [sitemaps.org](https://www.sitemaps.org/protocol.html) |
| `robots` | robots.txt with AI crawler groups | RFC 9309 |
| `schema` | Schema.org JSON-LD (10 entity types) | [schema.org](https://schema.org) |
| `og` | OpenGraph + Twitter Card meta tags | [ogp.me](https://ogp.me) |
| `hreflang` | `<link rel="alternate">` cluster | [hreflang spec](https://developers.google.com/search/docs/specialty/international/localized-versions) |

---

## Why "AI-aware"?

The web is being read by two audiences now:

1. **Humans** clicking from Google search results
2. **AI agents** answering questions on behalf of humans

If you only optimize for #1, you're invisible to half your future traffic.

This toolkit makes you visible to both:

- ✅ `llms.txt` lets ChatGPT/Claude/Perplexity efficiently understand your site
- ✅ AI-aware `robots.txt` lets you opt in (or out) of each LLM crawler
- ✅ Rich Schema.org JSON-LD makes you the structured-data source LLMs prefer
- ✅ Classic SEO (sitemap, OG, hreflang) keeps you ranking for human searches

---

## Built by Hartem Yaakoub

Author of [Mystoq](https://mystoq.com) (e-commerce platform), [Algeria Certify](https://algeriacertify.com) (national credentialing), and [TKAWEN](https://tkawen.online) (cloud ecosystem).

Used in production across 11 platforms serving 50,000+ users.

---

## License

MIT — Use it freely in commercial and open-source projects.

---

## Related

- [@tkawen/mystoq-sdk](https://www.npmjs.com/package/@tkawen/mystoq-sdk) — Mystoq e-commerce SDK
- [@tkawen/mystoq-react](https://www.npmjs.com/package/@tkawen/mystoq-react) — React components for Mystoq
- [@tkawen/mystoq-mcp-server](https://www.npmjs.com/package/@tkawen/mystoq-mcp-server) — MCP server for AI agents

---

## Contributing

PRs welcome. See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## Sponsoring

If this saves you time, [sponsor the project](https://github.com/sponsors/hartemyaakoub) or contribute back.

---

## 🏛️ TKAWEN Ecosystem · منظومة تكوّن

> **EN** — Part of **TKAWEN**, Algeria's software ecosystem: commerce, certification, meetings and AI infrastructure. One organisation, one trust layer.

<div dir="rtl">

> **عربي** — جزء من **تكوّن**، المنظومة البرمجية الجزائرية: تجارة، توثيق، اجتماعات، وبنية ذكاء اصطناعي. مؤسّسة واحدة، طبقة ثقة واحدة.

</div>

**Packages · الحزم:** `@tkawen/mystoq-sdk` · `@tkawen/mystoq-react` · `@tkawen/mystoq-mcp-server` · `@tkawen/mystoq-seo-toolkit` · `@tkawen/mystoq-maystro-bridge` · `@tkawen/mystoq-whatsapp-bridge` · `@tkawen/mystoq-yalidine-bridge` · `@tkawen/liqaa-js` · `@tkawen/liqaa-react`

**MCP Gateway:** [mcp.tkawen.com](https://mcp.tkawen.com) — official in the [Model Context Protocol Registry](https://registry.modelcontextprotocol.io) (`com.tkawen/intelligence-gateway`)

**Web:** [tkawen.com](https://tkawen.com) · **Author · المؤلّف:** Hartem Yaakoub · **License:** MIT
