(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{227:function(t,e,r){"use strict";r.d(e,"a",(function(){return d})),r.d(e,"b",(function(){return c}));r(35);var o=r(0),n=r(6),l=r(333),c={size:{type:n.o,default:"md"},variant:{type:n.a,default:"outline"},as:{type:String,default:"input"},_ariaLabel:String,_ariaDescribedby:String,isFullWidth:{type:Boolean,default:!0},isReadOnly:Boolean,isDisabled:Boolean,isInvalid:Boolean,isRequired:Boolean,focusBorderColor:{type:String,default:"blue.200"},errorBorderColor:{type:String,default:"red.300"},value:{type:[String,Number],default:void 0}},d={name:"CInput",mixins:[Object(o.j)("CInput",!0)],inject:{$chakraColorMode:{default:"light"},$chakraTheme:{default:function(){return{}}},$useFormControl:{default:null}},model:{prop:"value",event:"input"},props:c,computed:{formControl:function(){return this.$useFormControl?this.$useFormControl(this.$props):{isReadOnly:this.isReadOnly,isDisabled:this.isDisabled,isInvalid:this.isInvalid,isRequired:this.isRequired}},inputStyles:function(){return Object(l.a)(Object.assign({},this.$props,{theme:this.theme,colorMode:this.colorMode}))},componentStyles:function(){return Object.assign({},this.inputStyles,{fontFamily:"body"})}},methods:{emitValue:function(t){this.$emit("input",t.target.value,t),this.$emit("change",t)}},render:function(t){return t(this.as,{class:[this.className],domProps:{value:this.value},attrs:Object.assign({},{"aria-readonly":this.isReadOnly,readonly:this.formControl.isReadOnly,disabled:this.formControl.isDisabled,"aria-disabled":this.formControl.isDisabled,"aria-invalid":this.formControl.isInvalid,required:this.formControl.isRequired,"aria-required":this.formControl.isRequired},this.computedAttrs),on:Object.assign({},this.computedListeners,{input:this.emitValue}),ref:"input"},this.$slots.default)}}},228:function(t,e,r){"use strict";var o=r(0),n=(r(3),r(6)),l=r(227),i={name:"CTextarea",functional:!0,model:{prop:"inputValue",event:"change"},props:Object.assign({},l.b,{inputValue:String,py:{type:n.o,default:"8px"},minHeight:{type:n.o,default:"80px"},fontFamily:{type:n.o,default:"body"},lineHeight:{type:n.o,default:"shorter"}}),render:function(a,t){var i=t.props,s=t.slots,e=t.data,p=t.listeners,r=function(t,e){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&-1===e.indexOf(r)&&(a[r]=t[r]);return a}(t,["props","slots","data","listeners"]),n=Object(o.b)({listeners:p},{input:function(t,e){var a=p.change;a&&e instanceof Event&&a(t,e)}}).nonNative;return a(l.a,Object.assign({},r,{props:Object.assign({},Object(o.o)(i),{as:"textarea"}),attrs:Object.assign({},{py:"8px",minHeight:"80px",fontFamily:"body",lineHeight:"shorter"},e.attrs||{},{"data-chakra-component":"CTextarea"}),on:n}),s().default)}};e.a=i},229:function(t,e,r){"use strict";r(8),r(5),r(11);var o=r(0),n=(r(3),r(334)),i={name:"CFormControl",mixins:[Object(o.j)("CFormControl")],props:Object.assign({},n.a,{as:{type:String,default:"div"}}),inject:{$FormControlContext:{default:null}},computed:{formControlContext:function(){return this.$FormControlContext?this.$FormControlContext():this.props},props:function(){return{isInvalid:this.isInvalid,isRequired:this.isRequired,isDisabled:this.isDisabled,isReadOnly:this.isReadOnly,id:"fc-"+(this.computedAttrs.id||Object(o.f)(3))}}},provide:function(){var t=this;return{$FormControlContext:function(){return t.props},$useFormControl:this.useFormControl}},methods:{useFormControl:function(){var t=this,s=this.formControlContext;return s?Object.keys(s).reduce((function(e,i){return e[i]=t.props[i],s&&null==t.props[i]&&(e[i]=s[i]),e}),{}):this.props}},render:function(t){return t(this.as,{class:[this.className],attrs:Object.assign({},{role:"group"},this.computedAttrs),on:this.computedListeners},this.$scopedSlots.default({isInvalid:this.isInvalid,isRequired:this.isRequired,isDisabled:this.isDisabled,isReadOnly:this.isReadOnly}))}};e.a=i},230:function(t,e,r){"use strict";var o=r(0),n=(r(3),r(28)),l=r(334),c={name:"CRequiredIndicator",functional:!0,inject:["$chakraColorMode"],render:function(t,e){var r=e.data,o=e.injections,i=function(t,e){var r={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&-1===e.indexOf(o)&&(r[o]=t[o]);return r}(e,["data","injections"]),a={light:"red.500",dark:"red.300"}[o.$chakraColorMode()];return t(n.a,Object.assign({},i,{attrs:Object.assign({},{as:"span",ml:1,color:a,"aria-hidden":!0},r.attrs,{"data-chakra-component":"CRequiredIndicator"})}),"*")}},i={name:"CFormLabel",mixins:[Object(o.j)("CFormLabel")],inject:{$useFormControl:{default:null}},props:l.a,computed:{formControl:function(){return Object(o.h)(this.$useFormControl,this.$props)},componentStyles:function(){return{fontSize:"md",pr:"12px",pb:"4px",opacity:this.formControl.isDisabled?"0.4":"1",fontWeight:"medium",fontFamily:"body",textAlign:"left",verticalAlign:"middle",display:"inline-block"}}},render:function(t){return t("label",{class:[this.className],attrs:this.computedAttrs,on:this.computedListeners},this.$slots.default.concat([this.formControl.isRequired&&t(c)]))}};e.a=i},231:function(t,e,r){"use strict";var o=r(0),n=(r(3),r(28)),l=r(39),c=r(108),d={display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",transition:"all 250ms",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",lineHeight:"1.2",outline:"none"},a={name:"CIconButton",functional:!0,props:Object.assign({},{icon:{type:[String]},isRound:{type:[Boolean]},ariaLabel:{type:[String],required:!0}},c.b),render:function(i,a){var s=a.props,t=(s.isFullWidth,s.leftIcon,s.rightIcon,s.loadingText,function(t,e){var r={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&-1===e.indexOf(i)&&(r[i]=t[i]);return r}(s,["isFullWidth","leftIcon","rightIcon","loadingText"])),e=t.ariaLabel,p=t.isRound,r=t.icon,m=Object(o.b)(a,{click:function(t){var e=a.listeners.click;e&&e(t)}}),u=m.native,h=m.nonNative;return i(c.a,{props:t,attrs:Object.assign({},{"aria-label":e,rounded:p?"full":"md"},a.data.attrs,{"data-chakra-component":"CIconButton",p:0}),on:h,nativeOn:u},["string"==typeof r?i(l.a,{props:{name:r},attrs:Object.assign({},d,{color:"currentColor",mb:"2px",size:"1em",focusable:!1,"aria-hidden":!0})}):i(n.a,{props:{as:r},attrs:{focusable:!0,color:"currentColor"}})])}};e.a=a},232:function(t,e,r){"use strict";var o=r(0),n=(r(3),{name:"CFormHelperText",mixins:[Object(o.j)("CFormHelperText")],inject:["$useFormControl"],computed:{formControl:function(){return this.$useFormControl(this.$props)},componentStyles:function(){return{mt:2,color:{light:"gray.500",dark:"whiteAlpha.600"}[this.colorMode],lineHeight:"normal",fontSize:"sm"}}},render:function(t){return t("p",{class:[this.className],attrs:Object.assign({},{id:this.formControl.id?this.formControl.id+"-help-text":null},this.computedAttrs),on:this.computedListeners},this.$slots.default)}});e.a=n},233:function(t,e,r){"use strict";r.d(e,"a",(function(){return l}));var o=r(0),n=r(6),i={as:{type:String,default:"div"},align:n.o,justify:n.o,wrap:n.o,direction:n.o,size:n.o},l={name:"CFlex",mixins:[Object(o.j)("CFlex")],props:i,computed:{componentStyles:function(){return{display:"flex",flexDirection:this.direction,alignItems:this.align,justifyContent:this.justify,flexWrap:this.wrap,h:this.size,w:this.size}}},render:function(t){return t(this.as,{class:this.className,attrs:this.computedAttrs},this.$slots.default)}}},234:function(t,e,r){"use strict";var o=r(0),n=(r(3),r(174)),s={"2xl":["4xl",null,"5xl"],xl:["3xl",null,"4xl"],lg:["xl",null,"2xl"],md:"xl",sm:"md",xs:"sm"},i={name:"CHeading",mixins:[Object(o.j)("CHeading")],props:{size:{type:[String,Array,Object],default:"xl"},as:{type:String,default:"h2"},isTruncated:Boolean},computed:{componentStyles:function(){return Object.assign({},{fontSize:s[this.size],lineHeight:"shorter",fontWeight:"bold",fontFamily:"heading"},this.isTruncated&&Object(n.a)())}},render:function(t){return t(this.as,{class:this.className,attrs:this.computedAttrs},this.$slots.default)}};e.a=i},235:function(t,e,r){"use strict";r(45),r(53);var o=r(0),n=(r(3),r(6)),i={name:"CLink",mixins:[Object(o.j)("CLink",!0)],props:{as:{type:String,default:"a"},to:n.o,isDisabled:Boolean,isExternal:Boolean},computed:{isRouterLink:function(){return["router-link","nuxt-link"].includes(Object(o.e)(this.as))},componentStyles:function(){return{transition:"all 0.15s ease-out",cursor:"pointer",textDecoration:"none",outline:"none",_focus:{boxShadow:"outline"},_hover:{textDecoration:"underline"},_disabled:{opacity:"0.4",cursor:"not-allowed",textDecoration:"none"}}},externalAttrs:function(){return this.isExternal?{target:"_blank",rel:"noopener noreferrer"}:null}},render:function(t){var e=this;return t(this.as,{class:this.className,props:Object.assign({},this.isRouterLink&&{to:this.to}),attrs:Object.assign({},{tabIndex:this.isDisabled?-1:void 0,"aria-disabled":this.isDisabled},this.externalAttrs,this.computedAttrs),on:Object.assign({},{click:function(t){return e.$emit("click",t)}},this.computedListeners)},this.$slots.default)}};e.a=i},333:function(t,e,r){"use strict";r.d(e,"a",(function(){return d}));var o=r(0),n={_readOnly:{bg:"transparent",boxShadow:"none !important",userSelect:"all"}},l={bg:"transparent",px:void 0,height:void 0},i={display:"flex",alignItems:"center",position:"relative",transition:"all 0.2s",outline:"none",appearance:"none"},c={lg:{fontSize:"lg",px:4,height:12,lineHeight:"3rem",rounded:"md"},md:{fontSize:"md",px:4,height:10,lineHeight:"2.5rem",rounded:"md"},sm:{fontSize:"sm",px:3,height:8,lineHeight:"2rem",rounded:"sm"}},d=function(t){return Object.assign({},{width:t.isFullWidth?"100%":void 0},i,function(t){return c[t.size]}(t),function(t){switch(t.variant){case"flushed":return e=(i=t).theme,r=i.focusBorderColor,c=i.errorBorderColor,a=Object(o.n)(e.colors,r,r),s=Object(o.n)(e.colors,c,c),Object.assign({},n,{borderBottom:"2px",borderColor:"inherit",rounded:0,px:void 0,bg:"transparent",_focus:{zIndex:1,borderColor:a},_invalid:{borderColor:s}});case"unstyled":return l;case"filled":return function(t){var e=t.theme,i=t.focusBorderColor,r=t.errorBorderColor,l=t.colorMode,c=Object(o.n)(e.colors,i,i),a=Object(o.n)(e.colors,r,r);return Object.assign({},n,{border:"2px",borderColor:"transparent",bg:{light:"gray.100",dark:"whiteAlpha.50"}[l],_hover:{bg:{light:"gray.200",dark:"whiteAlpha.100"}[l]},_disabled:{opacity:"0.4",cursor:"not-allowed"},_focus:{zIndex:1,bg:"transparent",borderColor:c},_invalid:{borderColor:a}})}(t);case"outline":return function(t){var e=t.theme,i=t.colorMode,r=t.focusBorderColor,l=t.errorBorderColor,c=Object(o.n)(e.colors,r,r),a=Object(o.n)(e.colors,l,l);return Object.assign({},n,{borderWidth:"1px",borderColor:{light:"inherit",dark:"whiteAlpha.50"}[i],bg:{light:"white",dark:"whiteAlpha.100"}[i],_hover:{borderColor:{light:"gray.300",dark:"whiteAlpha.200"}[i]},_disabled:{opacity:"0.4",cursor:"not-allowed"},_focus:{zIndex:1,borderColor:c,boxShadow:"0 0 0 1px "+c},_invalid:{borderColor:a,boxShadow:"0 0 0 1px "+a}})}(t);default:return{}}var i,e,r,c,a,s}(t))}},334:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var a={isInvalid:Boolean,isRequired:Boolean,isDisabled:Boolean,isReadOnly:Boolean}},341:function(t,e,r){"use strict";r.r(e);var o=r(28),n=r(228),l=r(108),c=r(229),d=r(231),m=r(230),h=r(227),f=r(232),C=r(233),v=r(234),x=r(235),y=(r(94),r(16)),j={components:{CBox:o.a,CTextarea:n.a,CButton:l.a,CFormControl:c.a,CFormLabel:m.a,CIconButton:d.a,CInput:h.a,CFormHelperText:f.a,CFlex:C.a},data:function(){return{form:{contactName:"",contactEmail:"",contactMessage:""}}},methods:{submitForm:function(){this.sendContactToLambdaFunction()},resetForm:function(){this.form.contactEmail="",this.form.contactName="",this.form.contactMessage=""},sendContactToLambdaFunction:function(){var t=this;return Object(y.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.$post("/.netlify/functions/contact-mail",{issuerName:t.form.contactName,issuerEmail:t.form.contactEmail,message:t.form.contactMessage});case 3:r=e.sent,t.$toast({title:"Mail sent",description:r,status:"success",duration:1e4,isClosable:!0}),t.resetForm(),console.log("response message",r),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t.$toast({title:"An error occured",description:e.t0,status:"error",duration:1e4,isClosable:!0});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}}},O=r(83),F=Object(O.a)(j,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("CBox",{attrs:{textAlign:"left",width:"50%"}},[r("form",[r("CFormControl",[r("CFormLabel",{attrs:{for:"name"}},[t._v(" Name ")]),t._v(" "),r("CInput",{attrs:{type:"text",id:"name","aria-describedby":"name"},model:{value:t.form.contactName,callback:function(e){t.$set(t.form,"contactName",e)},expression:"form.contactName"}})],1),t._v(" "),r("CFormControl",[r("CFormLabel",{attrs:{for:"email"}},[t._v(" Email ")]),t._v(" "),r("CInput",{attrs:{type:"email",id:"email","aria-describedby":"email-helper-text"},model:{value:t.form.contactEmail,callback:function(e){t.$set(t.form,"contactEmail",e)},expression:"form.contactEmail"}}),t._v(" "),r("CFormHelperText",{attrs:{id:"email-helper-text"}},[t._v("\n        We'll never share your email.\n      ")])],1),t._v(" "),r("CFormControl",[r("CFormLabel",{attrs:{for:"message"}},[t._v(" Message ")]),t._v(" "),r("CTextarea",{attrs:{placeholder:"Type your message"},model:{value:t.form.contactMessage,callback:function(e){t.$set(t.form,"contactMessage",e)},expression:"form.contactMessage"}})],1),t._v(" "),r("CBox",{attrs:{mt:"12",d:"flex","flex-dir":"column",align:"center"}},[r("CButton",{attrs:{"right-icon":"arrow-forward",width:"20%","variant-color":"vue",variant:"outline"},on:{click:function(e){return t.submitForm()}}},[t._v("\n      Submit\n      ")])],1)],1)])}),[],!1,null,null,null).exports,_={components:{CBox:o.a,CTextarea:n.a,CButton:l.a,CFormControl:c.a,CFormLabel:m.a,CIconButton:d.a,CInput:h.a,CFormHelperText:f.a,CFlex:C.a},data:function(){return{form:{name:""},response:"_",error:null}},methods:{helloNamePost:function(t){var e=this;return Object(y.a)(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e.$axios.$post("/.netlify/functions/contact",{name:t});case 3:o=r.sent,e.response=o,e.error=null,r.next=12;break;case 8:r.prev=8,r.t0=r.catch(0),e.error=r.t0.response,e.response="_";case 12:case"end":return r.stop()}}),r,null,[[0,8]])})))()},helloNamePostError:function(t){var e=this;return Object(y.a)(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e.$axios.$get("/.netlify/functions/contact?name=".concat(t));case 3:o=r.sent,e.response=o,e.error=null,r.next=12;break;case 8:r.prev=8,r.t0=r.catch(0),e.error=r.t0.response,e.response="_";case 12:case"end":return r.stop()}}),r,null,[[0,8]])})))()}}},w=Object(O.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("CBox",[r("form",{ref:"form",attrs:{"v-model":t.form},on:{submit:function(e){return e.preventDefault(),t.helloName(t.form.name)}}},[r("h3",[t._v(" Hello, {name}")]),t._v(" "),r("CInput",{attrs:{type:"text",id:"name","aria-describedby":"name"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),t._v(" "),r("CBox",{attrs:{mt:"12",d:"flex","flex-dir":"column",align:"center"}},[r("CButton",{attrs:{"right-icon":"arrow-forward",width:"20%","variant-color":"vue",variant:"outline"},on:{click:function(e){return t.helloNamePost(t.form.name)}}},[t._v("\n      Submit\n      ")]),t._v(" "),r("CButton",{attrs:{"right-icon":"arrow-forward",width:"20%","variant-color":"vue",variant:"outline"},on:{click:function(e){return t.helloNamePostError(t.form.name)}}},[t._v("\n        Error\n      ")])],1),t._v(" "),r("p",[t._v("Response: "+t._s(t.response))]),t._v(" "),t.error?r("p",{staticStyle:{color:"red"}},[r("strong",[t._v("Error "+t._s(t.error.status))]),t._v(" "),r("br"),t._v("\n        "+t._s(t.error.data)+"\n      ")]):t._e()],1)])}),[],!1,null,null,null).exports,$={name:"App",inject:["$chakraColorMode","$toggleColorMode"],components:{CBox:o.a,CTextarea:n.a,CButton:l.a,CFormControl:c.a,CIconButton:d.a,CFormLabel:m.a,CInput:h.a,CFormHelperText:f.a,CFlex:C.a,CHeading:v.a,CLink:x.a,ContactForm:F,TestContact:w},data:function(){return{showModal:!1,mainStyles:{dark:{bg:"gray.700",color:"whiteAlpha.900"},light:{bg:"white",color:"gray.900"}}}},computed:{colorMode:function(){return this.$chakraColorMode()},theme:function(){return this.$chakraTheme()},toggleColorMode:function(){return this.$toggleColorMode}},methods:{showToast:function(){this.$toast({title:"Account created.",description:"We've created your account for you.",status:"success",duration:1e4,isClosable:!0})}}},k=Object(O.a)($,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("CBox",t._b({attrs:{d:"flex",w:"100vw",h:"100vh","flex-dir":"column","justify-content":"center"}},"CBox",t.mainStyles[t.colorMode],!1),[r("CHeading",{attrs:{textAlign:"center",mb:"4"}},[t._v(" Serverless Contact form ")]),t._v(" "),r("CFlex",{attrs:{justify:"center",width:"full",direction:"column",align:"center"}},[r("CBox",{attrs:{mb:"3"}},[r("CIconButton",{attrs:{mr:"3",icon:"light"===t.colorMode?"moon":"sun","aria-label":"Switch to "+("light"===t.colorMode?"dark":"light")+" mode"},on:{click:t.toggleColorMode}})],1),t._v(" "),r("ContactForm")],1)],1)],1)}),[],!1,null,null,null);e.default=k.exports}}]);