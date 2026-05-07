var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => EssayInkPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
var API_BASE = "https://api.essay.ink";
var DEFAULT_SETTINGS = {
  token: "",
  defaultThemeId: 5
  // "有一点哲学在里面"
};
var EssayInkPlugin = class extends import_obsidian.Plugin {
  constructor() {
    super(...arguments);
    this.settings = DEFAULT_SETTINGS;
  }
  async onload() {
    await this.loadSettings();
    this.addRibbonIcon("waves", "Publish to essay.ink", async () => {
      await this.publishWave();
    });
    this.addCommand({
      id: "publish-wave",
      name: "Publish current note as wave (短波)",
      callback: async () => {
        await this.publishWave();
      }
    });
    this.addSettingTab(new EssayInkSettingTab(this.app, this));
  }
  async publishWave() {
    var _a, _b, _c;
    const file = this.app.workspace.getActiveFile();
    if (!file) {
      new import_obsidian.Notice("No active note");
      return;
    }
    if (!this.settings.token) {
      new import_obsidian.Notice("Please set your API token in plugin settings");
      return;
    }
    const raw = await this.app.vault.read(file);
    const content = this.stripFrontmatter(raw);
    if (!content.trim()) {
      new import_obsidian.Notice("Note is empty — nothing to publish");
      return;
    }
    const fm = (_a = this.app.metadataCache.getFileCache(file)) == null ? void 0 : _a.frontmatter;
    const existingUrl = fm == null ? void 0 : fm.essayUrl;
    const existingId = existingUrl ? this.extractIdFromUrl(existingUrl) : null;
    try {
      if (existingId) {
        await (0, import_obsidian.requestUrl)({
          url: `${API_BASE}/essays/${existingId}`,
          method: "PUT",
          headers: {
            "Authorization": `Bearer ${this.settings.token}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ content })
        });
        new import_obsidian.Notice(`✅ Wave updated!
${existingUrl}`);
      } else {
        const resp = await (0, import_obsidian.requestUrl)({
          url: `${API_BASE}/essays`,
          method: "POST",
          headers: {
            "Authorization": `Bearer ${this.settings.token}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ content, theme_id: this.settings.defaultThemeId })
        });
        const id = (_b = resp.json) == null ? void 0 : _b.id;
        if (!id) {
          new import_obsidian.Notice("❌ Published but no ID returned");
          return;
        }
        const url = `https://essay.ink/essays/${id}`;
        new import_obsidian.Notice(`✅ Wave published!
${url}`);
        await this.app.fileManager.processFrontMatter(file, (fm2) => {
          fm2.essayUrl = url;
          delete fm2.essayId;
          delete fm2.noteId;
        });
      }
    } catch (err) {
      const msg = (err == null ? void 0 : err.message) || ((_c = err == null ? void 0 : err.json) == null ? void 0 : _c.message) || String(err);
      new import_obsidian.Notice(`❌ Failed: ${msg}`);
      console.error("essay.ink publish error", err);
    }
  }
  stripFrontmatter(raw) {
    const match = raw.match(/^---\n.*?\n---\n?/s);
    if (match) {
      return raw.slice(match[0].length);
    }
    return raw;
  }
  extractIdFromUrl(url) {
    const match = url.match(/\/essays\/([a-z0-9]+)$/i);
    return match ? match[1] : null;
  }
  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
};
var EssayInkSettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin);
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.createEl("h2", { text: "Essay.ink Publisher Settings" });
    new import_obsidian.Setting(containerEl).setName("API Token").setDesc("Your essay.ink API token (from Settings → API").addText(
      (text) => text.setPlaceholder("Enter your token").setValue(this.plugin.settings.token).onChange(async (value) => {
        this.plugin.settings.token = value;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian.Setting(containerEl).setName("Default Theme (频道)").setDesc("Theme ID for new waves. 1=选择困难症, 2=无用之事, 3=技术塑形, 4=看不见的城市, 5=有一点哲学在里面").addDropdown(
      (dropdown) => dropdown.addOption("1", "选择困难症").addOption("2", "无用之事").addOption("3", "技术塑形").addOption("4", "看不见的城市").addOption("5", "有一点哲学在里面").setValue(String(this.plugin.settings.defaultThemeId)).onChange(async (value) => {
        this.plugin.settings.defaultThemeId = parseInt(value);
        await this.plugin.saveSettings();
      })
    );
  }
};