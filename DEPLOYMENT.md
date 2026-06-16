# 三轮车维修服务平台 - 部署上线完整指南

## 📋 目录

1. [准备工作](#准备工作)
2. [GitHub仓库创建](#github仓库创建)
3. [代码上传](#代码上传)
4. [Vercel部署](#vercel部署)
5. [Netlify部署](#netlify部署)
6. [域名配置](#域名配置)
7. [验证测试](#验证测试)
8. [常见问题](#常见问题)

---

## 1. 准备工作

### 1.1 需要准备的账号

| 平台 | 用途 | 注册地址 |
|------|------|----------|
| GitHub | 代码托管 | https://github.com |
| Vercel | 网站部署 | https://vercel.com |
| Netlify | 网站部署 | https://www.netlify.com |

### 1.2 需要准备的文件清单

确保以下文件都已准备好：

```
✅ index.html          - 首页
✅ services.html       - 服务详情页
✅ technicians.html    - 师傅团队页
✅ style.css           - 样式文件
✅ script.js           - 交互脚本
✅ README.md           - 项目说明
✅ robots.txt          - SEO配置
✅ sitemap.xml         - 网站地图
✅ vercel.json         - Vercel配置
✅ _redirects          - Netlify配置
```

---

## 2. GitHub仓库创建

### 2.1 注册GitHub账号

**步骤1：访问GitHub**
- 打开浏览器，访问 https://github.com
- 点击右上角 "Sign up" 按钮

**步骤2：填写注册信息**
- Username: 输入你的用户名（如：sanlunrepair）
- Email address: 输入你的邮箱
- Password: 设置密码（至少8位，包含数字和字母）

**步骤3：验证邮箱**
- GitHub会发送验证邮件到你的邮箱
- 打开邮件，点击验证链接

**步骤4：完成注册**
- 选择 "Free" 计划
- 点击 "Complete setup"

### 2.2 创建新仓库

**步骤1：登录GitHub**
- 访问 https://github.com 并登录

**步骤2：创建仓库**
- 点击右上角 "+" 按钮
- 选择 "New repository"

**步骤3：填写仓库信息**

| 字段 | 填写内容 | 说明 |
|------|----------|------|
| Repository name | `sanlunrepair` | 仓库名称（建议用英文） |
| Description | `三轮车维修服务平台` | 项目描述 |
| Visibility | `Public` | 公开仓库（免费部署需要） |
| Initialize | 不勾选 | 不要初始化README |

**步骤4：创建仓库**
- 点击 "Create repository" 按钮

---

## 3. 代码上传

### 3.1 方法一：网页上传（推荐新手）

**步骤1：进入仓库页面**
- 打开刚创建的仓库页面
- 看到 "uploading an existing file" 链接

**步骤2：点击上传**
- 点击 "uploading an existing file"

**步骤3：选择文件**
- 点击 "choose your files"
- 选择所有项目文件：
  - index.html
  - services.html
  - technicians.html
  - style.css
  - script.js
  - README.md
  - robots.txt
  - sitemap.xml
  - vercel.json
  - _redirects

**步骤4：提交更改**
- 在 "Commit changes" 区域填写：
  - Title: `初始化项目`
  - Description: `上传三轮车维修平台所有文件`
- 点击 "Commit changes" 按钮

**步骤5：验证上传成功**
- 刷新仓库页面
- 确认所有文件都已显示

### 3.2 方法二：Git命令上传（推荐开发者）

**步骤1：安装Git**
- Windows: 下载 https://git-scm.com/download/win
- Mac: 继行 `brew install git`
- Linux: 执行 `sudo apt install git`

**步骤2：打开终端**
- Windows: 打开 PowerShell
- Mac/Linux: 打开 Terminal

**步骤3：进入项目目录**
```bash
cd e:\新建文件夹
```

**步骤4：初始化Git**
```bash
git init
```

**步骤5：添加所有文件**
```bash
git add .
```

**步骤6：提交更改**
```bash
git commit -m "初始化三轮车维修平台项目"
```

**步骤7：连接远程仓库**
```bash
git remote add origin https://github.com/你的用户名/sanlunrepair.git
```

**步骤8：推送到GitHub**
```bash
git branch -M main
git push -u origin main
```

---

## 4. Vercel部署

### 4.1 注册Vercel账号

**步骤1：访问Vercel**
- 打开浏览器，访问 https://vercel.com

**步骤2：使用GitHub登录**
- 点击 "Continue with GitHub"
- 授权Vercel访问你的GitHub账号

**步骤3：完成注册**
- 填写你的名字
- 点击 "Continue"

### 4.2 导入项目

**步骤1：进入Vercel控制台**
- 登录后进入 https://vercel.com/dashboard

**步骤2：创建新项目**
- 点击 "Add New..." 按钮
- 选择 "Project"

**步骤3：选择仓库**
- 在 "Import Git Repository" 区域
- 找到你的 `sanlunrepair` 仓库
- 点击 "Import" 按钮

### 4.3 配置项目

**步骤1：项目设置**

| 设置项 | 填写内容 | 说明 |
|------|----------|------|
| Project Name | `sanlunrepair` | 项目名称 |
| Framework Preset | `Other` | 选择"其他" |
| Root Directory | `./` | 根目录 |
| Build Command | 不填写 | 静态站点不需要 |
| Output Directory | `./` | 输出目录 |

**步骤2：环境变量**
- 不需要配置环境变量
- 点击 "Deploy" 按钮

### 4.4 等待部署

**步骤1：查看部署进度**
- Vercel会显示部署进度条
- 通常需要30秒-2分钟

**步骤2：部署成功**
- 看到 "Congratulations!" 页面
- 点击 "Continue to Dashboard"

**步骤3：获取网站地址**
- Vercel会分配一个免费域名
- 格式：`https://sanlunrepair.vercel.app`
- 点击域名即可访问网站

---

## 5. Netlify部署（备选方案）

### 5.1 注册Netlify账号

**步骤1：访问Netlify**
- 打开浏览器，访问 https://www.netlify.com

**步骤2：使用GitHub登录**
- 点击 "Sign up with GitHub"
- 授权Netlify访问你的GitHub账号

### 5.2 创建新站点

**步骤1：进入控制台**
- 登录后进入 https://app.netlify.com

**步骤2：添加站点**
- 点击 "Add new site"
- 选择 "Import an existing project"

**步骤3：连接GitHub**
- 点击 "Connect with GitHub"
- 选择你的 `sanlunrepair` 仓库

### 5.3 配置部署

| 设置项 | 填写内容 |
|------|----------|
| Site name | `sanlunrepair` |
| Build command | 不填写 |
| Publish directory | `./` |

点击 "Deploy site" 按钮

### 5.4 等待部署

- Netlify会自动部署
- 通常需要1-3分钟
- 部署完成后获得域名：`https://sanlunrepair.netlify.app`

---

## 6. 域名配置

### 6.1 购买域名

**推荐平台：**

| 平台 | 价格 | 特点 |
|------|------|------|
| 阿里云 | ¥50/年 | 国内首选 |
| 腾讯云 | ¥50/年 | DNSPod集成 |
| Namesilo | $8.99/年 | 国际域名 |

**购买步骤（阿里云）：**

**步骤1：访问阿里云**
- 打开 https://wanwang.aliyun.com

**步骤2：搜索域名**
- 输入想要的域名（如：sanlunrepair.com）
- 点击 "查询"

**步骤3：选择域名**
- 选择可用的域名
- 点击 "立即购买"

**步骤4：完成购买**
- 填写域名信息
- 选择年限（建议1年）
- 完成支付

### 6.2 配置域名解析（Vercel）

**步骤1：在Vercel添加域名**

- 进入项目控制台
- 点击 "Settings"
- 点击 "Domains"
- 输入你的域名（如：sanlunrepair.com）
- 点击 "Add"

**步骤2：获取DNS记录**

Vercel会显示需要添加的DNS记录：

| 类型 | 名称 | 值 |
|------|------|------|
| A | @ | 76.76.21.21 |
| CNAME | www | cname.vercel-dns.com |

**步骤3：在阿里云添加DNS记录**

- 登录阿里云控制台
- 进入 "域名控制台"
- 点击域名后面的 "解析"
- 点击 "添加记录"

**添加A记录：**
- 记录类型：A
- 主机记录：@
- 记录值：76.76.21.21
- TTL：10分钟

**添加CNAME记录：**
- 记录类型：CNAME
- 主机记录：www
- 记录值：cname.vercel-dns.com
- TTL：10分钟

**步骤4：等待生效**
- DNS解析通常需要5-30分钟
- 可以用 https://dnschecker.org 检查

### 6.3 配置SSL证书

**Vercel自动配置：**
- Vercel会自动配置SSL证书
- 等待5-10分钟
- 访问 `https://sanlunrepair.com` 即可

---

## 7. 验证测试

### 7.1 功能测试清单

**基础功能测试：**

| 测试项 | 测试方法 | 预期结果 |
|------|----------|----------|
| 首页访问 | 访问域名 | 页面正常显示 |
| 导航链接 | 点击各导航项 | 页面跳转正常 |
| 服务页面 | 点击"维修服务" | 显示服务列表 |
| 师傅页面 | 点击"维修师傅" | 显示师傅信息 |
| 预约按钮 | 点击"立即预约" | 弹窗显示 |
| 电话按钮 | 点击"电话咨询" | 弹窗显示 |
| 表单提交 | 填写并提交 | 成功提示 |
| 移动端 | 用手机访问 | 响应式正常 |

### 7.2 SEO测试

**步骤1：检查robots.txt**
- 访问 `https://你的域名/robots.txt`
- 确认内容正确

**步骤2：检查sitemap.xml**
- 访问 `https://你的域名/sitemap.xml`
- 确认内容正确

**步骤3：提交到搜索引擎**

**Google Search Console：**
- 访问 https://search.google.com/search-console
- 添加你的网站
- 提交sitemap：`https://你的域名/sitemap.xml`

**Bing Webmaster：**
- 访问 https://www.bing.com/webmasters
- 添加你的网站
- 提交sitemap

### 7.3 性能测试

**使用工具测试：**

| 工具 | 地址 | 测试内容 |
|------|------|----------|
| PageSpeed Insights | https://pagespeed.web.dev | 页面加载速度 |
| GTmetrix | https://gtmetrix.com | 性能评分 |
| Mobile Test | https://search.google.com/test/mobile-friendly | 移动端适配 |

---

## 8. 常见问题

### 8.1 部署失败

**问题：Vercel部署失败**

**解决方案：**
1. 检查文件是否有语法错误
2. 确认所有文件都已上传
3. 查看 Vercel 的 "Deployments" 日志

### 8.2 域名无法访问

**问题：域名配置后无法访问**

**解决方案：**
1. 检查DNS记录是否正确
2. 等待DNS生效（最多48小时）
3. 用 `nslookup` 命令检查：
   ```bash
   nslookup sanlunrepair.com
   ```

### 8.3 SSL证书问题

**问题：SSL证书未生效**

**解决方案：**
1. 确认域名解析正确
2. 等待10-30分钟
3. Vercel会自动配置SSL

### 8.4 页面样式错误

**问题：页面样式不显示**

**解决方案：**
1. 检查 `style.css` 文件是否上传
2. 检查HTML中的CSS链接路径
3. 清除浏览器缓存重新访问

---

## 9. 部署成功后的下一步

### 9.1 立即要做的事

| 任务 | 说明 |
|------|------|
| ✅ 修改电话号码 | 将138-8888-8888改为真实电话 |
| ✅ 修改地址 | 将北京市朝阳区改为真实地址 |
| ✅ 添加真实师傅 | 添加真实的师傅信息 |
| ✅ 配置Google Analytics | 添加流量统计 |

### 9.2 开始运营

| 任务 | 时间 | 说明 |
|------|------|------|
| 添加更多服务 | 第1周 | 扩展服务项目 |
| SEO优化 | 第2周 | 提升搜索排名 |
| 社交媒体推广 | 第3周 | 微信、抖音推广 |
| 收集用户反馈 | 持续 | 优化服务 |

---

## 🎉 部署完成！

恭喜你完成了三轮车维修服务平台的部署！

**你的网站地址：**
- Vercel: `https://sanlunrepair.vercel.app`
- 自定义域名: `https://sanlunrepair.com`

**下一步建议：**
1. 立即测试所有功能
2. 修改真实的联系方式
3. 开始推广运营
4. 收集用户反馈并优化

---

**如有问题，请随时咨询！** 🚀