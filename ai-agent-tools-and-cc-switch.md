# AI Agent 工具的 npm 安装指令，以及 CC Switch 食用指南

这篇接在 OpenCode 安装教程后面看最舒服。看完你会搞明白这几件事：

1. 常见的 AI 编程 Agent 工具，怎么用 npm 装。
2. Claude Code、Codex、OpenCode、Gemini CLI、Qwen Code 分别用什么命令启动。
3. 为什么我强烈推荐你装个 CC Switch。
4. CC Switch 怎么切换供应商。
5. Claude Code 为什么能通过环境变量读到供应商信息。

放轻松，咱们一个一个来。

## 一、先满足个前置条件

你得先装好 Node.js 和 npm。

看看 Node.js 在不在：

```powershell
node --version
```

再看看 npm：

```powershell
npm --version
```

这俩都能吐出版本号，咱就继续往下走。

## 二、常见 AI Agent 工具的 npm 安装命令

下面这些命令，建议都在 PowerShell 里跑。

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

Claude Code 官方在 Windows 上推荐的原生命令是这条：

```powershell
irm https://claude.ai/install.ps1 | iex
```

当然啦，你要是已经有 Node.js，用 npm 装也完全没问题：

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

小提醒：Claude Code 官方文档说了，别用 `sudo npm install -g`。不过 Windows 用户一般也碰不到 sudo，所以这条你大概率不用操心。

### 3. OpenAI Codex CLI

Codex CLI 官方的 Windows 安装脚本是这条：

```powershell
powershell -ExecutionPolicy ByPass -c "irm https://chatgpt.com/codex/install.ps1 | iex"
```

有 Node.js 的话，照样可以用 npm：

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

懒得装的话，也可以直接 npx 跑一把：

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

注意，Qwen Code 要求 Node.js 22 或更高版本，太低的话它会不开心。

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

进去之后，可以用：

```text
/auth
```

来配置供应商和 API Key。

官方仓库：

```text
https://github.com/QwenLM/qwen-code
```

## 三、想省事？一键装一堆

如果你已经确认 Node.js 和 npm 都正常，那干脆一次性把这几个 npm 工具全装了：

```powershell
npm install -g opencode-ai @anthropic-ai/claude-code @openai/codex @google/gemini-cli @qwen-code/qwen-code@latest
```

装完之后，挨个验证一下：

```powershell
opencode --version
claude --version
codex --version
gemini --version
qwen --version
```

万一某个挂了，单独把那一个重装就行，别慌着全部推倒重来。

## 四、为什么我推荐 CC Switch

当你开始同时用好几个 Agent 工具，很快就会撞上一个烦人的问题：

每个工具的配置文件都不一样，API Key 不一样，base URL 不一样，模型名也不一样。你想手动切个供应商，就得在 JSON、TOML、`.env`、环境变量之间反复横跳，改到头大。

CC Switch 干的就是把这些配置集中起来管的活儿。

它能管理 Claude Code、Codex、Gemini CLI、OpenCode、OpenClaw、Hermes 等工具的供应商配置，还能一键切换。香不香。

推荐你装桌面版 CC Switch。

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

Windows 用户一般下最新版的这个：

```text
CC-Switch-v{version}-Windows.msi
```

或者来个便携版：

```text
CC-Switch-v{version}-Windows-Portable.zip
```

要是你就喜欢命令行，也有 CC Switch CLI 版：

```text
https://github.com/SaladDay/cc-switch-cli
```

Windows CLI 下载地址：

```text
https://github.com/SaladDay/cc-switch-cli/releases/latest/download/cc-switch-cli-windows-x64.zip
```

## 五、CC Switch 上手玩一玩

### 1. 装好并打开 CC Switch

下载、安装、打开，一条龙。

第一次启动的时候，它通常会自动去读你本机已有的 Claude Code、Codex、Gemini CLI、OpenCode 等配置。

如果你之前压根没跑过这些工具，建议先各自跑一次让它们「冒个头」：

```powershell
claude --help
codex --help
gemini --help
opencode --help
```

这样对应工具的配置目录就被初始化了，CC Switch 也更容易认出它们。

### 2. 加一个供应商

在 CC Switch 里点 `Add Provider`。

你一般要填这几样：

1. Provider 名称
2. API Key
3. Base URL
4. 模型名
5. 适用工具，比如 Claude Code、Codex、Gemini CLI、OpenCode

如果用的是第三方中转 API，供应商一般会给你类似这样的一串信息：

```text
API Key: sk-xxxx
Base URL: https://example.com/v1
Model: claude-sonnet-4-5 或其他模型名
```

### 3. 切换供应商

在 CC Switch 里选一个 Provider，点 `Enable` 就完事了。

也可以在系统托盘里快速切，更方便。

CC Switch 官方说明里提了一嘴：大多数工具切换之后，得重启终端或者重启对应的 CLI 才会生效。Claude Code 现在支持 provider 数据热切换，不过新手嘛，我还是建议你切完就重开个终端，最稳，省得自己怀疑人生。

### 4. 切回官方登录

哪天你想切回 Claude Code 或 Codex 的官方登录方式，就在 CC Switch 里加一个官方登录预设，切到它，然后重新跑一遍对应工具的登录流程就行。

比如：

```powershell
claude
```

或者：

```powershell
codex
```

然后按工具提示登录即可。

## 六、CC Switch CLI 常用命令

如果你装的是 CC Switch CLI，可以直接跑：

```powershell
cc-switch
```

进入 TUI 界面。

列出供应商：

```powershell
cc-switch provider list
```

看看当前用的是哪个：

```powershell
cc-switch provider current
```

切换供应商：

```powershell
cc-switch provider switch <id>
```

懒人简写：

```powershell
cc-switch use <id>
```

指定去管 Codex：

```powershell
cc-switch --app codex provider list
```

指定去管 OpenCode：

```powershell
cc-switch --app opencode provider list
```

检查环境变量有没有打架：

```powershell
cc-switch env check
```

列出相关环境变量：

```powershell
cc-switch env list
```

看看本机装了哪些相关 CLI 工具：

```powershell
cc-switch env tools
```

## 七、CC Switch 切换供应商，背后是啥原理

其实就三步，理解了你心里就有底了：

1. 它把你的多个供应商配置存进自己的数据库里。
2. 你一点切换，它就把选中的那个供应商写进对应工具的真实配置文件。
3. 对应 Agent 工具启动时，读自己的配置文件或环境变量，于是请求就发到新供应商那儿去了。

CC Switch 桌面版官方说明里提到，它默认把数据存在这儿：

```text
~/.cc-switch/cc-switch.db
```

这是个 SQLite 数据库，用来存 providers、MCP、prompts、skills 这些信息。

它还会往各个工具自己的 live config 里写东西。CC Switch CLI 文档里列的典型路径长这样：

```text
Claude: ~/.claude/settings.json
Codex: ~/.codex/config.toml
Gemini: ~/.gemini/.env 和 ~/.gemini/settings.json
OpenCode: ~/.config/opencode/opencode.json
```

所以说白了，CC Switch 不是一个新的大模型供应商。它更像个配置管理器，把你原本要手动改配置的活儿给自动化了。

## 八、Claude Code 是怎么读到供应商信息的

这里的 `CC` 一般就是指 Claude Code。

Claude Code 可以通过环境变量来控制模型请求、认证和路由。官方文档说得很清楚：环境变量能管 Claude Code 的模型选择、认证、请求路由和功能开关。

常见的变量有这些：

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

最常打交道的就这三个：

```text
ANTHROPIC_API_KEY
ANTHROPIC_BASE_URL
ANTHROPIC_MODEL
```

它们各自管啥：

`ANTHROPIC_API_KEY` 决定请求用哪个 API Key。

`ANTHROPIC_BASE_URL` 决定请求发到哪个 API 地址。你用第三方中转的时候，改的基本就是这个。

`ANTHROPIC_MODEL` 决定默认用哪个模型。

## 九、在 PowerShell 里临时给 Claude Code 设供应商

下面是临时设置环境变量的例子，只在当前这个 PowerShell 窗口管用：

```powershell
$env:ANTHROPIC_API_KEY = "你的APIKey"
$env:ANTHROPIC_BASE_URL = "https://你的供应商地址"
$env:ANTHROPIC_MODEL = "你的模型名"
claude
```

这种方式适合临时测试。

窗口一关，这些变量就跟着没了，不留痕迹。

## 十、在 PowerShell 里永久给 Claude Code 设供应商

如果你想让环境变量长期有效，用这个：

```powershell
[Environment]::SetEnvironmentVariable("ANTHROPIC_API_KEY", "你的APIKey", "User")
[Environment]::SetEnvironmentVariable("ANTHROPIC_BASE_URL", "https://你的供应商地址", "User")
[Environment]::SetEnvironmentVariable("ANTHROPIC_MODEL", "你的模型名", "User")
```

设完记得重开终端。

想看看生效没：

```powershell
echo $env:ANTHROPIC_API_KEY
echo $env:ANTHROPIC_BASE_URL
echo $env:ANTHROPIC_MODEL
```

想删掉这些永久环境变量：

```powershell
[Environment]::SetEnvironmentVariable("ANTHROPIC_API_KEY", $null, "User")
[Environment]::SetEnvironmentVariable("ANTHROPIC_BASE_URL", $null, "User")
[Environment]::SetEnvironmentVariable("ANTHROPIC_MODEL", $null, "User")
```

删完同样要重开终端。

## 十一、通过 Claude Code 的 settings.json 来设环境变量

Claude Code 也支持在 `settings.json` 里写 `env`。

用户级配置文件在这儿：

```text
~/.claude/settings.json
```

Windows 里对应：

```text
%USERPROFILE%\.claude\settings.json
```

来个例子：

```json
{
  "env": {
    "ANTHROPIC_API_KEY": "你的APIKey",
    "ANTHROPIC_BASE_URL": "https://你的供应商地址",
    "ANTHROPIC_MODEL": "你的模型名"
  }
}
```

Claude Code 启动时就会读这些配置。

不过有个坑要注意：官方文档说，同一个行为如果既有环境变量、又有 settings 字段，那**环境变量优先级更高**。也就是说，如果你系统环境变量里设了 `ANTHROPIC_API_KEY`，它可能会盖过 settings 文件里的配置。

## 十二、为什么 CC Switch 切完有时候不生效

最常见的元凶就是环境变量打架了。

比如你之前在 Windows 系统环境变量里设过：

```text
ANTHROPIC_API_KEY
ANTHROPIC_BASE_URL
ANTHROPIC_MODEL
```

然后你又用 CC Switch 切了个 Provider。

这时候 Claude Code 可能优先读系统环境变量，结果 CC Switch 写的配置就被晾在一边没生效。

解决办法：

1. 用 CC Switch 的 `env check` 查一下冲突。
2. 把不需要的系统环境变量删掉。
3. 重开终端。
4. 再启动 Claude Code。

如果你用的是 CC Switch CLI，可以跑：

```powershell
cc-switch env check --app claude
```

看看相关环境变量：

```powershell
cc-switch env list --app claude
```

## 十三、新手推荐路线

如果你刚入门，照着这个顺序走就行，省心：

1. 先装 Node.js 和 npm。
2. 装 OpenCode：`npm install -g opencode-ai`。
3. 装 Claude Code：`npm install -g @anthropic-ai/claude-code`。
4. 装 Codex：`npm install -g @openai/codex`。
5. 装 Gemini CLI：`npm install -g @google/gemini-cli`。
6. 装 CC Switch 桌面版。
7. 先用官方登录把 Claude Code 或 Codex 跑通一次。
8. 再用 CC Switch 加第三方供应商。
9. 每次切完供应商，重开终端验证一下。

## 十四、遇到问题怎么问 AI

直接抄下面这个模板：

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

划重点：**别把完整 API Key 发给 AI**。留个头尾就行，比如：

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
