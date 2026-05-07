# Obsidian Essay.ink Publisher

Publish your Obsidian notes to [essay.ink](https://essay.ink) as waves (短波) with one click.

## Features

- **One-click publishing** — Send the current note to essay.ink via sidebar ribbon icon or command palette
- **Automatic update detection** — If a note already has an `essayUrl` in its frontmatter, the plugin updates the existing wave instead of creating a new one
- **Frontmatter integration** — After publishing, the plugin writes `essayUrl` into the note's frontmatter for future reference
- **Theme/频道 selection** — Choose a default theme (频道) for new waves in plugin settings

## Installation

### Manual (BRAT / manual download)

1. Download `main.js`, `manifest.json`, and `styles.css` from the [latest release](https://github.com/ajiangstudy/obsidian-essay-ink/releases)
2. Create a folder named `obsidian-essay-ink` in your vault's `.obsidian/plugins/` directory
3. Copy the three files into that folder
4. Enable the plugin in Obsidian Settings → Community Plugins

> **Note:** This plugin is not yet in the Obsidian Community Plugin marketplace. Use BRAT or manual installation for now.

## Setup

1. Get your API token from essay.ink: go to [essay.ink](https://essay.ink) → Settings → API
2. Open Obsidian Settings → Community Plugins → Essay.ink Publisher
3. Paste your API token
4. Optionally select a default theme (频道) for new waves:
   - 选择困难症 (1)
   - 无用之事 (2)
   - 技术塑形 (3)
   - 看不见的城市 (4)
   - 有一点哲学在里面 (5) — default

## Usage

### Publish a note

- Click the 🌊 ribbon icon in the sidebar
- Or use the command palette: `Publish current note as wave (短波)`

### Update an existing wave

If the note's frontmatter already contains `essayUrl`, the plugin will update the existing wave instead of creating a new one:

```yaml
---
essayUrl: https://essay.ink/essays/abc123
---
```

## Compatibility

- Requires Obsidian v1.0.0+
- API endpoint: `https://api.essay.ink`

## Contributing

Issues and PRs welcome at [GitHub](https://github.com/ajiangstudy/obsidian-essay-ink).

## License

MIT
