(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{kH65:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return m})),a.d(t,"default",(function(){return N}));var n=a("Fcif"),l=a("+I+c"),r=a("mXGw"),b=a("/FXl"),c=a("TjRS"),d=a("UutA"),o=a("ZFoC"),i=a("gsQS"),s=a("GYKu"),u=a("Dy3B"),p=a("9jhi"),O=a("esdE"),j=a("5Wd7"),m=(a("aD51"),{});void 0!==m&&m&&m===Object(m)&&Object.isExtensible(m)&&!m.hasOwnProperty("__filemeta")&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/components/calendar.mdx"}});g="UnavailableDay";var g,y={_frontmatter:m},f=c.a;function N(e){var t,a,g,N,h,D,C=e.components,_=Object(l.a)(e,["components"]);return Object(b.b)(f,Object(n.a)({},y,_,{components:C,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"calendar"},"Calendar"),Object(b.b)("p",null,"A",Object(b.b)("inlineCode",{parentName:"p"},"Calendar")," can be used inline on a page and is also used by the ",Object(b.b)("inlineCode",{parentName:"p"},"useDateInput")," and ",Object(b.b)("inlineCode",{parentName:"p"},"useDateRangeInput")," hooks.  "),Object(b.b)("p",null,"Alternatively you could use to compose your own date picker components."),Object(b.b)("h2",{id:"props"},"Props"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Prop Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Is Required"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default Value"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"adapter"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"func")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"optional"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Date API adapter")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"allowRange"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"bool")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"optional"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"When ",Object(b.b)("inlineCode",{parentName:"td"},"true")," will select a date range")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"clickOutsideWhiteList"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"array")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"optional"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"[]")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Array of refs to ignore clicks, when determining whether the user clicked outside the Calendar")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"initialSelectedDate"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"object or array")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"optional"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The initial selectedDate (for un-controlled use-case)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"initialVisibleFromMonth"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"object")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"optional"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The initial visible from calendar month (unless date is set)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"isDayDisabled"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"func")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"optional"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Callback to set days as disabled   @param day - Date to check        @returns true when disabled")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"isRangeValid"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"func")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"optional"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Callback to determine whether the current selection is valid   @param day - startDate    @param day - endDate        @returns true when valid")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"numOfColumns"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"number")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"optional"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"1")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Number of columns")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"numOfVisibleMonths"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"number")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"optional"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"1")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Number of visible months")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"onChange"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"func")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"optional"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Selected date change handler")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"onStateChange"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"func")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"optional"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"State change handler")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"reducers"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"array of funcs")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"optional"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Reducer(s), to override default state")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"theme"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"object")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"optional"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Theme")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"weekOffset"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"number")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"optional"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"0")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Start of week offset from date API's default")))),Object(b.b)("h2",{id:"single-date"},"Single Date"),Object(b.b)("p",null,"By default the ",Object(b.b)("inlineCode",{parentName:"p"},"Calendar")," will select single dates."),Object(b.b)(o.c,{__position:0,__code:"<Calendar adapter={dateAdapter} numOfColumns={4} numOfVisibleMonths={12} />",__scope:(t={props:_,DefaultLayout:c.a,styled:d.b,useState:r.useState,Playground:o.c,Calendar:i.a,Day:s.c,isWeekend:u.a,createDate:p.a,dateAdapter:p.b,getDay:O.a,eachDayOfInterval:j.a},t.DefaultLayout=c.a,t._frontmatter=m,t),mdxType:"Playground"},Object(b.b)(i.a,{adapter:p.b,numOfColumns:4,numOfVisibleMonths:12,mdxType:"Calendar"})),Object(b.b)("h2",{id:"date-range"},"Date Range"),Object(b.b)("p",null,"Using the ",Object(b.b)("inlineCode",{parentName:"p"},"allowRange")," prop the ",Object(b.b)("inlineCode",{parentName:"p"},"Calendar")," will select date ranges."),Object(b.b)(o.c,{__position:1,__code:"<Calendar\n  adapter={dateAdapter}\n  allowRange\n  numOfColumns={4}\n  numOfVisibleMonths={12}\n/>",__scope:(a={props:_,DefaultLayout:c.a,styled:d.b,useState:r.useState,Playground:o.c,Calendar:i.a,Day:s.c,isWeekend:u.a,createDate:p.a,dateAdapter:p.b,getDay:O.a,eachDayOfInterval:j.a},a.DefaultLayout=c.a,a._frontmatter=m,a),mdxType:"Playground"},Object(b.b)(i.a,{adapter:p.b,allowRange:!0,numOfColumns:4,numOfVisibleMonths:12,mdxType:"Calendar"})),Object(b.b)("h2",{id:"setting-initial-state"},"Setting Initial State"),Object(b.b)("p",null,"The basic component operates as un-controlled, although the reducer pattern enables you to control the final state.",Object(b.b)("br",{parentName:"p"}),"\n","This example shows the basic use-case of the initial state."),Object(b.b)(o.c,{__position:2,__code:"() => {\n  const handleChange = selectedDate => {\n    console.log('changed selected date', selectedDate)\n  }\n  return (\n    <Calendar\n      adapter={dateAdapter}\n      initialSelectedDate={createDate('2020-02-20')}\n      initialVisibleFromMonth={createDate('2020-02-01')}\n      numOfVisibleMonths={12}\n      numOfColumns={3}\n      onChange={handleChange}\n    />\n  )\n}",__scope:(g={props:_,DefaultLayout:c.a,styled:d.b,useState:r.useState,Playground:o.c,Calendar:i.a,Day:s.c,isWeekend:u.a,createDate:p.a,dateAdapter:p.b,getDay:O.a,eachDayOfInterval:j.a},g.DefaultLayout=c.a,g._frontmatter=m,g),mdxType:"Playground"},(function(){return Object(b.b)(i.a,{adapter:p.b,initialSelectedDate:Object(p.a)("2020-02-20"),initialVisibleFromMonth:Object(p.a)("2020-02-01"),numOfVisibleMonths:12,numOfColumns:3,onChange:function(e){console.log("changed selected date",e)},mdxType:"Calendar"})})),Object(b.b)("h2",{id:"custom-day-renderers"},"Custom Day Renderers"),Object(b.b)("p",null,"Add your own renderers for ",Object(b.b)("inlineCode",{parentName:"p"},"Day"),", to render specific date states with your own styles, using the ",Object(b.b)("inlineCode",{parentName:"p"},"ccomponents")," prop.  "),Object(b.b)(o.c,{__position:3,__code:"() => {\n  /** Add your own renderer(s) for Days to show your required state */\n  function JustWeekdaysRenderer(props) {\n    const disableWeekendProps = isWeekend(props.day) && {\n      disabled: true,\n      day: undefined,\n    }\n    return <Day {...props} {...disableWeekendProps} />\n  }\n  const handleChange = selectedDate => {\n    console.log('changed selected date', selectedDate)\n  }\n  return (\n    <Calendar\n      adapter={dateAdapter}\n      allowRange\n      components={{\n        Day: JustWeekdaysRenderer,\n      }}\n      onChange={handleChange}\n      numOfVisibleMonths={12}\n      numOfColumns={4}\n      weekOffset={1}\n    />\n  )\n}",__scope:(N={props:_,DefaultLayout:c.a,styled:d.b,useState:r.useState,Playground:o.c,Calendar:i.a,Day:s.c,isWeekend:u.a,createDate:p.a,dateAdapter:p.b,getDay:O.a,eachDayOfInterval:j.a},N.DefaultLayout=c.a,N._frontmatter=m,N),mdxType:"Playground"},(function(){return Object(b.b)(i.a,{adapter:p.b,allowRange:!0,components:{Day:function(e){var t=Object(u.a)(e.day)&&{disabled:!0,day:void 0};return Object(b.b)(s.c,Object(n.a)({},e,t,{mdxType:"Day"}))}},onChange:function(e){console.log("changed selected date",e)},numOfVisibleMonths:12,numOfColumns:4,weekOffset:1,mdxType:"Calendar"})})),Object(b.b)("h2",{id:"block-dates"},"Block dates"),Object(b.b)("p",null,"Block out dates using a custom renderer and the ",Object(b.b)("inlineCode",{parentName:"p"},"isDayDisabled")," prop.  "),Object(b.b)(o.c,{__position:4,__code:"() => {\n  const UnavailableDay = styled(Day)(props => ({\n    background: 'url(\"/public/cross.svg\")',\n    backgroundRepeat: 'no-repeat',\n    backgroundPosition: 'bottom 6px right 5px',\n    backgroundSize: '50% 50%, auto',\n  }))\n  const isMonday = date => getDay(date) === 1\n  function BlockoutMondaysRenderer(props) {\n    if (getDay(props.day) === 1) {\n      return (\n        <span style={{ cursor: 'not-allowed' }}>\n          <UnavailableDay {...props} disabled />\n        </span>\n      )\n    }\n    return <Day {...props} />\n  }\n  return (\n    <Calendar\n      adapter={dateAdapter}\n      components={{\n        Day: BlockoutMondaysRenderer,\n      }}\n      isDayDisabled={isMonday}\n      numOfVisibleMonths={12}\n      numOfColumns={4}\n      weekOffset={1}\n    />\n  )\n}",__scope:(h={props:_,DefaultLayout:c.a,styled:d.b,useState:r.useState,Playground:o.c,Calendar:i.a,Day:s.c,isWeekend:u.a,createDate:p.a,dateAdapter:p.b,getDay:O.a,eachDayOfInterval:j.a},h.DefaultLayout=c.a,h._frontmatter=m,h),mdxType:"Playground"},(function(){var e=Object(d.b)(s.c)((function(e){return{background:'url("/public/cross.svg")',backgroundRepeat:"no-repeat",backgroundPosition:"bottom 6px right 5px",backgroundSize:"50% 50%, auto"}}));return Object(b.b)(i.a,{adapter:p.b,components:{Day:function(t){return 1===Object(O.a)(t.day)?Object(b.b)("span",{style:{cursor:"not-allowed"}},Object(b.b)(e,Object(n.a)({},t,{disabled:!0,mdxType:"UnavailableDay"}))):Object(b.b)(s.c,Object(n.a)({},t,{mdxType:"Day"}))}},isDayDisabled:function(e){return 1===Object(O.a)(e)},numOfVisibleMonths:12,numOfColumns:4,weekOffset:1,mdxType:"Calendar"})})),Object(b.b)("h2",{id:"validate-date-ranges"},"Validate Date Ranges"),Object(b.b)("p",null,"Validate date ranges with your own rules using the ",Object(b.b)("inlineCode",{parentName:"p"},"isRangeValid")," prop.  "),Object(b.b)(o.c,{__position:5,__code:"() => {\n  /** Add your own validators to validate ranges */\n  const doesNotOverlapWeekendValidator = (startDate, endDate) => {\n    if (!startDate || !endDate || startDate === endDate) {\n      return true\n    }\n    const overlapsWeekend = eachDayOfInterval({\n      start: startDate,\n      end: endDate,\n    }).some(interval => {\n      return isWeekend(interval)\n    })\n    return !overlapsWeekend\n  }\n  const handleChange = selectedDate => {\n    console.log('changed selected date', selectedDate)\n  }\n  return (\n    <Calendar\n      adapter={dateAdapter}\n      allowRange\n      isRangeValid={doesNotOverlapWeekendValidator}\n      onChange={handleChange}\n      numOfVisibleMonths={12}\n      numOfColumns={4}\n      weekOffset={1}\n    />\n  )\n}",__scope:(D={props:_,DefaultLayout:c.a,styled:d.b,useState:r.useState,Playground:o.c,Calendar:i.a,Day:s.c,isWeekend:u.a,createDate:p.a,dateAdapter:p.b,getDay:O.a,eachDayOfInterval:j.a},D.DefaultLayout=c.a,D._frontmatter=m,D),mdxType:"Playground"},(function(){return Object(b.b)(i.a,{adapter:p.b,allowRange:!0,isRangeValid:function(e,t){return!e||!t||e===t||!Object(j.a)({start:e,end:t}).some((function(e){return Object(u.a)(e)}))},onChange:function(e){console.log("changed selected date",e)},numOfVisibleMonths:12,numOfColumns:4,weekOffset:1,mdxType:"Calendar"})})))}void 0!==N&&N&&N===Object(N)&&Object.isExtensible(N)&&!N.hasOwnProperty("__filemeta")&&Object.defineProperty(N,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/components/calendar.mdx"}}),N.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-components-calendar-mdx-e4df2a7b28207443e35d.js.map