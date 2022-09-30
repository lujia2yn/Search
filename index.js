/*
    **** id是唯一的标识，需要对id进行修改 ****
     1）label：顶部标题小标签的数据  
        · url：网址
        · iconUrl：图标地址，可以是本地地址，也可以是网络链接地址
        · title：小标签的标题
    2）bigLabel：搜索栏下的快捷方式
        · url：网址
        · icon：图标地址，可以是本地地址，也可以是网络链接地址
        · title：标题
    3）bjPick：主题图片的数据
        · url：图片网址或16进字的颜色码 例如：http://icon.png.com/ 或 #ffffff
*/
var gather = {
    label: [
        {
            id: `${Date.now() - (Math.random() * 100)}`,
            url: "https://cn.vuejs.org/",
            iconUrl: "./images/vue.png",
            title: "vue"
        },
        {
            id: `${Date.now() - (Math.random() * 100)}`,
            url: "https://neumorphism.io/#e0e0e0",
            iconUrl: "https://neumorphism.io/favicon.ico",
            title: "CSS阴影效果调试工具"
        },
        {
            id: `${Date.now() - (Math.random() * 100)}`,
            url: "https://www.bootcss.com/",
            iconUrl: "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.56/dist/ico/favicon.ico",
            title: "bootstrap"
        },
        {
            id: `${Date.now() - (Math.random() * 100)}`,
            url: "https://npmmirror.com/",
            iconUrl: "https://npmmirror.com/favicon.png",
            title: "淘宝镜像"
        },
        {
            id: `${Date.now() - (Math.random() * 100)}`,
            url: "https://webpack.docschina.org/",
            iconUrl: "https://webpack.docschina.org/favicon.f326220248556af65f41.ico",
            title: "webpack"
        },
        {
            id: `${Date.now() - (Math.random() * 100)}`,
            url: "https://www.fly63.com/tool/home.html",
            iconUrl: "http://xiaolu.3vzhuji.cc/Home%20page/subject/seach/img/youxiang.png",
            title: "tool"
        }
    ],
    bigLabel: [
        {
            id: `${Date.now() - (Math.random() * 100)}`,
            url: "https://element.eleme.cn/#/zh-CN",
            icon: "https://element.eleme.cn/favicon.ico",
            title: "element-ui",
            isNewOpen: false
        },
        {
            id: `${Date.now() - (Math.random() * 100)}`,
            url: "https://developer.mozilla.org/zh-CN/",
            icon: "https://developer.mozilla.org/favicon-48x48.cbbd161b.png",
            title: "MDN",
            isNewOpen: false,
        },
        {
            id: `${Date.now() - (Math.random() * 100)}`,
            url: "https://www.apifox.cn/web/main",
            icon: "https://cdn.apifox.cn/logo/apifox-logo-512.png",
            title: "ApiFox",
            isNewOpen: false,
        },
        {
            id: `${Date.now() - (Math.random() * 100)}`,
            url: "https://v7.apipost.cn/apis?utm_source=10039&bd_vid=7795206058613658818#/apis/design",
            icon: "https://v7.apipost.cn/favicon.ico",
            title: "ApiPost",
            isNewOpen: false,
        },
        {
            id: `${Date.now() - (Math.random() * 100)}`,
            url: "https://developers.weixin.qq.com/miniprogram/dev/api/",
            icon: "https://res.wx.qq.com/a/wx_fed/assets/res/NTI4MWU5.ico",
            title: "微信小程序",
            isNewOpen: false,
        },
        {
            id: `${Date.now() - (Math.random() * 100)}`,
            url: "https://doc.mini.talelin.com/",
            icon: "https://doc.mini.talelin.com/favicon.ico",
            title: "Lin-ui",
            isNewOpen: false,
        },
        {
            id: `${Date.now() - (Math.random() * 100)}`,
            url: "https://gitee.com/lujia2yn/",
            icon: "https://img1.baidu.com/it/u=2703861377,3432194255&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1662829200&t=e2965c5e64224991b28954da0c2dfa16",
            title: "码云",
            isNewOpen: false,
        },
        {
            id: `${Date.now() - (Math.random() * 100)}`,
            url: "https://vant-contrib.gitee.io/vant-weapp/#/home",
            icon: "https://img.yzcdn.cn/public_files/2017/12/18/fd78cf6bb5d12e2a119d0576bedfd230.png",
            title: "Vant",
            isNewOpen: false,
        },
    ],
    bjPick: [
        {
            id: `${Date.now() - (Math.random() * 100)}`,
            url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1114%2F0G020114924%2F200G0114924-15-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1657281902&t=51638d83a1374040c27060d055831c57",
        },
        {
            id: `${Date.now() - (Math.random() * 100)}`,
            url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2Ftp01%2F1ZZP044191A4-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1657281982&t=4684b1e2ef58290141b1d621c2858e83",
        },
        {
            id: `${Date.now() - (Math.random() * 100)}`,
            url: "https://img1.baidu.com/it/u=2274267407,3664569823&fm=253&fmt=auto&app=138&f=JPEG?w=752&h=500",
        },
        {
            id: `${Date.now() - (Math.random() * 100)}`,
            url: "http://xiaolu.3vzhuji.cc/zwi-main/img/s-2.jpg",
        },
        {
            id: `${Date.now() - (Math.random() * 100)}`,
            url: "https://img0.baidu.com/it/u=875588934,624267708&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=500",
        },
        {
            id: `${Date.now() - (Math.random() * 100)}`,
            url: "https://img2.baidu.com/it/u=354562595,3333591769&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",
        },
        {
            id: `${Date.now() - (Math.random() * 100)}`,
            url: "./images/RE4wwu6.jfif",
        },
        {
            id: `${Date.now() - (Math.random() * 100)}`,
            url: "#ffffff",
            title: "默认"
        },
    ]
}