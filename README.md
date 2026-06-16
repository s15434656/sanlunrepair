# AI Tool Hub - AI工具导航平台

一个聚合全球优秀AI工具的导航平台，帮助用户快速发现、比较和使用各类AI服务。

## 🚀 功能特性

- 🔍 **智能搜索** - 支持关键词搜索工具名称和描述
- 🏷️ **分类筛选** - 8大AI工具分类，快速定位
- 📊 **排序功能** - 支持热门、最新、评分排序
- 💰 **价格筛选** - 免费/付费工具分类
- 📱 **响应式设计** - 完美适配手机、平板、桌面

## 📁 项目结构

```
├── index.html      # 首页
├── tools.html      # 工具库页面
├── style.css       # 样式文件
├── script.js       # 交互脚本
├── data.js         # 工具数据
└── README.md       # 项目说明
```

## 🚀 快速部署

### 方法1：Vercel（推荐）

1. **注册GitHub账号**
   - 访问 https://github.com 注册账号

2. **创建仓库**
   - 创建一个新仓库，命名为 `ai-tool-hub`

3. **上传代码**
   - 将所有文件上传到GitHub仓库

4. **部署到Vercel**
   - 访问 https://vercel.com 注册账号
   - 点击 "New Project"
   - 选择你的GitHub仓库
   - 点击 "Deploy"

### 方法2：Netlify

1. **注册Netlify账号**
   - 访问 https://www.netlify.com 注册账号

2. **部署项目**
   - 点击 "Add new site" → "Import an existing project"
   - 选择GitHub仓库
   - 点击 "Deploy site"

### 方法3：Cloudflare Pages

1. **注册Cloudflare账号**
   - 访问 https://pages.cloudflare.com 注册账号

2. **部署项目**
   - 点击 "Create a project"
   - 连接GitHub仓库
   - 点击 "Deploy"

## 📝 自定义配置

### 修改标题和描述

编辑 `index.html` 文件：

```html
<title>AI Tool Hub - 发现最好的AI工具</title>
```

### 添加新工具

编辑 `data.js` 文件，添加工具对象：

```javascript
{
    id: 41,
    name: "工具名称",
    icon: "🔧",
    category: "ai-chat",
    categoryName: "AI聊天",
    description: "工具描述",
    rating: 4.5,
    users: "100万+",
    price: "free",
    color: "#fff",
    bgColor: "#000",
    dateAdded: "2024-01-01"
}
```

## 🤝 贡献

欢迎提交工具数据和功能建议！

## 📄 许可证

MIT License