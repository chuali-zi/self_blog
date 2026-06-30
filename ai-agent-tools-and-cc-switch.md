# AI Agent 工具 npm 安装指令与 CC Switch 教程

本教程接在 OpenCode 安装教程之后使用。目标是让你知道：

1. 常见 AI 编程 Agent 工具如何用 npm 安装。
2. Claude Code、Codex、OpenCode、Gemini CLI、Qwen Code 分别用什么命令启动。
3. 为什么推荐安装 CC Switch。
4. CC Switch 如何切换供应商。
5. Claude Code 为什么能通过环境变量读取供应商信息。

## 一、前置条件

你需要先安装 Node.js 和 npm。

检查 Node.js：

```powershell
node --version
```

检查 npm：

```powershell
npm --version
```

如果这两条命令都能输出版本号，就可以继续。

## 二、常见 AI Agent 工具 npm 安装命令

下面这些命令建议在 PowerShell 中运行。

### 1. OpenCode

安装：

```powershell
npm install -g opencode-ai
```

验证：

```powershell
opencode --version
```

启动：

```powershell
opencode
```

官方文档：

```text
https://opencode.ai/docs/
```

### 2. Claude Code

Claude Code 官方推荐 Windows PowerShell 原生命令是：

```powershell
irm https://claude.ai/install.ps1 | iex
```

如果你已经有 Node.js，也可以用 npm 安装：

```powershell
npm install -g @anthropic-ai/claude-code
```

验证：

```powershell
claude --version
```

启动：

```powershell
claude
```

官方文档：

```text
https://docs.anthropic.com/en/docs/claude-code/setup
```

注意：Claude Code 官方文档提醒，不建议使用 `sudo npm install -g`。Windows 用户通常不涉及 sudo。

### 3. OpenAI Codex CLI

Codex CLI 官方 Windows 安装脚本是：

```powershell
powershell -ExecutionPolicy ByPass -c "irm https://chatgpt.com/codex/install.ps1 | iex"
```

如果你已经有 Node.js，也可以用 npm 安装：

```powershell
npm install -g @openai/codex
```

验证：

```powershell
codex --version
```

启动：

```powershell
codex
```

官方仓库：

```text
https://github.com/openai/codex
```

### 4. Gemini CLI

安装：

```powershell
npm install -g @google/gemini-cli
```

也可以不安装，直接运行：

```powershell
npx @google/gemini-cli
```

验证：

```powershell
gemini --version
```

启动：

```powershell
gemini
```

官方仓库：

```text
https://github.com/google-gemini/gemini-cli
```

### 5. Qwen Code

Qwen Code 要求 Node.js 22 或更高版本。

安装：

```powershell
npm install -g @qwen-code/qwen-code@latest
```

验证：

```powershell
qwen --version
```

启动：

```powershell
qwen
```

进入后可以用：

```text
/auth
```

配置供应商和 API Key。

官方仓库：

```text
https://github.com/QwenLM/qwen-code
```

## 三、一键安装多个工具

如果你已经确认 Node.js 和 npm 正常，可以一次性安装多个 npm 工具：

```powershell
npm install -g opencode-ai @anthropic-ai/claude-code @openai/codex @google/gemini-cli @qwen-code/qwen-code@latest
```

安装完成后，逐个验证：

```powershell
opencode --version
claude --version
codex --version
gemini --version
qwen --version
```

如果其中某个命令失败，先单独重新安装那个工具，不要急着全部重装。

## 四、为什么推荐 CC Switch

当你开始使用多个 Agent 工具后，会遇到一个问题：

不同工具有不同配置文件、不同 API Key、不同 base URL、不同模型名。手动切换供应商时，你可能需要反复修改 JSON、TOML、`.env` 或环境变量。

CC Switch 的作用就是把这些配置集中管理。

它可以管理 Claude Code、Codex、Gemini CLI、OpenCode、OpenClaw、Hermes 等工具的供应商配置，并提供一键切换。

推荐安装桌面版 CC Switch。

官方网站：

```text
https://ccswitch.io
```

GitHub 仓库：

```text
https://github.com/farion1231/cc-switch
```

下载页面：

```text
https://github.com/farion1231/cc-switch/releases
```

Windows 用户通常下载最新版的：

```text
CC-Switch-v{version}-Windows.msi
```

或者便携版：

```text
CC-Switch-v{version}-Windows-Portable.zip
```

如果你更喜欢命令行工具，也可以看 CC Switch CLI：

```text
https://github.com/SaladDay/cc-switch-cli
```

Windows CLI 下载地址：

```text
https://github.com/SaladDay/cc-switch-cli/releases/latest/download/cc-switch-cli-windows-x64.zip
```

## 五、CC Switch 基础使用方法

### 1. 安装并打开 CC Switch

下载并安装 CC Switch 后，打开软件。

第一次启动时，它通常会尝试读取你本机已有的 Claude Code、Codex、Gemini CLI、OpenCode 等配置。

如果你之前没有运行过这些工具，建议先分别运行一次：

```powershell
claude --help
codex --help
gemini --help
opencode --help
```

这样对应工具的配置目录会被初始化，CC Switch 更容易识别。

### 2. 添加供应商

在 CC Switch 中点击 `Add Provider`。

你通常需要填写：

1. Provider 名称
2. API Key
3. Base URL
4. 模型名
5. 适用工具，例如 Claude Code、Codex、Gemini CLI、OpenCode

如果是第三方中转 API，供应商一般会提供类似这些信息：

```text
API Key: sk-xxxx
Base URL: https://example.com/v1
Model: claude-sonnet-4-5 或其他模型名
```

### 3. 切换供应商

在 CC Switch 中选择一个 Provider，然后点击 `Enable`。

也可以在系统托盘里快速切换。

CC Switch 官方说明里提到：大多数工具切换后需要重启终端或重启对应 CLI 工具才会生效。Claude Code 当前支持 provider 数据热切换，但新手仍建议切换后重新打开终端，最稳。

### 4. 切回官方登录

如果你想回到 Claude Code 或 Codex 的官方登录方式，可以在 CC Switch 中添加官方登录预设，然后切换到官方预设，再重新运行对应工具的登录流程。

例如：

```powershell
claude
```

或：

```powershell
codex
```

然后按工具提示登录。

## 六、CC Switch CLI 常用命令

如果你安装的是 CC Switch CLI，可以运行：

```powershell
cc-switch
```

进入 TUI 界面。

列出供应商：

```powershell
cc-switch provider list
```

查看当前供应商：

```powershell
cc-switch provider current
```

切换供应商：

```powershell
cc-switch provider switch <id>
```

也可以用简写：

```powershell
cc-switch use <id>
```

指定管理 Codex：

```powershell
cc-switch --app codex provider list
```

指定管理 OpenCode：

```powershell
cc-switch --app opencode provider list
```

检查环境变量冲突：

```powershell
cc-switch env check
```

列出相关环境变量：

```powershell
cc-switch env list
```

检查本机是否安装了相关 CLI 工具：

```powershell
cc-switch env tools
```

## 七、CC Switch 切换供应商的原理

CC Switch 的核心原理可以理解成三步：

1. 它把多个供应商配置保存到自己的数据库里。
2. 你点击切换时，它把选中的供应商写入对应工具的真实配置文件。
3. 对应 Agent 工具启动时，读取自己的配置文件或环境变量，于是请求就会发到新的供应商。

CC Switch 桌面版官方说明中提到，它默认把数据存在：

```text
~/.cc-switch/cc-switch.db
```

这是 SQLite 数据库，用来保存 providers、MCP、prompts、skills 等信息。

它还会写入不同工具自己的 live config。例如 CC Switch CLI 文档列出的典型路径：

```text
Claude: ~/.claude/settings.json
Codex: ~/.codex/config.toml
Gemini: ~/.gemini/.env 和 ~/.gemini/settings.json
OpenCode: ~/.config/opencode/opencode.json
```

也就是说，CC Switch 不是一个新的大模型供应商。它更像一个配置管理器，把你手动改配置的过程自动化。

## 八、Claude Code 读取供应商信息的原理

这里的 `CC` 通常指 Claude Code。

Claude Code 可以通过环境变量控制模型请求、认证和路由。官方文档明确说明：环境变量可以控制 Claude Code 的模型选择、认证、请求路由和功能开关。

常见变量包括：

```text
ANTHROPIC_API_KEY
ANTHROPIC_AUTH_TOKEN
ANTHROPIC_BASE_URL
ANTHROPIC_MODEL
ANTHROPIC_DEFAULT_SONNET_MODEL
ANTHROPIC_DEFAULT_OPUS_MODEL
ANTHROPIC_DEFAULT_HAIKU_MODEL
API_TIMEOUT_MS
```

最常见的是这几个：

```text
ANTHROPIC_API_KEY
ANTHROPIC_BASE_URL
ANTHROPIC_MODEL
```

含义是：

`ANTHROPIC_API_KEY` 决定请求时使用哪个 API Key。

`ANTHROPIC_BASE_URL` 决定请求发到哪个 API 地址。你使用第三方中转时，通常就是改这个。

`ANTHROPIC_MODEL` 决定默认使用哪个模型。

## 九、在 PowerShell 中临时设置 Claude Code 供应商

下面是临时设置环境变量的例子，只在当前 PowerShell 窗口有效。

```powershell
$env:ANTHROPIC_API_KEY = "你的APIKey"
$env:ANTHROPIC_BASE_URL = "https://你的供应商地址"
$env:ANTHROPIC_MODEL = "你的模型名"
claude
```

这种方式适合测试。

关闭 PowerShell 后，这些变量就失效了。

## 十、在 PowerShell 中永久设置 Claude Code 供应商

如果你想让环境变量长期生效，可以使用：

```powershell
[Environment]::SetEnvironmentVariable("ANTHROPIC_API_KEY", "你的APIKey", "User")
[Environment]::SetEnvironmentVariable("ANTHROPIC_BASE_URL", "https://你的供应商地址", "User")
[Environment]::SetEnvironmentVariable("ANTHROPIC_MODEL", "你的模型名", "User")
```

设置后需要重新打开终端。

查看是否生效：

```powershell
echo $env:ANTHROPIC_API_KEY
echo $env:ANTHROPIC_BASE_URL
echo $env:ANTHROPIC_MODEL
```

删除永久环境变量：

```powershell
[Environment]::SetEnvironmentVariable("ANTHROPIC_API_KEY", $null, "User")
[Environment]::SetEnvironmentVariable("ANTHROPIC_BASE_URL", $null, "User")
[Environment]::SetEnvironmentVariable("ANTHROPIC_MODEL", $null, "User")
```

删除后也要重新打开终端。

## 十一、通过 Claude Code settings.json 设置环境变量

Claude Code 也支持在 `settings.json` 里写 `env`。

用户级配置文件位置：

```text
~/.claude/settings.json
```

Windows 中对应：

```text
%USERPROFILE%\.claude\settings.json
```

示例：

```json
{
  "env": {
    "ANTHROPIC_API_KEY": "你的APIKey",
    "ANTHROPIC_BASE_URL": "https://你的供应商地址",
    "ANTHROPIC_MODEL": "你的模型名"
  }
}
```

Claude Code 启动时会读取这些配置。

官方文档说明：当同一个行为既有环境变量又有 settings 字段时，环境变量优先级更高。也就是说，如果系统环境变量里设置了 `ANTHROPIC_API_KEY`，它可能会覆盖 settings 文件中的配置。

## 十二、为什么 CC Switch 切换后有时不生效

常见原因是环境变量冲突。

例如你已经在 Windows 系统环境变量里设置了：

```text
ANTHROPIC_API_KEY
ANTHROPIC_BASE_URL
ANTHROPIC_MODEL
```

然后你又用 CC Switch 切换 Provider。

此时 Claude Code 可能优先读取系统环境变量，导致 CC Switch 写入的配置没有生效。

解决方法：

1. 用 CC Switch 的 `env check` 检查冲突。
2. 删除不需要的系统环境变量。
3. 重新打开终端。
4. 再启动 Claude Code。

如果使用 CC Switch CLI，可以运行：

```powershell
cc-switch env check --app claude
```

查看相关环境变量：

```powershell
cc-switch env list --app claude
```

## 十三、新手推荐路线

如果你刚开始学，推荐按这个顺序：

1. 先安装 Node.js 和 npm。
2. 安装 OpenCode：`npm install -g opencode-ai`。
3. 安装 Claude Code：`npm install -g @anthropic-ai/claude-code`。
4. 安装 Codex：`npm install -g @openai/codex`。
5. 安装 Gemini CLI：`npm install -g @google/gemini-cli`。
6. 安装 CC Switch 桌面版。
7. 先用官方登录跑通一次 Claude Code 或 Codex。
8. 再用 CC Switch 添加第三方供应商。
9. 每次切换供应商后，重新打开终端验证。

## 十四、遇到问题时怎么问 AI

可以复制下面模板：

```text
我在 Windows 上安装和配置 AI Agent 工具。

我已经安装了 Node.js 和 npm。

node --version 输出是：
【粘贴输出】

npm --version 输出是：
【粘贴输出】

我运行的安装命令是：
【粘贴命令】

现在报错是：
【粘贴完整报错】

我还使用了 CC Switch 切换供应商。

当前我设置过的环境变量有：
【粘贴 ANTHROPIC_API_KEY / ANTHROPIC_BASE_URL / ANTHROPIC_MODEL 是否存在，不要粘贴完整真实 key】

请帮我判断是安装问题、环境变量冲突，还是供应商配置问题，并告诉我下一步应该输入什么命令。
```

注意：不要把完整 API Key 发给 AI。可以只保留前几位和后几位，例如：

```text
sk-abc...xyz
```

## 十五、参考链接

OpenCode 文档：

```text
https://opencode.ai/docs/
```

Claude Code 安装文档：

```text
https://docs.anthropic.com/en/docs/claude-code/setup
```

Claude Code 环境变量文档：

```text
https://docs.anthropic.com/en/docs/claude-code/env-vars
```

Codex CLI 仓库：

```text
https://github.com/openai/codex
```

Gemini CLI 仓库：

```text
https://github.com/google-gemini/gemini-cli
```

Qwen Code 仓库：

```text
https://github.com/QwenLM/qwen-code
```

CC Switch 官网：

```text
https://ccswitch.io
```

CC Switch 桌面版仓库：

```text
https://github.com/farion1231/cc-switch
```

CC Switch CLI 仓库：

```text
https://github.com/SaladDay/cc-switch-cli
```
