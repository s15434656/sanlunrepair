index.html
services.html
technicians.html
style.css
script.js
data.js
vercel.json
_redirects
robots.txt
sitemap.xmlindex.html
services.html
technicians.html
style.css
script.js
data.js
vercel.json
_redirects
robots.txt
sitemap.xmlindex.html
services.html
technicians.html
style.css
script.js
data.js
vercel.json
_redirects
robots.txt
sitemap.xmlindex.html
services.html
technicians.html
style.css
script.js
data.js
vercel.json
_redirects
robots.txt
sitemap.xmlindex.html
services.html
technicians.html
style.css
script.js
data.js
vercel.json
_redirects
robots.txt
sitemap.xmlconst aiTools = [
    {
        id: 1,
        name: "基础创业套餐",
        icon: "🔧",
        category: "engine",
        categoryName: "创业套餐",
        description: "适合新手创业者，包含基础工具套装、技术培训和开店指导，助您快速起步。",
        rating: 4.9,
        users: "2000+",
        price: "paid",
        color: "#fff",
        bgColor: "#10b981",
        dateAdded: "2024-01-15"
    },
    {
        id: 2,
        name: "发动机深度维修",
        icon: "⚙️",
        category: "engine",
        categoryName: "发动机维修",
        description: "专业发动机检修服务，包括故障诊断、零件更换、性能调试，确保动力系统高效运行。",
        rating: 4.8,
        users: "5000+",
        price: "paid",
        color: "#fff",
        bgColor: "#f59e0b",
        dateAdded: "2024-01-10"
    },
    {
        id: 3,
        name: "电池检测与维护",
        icon: "🔋",
        category: "battery",
        categoryName: "电池维护",
        description: "专业电池检测、修复和更换服务，提供质保保障，延长电池使用寿命。",
        rating: 4.7,
        users: "3000+",
        price: "paid",
        color: "#fff",
        bgColor: "#3b82f6",
        dateAdded: "2024-02-01"
    },
    {
        id: 4,
        name: "轮胎快速更换",
        icon: "🛞",
        category: "tire",
        categoryName: "轮胎服务",
        description: "提供各种规格轮胎更换服务，专业技师快速安装，确保行车安全。",
        rating: 4.9,
        users: "8000+",
        price: "paid",
        color: "#fff",
        bgColor: "#ef4444",
        dateAdded: "2023-12-20"
    },
    {
        id: 5,
        name: "电路系统检修",
        icon: "⚡",
        category: "electric",
        categoryName: "电路检修",
        description: "全面电路检测，解决短路、漏电等问题，确保电气系统安全可靠。",
        rating: 4.6,
        users: "2500+",
        price: "paid",
        color: "#fff",
        bgColor: "#8b5cf6",
        dateAdded: "2024-02-15"
    },
    {
        id: 6,
        name: "刹车系统维修",
        icon: "🛑",
        category: "brake",
        categoryName: "刹车系统",
        description: "刹车片更换、刹车油更换、刹车系统调试，保障行车安全。",
        rating: 4.8,
        users: "4000+",
        price: "paid",
        color: "#fff",
        bgColor: "#ec4899",
        dateAdded: "2023-11-30"
    },
    {
        id: 7,
        name: "传动系统修复",
        icon: "🔄",
        category: "transmission",
        categoryName: "传动系统",
        description: "链条、齿轮、传动轴等传动部件的检测和修复，确保动力高效传递。",
        rating: 4.5,
        users: "1800+",
        price: "paid",
        color: "#fff",
        bgColor: "#06b6d4",
        dateAdded: "2024-01-20"
    },
    {
        id: 8,
        name: "常规保养套餐",
        icon: "🔩",
        category: "maintenance",
        categoryName: "常规保养",
        description: "定期保养服务，包括机油更换、润滑检查、全车检测，延长车辆寿命。",
        rating: 4.7,
        users: "6000+",
        price: "paid",
        color: "#fff",
        bgColor: "#84cc16",
        dateAdded: "2023-12-10"
    },
    {
        id: 9,
        name: "配件销售中心",
        icon: "🧰",
        category: "accessories",
        categoryName: "配件销售",
        description: "原厂正品配件销售，包括发动机零件、电池、轮胎、刹车等全系列配件。",
        rating: 4.8,
        users: "10000+",
        price: "paid",
        color: "#fff",
        bgColor: "#f97316",
        dateAdded: "2024-01-05"
    },
    {
        id: 10,
        name: "高级创业套餐",
        icon: "💼",
        category: "engine",
        categoryName: "创业套餐",
        description: "包含全套工具设备、技术培训、营销支持和上门服务指导，全方位支持创业。",
        rating: 4.9,
        users: "800+",
        price: "paid",
        color: "#fff",
        bgColor: "#667eea",
        dateAdded: "2024-01-25"
    },
    {
        id: 11,
        name: "上门维修服务",
        icon: "🚐",
        category: "engine",
        categoryName: "增值服务",
        description: "专业技师上门服务，为客户提供便捷的维修体验，节省时间成本。",
        rating: 4.6,
        users: "1500+",
        price: "paid",
        color: "#fff",
        bgColor: "#1a6ed8",
        dateAdded: "2024-02-10"
    },
    {
        id: 12,
        name: "技术培训课程",
        icon: "📚",
        category: "engine",
        categoryName: "创业支持",
        description: "从零基础到精通的维修技术培训课程，理论+实践，快速掌握维修技能。",
        rating: 4.8,
        users: "500+",
        price: "paid",
        color: "#fff",
        bgColor: "#00d4ff",
        dateAdded: "2024-02-05"
    },
    {
        id: 13,
        name: "开店指导服务",
        icon: "🏪",
        category: "engine",
        categoryName: "创业支持",
        description: "提供店铺选址、装修设计、设备采购、证照办理等一站式开店指导服务。",
        rating: 4.7,
        users: "300+",
        price: "paid",
        color: "#fff",
        bgColor: "#7c3aed",
        dateAdded: "2024-03-01"
    },
    {
        id: 14,
        name: "营销推广方案",
        icon: "📣",
        category: "engine",
        categoryName: "创业支持",
        description: "专业营销推广方案，帮助店铺提升知名度，吸引更多客户。",
        rating: 4.5,
        users: "200+",
        price: "paid",
        color: "#fff",
        bgColor: "#238636",
        dateAdded: "2024-03-05"
    },
    {
        id: 15,
        name: "会员保养套餐",
        icon: "💎",
        category: "maintenance",
        categoryName: "常规保养",
        description: "为会员客户提供的优惠保养套餐，享受折扣优惠和优先服务。",
        rating: 4.9,
        users: "2000+",
        price: "paid",
        color: "#fff",
        bgColor: "#f2c811",
        dateAdded: "2024-01-15"
    },
    {
        id: 16,
        name: "车辆改装服务",
        icon: "🔧",
        category: "accessories",
        categoryName: "配件销售",
        description: "提供车辆改装升级服务，包括加装货架、车灯升级、防盗装置安装等。",
        rating: 4.6,
        users: "800+",
        price: "paid",
        color: "#fff",
        bgColor: "#ff6b6b",
        dateAdded: "2024-02-20"
    },
    {
        id: 17,
        name: "故障诊断服务",
        icon: "🔍",
        category: "engine",
        categoryName: "增值服务",
        description: "专业故障诊断，快速定位问题根源，提供最优解决方案。",
        rating: 4.7,
        users: "3000+",
        price: "paid",
        color: "#fff",
        bgColor: "#26a69a",
        dateAdded: "2024-01-10"
    },
    {
        id: 18,
        name: "二手车辆评估",
        icon: "📊",
        category: "engine",
        categoryName: "增值服务",
        description: "专业二手三轮车评估服务，帮助客户了解车辆状况和价值。",
        rating: 4.4,
        users: "500+",
        price: "paid",
        color: "#fff",
        bgColor: "#18bfff",
        dateAdded: "2024-03-10"
    }
];

const categoryColors = {
    "engine": "#10b981",
    "tire": "#ef4444",
    "battery": "#3b82f6",
    "electric": "#8b5cf6",
    "brake": "#ec4899",
    "transmission": "#06b6d4",
    "maintenance": "#84cc16",
    "accessories": "#f97316"
};