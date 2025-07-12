import{_ as p}from"./ValaxyMain.C30Jc1Uw.js";import{d as c,u as y,a as h}from"./chunks/vue-router.BSCHZfOn.js";import{B as x,D as n,v as b,C,E as o,H as t,G as N,I as l,y as P}from"./framework.CEYCCZCa.js";import"./app.BRVKpH5T.js";import"./chunks/dayjs.BX5x0S-s.js";import"./chunks/vue-i18n.QWawR7Lt.js";import"./chunks/pinia.YOQf0O82.js";import"./chunks/nprogress.BoH_DEjm.js";import"./index.gU-sKceF.js";const k="/OpenList-Docs/img/guide/installation/clawcloud-01.png",z=c("/guide/installation/paas",async s=>JSON.parse('{"title":"PaaS","description":"","frontmatter":{"title":"PaaS","title_zh-CN":"PaaS","icon":"iconfont icon-module","top":30,"categories":["guide","installation"]},"headers":[],"relativePath":"pages/guide/installation/paas.md","lastUpdated":1752028109000}'),{lazy:(s,i)=>s.name===i.name}),T={__name:"paas",setup(s,{expose:i}){var g;const{data:d}=z(),u=h(),m=y(),r=Object.assign(m.meta.frontmatter||{},((g=d.value)==null?void 0:g.frontmatter)||{});return u.currentRoute.value.data=d.value,P("valaxy:frontmatter",r),globalThis.$frontmatter=r,i({frontmatter:{title:"PaaS","title_zh-CN":"PaaS",icon:"iconfont icon-module",top:30,categories:["guide","installation"]}}),(a,e)=>{const f=p;return C(),x(f,{frontmatter:b(r)},{"main-content-md":n(()=>[e[0]||(e[0]=t("div",{lang:"zh-CN"},[t("div",{class:"tip custom-block"},[t("p",{class:"custom-block-title"},[t("i",{class:"icon i-carbon-thumbs-up"}),t("span",{lang:"en"},"TIP"),t("span",{lang:"zh-CN"},"提示")]),t("p",null,"文档可能更新不及时，请根据关键信息结合平台当前部署界面进行调整")])],-1)),e[1]||(e[1]=t("div",{lang:"en"},[t("div",{class:"tip custom-block"},[t("p",{class:"custom-block-title"},[t("i",{class:"icon i-carbon-thumbs-up"}),t("span",{lang:"en"},"TIP"),t("span",{lang:"zh-CN"},"提示")]),t("p",null,"The documentation may not be updated in a timely manner. Please make adjustments based on the key information and the current deployment interface of the platform.")])],-1)),e[2]||(e[2]=t("h2",{lang:"en",id:"clawcloud",tabindex:"-1"},[l("ClawCloud "),t("a",{class:"header-anchor",href:"#clawcloud","aria-label":'Permalink to "ClawCloud { lang="en" }"'},"​")],-1)),e[3]||(e[3]=t("h2",{lang:"zh-CN",id:"爪云",tabindex:"-1"},[l("爪云 "),t("a",{class:"header-anchor",href:"#爪云","aria-label":'Permalink to "爪云 { lang="zh-CN" }"'},"​")],-1)),e[4]||(e[4]=t("h3",{lang:"zh-CN",id:"关键信息",tabindex:"-1"},[l("关键信息 "),t("a",{class:"header-anchor",href:"#关键信息","aria-label":'Permalink to "关键信息 { lang="zh-CN" }"'},"​")],-1)),e[5]||(e[5]=t("h3",{lang:"en",id:"key-information",tabindex:"-1"},[l("Key Information "),t("a",{class:"header-anchor",href:"#key-information","aria-label":'Permalink to "Key Information { lang="en" }"'},"​")],-1)),e[6]||(e[6]=t("div",{lang:"en"},[t("table",null,[t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"left"}},"Name"),t("th",{style:{"text-align":"left"}},"Value"),t("th",{style:{"text-align":"left"}},"Description")])]),t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"Application Name"),t("td",{style:{"text-align":"left"}},"openlist"),t("td",{style:{"text-align":"left"}},"Application name")]),t("tr",null,[t("td",{style:{"text-align":"left"}},"Image"),t("td",{style:{"text-align":"left"}},"openlistteam/openlist:latest-lite"),t("td",{style:{"text-align":"left"}},[l("Image, please make sure to use the one with "),t("strong",null,"lite"),l(", otherwise the error "),t("code",null,"Pod ephemeral local storage usage exceeds the total limit of containers 100Mi."),l(" may occur")])]),t("tr",null,[t("td",{style:{"text-align":"left"}},"Replicas"),t("td",{style:{"text-align":"left"}},"1"),t("td",{style:{"text-align":"left"}},"Number of replicas, set to 1")]),t("tr",null,[t("td",{style:{"text-align":"left"}},"CPU"),t("td",{style:{"text-align":"left"}},"0.2"),t("td",{style:{"text-align":"left"}},"Number of CPU cores, set according to your own needs")]),t("tr",null,[t("td",{style:{"text-align":"left"}},"Memory"),t("td",{style:{"text-align":"left"}},"256M"),t("td",{style:{"text-align":"left"}},"Memory size, set according to your own needs")]),t("tr",null,[t("td",{style:{"text-align":"left"}},"Container Port"),t("td",{style:{"text-align":"left"}},"5244"),t("td",{style:{"text-align":"left"}},[l("Mapped port, which is "),t("code",null,"5244"),l(" if you have not modified the startup command or configuration")])]),t("tr",null,[t("td",{style:{"text-align":"left"}},"Public Access"),t("td",{style:{"text-align":"left"}},"Y"),t("td",{style:{"text-align":"left"}},"Enable external access")]),t("tr",null,[t("td",{style:{"text-align":"left"}},"Custom Domain"),t("td",{style:{"text-align":"left"}},"-"),t("td",{style:{"text-align":"left"}},[l("If you have your own domain name, set it according to the prompts; if not, keep the default. Please make sure to use "),t("strong",null,"https"),l(" for the protocol")])]),t("tr",null,[t("td",{style:{"text-align":"left"}},"Local Storage"),t("td",{style:{"text-align":"left"}},"-"),t("td",{style:{"text-align":"left"}},"Persistent volume")]),t("tr",null,[t("td",{style:{"text-align":"left"}},"– Capacity"),t("td",{style:{"text-align":"left"}},"1"),t("td",{style:{"text-align":"left"}},"Capacity")]),t("tr",null,[t("td",{style:{"text-align":"left"}},"– Mount Path"),t("td",{style:{"text-align":"left"}},"/opt/openlist/data"),t("td",{style:{"text-align":"left"}},[l("Configured mapped directory, which is "),t("code",null,"/opt/openlist/data"),l(" if you have not modified the startup command or configuration")])])])])],-1)),e[7]||(e[7]=t("div",{lang:"zh-CN"},[t("table",null,[t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"left"}},"名称"),t("th",{style:{"text-align":"left"}},"值"),t("th",{style:{"text-align":"left"}},"说明")])]),t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"Application Name"),t("td",{style:{"text-align":"left"}},"openlist"),t("td",{style:{"text-align":"left"}},"应用名")]),t("tr",null,[t("td",{style:{"text-align":"left"}},"Image"),t("td",{style:{"text-align":"left"}},"openlistteam/openlist:latest-lite"),t("td",{style:{"text-align":"left"}},[l("镜像，请务必使用带有"),t("strong",null,"lite"),l("的镜像，否则可能出现"),t("code",null,"Pod ephemeral local storage usage exceeds the total limit of containers 100Mi.")])]),t("tr",null,[t("td",{style:{"text-align":"left"}},"Replicas"),t("td",{style:{"text-align":"left"}},"1"),t("td",{style:{"text-align":"left"}},"副本数，设置为1")]),t("tr",null,[t("td",{style:{"text-align":"left"}},"CPU"),t("td",{style:{"text-align":"left"}},"0.2"),t("td",{style:{"text-align":"left"}},"CPU核心数，请根据自身需求设置")]),t("tr",null,[t("td",{style:{"text-align":"left"}},"Memory"),t("td",{style:{"text-align":"left"}},"256M"),t("td",{style:{"text-align":"left"}},"内存大小，请根据自身需求设置")]),t("tr",null,[t("td",{style:{"text-align":"left"}},"Container Port"),t("td",{style:{"text-align":"left"}},"5244"),t("td",{style:{"text-align":"left"}},[l("映射端口，如果你没有修改启动命令或者配置，则为"),t("code",null,"5244")])]),t("tr",null,[t("td",{style:{"text-align":"left"}},"Public Access"),t("td",{style:{"text-align":"left"}},"Y"),t("td",{style:{"text-align":"left"}},"打开外部访问")]),t("tr",null,[t("td",{style:{"text-align":"left"}},"Custom Domain"),t("td",{style:{"text-align":"left"}},"-"),t("td",{style:{"text-align":"left"}},[l("如果你有自身的域名，请根据提示进行设置，如果没有，保持默认，协议请务必使用"),t("strong",null,"https")])]),t("tr",null,[t("td",{style:{"text-align":"left"}},"Local Storage"),t("td",{style:{"text-align":"left"}},"-"),t("td",{style:{"text-align":"left"}},"持久卷")]),t("tr",null,[t("td",{style:{"text-align":"left"}},"– Capacity"),t("td",{style:{"text-align":"left"}},"1"),t("td",{style:{"text-align":"left"}},"容量")]),t("tr",null,[t("td",{style:{"text-align":"left"}},"– Mount Path"),t("td",{style:{"text-align":"left"}},"/opt/openlist/data"),t("td",{style:{"text-align":"left"}},[l("配置映射的目录，如果你没有修改启动命令或者配置，则为"),t("code",null,"/opt/openlist/data")])])])])],-1)),e[8]||(e[8]=t("h3",{lang:"zh-CN",id:"参考图示",tabindex:"-1"},[l("参考图示 "),t("a",{class:"header-anchor",href:"#参考图示","aria-label":'Permalink to "参考图示 { lang="zh-CN" }"'},"​")],-1)),e[9]||(e[9]=t("h3",{lang:"en",id:"reference-diagram",tabindex:"-1"},[l("Reference Diagram "),t("a",{class:"header-anchor",href:"#reference-diagram","aria-label":'Permalink to "Reference Diagram { lang="en" }"'},"​")],-1)),e[10]||(e[10]=t("figure",null,[t("img",{src:k,alt:"",loading:"lazy",decoding:"async"})],-1)),N(`
::: en
N/A
For specific usage, please refer to the \`README.md\` in the corresponding repository.

:::
::: zh-CN
N/A
具体用法请参考对应仓库中的\`README.md\`。
:::

## Claw Cloud Run { lang="en" }
## Claw Cloud Run { lang="zh-CN" }
::: en
[https://console.run.claw.cloud/signin](https://console.run.claw.cloud/signin?link=UTMO60WWUZKY)
:::
::: zh-CN
[https://console.run.claw.cloud/signin](https://console.run.claw.cloud/signin?link=UTMO60WWUZKY)
:::

## **Koyeb** { lang="en" }
## **Koyeb** { lang="zh-CN" }
::: en
https://github.com/alist-org/alist-koyeb
:::
::: zh-CN
https://github.com/alist-org/alist-koyeb
:::

## **Render** { lang="en" }
## **Render** { lang="zh-CN" }
::: en
https://github.com/alist-org/alist-render
:::
::: zh-CN
https://github.com/alist-org/alist-render
:::

### **Heroku** { lang="en" }
## **Heroku** { lang="zh-CN" }
::: en
https://github.com/alist-org/alist-heroku-postgres
:::
::: zh-CN
https://github.com/alist-org/alist-heroku-postgres
:::

### **Sealos** { lang="en" }
## **Sealos** { lang="zh-CN" }
::: en
[![](https://raw.githubusercontent.com/labring-actions/templates/main/Deploy-on-Sealos.svg)](https://cloud.sealos.io/?openapp=system-template%3FtemplateName%3Dalist)
:::
::: zh-CN
[![](https://raw.githubusercontent.com/labring-actions/templates/main/Deploy-on-Sealos.svg)](https://cloud.sealos.io/?openapp=system-template%3FtemplateName%3Dalist)
:::
`)]),"main-header":n(()=>[o(a.$slots,"main-header")]),"main-header-after":n(()=>[o(a.$slots,"main-header-after")]),"main-nav":n(()=>[o(a.$slots,"main-nav")]),"main-content-before":n(()=>[o(a.$slots,"main-content-before")]),"main-content":n(()=>[o(a.$slots,"main-content")]),"main-content-after":n(()=>[o(a.$slots,"main-content-after")]),"main-nav-before":n(()=>[o(a.$slots,"main-nav-before")]),"main-nav-after":n(()=>[o(a.$slots,"main-nav-after")]),comment:n(()=>[o(a.$slots,"comment")]),footer:n(()=>[o(a.$slots,"footer")]),aside:n(()=>[o(a.$slots,"aside")]),"aside-custom":n(()=>[o(a.$slots,"aside-custom")]),default:n(()=>[o(a.$slots,"default")]),_:3},8,["frontmatter"])}}};export{T as default,z as usePageData};
