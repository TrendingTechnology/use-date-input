(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"69cu":function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return g})),t.d(n,"default",(function(){return O}));var a=t("Fcif"),r=t("+I+c"),o=t("mXGw"),l=t("/FXl"),p=t("TjRS"),s=t("ZFoC"),c=t("GYKu"),i=t("WvoA"),d=t("9b5V"),u=t("xrGn"),b=t("gcqE"),g=(t("aD51"),{});void 0!==g&&g&&g===Object(g)&&Object.isExtensible(g)&&!g.hasOwnProperty("__filemeta")&&Object.defineProperty(g,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/hooks/useDateRangeInput.mdx"}});var m=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(l.b)("div",n)}},h=(m("CalendarProvider"),m("Calendar"),{_frontmatter:g}),C=p.a;function O(e){var n,t=e.components,m=Object(r.a)(e,["components"]);return Object(l.b)(C,Object(a.a)({},h,m,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"usedaterangeinput"},"useDateRangeInput"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"useDateRangeInput")," is a hook which will provide the props required to compose together a ",Object(l.b)("inlineCode",{parentName:"p"},"Calendar")," with a pair of",Object(l.b)("inlineCode",{parentName:"p"},"input")," components of your choice."),Object(l.b)("p",null,"Like with ",Object(l.b)("inlineCode",{parentName:"p"},"useDateInput")," you can use an HTML ",Object(l.b)("inlineCode",{parentName:"p"},"input"),", or an ",Object(l.b)("inlineCode",{parentName:"p"},"Input")," or ",Object(l.b)("inlineCode",{parentName:"p"},"Formfield")," from your favourite UI framework, or even your own component."),Object(l.b)("p",null,"A simple example of use is"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const {\n    Calendar,\n    CalendarProvider,\n    getCalendarProviderProps,\n    getStartDateProps,\n    getEndDateProps,\n    getPopperProps,\n} = useDateRangeInput();\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Calendar")," is the calendar component."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"CalendarProvider")," is the context which wires all the UI components together, you can use it in your own components\nto manage state"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"getCalendarProviderProps")," is a callback which provides the props for ",Object(l.b)("inlineCode",{parentName:"li"},"CalendarProvider")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"getStartDateProps")," is a callback which provides the props for your start date, Input UI Element."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"getEndDateProps")," is a callback which provides the props for your end date, Input UI Element."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"getPopperProps")," is an callback which provides the props for any Popper UI Element.  ")),Object(l.b)("p",null,"Popper's are a portal which are only needed if you are open the Calendar from another component.",Object(l.b)("br",{parentName:"p"}),"\n","ie. an Input when clicked display the Calendar in a portal, which overlays the rest of the page.  "),Object(l.b)("p",null,"When your ",Object(l.b)("inlineCode",{parentName:"p"},"input")," components and ",Object(l.b)("inlineCode",{parentName:"p"},"Calendar")," are composed together by ",Object(l.b)("inlineCode",{parentName:"p"},"useDateRangeInput")," it should look like this"),Object(l.b)("h2",{id:"example"},"Example"),Object(l.b)(s.c,{__position:0,__code:"() => {\n  const [startDate, setStartDate] = useState('')\n  const [endDate, setEndDate] = useState('')\n  const actions = useRef()\n  const handleStateChange = useCallback((changes, state) => {\n    console.log('state changed', changes, state)\n  }, [])\n  const handleStartDateInputChange = useCallback(event => {\n    const { value } = event.target\n    console.log('start date input changed to', value)\n    setStartDate(value)\n  }, [])\n  const handleEndDateInputChange = useCallback(event => {\n    const { value } = event.target\n    action('end date input changed to')(value)\n    setEndDate(value)\n  }, [])\n  const handleCalendarChange = useCallback(value => {\n    console.log('calendar changed selected date', value)\n    const { dateAPI } = actions.current\n    const [rangeStart, rangeEnd] = value\n    setStartDate(rangeStart ? dateAPI.format(rangeStart, 'dd/MM/yyyy') : '')\n    setEndDate(rangeEnd ? dateAPI.format(rangeEnd, 'dd/MM/yyyy') : '')\n  }, [])\n  const {\n    Calendar,\n    CalendarProvider,\n    getCalendarProviderProps,\n    getStartDateProps,\n    getEndDateProps,\n    getPopperProps,\n  } = useDateRangeInput({\n    actions,\n    parse: value => parse(value, 'dd/MM/yyyy', new Date()),\n  })\n  return (\n    <>\n      <input\n        {...getStartDateProps({ onChange: handleStartDateInputChange })}\n        value={startDate}\n      />\n      <input\n        {...getEndDateProps({ onChange: handleEndDateInputChange })}\n        value={endDate}\n      />\n      <CalendarProvider\n        {...getCalendarProviderProps({\n          adapter: dateAdapter,\n          numOfColumns: 3,\n          numOfVisibleMonths: 6,\n          onCalendarChange: handleCalendarChange,\n          onStateChange: handleStateChange,\n        })}\n      >\n        <Popper {...getPopperProps({ placement: 'bottom-start' })}>\n          <div style={{ background: '#1FB6FF', padding: '10px' }}>\n            <Calendar />\n          </div>\n        </Popper>\n      </CalendarProvider>\n    </>\n  )\n}",__scope:(n={props:m,DefaultLayout:p.a,useCallback:o.useCallback,useRef:o.useRef,useState:o.useState,Props:s.d,Playground:s.c,useDateRangeInput:c.v,Popper:i.b,dateAdapter:d.a,parse:u.a,isValid:b.a},n.DefaultLayout=p.a,n._frontmatter=g,n),mdxType:"Playground"},(function(){var e=Object(o.useState)(""),n=e[0],t=e[1],r=Object(o.useState)(""),p=r[0],s=r[1],b=Object(o.useRef)(),g=Object(o.useCallback)((function(e,n){console.log("state changed",e,n)}),[]),m=Object(o.useCallback)((function(e){var n=e.target.value;console.log("start date input changed to",n),t(n)}),[]),h=Object(o.useCallback)((function(e){var n=e.target.value;action("end date input changed to")(n),s(n)}),[]),C=Object(o.useCallback)((function(e){console.log("calendar changed selected date",e);var n=b.current.dateAPI,a=e[0],r=e[1];t(a?n.format(a,"dd/MM/yyyy"):""),s(r?n.format(r,"dd/MM/yyyy"):"")}),[]),O=Object(c.v)({actions:b,parse:function(e){return Object(u.a)(e,"dd/MM/yyyy",new Date)}}),j=O.Calendar,v=O.CalendarProvider,P=O.getCalendarProviderProps,f=O.getStartDateProps,y=O.getEndDateProps,D=O.getPopperProps;return Object(l.b)(o.Fragment,null,Object(l.b)("input",Object(a.a)({},f({onChange:m}),{value:n})),Object(l.b)("input",Object(a.a)({},y({onChange:h}),{value:p})),Object(l.b)(v,Object(a.a)({},P({adapter:d.a,numOfColumns:3,numOfVisibleMonths:6,onCalendarChange:C,onStateChange:g}),{mdxType:"CalendarProvider"}),Object(l.b)(i.b,Object(a.a)({},D({placement:"bottom-start"}),{mdxType:"Popper"}),Object(l.b)("div",{style:{background:"#1FB6FF",padding:"10px"}},Object(l.b)(j,{mdxType:"Calendar"})))))})),Object(l.b)("h2",{id:"actions"},"Actions"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"useDateRangeInput")," provides an imperative API for the controlled state, use-case."),Object(l.b)("p",null,"Pass a ref to ",Object(l.b)("inlineCode",{parentName:"p"},"useDateRangeInput")," and it will be assigned an impertive API of state and helpers."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const {\n    Calendar,\n    CalendarProvider,\n    getCalendarProviderProps,\n    getInputProps,\n    getPopperProps,\n} = useDateInput({\n    actions\n});\n")),Object(l.b)("p",null,"The imperative API takes the form."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"actions.current = {\n    createDate, \n    dispatch,\n    mouseClickOutside,\n    navigateNext,\n    navigatePrevious,\n    selectDate,\n    setAnimating,\n    setEnableKeyboardNavigation,\n    setKeyboardCursor,\n    setMouseCursor,\n    setEndDate,\n    setStartDate,\n    setOpen,\n    setKeyPress,\n    setVisibleFromDate\n}\n")))}void 0!==O&&O&&O===Object(O)&&Object.isExtensible(O)&&!O.hasOwnProperty("__filemeta")&&Object.defineProperty(O,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/hooks/useDateRangeInput.mdx"}}),O.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-hooks-use-date-range-input-mdx-348291b78405987d068c.js.map