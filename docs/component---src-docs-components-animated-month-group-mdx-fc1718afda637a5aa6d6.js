(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{hgaL:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return h}));var a=n("Fcif"),o=n("+I+c"),r=n("mXGw"),i=n("/FXl"),b=n("TjRS"),l=n("ZFoC"),c=n("GYKu"),u=n("9b5V"),p=n("nVj4"),d=n("0rkN"),m=n("OWCF"),s=(n("aD51"),{});void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/components/animatedMonthGroup.mdx"}});var j={_frontmatter:s},O=b.a;function h(e){var t,n=e.components,h=Object(o.a)(e,["components"]);return Object(i.b)(O,Object(a.a)({},j,h,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"animatedmonthgroup"},"AnimatedMonthGroup"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"AnimatedMonthGroup")," component animates it's children based on the change of the ",Object(i.b)("inlineCode",{parentName:"p"},"visibleFromDate")," and refs, applied to the first (",Object(i.b)("inlineCode",{parentName:"p"},"firstColumnRef"),"). and last column (",Object(i.b)("inlineCode",{parentName:"p"},"groupRef"),")."),Object(i.b)("p",null,"In the default implementation, ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://mark-tate.github.io/use-date-input/animatedMonthGroup"}),"AnimatedMonthGroup")," is the parent of ",Object(i.b)("inlineCode",{parentName:"p"},"AnimatedMonth")," and is used to manage\nscroll movement between columns based on the changes to ",Object(i.b)("inlineCode",{parentName:"p"},"visibleFromDate"),"."),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)(l.c,{__position:0,__code:"() => {\n  const { createDate, addMonths, subtractMonths } = dateAdapter()\n  const [visibleFromDate, setVisibleFromDate] = useState(createDate())\n  const column1Ref = useRef()\n  const groupRef = useRef()\n  function handleNextMonthClick() {\n    const nextMonth = addMonths(visibleFromDate, 1)\n    setVisibleFromDate(nextMonth)\n  }\n  function handlePreviousMonthClick() {\n    const previousMonth = subtractMonths(visibleFromDate, 1)\n    setVisibleFromDate(previousMonth)\n  }\n  function handleNextQuarterClick() {\n    const nextMonth = addMonths(visibleFromDate, 3)\n    setVisibleFromDate(nextMonth)\n  }\n  function handlePreviousQuarterClick() {\n    const nextMonth = subtractMonths(visibleFromDate, 3)\n    setVisibleFromDate(nextMonth)\n  }\n  return (\n    <CalendarProvider adapter={dateAdapter} numOfColumns={3}>\n      <ButtonBar>\n        <Button onClick={handleNextMonthClick}>Next Month</Button>\n        <Button onClick={handlePreviousMonthClick}>Previous Month</Button>\n        <Button onClick={handlePreviousQuarterClick}>Previous Quarter</Button>\n        <Button onClick={handleNextQuarterClick}>Next Quarter</Button>\n      </ButtonBar>\n      <div style={{ width: '600px' }}>\n        <AnimatedMonthGroup\n          firstColumnRef={column1Ref}\n          groupRef={groupRef}\n          visibleFromDate={visibleFromDate}\n        >\n          <div ref={groupRef}>\n            <AddYourComponentHere\n              style={{ display: 'inline-flex' }}\n              ref={column1Ref}\n            >\n              Column 1\n            </AddYourComponentHere>\n            <AddYourComponentHere style={{ display: 'inline-flex' }}>\n              Column 2\n            </AddYourComponentHere>\n            <AddYourComponentHere style={{ display: 'inline-flex' }}>\n              Column 3\n            </AddYourComponentHere>\n          </div>\n        </AnimatedMonthGroup>\n      </div>\n    </CalendarProvider>\n  )\n}",__scope:(t={props:h,DefaultLayout:b.a,useState:r.useState,useRef:r.useRef,Playground:l.c,AnimatedMonthGroup:c.b,CalendarProvider:c.d,dateAdapter:u.a,AddYourComponentHere:p.a,Button:d.a,ButtonBar:m.a},t.DefaultLayout=b.a,t._frontmatter=s,t),mdxType:"Playground"},(function(){var e=Object(u.a)(),t=e.createDate,n=e.addMonths,a=e.subtractMonths,o=Object(r.useState)(t()),b=o[0],l=o[1],s=Object(r.useRef)(),j=Object(r.useRef)();return Object(i.b)(c.d,{adapter:u.a,numOfColumns:3,mdxType:"CalendarProvider"},Object(i.b)(m.a,{mdxType:"ButtonBar"},Object(i.b)(d.a,{onClick:function(){var e=n(b,1);l(e)},mdxType:"Button"},"Next Month"),Object(i.b)(d.a,{onClick:function(){var e=a(b,1);l(e)},mdxType:"Button"},"Previous Month"),Object(i.b)(d.a,{onClick:function(){var e=a(b,3);l(e)},mdxType:"Button"},"Previous Quarter"),Object(i.b)(d.a,{onClick:function(){var e=n(b,3);l(e)},mdxType:"Button"},"Next Quarter")),Object(i.b)("div",{style:{width:"600px"}},Object(i.b)(c.b,{firstColumnRef:s,groupRef:j,visibleFromDate:b,mdxType:"AnimatedMonthGroup"},Object(i.b)("div",{ref:j},Object(i.b)(p.a,{style:{display:"inline-flex"},ref:s,mdxType:"AddYourComponentHere"},"Column 1"),Object(i.b)(p.a,{style:{display:"inline-flex"},mdxType:"AddYourComponentHere"},"Column 2"),Object(i.b)(p.a,{style:{display:"inline-flex"},mdxType:"AddYourComponentHere"},"Column 3")))))})),Object(i.b)("h2",{id:"props"},"Props"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Prop Name"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Is Required"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default Value"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"children"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"element")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"optional"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Children")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"firstColumnRef"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"object")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"required"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Ref to the first column")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"groupRef"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"object")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"required"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Ref to the MonthGroup")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"visibleFromDate"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"object")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"required"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Visible from date, used to control animation between columns and MonthGroup")))),Object(i.b)("h2",{id:"importing"},"Importing"),Object(i.b)("p",null,"It can be imported as either the base component"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'import { AnimatedMonthGroup } from "@use-date-input/core";\n')),Object(i.b)("p",null,"or as an overridable component that can be replaced through the ",Object(i.b)("inlineCode",{parentName:"p"},"components")," prop in ",Object(i.b)("inlineCode",{parentName:"p"},"CalendarProvider"),".",Object(i.b)("br",{parentName:"p"}),"\n","Refer to ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://mark-tate.github.io/use-date-input/theming#how-to-replace-ui-components"}),"How to replace UI components"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'import { CustomisableAnimatedMonthGroup } from "@use-date-input/core";\n')),Object(i.b)("p",null,"If providing your own component, it can be useful to import the base component and use it within your composition.  "))}void 0!==h&&h&&h===Object(h)&&Object.isExtensible(h)&&!h.hasOwnProperty("__filemeta")&&Object.defineProperty(h,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/components/animatedMonthGroup.mdx"}}),h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-components-animated-month-group-mdx-fc1718afda637a5aa6d6.js.map