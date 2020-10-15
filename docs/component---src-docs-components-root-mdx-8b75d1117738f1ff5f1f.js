(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{wPq8:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return j})),n.d(t,"default",(function(){return C}));var a=n("Fcif"),o=n("+I+c"),r=n("mXGw"),b=n("/FXl"),c=n("TjRS"),p=n("ZFoC"),l=n("EoFh"),i=n.n(l),m=n("lOOT"),d=n("GYKu"),s=n("9b5V"),u=n("nVj4"),j=(n("aD51"),{});void 0!==j&&j&&j===Object(j)&&Object.isExtensible(j)&&!j.hasOwnProperty("__filemeta")&&Object.defineProperty(j,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/components/root.mdx"}});O="AddYourComponentHere";var O,h={_frontmatter:j},f=c.a;function C(e){var t,n=e.components,l=Object(o.a)(e,["components"]);return Object(b.b)(f,Object(a.a)({},h,l,{components:n,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"root"},"Root"),Object(b.b)("p",null,"The ",Object(b.b)("inlineCode",{parentName:"p"},"Root")," component is the root component of the ",Object(b.b)("inlineCode",{parentName:"p"},"Calendar"),"."),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"Root")," enables you to re-compose the Calendar with additional UI elements, such as shortcut lists or additional branding.\nRefer to ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://mark-tate.github.io/use-date-input/composition"}),"Composition"),"."),Object(b.b)("h2",{id:"example"},"Example"),Object(b.b)(p.c,{__position:0,__code:"() => {\n  const theme = useTheme()\n  const isSmallBreakpoint = useMediaQuery(theme.breakpoints.down('sm'))\n  const AddYourComponentHere = isSmallBreakpoint\n    ? DemoContentSmall\n    : DemoContent\n  function MyRoot(props) {\n    return (\n      <>\n        <div style={{ display: 'flex' }}>\n          <AddYourComponentHere />\n          <Root {...props} />\n        </div>\n      </>\n    )\n  }\n  return (\n    <CalendarProvider adapter={dateAdapter} components={{ Root: MyRoot }}>\n      <Calendar />\n    </CalendarProvider>\n  )\n}",__scope:(t={props:l,DefaultLayout:c.a,Playground:p.c,useMediaQuery:i.a,useTheme:m.a,Calendar:d.c,CalendarProvider:d.d,Root:d.j,dateAdapter:s.a,DemoContent:u.a,DemoContentSmall:u.b},t.DefaultLayout=c.a,t._frontmatter=j,t),mdxType:"Playground"},(function(){var e=Object(m.a)(),t=i()(e.breakpoints.down("sm"))?u.b:u.a;return Object(b.b)(d.d,{adapter:s.a,components:{Root:function(e){return Object(b.b)(r.Fragment,null,Object(b.b)("div",{style:{display:"flex"}},Object(b.b)(t,{mdxType:"AddYourComponentHere"}),Object(b.b)(d.j,Object(a.a)({},e,{mdxType:"Root"}))))}},mdxType:"CalendarProvider"},Object(b.b)(d.c,{mdxType:"Calendar"}))})),Object(b.b)("h2",{id:"props"},"Props"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Prop Name"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Is Required"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default Value"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"className"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"optional"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Class name of root element")))),Object(b.b)("h2",{id:"importing"},"Importing"),Object(b.b)("p",null,"It can be imported as either the base component"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'import { Root } from "@use-date-input/core";\n')),Object(b.b)("p",null,"or as an overridable component that can be replaced through the ",Object(b.b)("inlineCode",{parentName:"p"},"components")," prop in ",Object(b.b)("inlineCode",{parentName:"p"},"CalendarProvider"),".",Object(b.b)("br",{parentName:"p"}),"\n","Refer to ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://mark-tate.github.io/use-date-input/theming#how-to-replace-ui-components"}),"How to replace UI components"),"."),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'import { CustomisableMonthRoot } from "@use-date-input/core";\n')),Object(b.b)("p",null,"If providing your own component, it can be useful to import the base component and use it within your composition.  "))}void 0!==C&&C&&C===Object(C)&&Object.isExtensible(C)&&!C.hasOwnProperty("__filemeta")&&Object.defineProperty(C,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/components/root.mdx"}}),C.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-components-root-mdx-8b75d1117738f1ff5f1f.js.map