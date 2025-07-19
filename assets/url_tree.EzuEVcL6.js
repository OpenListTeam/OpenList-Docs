import{_ as h}from"./ValaxyMain.DNBmX15a.js";import{_ as j}from"./ValaxyMermaid.vue_vue_type_script_setup_true_lang.PDhJMrOl.js";import{d as f,u as v,a as k}from"./chunks/vue-router.BvUTDnyZ.js";import{B as C,D as a,v as y,A as I,C as L,E as p,H as s,u,I as l,J as T,y as A}from"./framework.C9jrP3tW.js";import"./app.CaD3p4pr.js";import"./chunks/dayjs.BX5x0S-s.js";import"./chunks/vue-i18n.D4F9FObk.js";import"./chunks/pinia.DqYk4B-k.js";/* empty css                    */import"./chunks/nprogress.BoH_DEjm.js";const N={class:"tip custom-block"},R={class:"custom-block-title custom-block-title-default"},Y=f("/guide/drivers/url_tree",async e=>JSON.parse('{"title":{"en":"UrlTree","zh-CN":"地址树"},"description":"","frontmatter":{"title":{"en":"UrlTree","zh-CN":"地址树"},"icon":"iconfont icon-state","top":220,"categories":["guide","drivers"],"tag":["Storage","Guide","302"],"sticky":true,"star":true},"headers":[],"relativePath":"pages/guide/drivers/url_tree.md","lastUpdated":1752802307000}'),{lazy:(e,i)=>e.name===i.name}),J={__name:"url_tree",setup(e,{expose:i}){const{data:c}=Y(),r=k(),d=v(),o=Object.assign(d.meta.frontmatter||{},c.value?.frontmatter||{});return r.currentRoute.value.data=c.value,A("valaxy:frontmatter",o),globalThis.$frontmatter=o,i({frontmatter:{title:{en:"UrlTree","zh-CN":"地址树"},icon:"iconfont icon-state",top:220,categories:["guide","drivers"],tag:["Storage","Guide","302"],sticky:!0,star:!0}}),(t,n)=>{const b=I("VT"),m=j,g=h;return L(),C(g,{frontmatter:y(o)},{"main-content-md":a(()=>[s("div",N,[s("p",R,[n[0]||(n[0]=s("i",{class:"icon i-carbon-thumbs-up"},null,-1)),u(b,{content:"blocks.tip"})]),n[1]||(n[1]=s("p",null,[s("strong",null,[s("code",null,"地址树-UrlTree")]),l(" 是什么? 是用来挂载单个文件链接的，详情可以查看 "),s("strong",null,[l("→→→"),s("a",{href:"https://github.com/alist-org/alist/issues/3268",target:"_blank",rel:"noreferrer"},"原需求说明"),l("←←←")])],-1))]),n[2]||(n[2]=s("h2",{id:"可写",tabindex:"-1"},[l("可写 "),s("a",{class:"header-anchor",href:"#可写","aria-label":'Permalink to "可写"'},"​")],-1)),n[3]||(n[3]=s("p",null,[l("打开后可以对此驱动进行"),s("code",null,"新建文件夹"),l("、"),s("code",null,"移动"),l("、"),s("code",null,"重命名"),l("、"),s("code",null,"复制"),l("、"),s("code",null,"删除"),l("、"),s("code",null,"PutURL")],-1)),n[4]||(n[4]=s("ul",null,[s("li",null,[l("当用户在实现该接口的驱动中尝试使用SimpleHttp进行离线下载时，将不会调用离线下载工具。 相反，将调用驱动程序的 "),s("code",null,"PutURL"),l(" 方法。")]),s("li",null,[s("strong",null,[s("a",{href:"https://github.com/AlistGo/alist/pull/7779",target:"_blank",rel:"noreferrer"},"https://github.com/AlistGo/alist/pull/7779")])])],-1)),n[5]||(n[5]=s("br",null,null,-1)),n[6]||(n[6]=s("h2",{id:"用法",tabindex:"-1"},[l("用法 "),s("a",{class:"header-anchor",href:"#用法","aria-label":'Permalink to "用法"'},"​")],-1)),n[7]||(n[7]=s("p",null,"具体的用法大概讲解一下，建议将下面不同用法都看看越往后越进阶玩法",-1)),n[8]||(n[8]=s("p",null,"别看写的看起来很难很啰嗦实际上自己操作一下秒懂。",-1)),n[9]||(n[9]=s("ol",null,[s("li",null,"最简单的用法，直接写链接即可")],-1)),n[10]||(n[10]=s("p",null,[s("strong",null,"输入")],-1)),n[11]||(n[11]=s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"http://pic.rmb.bdstatic.com/bjh/aff9c9c8817d943d6857a73188958d45.jpeg")]),l(`
`),s("span",{class:"line"},[s("span",null,"https://raw.githubusercontent.com/OpenListTeam/OpenList/main/README_cn.md")])])]),s("button",{class:"collapse"})],-1)),n[12]||(n[12]=s("p",null,[s("strong",null,"输出")],-1)),n[13]||(n[13]=s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"│ aff9c9c8817d943d6857a73188958d45.jpeg")]),l(`
`),s("span",{class:"line"},[s("span",null,"│ README_cn.md")])])]),s("button",{class:"collapse"})],-1)),n[14]||(n[14]=s("ol",{start:"2"},[s("li",null,"有文件的同时，也可以创建文件夹^第一个代码示例^，也可以创建多个文件夹^第二个代码示例^")],-1)),n[15]||(n[15]=s("p",null,[s("strong",null,"输入")],-1)),n[16]||(n[16]=s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"http://pic.rmb.bdstatic.com/bjh/aff9c9c8817d943d6857a73188958d45.jpeg")]),l(`
`),s("span",{class:"line"},[s("span",null,"folder:")]),l(`
`),s("span",{class:"line"},[s("span",null,"  http://pic.rmb.bdstatic.com/bjh/aff9c9c8817d943d6857a73188958d45.jpeg")]),l(`
`),s("span",{class:"line"},[s("span",null,"  https://raw.githubusercontent.com/OpenListTeam/OpenList/main/README_cn.md")])])]),s("button",{class:"collapse"})],-1)),n[17]||(n[17]=s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"http://pic.rmb.bdstatic.com/bjh/aff9c9c8817d943d6857a73188958d45.jpeg")]),l(`
`),s("span",{class:"line"},[s("span",null,"folder:")]),l(`
`),s("span",{class:"line"},[s("span",null,"  http://pic.rmb.bdstatic.com/bjh/aff9c9c8817d943d6857a73188958d45.jpeg")]),l(`
`),s("span",{class:"line"},[s("span",null,"  https://raw.githubusercontent.com/OpenListTeam/OpenList/main/README_cn.md")]),l(`
`),s("span",{class:"line"},[s("span",null,"http://pic.rmb.bdstatic.com/bjh/a66923e9bfefd03c2998ee998d3b55e7.jpeg")]),l(`
`),s("span",{class:"line"},[s("span",null,"folde2r:")]),l(`
`),s("span",{class:"line"},[s("span",null,"  http://pic.rmb.bdstatic.com/bjh/e919290bf3b8396817d369cedf33b8cd.jpeg")]),l(`
`),s("span",{class:"line"},[s("span",null,"  https://raw.githubusercontent.com/OpenListTeam/OpenList/main/CONTRIBUTING.md")])])]),s("button",{class:"collapse"})],-1)),n[18]||(n[18]=s("p",null,[s("strong",null,"输出")],-1)),n[19]||(n[19]=s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"│  aff9c9c8817d943d6857a73188958d45.jpeg")]),l(`
`),s("span",{class:"line"},[s("span",null,"└─folder")]),l(`
`),s("span",{class:"line"},[s("span",null,"        aff9c9c8817d943d6857a73188958d45.jpeg")]),l(`
`),s("span",{class:"line"},[s("span",null,"        README_cn.md")])])]),s("button",{class:"collapse"})],-1)),n[20]||(n[20]=s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"│  	aff9c9c8817d943d6857a73188958d45.jpeg")]),l(`
`),s("span",{class:"line"},[s("span",null,"├─folder")]),l(`
`),s("span",{class:"line"},[s("span",null,"│      aff9c9c8817d943d6857a73188958d45.jpeg")]),l(`
`),s("span",{class:"line"},[s("span",null,"│      README_cn.md")]),l(`
`),s("span",{class:"line"},[s("span",null,"│")]),l(`
`),s("span",{class:"line"},[s("span",null,"├─	a66923e9bfefd03c2998ee998d3b55e7.jpeg")]),l(`
`),s("span",{class:"line"},[s("span",null,"│")]),l(`
`),s("span",{class:"line"},[s("span",null,"└─folder2")]),l(`
`),s("span",{class:"line"},[s("span",null,"        CONTRIBUTING.md")]),l(`
`),s("span",{class:"line"},[s("span",null,"        e919290bf3b8396817d369cedf33b8cd.jpeg")])])]),s("button",{class:"collapse"})],-1)),n[21]||(n[21]=s("p",null,"开头要空两个空格~",-1)),n[22]||(n[22]=s("ol",{start:"3"},[s("li",null,"可以将文件资源二次命名，实际上下载的还是原来的，并且可以填写文件大小")],-1)),n[23]||(n[23]=s("p",null,[l("格式："),s("code",null,"新命名的名字.后缀:文件大小:链接.后缀")],-1)),n[24]||(n[24]=s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"新名称.jpeg:1024:http://pic.rmb.bdstatic.com/bjh/aff9c9c8817d943d6857a73188958d45.jpeg")]),l(`
`),s("span",{class:"line"},[s("span",null,"新名称2.md:2048:https://raw.githubusercontent.com/OpenListTeam/OpenList/main/README_cn.md")])])]),s("button",{class:"collapse"})],-1)),n[25]||(n[25]=s("p",null,"文件大小不用写也是可以重新命名的",-1)),n[26]||(n[26]=s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"新名称.jpeg:1024:http://pic.rmb.bdstatic.com/bjh/aff9c9c8817d943d6857a73188958d45.jpeg")]),l(`
`),s("span",{class:"line"},[s("span",null,"新名称2.md:2048:https://raw.githubusercontent.com/OpenListTeam/OpenList/main/README_cn.md")])])]),s("button",{class:"collapse"})],-1)),n[27]||(n[27]=s("p",null,"@tab 4",-1)),n[28]||(n[28]=s("ol",{start:"4"},[s("li",null,"多个层级目录套娃玩法")],-1)),n[29]||(n[29]=s("ul",null,[s("li",null,"第一层目录文件夹不需要空格，但是第一层目录里面的文件需要空两个空格")],-1)),n[30]||(n[30]=s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"folder:")]),l(`
`),s("span",{class:"line"},[s("span",null,"  http://pic.rmb.bdstatic.com/bjh/aff9c9c8817d943d6857a73188958d45.jpeg")]),l(`
`),s("span",{class:"line"},[s("span",null,"  https://raw.githubusercontent.com/OpenListTeam/OpenList/main/README_cn.md")])])]),s("button",{class:"collapse"})],-1)),n[31]||(n[31]=s("ul",null,[s("li",null,[l("如果你写好第一层了还想在第一个文件夹里面再套一个那就在这个文件夹下面套一层，写法如下，很简单 "),s("ul",null,[s("li",null,"目录进行空两格，文件加两个空格就是四个，如果继续想往下套一层继续加2个空格即可")])])],-1)),n[32]||(n[32]=s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"folder11:")]),l(`
`),s("span",{class:"line"},[s("span",null,"  http://pic.rmb.bdstatic.com/bjh/111.jpeg")]),l(`
`),s("span",{class:"line"},[s("span",null,"  folder111:")]),l(`
`),s("span",{class:"line"},[s("span",null,"    http://pic.rmb.bdstatic.com/bjh/111.jpeg")]),l(`
`),s("span",{class:"line"},[s("span",null,"    folder1111:")]),l(`
`),s("span",{class:"line"},[s("span",null,"      http://pic.rmb.bdstatic.com/bjh/111.jpeg")]),l(`
`),s("span",{class:"line"},[s("span",null,"  folder222:")]),l(`
`),s("span",{class:"line"},[s("span",null,"    http://pic.rmb.bdstatic.com/bjh/222.jpeg")]),l(`
`),s("span",{class:"line"},[s("span",null,"    folder2222:")]),l(`
`),s("span",{class:"line"},[s("span",null,"      http://pic.rmb.bdstatic.com/bjh/222.jpeg")]),l(`
`),s("span",{class:"line"},[s("span",null,"folder22:")]),l(`
`),s("span",{class:"line"},[s("span",null,"  http://pic.rmb.bdstatic.com/bjh/222.jpeg")]),l(`
`),s("span",{class:"line"},[s("span",null,"  folder222:")]),l(`
`),s("span",{class:"line"},[s("span",null,"    http://pic.rmb.bdstatic.com/bjh/222.jpeg")]),l(`
`),s("span",{class:"line"},[s("span",null,"    folder2222:")]),l(`
`),s("span",{class:"line"},[s("span",null,"      http://pic.rmb.bdstatic.com/bjh/2223.jpeg")]),l(`
`),s("span",{class:"line"},[s("span",null,"folder33:")]),l(`
`),s("span",{class:"line"},[s("span",null,"  http://pic.rmb.bdstatic.com/bjh/333.jpeg")]),l(`
`),s("span",{class:"line"},[s("span",null,"  folder333:")]),l(`
`),s("span",{class:"line"},[s("span",null,"    http://pic.rmb.bdstatic.com/bjh/333.jpeg")]),l(`
`),s("span",{class:"line"},[s("span",null,"    folder3333:")]),l(`
`),s("span",{class:"line"},[s("span",null,"      http://pic.rmb.bdstatic.com/bjh/333.jpeg")])])]),s("button",{class:"collapse"})],-1)),n[33]||(n[33]=s("ul",null,[s("li",null,[l("不建议的写法，像 "),s("strong",null,[s("code",null,"2.jpeg，5.jpeg")]),l(" 这样写法，建议想往那一层文件夹就去那一层文件夹增加链接按照格式，不要这样下面这样写")])],-1)),n[34]||(n[34]=s("p",null,[s("strong",null,"错误写法")],-1)),n[35]||(n[35]=s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"folder22:")]),l(`
`),s("span",{class:"line"},[s("span",null,"  http://pic.rmb.bdstatic.com/bjh/222.jpeg")]),l(`
`),s("span",{class:"line"},[s("span",null,"  folder222:")]),l(`
`),s("span",{class:"line"},[s("span",null,"    http://pic.rmb.bdstatic.com/bjh/222.jpeg")]),l(`
`),s("span",{class:"line"},[s("span",null,"    folder2222:")]),l(`
`),s("span",{class:"line"},[s("span",null,"      http://pic.rmb.bdstatic.com/bjh/2222.jpeg")]),l(`
`),s("span",{class:"line"},[s("span",null,"      folder22222:")]),l(`
`),s("span",{class:"line"},[s("span",null,"        http://pic.rmb.bdstatic.com/bjh/2222.jpeg")]),l(`
`),s("span",{class:"line"},[s("span",null,"        folder222222:")]),l(`
`),s("span",{class:"line"},[s("span",null,"          http://pic.rmb.bdstatic.com/bjh/2222.jpeg")]),l(`
`),s("span",{class:"line"},[s("span",null,"    http://pic.rmb.bdstatic.com/bjh/2.jpeg")]),l(`
`),s("span",{class:"line"},[s("span",null,"        http://pic.rmb.bdstatic.com/bjh/5.jpeg")])])]),s("button",{class:"collapse"})],-1)),n[36]||(n[36]=s("p",null,[s("strong",null,"正确写法")],-1)),n[37]||(n[37]=s("p",null,[l("像 "),s("strong",null,[s("code",null,"2.jpeg，5.jpeg")]),l(" 这样文件添加时候，添加到对应的目录里面去，分别对应的是 "),s("code",null,"folder222 和 folder22222"),l(" 两个文件夹")],-1)),n[38]||(n[38]=s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"folder22:")]),l(`
`),s("span",{class:"line"},[s("span",null,"  http://pic.rmb.bdstatic.com/bjh/222.jpeg")]),l(`
`),s("span",{class:"line"},[s("span",null,"  folder222:")]),l(`
`),s("span",{class:"line"},[s("span",null,"    http://pic.rmb.bdstatic.com/bjh/222.jpeg")]),l(`
`),s("span",{class:"line"},[s("span",null,"    http://pic.rmb.bdstatic.com/bjh/2.jpeg")]),l(`
`),s("span",{class:"line"},[s("span",null,"    folder2222:")]),l(`
`),s("span",{class:"line"},[s("span",null,"      http://pic.rmb.bdstatic.com/bjh/2222.jpeg")]),l(`
`),s("span",{class:"line"},[s("span",null,"      folder22222:")]),l(`
`),s("span",{class:"line"},[s("span",null,"        http://pic.rmb.bdstatic.com/bjh/2222.jpeg")]),l(`
`),s("span",{class:"line"},[s("span",null,"        http://pic.rmb.bdstatic.com/bjh/5.jpeg")]),l(`
`),s("span",{class:"line"},[s("span",null,"        folder222222:")]),l(`
`),s("span",{class:"line"},[s("span",null,"          http://pic.rmb.bdstatic.com/bjh/2222.jpeg")])])]),s("button",{class:"collapse"})],-1)),n[39]||(n[39]=s("ol",{start:"5"},[s("li",null,"全部整合起来的举例用法，有常规的，有分类，有重命名，有标注文件大小")],-1)),n[40]||(n[40]=s("div",{class:"language-"},[s("button",{title:"Copy code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"https://jsd.example.com/gh/OpenListTeam/OpenList/README.md")]),l(`
`),s("span",{class:"line"},[s("span",null,"文档:")]),l(`
`),s("span",{class:"line"},[s("span",null,"  Readme.md:https://pic.rmb.bdstatic.com/bjh/说明.md")]),l(`
`),s("span",{class:"line"},[s("span",null,"  Doc:")]),l(`
`),s("span",{class:"line"},[s("span",null,"    文档.doc:https://pic.rmb.bdstatic.com/bjh/测试文档.doc")]),l(`
`),s("span",{class:"line"},[s("span",null,"  pdf:")]),l(`
`),s("span",{class:"line"},[s("span",null,"    pdf2.pdf:https://pic.rmb.bdstatic.com/bjh/测试.pdf")]),l(`
`),s("span",{class:"line"},[s("span",null,"  Excel:")]),l(`
`),s("span",{class:"line"},[s("span",null,"    表格3.xlsx:https://pic.rmb.bdstatic.com/bjh/测试表格.xlsx")]),l(`
`),s("span",{class:"line"},[s("span",null,"视频:")]),l(`
`),s("span",{class:"line"},[s("span",null,"  https://pic.rmb.bdstatic.com/bjh/222.jpeg")]),l(`
`),s("span",{class:"line"},[s("span",null,"  电视剧:")]),l(`
`),s("span",{class:"line"},[s("span",null,"    https://pic.rmb.bdstatic.com/bjh/222.pm4")]),l(`
`),s("span",{class:"line"},[s("span",null,"  电影:")]),l(`
`),s("span",{class:"line"},[s("span",null,"    https://pic.rmb.bdstatic.com/bjh/222.flv")]),l(`
`),s("span",{class:"line"},[s("span",null,"音乐:")]),l(`
`),s("span",{class:"line"},[s("span",null,"  https://pic.rmb.bdstatic.com/bjh/222.jpeg")]),l(`
`),s("span",{class:"line"},[s("span",null,"  古典:")]),l(`
`),s("span",{class:"line"},[s("span",null,"    https://pic.rmb.bdstatic.com/bjh/222.mp3")]),l(`
`),s("span",{class:"line"},[s("span",null,"  轻音乐:")]),l(`
`),s("span",{class:"line"},[s("span",null,"    https://pic.rmb.bdstatic.com/bjh/222.flac")]),l(`
`),s("span",{class:"line"},[s("span",null,"    https://pic.rmb.bdstatic.com/bjh/222.wav")]),l(`
`),s("span",{class:"line"},[s("span",null,"软件:")]),l(`
`),s("span",{class:"line"},[s("span",null,"  https://pic.rmb.bdstatic.com/bjh/222.jpeg")]),l(`
`),s("span",{class:"line"},[s("span",null,"  PJ:")]),l(`
`),s("span",{class:"line"},[s("span",null,"    xx软件.exe:252525:https://pic.rmb.bdstatic.com/bjh/222.exe")]),l(`
`),s("span",{class:"line"},[s("span",null,"    xx安装包.zip:259555:https://pic.rmb.bdstatic.com/bjh/222.zip")]),l(`
`),s("span",{class:"line"},[s("span",null,"  IPA:")]),l(`
`),s("span",{class:"line"},[s("span",null,"    GPT.ipa:https://pic.rmb.bdstatic.com/bjh/222.ipa")]),l(`
`),s("span",{class:"line"},[s("span",null,"  APK:")]),l(`
`),s("span",{class:"line"},[s("span",null,"    P图.apk:https://pic.rmb.bdstatic.com/bjh/222.apk")])])]),s("button",{class:"collapse"})],-1)),n[41]||(n[41]=s("h2",{id:"提示",tabindex:"-1"},[l("提示 "),s("a",{class:"header-anchor",href:"#提示","aria-label":'Permalink to "提示"'},"​")],-1)),n[42]||(n[42]=s("ol",null,[s("li",null,"如果你点击下载发现没有跳转到下载而是预览，这是因为是根据你原本链接来决定的,例如你原本的链接就是下载他就会跳转到下载"),s("li",null,[l("如果你一个文件夹内有相同的文件，会合并只显示一个，默认使用预览查看下载的是你靠上(前)也就是顶部的文件 "),s("ul",null,[s("li",null,"Tips:请勿同时在一个目录内新建两个同名的文件/夹哦~就像你在资源管理器新建两个一样的文件/夹 都会提醒你不能重复")])]),s("li",null,"如果你在添加时在同级目录下写了两个相同的文件夹名字，会合并成一个文件夹但是合并后靠后(下)的文件夹的文件不会显示，但是可以通过浏览器地址栏访问（参考上一条的提示）"),s("li",null,[l("排序默认是按照你填写从上到下依次排序的和 "),s("code",null,"OpenList-别名"),l("的一样")])],-1)),n[43]||(n[43]=s("h3",{id:"默认使用的下载方式",tabindex:"-1"},[l("默认使用的下载方式 "),s("a",{class:"header-anchor",href:"#默认使用的下载方式","aria-label":'Permalink to "默认使用的下载方式"'},"​")],-1)),u(m,T({code:"LS0tCnRpdGxlOiDpu5jorqTkvb_nlKjnmoTlk6rnp43kuIvovb3mlrnlvI_vvJ8KLS0tCmZsb3djaGFydCBUQgogICAgc3R5bGUgYTEgZmlsbDojYmJmLHN0cm9rZTojZjY2LHN0cm9rZS13aWR0aDoycHgsY29sb3I6I2ZmZgogICAgc3R5bGUgYTIgZmlsbDojZmY3NTc1LHN0cm9rZTojMzMzLHN0cm9rZS13aWR0aDo0cHgKICAgIHN1YmdyYXBoIGlkZTEgWyBdCiAgICBhMQogICAgZW5kCiAgICBhMVszMDJdOjo6c29tZWNsYXNzPT09PXzpu5jorqR8YTJb55So5oi36K6-5aSHXQogICAgY2xhc3NEZWYgc29tZWNsYXNzIGZpbGw6I2Y5NgogICAgYzFb5pys5py65Luj55CGXS0u5aSH6YCJLi0-YTJb55So5oi36K6-5aSHXQogICAgYjFb5Luj55CGVVJMXS0u5aSH6YCJLi0-YTJb55So5oi36K6-5aSHXQogICAgY2xpY2sgYTEgIi4uL2RyaXZlcnMvY29tbW9uLmh0bWwjd2ViZGF2LeetlueVpSIKICAgIGNsaWNrIGIxICIuLi9kcml2ZXJzL2NvbW1vbi5odG1sI3dlYmRhdi3nrZbnlaUiCiAgICBjbGljayBjMSAiLi4vZHJpdmVycy9jb21tb24uaHRtbCN3ZWJkYXYt562W55WlIg"},{}),null,16)]),"main-header":a(()=>[p(t.$slots,"main-header")]),"main-header-after":a(()=>[p(t.$slots,"main-header-after")]),"main-nav":a(()=>[p(t.$slots,"main-nav")]),"main-content-before":a(()=>[p(t.$slots,"main-content-before")]),"main-content":a(()=>[p(t.$slots,"main-content")]),"main-content-after":a(()=>[p(t.$slots,"main-content-after")]),"main-nav-before":a(()=>[p(t.$slots,"main-nav-before")]),"main-nav-after":a(()=>[p(t.$slots,"main-nav-after")]),comment:a(()=>[p(t.$slots,"comment")]),footer:a(()=>[p(t.$slots,"footer")]),aside:a(()=>[p(t.$slots,"aside")]),"aside-custom":a(()=>[p(t.$slots,"aside-custom")]),default:a(()=>[p(t.$slots,"default")]),_:3},8,["frontmatter"])}}};export{J as default,Y as usePageData};
