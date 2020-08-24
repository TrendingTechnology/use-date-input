(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{kH65:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return m})),a.d(t,"default",(function(){return N}));var n=a("Fcif"),l=a("+I+c"),r=a("mXGw"),b=a("/FXl"),d=a("TjRS"),c=a("UutA"),o=a("ZFoC"),i=a("gsQS"),p=a("GYKu"),u=a("Dy3B"),s=a("9jhi"),O=a("esdE"),j=a("5Wd7"),m=(a("aD51"),{});void 0!==m&&m&&m===Object(m)&&Object.isExtensible(m)&&!m.hasOwnProperty("__filemeta")&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/components/calendar.mdx"}});g="UnavailableDay";var g,y={_frontmatter:m},f=d.a;function N(e){var t,a,g,N,h,C,D=e.components,_=Object(l.a)(e,["components"]);return Object(b.b)(f,Object(n.a)({},y,_,{components:D,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"calendar"},"Calendar"),Object(b.b)("p",null,"The ",Object(b.b)("inlineCode",{parentName:"p"},"Calendar")," is the basic building block for all calendar controls.\nIt supports  "),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"single or date ranges, via the  configured reducers"),Object(b.b)("li",{parentName:"ul"},"any date framework, via the date adapter"),Object(b.b)("li",{parentName:"ul"},"theming"),Object(b.b)("li",{parentName:"ul"},"localisation, via the format method of the date adapter"),Object(b.b)("li",{parentName:"ul"},"a11y support")),Object(b.b)("p",null,"In the default implementation ",Object(b.b)("inlineCode",{parentName:"p"},"Calendar")," is used by the ",Object(b.b)("inlineCode",{parentName:"p"},"useDateInput")," and ",Object(b.b)("inlineCode",{parentName:"p"},"useDateRangeInput")," hooks but you can also use inline.",Object(b.b)("br",{parentName:"p"}),"\n","Alternatively you could use to compose your own date picker components or dialogs."),Object(b.b)("p",null,"If you wrap your ",Object(b.b)("inlineCode",{parentName:"p"},"Calendar")," in a ",Object(b.b)("inlineCode",{parentName:"p"},"CalendarProvider")," it will use the state created by it, otherwise, it will internally rende\nthe ",Object(b.b)("inlineCode",{parentName:"p"},"Calendar")," contents within a ",Object(b.b)("inlineCode",{parentName:"p"},"CalendarProvider"),". This optimization saves you having to wrap ",Object(b.b)("inlineCode",{parentName:"p"},"Calendars")," inside ",Object(b.b)("inlineCode",{parentName:"p"},"CalendarProvider"),",\nif you don't need to.  "),Object(b.b)("p",null,"The render tree of ",Object(b.b)("inlineCode",{parentName:"p"},"Calendar")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{}),"Calendar\n|__ Root  \n    |__ Header  \n    |__ MonthGroup  \n        |__ AnimatedMonthGroup  \n            |__ AnimatedGroup  \n                |__ Month  \n                    |__ MonthHeader  \n                        |__ WeekHeader  \n                        |__ Week  \n                            |__ DayOfWeek  \n                            |__ Day  \n")),Object(b.b)("h2",{id:"single-date"},"Single Date"),Object(b.b)("p",null,"By default the ",Object(b.b)("inlineCode",{parentName:"p"},"Calendar")," will select single dates."),Object(b.b)(o.c,{__position:0,__code:"<Calendar adapter={dateAdapter} numOfColumns={4} numOfVisibleMonths={12} />",__scope:(t={props:_,DefaultLayout:d.a,styled:c.b,useState:r.useState,Playground:o.c,Calendar:i.a,Day:p.f,isWeekend:u.a,createDate:s.a,dateAdapter:s.b,getDay:O.a,eachDayOfInterval:j.a},t.DefaultLayout=d.a,t._frontmatter=m,t),mdxType:"Playground"},Object(b.b)(i.a,{adapter:s.b,numOfColumns:4,numOfVisibleMonths:12,mdxType:"Calendar"})),Object(b.b)("h2",{id:"date-range"},"Date Range"),Object(b.b)("p",null,"Using the ",Object(b.b)("inlineCode",{parentName:"p"},"allowRange")," prop the ",Object(b.b)("inlineCode",{parentName:"p"},"Calendar")," will select date ranges."),Object(b.b)(o.c,{__position:1,__code:"<Calendar\n  adapter={dateAdapter}\n  allowRange\n  numOfColumns={4}\n  numOfVisibleMonths={12}\n/>",__scope:(a={props:_,DefaultLayout:d.a,styled:c.b,useState:r.useState,Playground:o.c,Calendar:i.a,Day:p.f,isWeekend:u.a,createDate:s.a,dateAdapter:s.b,getDay:O.a,eachDayOfInterval:j.a},a.DefaultLayout=d.a,a._frontmatter=m,a),mdxType:"Playground"},Object(b.b)(i.a,{adapter:s.b,allowRange:!0,numOfColumns:4,numOfVisibleMonths:12,mdxType:"Calendar"})),Object(b.b)("h2",{id:"setting-initial-state"},"Setting Initial State"),Object(b.b)("p",null,"The basic component operates as un-controlled, although the reducer pattern enables you to control the final state.",Object(b.b)("br",{parentName:"p"}),"\n","This example shows the basic use-case of the initial state."),Object(b.b)(o.c,{__position:2,__code:"() => {\n  const handleChange = selectedDate => {\n    console.log('changed selected date', selectedDate)\n  }\n  return (\n    <Calendar\n      adapter={dateAdapter}\n      initialSelectedDate={createDate('2020-02-20')}\n      initialVisibleFromMonth={createDate('2020-02-01')}\n      numOfVisibleMonths={12}\n      numOfColumns={4}\n      onChange={handleChange}\n    />\n  )\n}",__scope:(g={props:_,DefaultLayout:d.a,styled:c.b,useState:r.useState,Playground:o.c,Calendar:i.a,Day:p.f,isWeekend:u.a,createDate:s.a,dateAdapter:s.b,getDay:O.a,eachDayOfInterval:j.a},g.DefaultLayout=d.a,g._frontmatter=m,g),mdxType:"Playground"},(function(){return Object(b.b)(i.a,{adapter:s.b,initialSelectedDate:Object(s.a)("2020-02-20"),initialVisibleFromMonth:Object(s.a)("2020-02-01"),numOfVisibleMonths:12,numOfColumns:4,onChange:function(e){console.log("changed selected date",e)},mdxType:"Calendar"})})),Object(b.b)("h2",{id:"custom-day-renderers"},"Custom Day Renderers"),Object(b.b)("p",null,"Add your own renderers for ",Object(b.b)("inlineCode",{parentName:"p"},"Day"),", to render specific date states with your own styles, using the ",Object(b.b)("inlineCode",{parentName:"p"},"ccomponents")," prop.  "),Object(b.b)(o.c,{__position:3,__code:"() => {\n  /** Add your own renderer(s) for Days to show your required state */\n  function JustWeekdaysRenderer(props) {\n    const disableWeekendProps = isWeekend(props.day) && {\n      disabled: true,\n      day: undefined,\n    }\n    return <Day {...props} {...disableWeekendProps} />\n  }\n  const handleChange = selectedDate => {\n    console.log('changed selected date', selectedDate)\n  }\n  return (\n    <Calendar\n      adapter={dateAdapter}\n      allowRange\n      components={{\n        Day: JustWeekdaysRenderer,\n      }}\n      onChange={handleChange}\n      numOfVisibleMonths={12}\n      numOfColumns={4}\n      weekOffset={1}\n    />\n  )\n}",__scope:(N={props:_,DefaultLayout:d.a,styled:c.b,useState:r.useState,Playground:o.c,Calendar:i.a,Day:p.f,isWeekend:u.a,createDate:s.a,dateAdapter:s.b,getDay:O.a,eachDayOfInterval:j.a},N.DefaultLayout=d.a,N._frontmatter=m,N),mdxType:"Playground"},(function(){return Object(b.b)(i.a,{adapter:s.b,allowRange:!0,components:{Day:function(e){var t=Object(u.a)(e.day)&&{disabled:!0,day:void 0};return Object(b.b)(p.f,Object(n.a)({},e,t,{mdxType:"Day"}))}},onChange:function(e){console.log("changed selected date",e)},numOfVisibleMonths:12,numOfColumns:4,weekOffset:1,mdxType:"Calendar"})})),Object(b.b)("h2",{id:"block-dates"},"Block dates"),Object(b.b)("p",null,"Block out dates using a custom renderer and the ",Object(b.b)("inlineCode",{parentName:"p"},"isDayDisabled")," prop.  "),Object(b.b)(o.c,{__position:4,__code:"() => {\n  const UnavailableDay = styled(Day)(props => ({\n    background: 'url(\"/public/cross.svg\")',\n    backgroundRepeat: 'no-repeat',\n    backgroundPosition: 'bottom 6px right 5px',\n    backgroundSize: '50% 50%, auto',\n  }))\n  const isMonday = date => getDay(date) === 1\n  function BlockoutMondaysRenderer(props) {\n    if (getDay(props.day) === 1) {\n      return (\n        <span style={{ cursor: 'not-allowed' }}>\n          <UnavailableDay {...props} disabled />\n        </span>\n      )\n    }\n    return <Day {...props} />\n  }\n  return (\n    <Calendar\n      adapter={dateAdapter}\n      components={{\n        Day: BlockoutMondaysRenderer,\n      }}\n      isDayDisabled={isMonday}\n      numOfVisibleMonths={12}\n      numOfColumns={4}\n      weekOffset={1}\n    />\n  )\n}",__scope:(h={props:_,DefaultLayout:d.a,styled:c.b,useState:r.useState,Playground:o.c,Calendar:i.a,Day:p.f,isWeekend:u.a,createDate:s.a,dateAdapter:s.b,getDay:O.a,eachDayOfInterval:j.a},h.DefaultLayout=d.a,h._frontmatter=m,h),mdxType:"Playground"},(function(){var e=Object(c.b)(p.f)((function(e){return{background:'url("/public/cross.svg")',backgroundRepeat:"no-repeat",backgroundPosition:"bottom 6px right 5px",backgroundSize:"50% 50%, auto"}}));return Object(b.b)(i.a,{adapter:s.b,components:{Day:function(t){return 1===Object(O.a)(t.day)?Object(b.b)("span",{style:{cursor:"not-allowed"}},Object(b.b)(e,Object(n.a)({},t,{disabled:!0,mdxType:"UnavailableDay"}))):Object(b.b)(p.f,Object(n.a)({},t,{mdxType:"Day"}))}},isDayDisabled:function(e){return 1===Object(O.a)(e)},numOfVisibleMonths:12,numOfColumns:4,weekOffset:1,mdxType:"Calendar"})})),Object(b.b)("h2",{id:"validate-date-ranges"},"Validate Date Ranges"),Object(b.b)("p",null,"Validate date ranges with your own rules using the ",Object(b.b)("inlineCode",{parentName:"p"},"isRangeValid")," prop.  "),Object(b.b)(o.c,{__position:5,__code:"() => {\n  /** Add your own validators to validate ranges */\n  const doesNotOverlapWeekendValidator = (startDate, endDate) => {\n    if (!startDate || !endDate || startDate === endDate) {\n      return true\n    }\n    const overlapsWeekend = eachDayOfInterval({\n      start: startDate,\n      end: endDate,\n    }).some(interval => {\n      return isWeekend(interval)\n    })\n    return !overlapsWeekend\n  }\n  const handleChange = selectedDate => {\n    console.log('changed selected date', selectedDate)\n  }\n  return (\n    <Calendar\n      adapter={dateAdapter}\n      allowRange\n      isRangeValid={doesNotOverlapWeekendValidator}\n      onChange={handleChange}\n      numOfVisibleMonths={12}\n      numOfColumns={4}\n      weekOffset={1}\n    />\n  )\n}",__scope:(C={props:_,DefaultLayout:d.a,styled:c.b,useState:r.useState,Playground:o.c,Calendar:i.a,Day:p.f,isWeekend:u.a,createDate:s.a,dateAdapter:s.b,getDay:O.a,eachDayOfInterval:j.a},C.DefaultLayout=d.a,C._frontmatter=m,C),mdxType:"Playground"},(function(){return Object(b.b)(i.a,{adapter:s.b,allowRange:!0,isRangeValid:function(e,t){return!e||!t||e===t||!Object(j.a)({start:e,end:t}).some((function(e){return Object(u.a)(e)}))},onChange:function(e){console.log("changed selected date",e)},numOfVisibleMonths:12,numOfColumns:4,weekOffset:1,mdxType:"Calendar"})})),Object(b.b)("h2",{id:"props"},"Props"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Prop Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Is Required"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default Value"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"adapter"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"func")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"optional"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Date API adapter")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"allowRange"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"bool")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"optional"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"When ",Object(b.b)("inlineCode",{parentName:"td"},"true")," will select a date range")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"clickOutsideWhiteList"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"array")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"optional"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"[]")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Array of refs to ignore clicks, when determining whether the user clicked outside the Calendar")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"initialSelectedDate"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"object or array")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"optional"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The initial selectedDate (for un-controlled use-case)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"initialVisibleFromMonth"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"object")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"optional"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The initial visible from calendar month (unless date is set)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"isDayDisabled"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"func")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"optional"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Callback to set days as disabled   @param day - Date to check        @returns true when disabled")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"isRangeValid"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"func")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"optional"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Callback to determine whether the current selection is valid   @param day - startDate    @param day - endDate        @returns true when valid")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"numOfColumns"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"number")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"optional"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"1")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Number of columns")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"numOfVisibleMonths"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"number")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"optional"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"1")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Number of visible months")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"onChange"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"func")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"optional"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Selected date change handler")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"onStateChange"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"func")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"optional"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"State change handler")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"reducers"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"array of funcs")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"optional"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Reducer(s), to override default state")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"theme"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"object")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"optional"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Theme")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"weekOffset"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"number")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"optional"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"0")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Start of week offset from date API's default")))))}void 0!==N&&N&&N===Object(N)&&Object.isExtensible(N)&&!N.hasOwnProperty("__filemeta")&&Object.defineProperty(N,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/components/calendar.mdx"}}),N.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-components-calendar-mdx-d4c1a4bad88a67f02de6.js.map