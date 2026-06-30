# Windows 安装 OpenCode 教程

本教程适合第一次在 Windows 上安装 OpenCode 的用户。目标是完成以下流程：

1. 安装 Chocolatey
2. 使用 Chocolatey 安装 Node.js LTS
3. 使用 npm 安装 OpenCode
4. 验证 OpenCode 是否安装成功
5. 学会遇到报错时如何向 AI 提问

## 一、准备工作

你需要一台 Windows 电脑，并且可以使用管理员权限。

本教程会用到 PowerShell。注意：不是普通打开 PowerShell，而是要用管理员身份运行。

## 二、以管理员身份打开 PowerShell

操作步骤：

1. 点击 Windows 开始菜单。
2. 搜索 `PowerShell`。
3. 找到 `Windows PowerShell`。
4. 右键点击它。
5. 选择 `以管理员身份运行`。
6. 如果弹出用户账户控制窗口，点击 `是`。

后面安装 Chocolatey 和 Node.js 时，都建议使用管理员 PowerShell。

## 三、检查 PowerShell 执行策略

Chocolatey 安装脚本需要 PowerShell 允许执行脚本。先在管理员 PowerShell 中输入：

```powershell
Get-ExecutionPolicy
```

如果返回：

```powershell
Restricted
```

说明当前 PowerShell 默认不允许执行脚本。

这时输入下面这条命令：

```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force
```

说明：

`-Scope Process` 表示只对当前这个 PowerShell 窗口生效。关闭窗口后，这个设置不会永久影响系统。

## 四、安装 Chocolatey

Chocolatey 是 Windows 上常用的软件包管理工具。你可以把它理解成 Windows 里的软件安装助手。

在管理员 PowerShell 中输入下面这整条命令：

```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

等待安装完成。

安装完成后，输入：

```powershell
choco --version
```

如果能看到版本号，例如：

```powershell
2.7.2
```

说明 Chocolatey 安装成功。

如果提示找不到 `choco`，可以先关闭 PowerShell，然后重新以管理员身份打开 PowerShell，再输入：

```powershell
choco --version
```

## 五、使用 Chocolatey 安装 Node.js

OpenCode 可以通过 npm 安装，而 npm 会随 Node.js 一起安装。

建议安装 Node.js LTS，也就是长期支持版。

在管理员 PowerShell 中输入：

```powershell
choco install nodejs-lts -y
```

说明：

`nodejs-lts` 表示安装 Node.js 长期支持版。

`-y` 表示自动确认安装，不需要中途手动输入 yes。

安装完成后，建议关闭当前 PowerShell，再重新打开一个新的 PowerShell。

然后验证 Node.js：

```powershell
node --version
```

再验证 npm：

```powershell
npm --version
```

如果这两条命令都能打印版本号，说明 Node.js 和 npm 安装成功。

## 六、使用 npm 安装 OpenCode

在 PowerShell 中输入：

```powershell
npm install -g opencode-ai
```

说明：

`npm install` 表示用 npm 安装软件包。

`-g` 表示全局安装。全局安装后，你可以在任意目录中使用 `opencode` 命令。

`opencode-ai` 是 OpenCode 的 npm 包名。

安装完成后，验证 OpenCode：

```powershell
opencode --version
```

如果能打印版本号，说明 OpenCode 安装成功。

也可以直接输入：

```powershell
opencode
```

如果进入了 OpenCode 的界面，也说明安装成功。

## 七、第一次使用 OpenCode

进入你要写代码的项目目录，例如：

```powershell
cd C:\Users\你的用户名\Documents\你的项目
```

然后运行：

```powershell
opencode
```

进入 OpenCode 后，可以输入：

```text
/init
```

这个命令会让 OpenCode 分析当前项目，并生成一个 `AGENTS.md` 文件。

`AGENTS.md` 的作用是记录项目结构、开发规范、常用命令和 AI 需要遵守的规则。以后 OpenCode 再处理这个项目时，会更容易理解项目背景。

## 八、最终成功标准

安装完成后，下面四条命令都应该能正常打印结果：

```powershell
choco --version
```

```powershell
node --version
```

```powershell
npm --version
```

```powershell
opencode --version
```

如果这四条命令都成功，说明 OpenCode 的基础安装流程已经完成。

## 九、常见问题

### 1. Chocolatey 安装失败

先检查 PowerShell 是否是管理员身份运行。

然后输入：

```powershell
Get-ExecutionPolicy
```

如果返回 `Restricted`，先运行：

```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force
```

再重新运行 Chocolatey 安装命令。

### 2. 输入 choco 后提示找不到命令

可能是环境变量还没有刷新。

解决方法：

1. 关闭当前 PowerShell。
2. 重新以管理员身份打开 PowerShell。
3. 再输入：

```powershell
choco --version
```

### 3. 安装 Node.js 后 node 或 npm 找不到

同样可能是环境变量还没有刷新。

解决方法：

1. 关闭 PowerShell。
2. 重新打开 PowerShell。
3. 再输入：

```powershell
node --version
npm --version
```

### 4. npm 安装 OpenCode 失败

先确认 Node.js 和 npm 是否正常：

```powershell
node --version
npm --version
```

如果这两条命令都正常，再重新运行：

```powershell
npm install -g opencode-ai
```

如果仍然失败，把完整报错复制下来，发给 AI 分析。

## 十、遇到报错时如何向 AI 提问

不要只说“安装失败了”。这样 AI 很难判断问题。

你应该把系统、命令、报错、版本信息都发给 AI。

可以直接复制下面这个模板：

```text
我在 Windows 上安装 OpenCode，步骤如下：

1. 我用管理员身份打开了 PowerShell。
2. 我已经安装了 Chocolatey。
3. 我运行的命令是：

npm install -g opencode-ai

但是出现了下面的报错：

【这里粘贴完整报错】

我的系统是 Windows 11。

choco --version 输出是：
【粘贴输出】

node --version 输出是：
【粘贴输出】

npm --version 输出是：
【粘贴输出】

请帮我判断错误原因，并告诉我下一步应该输入什么命令。
```

问 AI 的关键是提供完整上下文：

1. 你使用的系统
2. 你在哪个终端里操作
3. 你运行了什么命令
4. 完整报错内容
5. `choco --version` 的输出
6. `node --version` 的输出
7. `npm --version` 的输出

信息越完整，AI 越容易准确判断问题。

## 十一、补充说明

OpenCode 官方也提供了 Windows 下的 Chocolatey 安装方式：

```powershell
choco install opencode
```

不过本教程采用的是先安装 Node.js，再通过 npm 安装 OpenCode 的方式：

```powershell
npm install -g opencode-ai
```

这条路线更适合后续继续学习 Node.js、npm 和前端开发工具链。

## 十二、参考链接

Chocolatey 官方安装页面：

```text
https://chocolatey.org/install
```

Chocolatey Node.js LTS 页面：

```text
https://community.chocolatey.org/packages/nodejs-lts
```

OpenCode 官方文档：

```text
https://opencode.ai/docs/
```
