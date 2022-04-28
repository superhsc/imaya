module.exports = {
    // 网站的标题，它将会被用作所有页面标题的前缀，同时，在默认主题下，它将显示在导航栏（navbar）上
    // 类型：string , 默认值：underfined
    title: 'superhsc',
    // 网站的描述，它将会以 <meta> 标签渲染道当前页面的 HTML 中
    // 类型：string，默认值：underfined
    desciption: 'Fly through the world of code', 
    // 额外需要被注入到当前页面 HTML <head> 中的标签
    // 每个标签都可以以 [tagName，{ attrName:attrValue }, innerHTML?] 的格式指定
    head: [
        [
            'link', {
                rel: 'icon',
                href: '/assets/img/logo.png'
            }
        ]
    ],
    // 指定用于 dev server 的主机名
    // 类型 string, 默认值：'0.0.0.0'
    host: '0.0.0.0',
    // 指定 dev server 的端口
    // 类型：string，默认值：8080
    port: 4000,
    // 指定客户端文件的临时目录
    // 类型：string, 默认值：/path/to/@vuepress/.temp
    temp: '/path/to/@vuepress/core/.temp',
    
    
    // 主题，为当前的主题提供一些配置，这些选项依赖于正在使用的主题
    // 类型：Object 默认值：{}
    themeConfig: {
        logo: '/assets/img/logo.png',
        nav: [
            {
                text: 'Home',
                link: '/'
            },
            {
                text: 'Guide',
                link: '/guide/'
            },
            {
                text: 'External',
                link: 'https://www.baidu.com'
            }
        ]
    }
    
}