# Obsidian Essay.ink Publisher / Obsidian Essay.ink 发布插件

[English](#english) · [中文](#中文)

---

<a name="english"></a>

## English

Publish your Obsidian notes to [essay.ink](https://essay.ink) as waves (短波) with one click.

> 🤖 **This plugin was developed with [GLM-5.1](https://lobehub.com/models/glm-5.1)** — Zhipu AI's next-generation flagship model purpose-built for agentic engineering and coding tasks.

### Features

- **One-click publishing** — Send the current note to essay.ink via sidebar ribbon icon or command palette
- **Automatic update detection** — If a note already has an `essayUrl` in its frontmatter, the plugin updates the existing wave instead of creating a new one
- **Frontmatter integration** — After publishing, the plugin writes `essayUrl` into the note's frontmatter for future reference
- **Theme / 频道 selection** — Choose a default theme (频道) for new waves in plugin settings

### Installation

#### Manual (BRAT / manual download)

1. Download `main.js`, `manifest.json`, and `styles.css` from the [latest release](https://github.com/ajiangstudy/obsidian-essay-ink/releases)
2. Create a folder named `obsidian-essay-ink` in your vault's `.obsidian/plugins/` directory
3. Copy the three files into that folder
4. Enable the plugin in Obsidian Settings → Community Plugins

> **Note:** This plugin is not yet in the Obsidian Community Plugin marketplace. Use BRAT or manual installation for now.

### Setup

1. Get your API token from essay.ink: go to [essay.ink](https://essay.ink) → Settings → API
2. Open Obsidian Settings → Community Plugins → Essay.ink Publisher
3. Paste your API token
4. Optionally select a default theme (频道) for new waves:
   - 选择困难症 (1)
   - 无用之事 (2)
   - 技术塑形 (3)
   - 看不见的城市 (4)
   - 有一点哲学在里面 (5) — default

### Usage

#### Publish a note

- Click the 🌊 ribbon icon in the sidebar
- Or use the command palette: `Publish current note as wave (短波)`

#### Update an existing wave

If the note's frontmatter already contains `essayUrl`, the plugin will update the existing wave instead of creating a new one:

```yaml
---
essayUrl: https://essay.ink/essays/abc123
---
```

### Compatibility

- Requires Obsidian v1.0.0+
- API endpoint: `https://api.essay.ink`

### Contributing

Issues and PRs welcome at [GitHub](https://github.com/ajiangstudy/obsidian-essay-ink).

### License

MIT

---

<a name="中文"></a>

## 中文

一键将 Obsidian 笔记发布到 [essay.ink](https://essay.ink) 作为短波（wave）。

> 🤖 **本插件由 [GLM-5.1](https://lobehub.com/models/glm-5.1) 完成开发** —— 智谱 AI 新一代旗舰模型，专为智能工程和代码任务打造。

### 功能特性

- **一键发布** — 通过侧边栏 🌊 图标或命令面板，将当前笔记发送到 essay.ink
- **自动更新检测** — 如果笔记 frontmatter 中已有 `essayUrl`，插件会更新已有短波而非创建新短波
- **Frontmatter 集成** — 发布后自动将 `essayUrl` 写入笔记 frontmatter，方便后续引用
- **频道选择** — 在插件设置中选择发布短波时使用的默认频道

### 安装方式

#### 手动安装（BRAT / 手动下载）

1. 从 [最新发布](https://github.com/ajiangstudy/obsidian-essay-ink/releases) 下载 `main.js`、`manifest.json` 和 `styles.css`
2. 在 Obsidian 仓库的 `.obsidian/plugins/` 目录下创建 `obsidian-essay-ink` 文件夹
3. 将三个文件复制到该文件夹
4. 在 Obsidian 设置 → 社区插件中启用本插件

> **注意：** 本插件尚未进入 Obsidian 社区插件商店，目前需使用 BRAT 或手动安装。

### 配置步骤

1. 从 essay.ink 获取 API Token：访问 [essay.ink](https://essay.ink) → 设置 → API
2. 打开 Obsidian 设置 → 社区插件 → Essay.ink Publisher
3. 粘贴 API Token
4. 可选择新短波的默认频道：
   - 选择困难症 (1)
   - 无用之事 (2)
   - 技术塑形 (3)
   - 看不见的城市 (4)
   - 有一点哲学在里面 (5) — 默认

### 使用方法

#### 发布笔记

- 点击侧边栏 🌊 图标
- 或使用命令面板：`Publish current note as wave (短波)`

#### 更新已有短波

如果笔记 frontmatter 中已包含 `essayUrl`，插件将更新已有短波而非创建新的：

```yaml
---
essayUrl: https://essay.ink/essays/abc123
---
```

### 兼容性

- 需要 Obsidian v1.0.0+
- API 端点：`https://api.essay.ink`

### 贡献

欢迎在 [GitHub](https://github.com/ajiangstudy/obsidian-essay-ink) 提交 Issue 和 PR。

### 许可证

MIT