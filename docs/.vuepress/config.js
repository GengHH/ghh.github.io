/*
 * @Author: GengHH
 * @Date: 2021-01-15 15:27:06
 * @LastEditors: GengHH
 * @LastEditTime: 2021-02-04 18:27:20
 * @Description: file content
 * @FilePath: \VuePress2\docs\.vuepress\config.js
 */
module.exports = {
	// 左上角标题
	title: "GHH 的文档库",
	// 描述
	description: "前端工程师 GHH 的文档库",
	// 头部部署，右上角小图标
	head: [
		// ico 配置
		[
			"link",
			{
				rel: "icon",
				href: "/img/logo.ico",
			},
		],
	],
	// 主题部署
	themeConfig: {
		/**
		 * 右侧导航条
		 * text - 显示字段
		 * link - 链接：注意前后带 / 符号
		 */
		nav: [
			{
				text: "主页",
				link: "/",
			},
			/**
			 * 多级菜单
			 * 开头 text 为一级标题
			 * 数组内 text 为二级标题
			 * link 为链接，注意带 /
			 */
			{
				text: "博文",
				items: [
					{
						text: "微信小程序 bug 集中营",
						link:
							"https://github.com/LiangJunrong/document-library/blob/master/other-library/WeChatApplet/WeChatAppletBug.md",
					},
					{
						text: "使用 GitHub Pages 和 VuePress 搭建网站",
						link:
							"https://github.com/LiangJunrong/document-library/blob/master/other-library/GithubPages/GithubPages.md",
					},
				],
			},
			{
				text: "关于",
				link: "/about/",
			},
			// 链接到网站
			{
				text: "Github",
				link: "https://www.github.com/LiangJunrong",
			},
		],
		/**
		 * 侧边栏配置：侧边栏组
		 */
		sidebar: {
			// 侧边栏在 /index/ 目录上
			"/index/": [
				["", "README"],
				["linuxCreateRedis", "linux部署redis"],
				["gitProxy", "Git代理配置"],
			],
			// 侧边栏在 /about/ 目录上
			"/about/": [
				["", "README"],
				["GithubPages", "GithubPages"],
				["VuePress", "VuePress"],
			],
		},
	},
}
