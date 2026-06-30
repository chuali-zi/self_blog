# 在 Windows 上装 OpenCode，其实没那么难

这篇是写给第一次在 Windows 上折腾 OpenCode 的同学的。别紧张，跟着走就行，我们的目标就这几件事：

1. 装 Chocolatey
2. 用 Chocolatey 装 Node.js LTS
3. 用 npm 装 OpenCode
4. 验证一下 OpenCode 是不是装好了
5. 顺便学会「报错了该怎么问 AI」

走完这一趟，你不光会装 OpenCode，还会顺手 get 一套以后能反复用的技能。

## 一、先准备一下

你需要一台 Windows 电脑，并且能用管理员权限。

我们全程会用到 PowerShell。注意哈，不是随便打开 PowerShell 就行，得用**管理员身份**运行，不然后面有些命令会闹脾气。

## 二、用管理员身份打开 PowerShell

很简单，跟着点：

1. 点 Windows 开始菜单。
2. 搜 `PowerShell`。
3. 找到 `Windows PowerShell`。
4. 右键点它。
5. 选 `以管理员身份运行`。
6. 如果弹出用户账户控制窗口，点 `是`。

后面装 Chocolatey 和 Node.js 的时候，都建议用这个管理员 PowerShell。

## 三、检查一下 PowerShell 的执行策略

Chocolatey 的安装脚本需要 PowerShell 允许执行脚本，所以我们先看看现在是什么状态。在管理员 PowerShell 里输入：

```powershell
Get-ExecutionPolicy
```

如果它回你一个：

```powershell
Restricted
```

那意思就是：现在 PowerShell 默认不让跑脚本。

没关系，敲下面这条就行：

```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force
```

解释一下，别怕：

`-Scope Process` 表示**只对当前这个窗口生效**。你把窗口一关，这个设置就没了，不会偷偷改坏你的系统。放心用。

## 四、安装 Chocolatey

Chocolatey 是 Windows 上特别常用的软件包管理工具。你就把它理解成「Windows 里的软件安装小助手」就行。

在管理员 PowerShell 里把下面这一整条命令粘进去：

```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

然后耐心等它装完。

装完之后，输入：

```powershell
choco --version
```

如果看到一个版本号，比如：

```powershell
2.7.2
```

那就说明 Chocolatey 装好啦，恭喜。

如果它说找不到 `choco`，别慌，多半是环境变量还没刷新。把 PowerShell 关掉，重新以管理员身份打开，再来一次：

```powershell
choco --version
```

## 五、用 Chocolatey 安装 Node.js

OpenCode 可以用 npm 来装，而 npm 是跟着 Node.js 一起来的，所以我们先把 Node.js 搞定。

建议装 Node.js LTS，也就是长期支持版，稳一点。

在管理员 PowerShell 里输入：

```powershell
choco install nodejs-lts -y
```

解释一下：

`nodejs-lts` 就是 Node.js 的长期支持版。

`-y` 表示「自动确认」，省得它中途问你 yes/no，你一路顺畅。

装完之后，建议把当前 PowerShell 关掉，重新开一个新的窗口（又是刷新环境变量的老套路）。

然后验证 Node.js：

```powershell
node --version
```

再验证 npm：

```powershell
npm --version
```

这两条都能打印出版本号，就说明 Node.js 和 npm 都到位了。

## 六、用 npm 安装 OpenCode

这一步特别简单，在 PowerShell 里输入：

```powershell
npm install -g opencode-ai
```

解释一下：

`npm install` 就是用 npm 装软件包。

`-g` 是全局安装。装完之后，你在任何目录都能喊出 `opencode` 命令。

`opencode-ai` 是 OpenCode 在 npm 上的包名。

装完，验证一下：

```powershell
opencode --version
```

能打印版本号，就说明装好了。

你也可以直接敲：

```powershell
opencode
```

如果进了 OpenCode 的界面，那也说明一切正常。

## 七、第一次用 OpenCode

先进到你要写代码的项目目录，比如：

```powershell
cd C:\Users\你的用户名\Documents\你的项目
```

然后跑：

```powershell
opencode
```

进去之后，可以输入：

```text
/init
```

这条命令会让 OpenCode 分析一下当前项目，然后生成一个 `AGENTS.md` 文件。

这个 `AGENTS.md` 挺有用的，它会记录项目结构、开发规范、常用命令，还有你希望 AI 遵守的规则。以后 OpenCode 再来处理这个项目，就能更快地搞清楚状况。

## 八、怎么算彻底装成功了

装完之后，下面这四条命令都应该能正常打印结果：

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

四条全过，那基础安装流程就算圆满完成啦。

## 九、常见问题（踩坑合集）

### 1. Chocolatey 装失败

先确认一下 PowerShell 是不是管理员身份跑的。

然后看看执行策略：

```powershell
Get-ExecutionPolicy
```

如果是 `Restricted`，先来一句：

```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force
```

再重新跑 Chocolatey 的安装命令。

### 2. 输入 choco 说找不到命令

老朋友了，多半是环境变量还没刷新。

解决办法：

1. 关掉当前 PowerShell。
2. 重新以管理员身份打开。
3. 再敲：

```powershell
choco --version
```

### 3. 装完 Node.js，结果 node 或 npm 找不到

同样的套路，还是环境变量没刷新。

解决办法：

1. 关掉 PowerShell。
2. 重新打开。
3. 再敲：

```powershell
node --version
npm --version
```

### 4. npm 装 OpenCode 失败

先确认 Node.js 和 npm 本身没毛病：

```powershell
node --version
npm --version
```

这俩都正常，就再来一次：

```powershell
npm install -g opencode-ai
```

要是还失败，把完整报错复制下来，发给 AI 帮你看（怎么发，看下一节）。

## 十、报错了，怎么问 AI 才聪明

千万别只甩一句「安装失败了」，AI 跟你一样会一脸懵。

正确姿势是：把系统、命令、报错、版本信息一股脑都给它。

下面这个模板你直接抄就行：

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

问 AI 的诀窍其实就一个字：**全**。把上下文给全：

1. 你用的系统
2. 你在哪个终端里操作
3. 你跑了什么命令
4. 完整的报错内容
5. `choco --version` 的输出
6. `node --version` 的输出
7. `npm --version` 的输出

信息越全，AI 越能一眼看出问题在哪。

## 十一、补充一句

OpenCode 官方其实也提供了 Windows 下用 Chocolatey 直接装的方式：

```powershell
choco install opencode
```

不过本教程走的是「先装 Node.js，再用 npm 装 OpenCode」这条路：

```powershell
npm install -g opencode-ai
```

为啥这么选？因为这条路线更适合你后面继续学 Node.js、npm 和各种前端开发工具，一举多得。

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
