(this["webpackJsonp@minimal/material-kit-react"]=this["webpackJsonp@minimal/material-kit-react"]||[]).push([[5],{86:function(e,t,n){"use strict";n.r(t);n(73);var a=n(39),o=n.n(a),r=n(38),c=n(51),p=n(50),i=n(21),l=n(47),x=n(59),d=n.n(x),s=n(6),u={fname:"",lname:"",number:"",img:"",email:"",add1:"",add2:"",city:"",pin:"",state:"",locality:"",hghlts:"",ent:"",id:"",user_type:"",qr_code:"",entLogo:"",vpa:"",ent_id:""},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PROFILE":var n=t.payload.data;return Object(s.a)(Object(s.a)({},e),{},{fname:n[0],lname:n[1],number:n[2],img:n[3],email:n[4],add1:n[5],add2:n[6],city:n[7],pin:n[8],state:n[9],locality:n[10],hghlts:n[11],ent:n[12],id:n[13],user_type:n[14],entLogo:n[15],ent_id:n[16],vpa:n[17]});case"DELETE_PROFILE":return{fname:"",lname:"",number:"",img:"",email:"",add1:"",add2:"",city:"",pin:"",state:"",locality:"",hghlts:"",ent:"",id:"",user_type:"",qr_code:"",entLogo:"",vpa:"",ent_id:""};case"ADD_VPA":var a=t.payload.data;return Object(s.a)(Object(s.a)({},e),{},{vpa:a});default:return e}},h={language:""},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_LANGUAGE":var n=t.payload.lang;return{language:n};default:return e}},m={prev:""},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_PREV":var n=t.payload.page;return{prev:n};default:return e}},f=Object(i.a)({profileReducer:b,languageReducer:g,navReducer:j}),O={key:"root",storage:d.a},y=Object(l.a)(O,f),F=Object(i.b)(y),v={store:F,persistor:Object(l.b)(F)},k=n(0),z=n(109),C=n(108),w=n(5),A=n(2),B=Object(k.lazy)((function(){return Promise.all([n.e(1),n.e(2),n.e(4),n.e(14),n.e(24)]).then(n.bind(null,683))})),S=Object(k.lazy)((function(){return Promise.all([n.e(20),n.e(30)]).then(n.bind(null,666))})),E=Object(k.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(12)]).then(n.bind(null,691))})),P=Object(k.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(13)]).then(n.bind(null,692))})),M=Object(k.lazy)((function(){return Promise.all([n.e(0),n.e(19),n.e(27)]).then(n.bind(null,668))})),D=Object(k.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(16)]).then(n.bind(null,693))})),W=Object(k.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(7)]).then(n.bind(null,669))})),I=Object(k.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(8)]).then(n.bind(null,670))})),T=Object(k.lazy)((function(){return Promise.all([n.e(1),n.e(23),n.e(31)]).then(n.bind(null,684))})),R=Object(k.lazy)((function(){return Promise.all([n.e(1),n.e(22),n.e(28)]).then(n.bind(null,671))})),H=Object(k.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(10)]).then(n.bind(null,672))})),L=Object(k.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(9)]).then(n.bind(null,673))})),_=Object(k.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(11)]).then(n.bind(null,682))})),G=Object(k.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(4),n.e(21),n.e(33)]).then(n.bind(null,674))})),N=Object(k.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(18)]).then(n.bind(null,675))})),q=Object(k.lazy)((function(){return Promise.all([n.e(0),n.e(29)]).then(n.bind(null,676))})),J=Object(k.lazy)((function(){return Promise.all([n.e(0),n.e(26)]).then(n.bind(null,677))})),V=Object(k.lazy)((function(){return Promise.all([n.e(0),n.e(25)]).then(n.bind(null,678))})),U=Object(k.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(4),n.e(17),n.e(32)]).then(n.bind(null,679))}));function K(){return Object(w.k)([{path:"/dashboard",element:Object(A.jsx)(B,{}),children:[{element:Object(A.jsx)(w.a,{to:"/dashboard/app",replace:!0})},{path:"app",element:Object(A.jsx)(M,{})},{path:"work",element:Object(A.jsx)(D,{})},{path:"user",element:Object(A.jsx)(W,{})},{path:"customers",element:Object(A.jsx)(I,{})},{path:"newCalls",element:Object(A.jsx)(H,{})},{path:"profile",element:Object(A.jsx)(G,{})},{path:"work/:workId",element:Object(A.jsx)(_,{})},{path:"customer/:custId",element:Object(A.jsx)(q,{})},{path:"payment",element:Object(A.jsx)(N,{})},{path:"todaysWork",element:Object(A.jsx)(J,{})},{path:"tillDaysWork",element:Object(A.jsx)(V,{})},{path:"editCalls/:workId",element:Object(A.jsx)(L,{})},{path:"payment/:workId",element:Object(A.jsx)(U,{})}]},{path:"/",element:Object(A.jsx)(S,{}),children:[{element:Object(A.jsx)(w.a,{to:"/login",replace:!0})},{path:"login",element:Object(A.jsx)(E,{})},{path:"register",element:Object(A.jsx)(P,{})},{path:"404",element:Object(A.jsx)(T,{})},{path:"sessionExpired",element:Object(A.jsx)(R,{})},{path:"/",element:Object(A.jsx)(E,{})},{path:"*",element:Object(A.jsx)(w.a,{to:"/404"})}]},{path:"*",element:Object(A.jsx)(w.a,{to:"/404",replace:!0})}])}var Q=n(102),X=n(65),Y=n(101),Z=n(107),$={borderRadius:8,borderRadiusSm:12,borderRadiusMd:16},ee=n(100);function te(e,t){return"linear-gradient(to bottom, ".concat(e,", ").concat(t,")")}var ne={0:"#FFFFFF",100:"#F9FAFB",200:"#F4F6F8",300:"#DFE3E8",400:"#C4CDD5",500:"#919EAB",600:"#637381",700:"#454F5B",800:"#212B36",900:"#161C24",5008:Object(ee.a)("#919EAB",.08),50012:Object(ee.a)("#919EAB",.12),50016:Object(ee.a)("#919EAB",.16),50024:Object(ee.a)("#919EAB",.24),50032:Object(ee.a)("#919EAB",.32),50048:Object(ee.a)("#919EAB",.48),50056:Object(ee.a)("#919EAB",.56),50080:Object(ee.a)("#919EAB",.8)},ae={lighter:"#D6E4FF",light:"#84A9FF",main:"#3366FF",dark:"#1939B7",darker:"#091A7A",contrastText:"#fff"},oe={lighter:"#D0F2FF",light:"#74CAFF",main:"#1890FF",dark:"#0C53B7",darker:"#04297A",contrastText:"#fff"},re={lighter:"#E9FCD4",light:"#AAF27F",main:"#54D62C",dark:"#229A16",darker:"#08660D",contrastText:ne[800]},ce={lighter:"#FFF7CD",light:"#FFE16A",main:"#FFC107",dark:"#B78103",darker:"#7A4F01",contrastText:ne[800]},pe={lighter:"#FFE7D9",light:"#FFA48D",main:"#FF4842",dark:"#B72136",darker:"#7A0C2E",contrastText:"#fff"},ie={primary:te(ae.light,ae.main),info:te(oe.light,oe.main),success:te(re.light,re.main),warning:te(ce.light,ce.main),error:te(pe.light,pe.main)},le={common:{black:"#000",white:"#fff"},primary:Object(s.a)({},ae),secondary:Object(s.a)({},{lighter:"#C8FACD",light:"#5BE584",main:"#00AB55",dark:"#007B55",darker:"#005249",contrastText:"#fff"}),info:Object(s.a)({},oe),success:Object(s.a)({},re),warning:Object(s.a)({},ce),error:Object(s.a)({},pe),grey:ne,gradients:ie,chart:{violet:["#826AF9","#9E86FF","#D0AEFF","#F7D2FF"],blue:["#2D99FF","#83CFFF","#A5F3FF","#CCFAFF"],green:["#2CD9C5","#60F1C8","#A4F7CC","#C0F2DC"],yellow:["#FFE700","#FFEF5A","#FFF7AE","#FFF3D6"],red:["#FF6C40","#FF8F6D","#FFBD98","#FFF2D4"]},divider:ne[50024],text:{primary:ne[800],secondary:ne[600],disabled:ne[500]},background:{paper:"#fff",default:"#fff",neutral:ne[200]},action:{active:ne[600],hover:ne[5008],selected:ne[50016],disabled:ne[50080],disabledBackground:ne[50024],focus:ne[50024],hoverOpacity:.08,disabledOpacity:.48}};function xe(e){return"".concat(e/16,"rem")}function de(e){var t=e.sm,n=e.md,a=e.lg;return{"@media (min-width:600px)":{fontSize:xe(t)},"@media (min-width:900px)":{fontSize:xe(n)},"@media (min-width:1200px)":{fontSize:xe(a)}}}var se={fontFamily:"Public Sans, sans-serif",fontWeightRegular:400,fontWeightMedium:600,fontWeightBold:700,h1:Object(s.a)({fontWeight:700,lineHeight:1.25,fontSize:xe(40)},de({sm:52,md:58,lg:64})),h2:Object(s.a)({fontWeight:700,lineHeight:64/48,fontSize:xe(32)},de({sm:40,md:44,lg:48})),h3:Object(s.a)({fontWeight:700,lineHeight:1.5,fontSize:xe(24)},de({sm:26,md:30,lg:32})),h4:Object(s.a)({fontWeight:700,lineHeight:1.5,fontSize:xe(20)},de({sm:20,md:24,lg:24})),h5:Object(s.a)({fontWeight:700,lineHeight:1.5,fontSize:xe(18)},de({sm:19,md:20,lg:20})),h6:Object(s.a)({fontWeight:700,lineHeight:28/18,fontSize:xe(17)},de({sm:18,md:18,lg:18})),subtitle1:{fontWeight:600,lineHeight:1.5,fontSize:xe(16)},subtitle2:{fontWeight:600,lineHeight:22/14,fontSize:xe(14)},body1:{lineHeight:1.5,fontSize:xe(16)},body2:{lineHeight:22/14,fontSize:xe(14)},caption:{lineHeight:1.5,fontSize:xe(12)},overline:{fontWeight:700,lineHeight:1.5,fontSize:xe(12),letterSpacing:1.1,textTransform:"uppercase"},button:{fontWeight:700,lineHeight:24/14,fontSize:xe(14),textTransform:"capitalize"}},ue=n(55);function be(e){return Object(ue.merge)(function(e){return{MuiCard:{styleOverrides:{root:{boxShadow:e.customShadows.z16,borderRadius:e.shape.borderRadiusMd,position:"relative",zIndex:0}}},MuiCardHeader:{defaultProps:{titleTypographyProps:{variant:"h6"},subheaderTypographyProps:{variant:"body2"}},styleOverrides:{root:{padding:e.spacing(3,3,0)}}},MuiCardContent:{styleOverrides:{root:{padding:e.spacing(3)}}}}}(e),function(e){return{MuiListItemIcon:{styleOverrides:{root:{color:"inherit",minWidth:"auto",marginRight:e.spacing(2)}}},MuiListItemAvatar:{styleOverrides:{root:{minWidth:"auto",marginRight:e.spacing(2)}}},MuiListItemText:{styleOverrides:{root:{marginTop:0,marginBottom:0},multiline:{marginTop:0,marginBottom:0}}}}}(e),{MuiPaper:{defaultProps:{elevation:0},styleOverrides:{root:{backgroundImage:"none"}}}},function(e){return{MuiInputBase:{styleOverrides:{root:{"&.Mui-disabled":{"& svg":{color:e.palette.text.disabled}}},input:{"&::placeholder":{opacity:1,color:e.palette.text.disabled}}}},MuiInput:{styleOverrides:{underline:{"&:before":{borderBottomColor:e.palette.grey[50056]}}}},MuiFilledInput:{styleOverrides:{root:{backgroundColor:e.palette.grey[50012],"&:hover":{backgroundColor:e.palette.grey[50016]},"&.Mui-focused":{backgroundColor:e.palette.action.focus},"&.Mui-disabled":{backgroundColor:e.palette.action.disabledBackground}},underline:{"&:before":{borderBottomColor:e.palette.grey[50056]}}}},MuiOutlinedInput:{styleOverrides:{root:{"& .MuiOutlinedInput-notchedOutline":{borderColor:e.palette.common.black},"&.Mui-disabled":{"& .MuiOutlinedInput-notchedOutline":{borderColor:e.palette.action.disabledBackground}}}}}}}(e),function(e){return{MuiButton:{styleOverrides:{root:{"&:hover":{boxShadow:"none"}},sizeLarge:{height:48},containedInherit:{color:e.palette.grey[800],boxShadow:e.customShadows.z8,"&:hover":{backgroundColor:e.palette.grey[400]}},containedPrimary:{boxShadow:e.customShadows.primary},containedSecondary:{boxShadow:e.customShadows.secondary},outlinedInherit:{border:"1px solid ".concat(e.palette.grey[50032]),"&:hover":{backgroundColor:e.palette.action.hover}},textInherit:{"&:hover":{backgroundColor:e.palette.action.hover}}}}}}(e),function(e){return{MuiTooltip:{styleOverrides:{tooltip:{backgroundColor:e.palette.grey[800]},arrow:{color:e.palette.grey[800]}}}}}(e),function(e){var t=Object(ee.a)(e.palette.grey[900],.48),n=Object(ee.a)(e.palette.grey[900],1);return{MuiBackdrop:{styleOverrides:{root:{background:["rgb(22,28,36)","-moz-linear-gradient(75deg, ".concat(t," 0%, ").concat(n," 100%)"),"-webkit-linear-gradient(75deg, ".concat(t," 0%, ").concat(n," 100%)"),"linear-gradient(75deg, ".concat(t," 0%, ").concat(n," 100%)")],"&.MuiBackdrop-invisible":{background:"transparent"}}}}}}(e),function(e){return{MuiTypography:{styleOverrides:{paragraph:{marginBottom:e.spacing(2)},gutterBottom:{marginBottom:e.spacing(1)}}}}}(e),function(e){return{MuiIconButton:{variants:[{props:{color:"default"},style:{"&:hover":{backgroundColor:e.palette.action.hover}}},{props:{color:"inherit"},style:{"&:hover":{backgroundColor:e.palette.action.hover}}}],styleOverrides:{root:{}}}}}(e),function(e){return{MuiAutocomplete:{styleOverrides:{paper:{boxShadow:e.customShadows.z20}}}}}(e))}var he=le.grey[500],ge=function(e){var t=Object(ee.a)(e,.24);return{z1:"0 1px 2px 0 ".concat(t),z8:"0 8px 16px 0 ".concat(t),z12:"0 0 2px 0 ".concat(t,", 0 12px 24px 0 ").concat(t),z16:"0 0 2px 0 ".concat(t,", 0 16px 32px -4px ").concat(t),z20:"0 0 2px 0 ".concat(t,", 0 20px 40px -4px ").concat(t),z24:"0 0 4px 0 ".concat(t,", 0 24px 48px 0 ").concat(t),primary:"0 8px 16px 0 ".concat(Object(ee.a)(le.primary.main,.24)),secondary:"0 8px 16px 0 ".concat(Object(ee.a)(le.secondary.main,.24)),info:"0 8px 16px 0 ".concat(Object(ee.a)(le.info.main,.24)),success:"0 8px 16px 0 ".concat(Object(ee.a)(le.success.main,.24)),warning:"0 8px 16px 0 ".concat(Object(ee.a)(le.warning.main,.24)),error:"0 8px 16px 0 ".concat(Object(ee.a)(le.error.main,.24))}}(he),me=function(e){var t=Object(ee.a)(e,.2),n=Object(ee.a)(e,.14),a=Object(ee.a)(e,.12);return["none","0px 2px 1px -1px ".concat(t,",0px 1px 1px 0px ").concat(n,",0px 1px 3px 0px ").concat(a),"0px 3px 1px -2px ".concat(t,",0px 2px 2px 0px ").concat(n,",0px 1px 5px 0px ").concat(a),"0px 3px 3px -2px ".concat(t,",0px 3px 4px 0px ").concat(n,",0px 1px 8px 0px ").concat(a),"0px 2px 4px -1px ".concat(t,",0px 4px 5px 0px ").concat(n,",0px 1px 10px 0px ").concat(a),"0px 3px 5px -1px ".concat(t,",0px 5px 8px 0px ").concat(n,",0px 1px 14px 0px ").concat(a),"0px 3px 5px -1px ".concat(t,",0px 6px 10px 0px ").concat(n,",0px 1px 18px 0px ").concat(a),"0px 4px 5px -2px ".concat(t,",0px 7px 10px 1px ").concat(n,",0px 2px 16px 1px ").concat(a),"0px 5px 5px -3px ".concat(t,",0px 8px 10px 1px ").concat(n,",0px 3px 14px 2px ").concat(a),"0px 5px 6px -3px ".concat(t,",0px 9px 12px 1px ").concat(n,",0px 3px 16px 2px ").concat(a),"0px 6px 6px -3px ".concat(t,",0px 10px 14px 1px ").concat(n,",0px 4px 18px 3px ").concat(a),"0px 6px 7px -4px ".concat(t,",0px 11px 15px 1px ").concat(n,",0px 4px 20px 3px ").concat(a),"0px 7px 8px -4px ".concat(t,",0px 12px 17px 2px ").concat(n,",0px 5px 22px 4px ").concat(a),"0px 7px 8px -4px ".concat(t,",0px 13px 19px 2px ").concat(n,",0px 5px 24px 4px ").concat(a),"0px 7px 9px -4px ".concat(t,",0px 14px 21px 2px ").concat(n,",0px 5px 26px 4px ").concat(a),"0px 8px 9px -5px ".concat(t,",0px 15px 22px 2px ").concat(n,",0px 6px 28px 5px ").concat(a),"0px 8px 10px -5px ".concat(t,",0px 16px 24px 2px ").concat(n,",0px 6px 30px 5px ").concat(a),"0px 8px 11px -5px ".concat(t,",0px 17px 26px 2px ").concat(n,",0px 6px 32px 5px ").concat(a),"0px 9px 11px -5px ".concat(t,",0px 18px 28px 2px ").concat(n,",0px 7px 34px 6px ").concat(a),"0px 9px 12px -6px ".concat(t,",0px 19px 29px 2px ").concat(n,",0px 7px 36px 6px ").concat(a),"0px 10px 13px -6px ".concat(t,",0px 20px 31px 3px ").concat(n,",0px 8px 38px 7px ").concat(a),"0px 10px 13px -6px ".concat(t,",0px 21px 33px 3px ").concat(n,",0px 8px 40px 7px ").concat(a),"0px 10px 14px -6px ".concat(t,",0px 22px 35px 3px ").concat(n,",0px 8px 42px 7px ").concat(a),"0px 11px 14px -7px ".concat(t,",0px 23px 36px 3px ").concat(n,",0px 9px 44px 8px ").concat(a),"0px 11px 15px -7px ".concat(t,",0px 24px 38px 3px ").concat(n,",0px 9px 46px 8px ").concat(a)]}(he);function je(e){var t=e.children,n=Object(k.useMemo)((function(){return{palette:le,shape:$,typography:se,shadows:me,customShadows:ge}}),[]),a=Object(X.a)(n);return a.components=be(a),Object(A.jsx)(Y.a,{injectFirst:!0,children:Object(A.jsxs)(Z.a,{theme:a,children:[Object(A.jsx)(Q.a,{}),t]})})}var fe=n(92),Oe=n(88);function ye(){var e=Object(fe.a)();return Object(A.jsx)(Oe.a,{styles:{"*":{margin:0,padding:0,boxSizing:"border-box"},html:{width:"100%",height:"100%",WebkitOverflowScrolling:"touch"},body:{width:"100%",height:"100%"},"#root":{width:"100%",height:"100%"},input:{"&[type=number]":{MozAppearance:"textfield","&::-webkit-outer-spin-button":{margin:0,WebkitAppearance:"none"},"&::-webkit-inner-spin-button":{margin:0,WebkitAppearance:"none"}}},textarea:{"&::-webkit-input-placeholder":{color:e.palette.text.disabled},"&::-moz-placeholder":{opacity:1,color:e.palette.text.disabled},"&:-ms-input-placeholder":{color:e.palette.text.disabled},"&::placeholder":{color:e.palette.text.disabled}},img:{display:"block",maxWidth:"100%"},".blur-up":{WebkitFilter:"blur(5px)",filter:"blur(5px)",transition:"filter 400ms, -webkit-filter 400ms"},".blur-up.lazyloaded ":{WebkitFilter:"blur(0)",filter:"blur(0)"}}})}function Fe(){var e=Object(w.g)().pathname;return Object(k.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}function ve(){var e=Object(fe.a)(),t={backdropFilter:"blur(6px)",WebkitBackdropFilter:"blur(6px)",backgroundColor:Object(ee.a)(e.palette.background.default,.72)};return Object(A.jsx)(Oe.a,{styles:{"&.apexcharts-canvas":{".apexcharts-xaxistooltip":Object(s.a)(Object(s.a)({},t),{},{border:0,boxShadow:e.customShadows.z24,color:e.palette.text.primary,borderRadius:e.shape.borderRadiusSm,"&:before":{borderBottomColor:"transparent"},"&:after":{borderBottomColor:Object(ee.a)(e.palette.background.default,.72)}}),".apexcharts-tooltip.apexcharts-theme-light":Object(s.a)(Object(s.a)({},t),{},{border:0,boxShadow:e.customShadows.z24,borderRadius:e.shape.borderRadiusSm,"& .apexcharts-tooltip-title":{border:0,textAlign:"center",fontWeight:e.typography.fontWeightBold,backgroundColor:e.palette.grey[50016],color:e.palette.text["light"===e.palette.mode?"secondary":"primary"]}}),".apexcharts-legend":{padding:0},".apexcharts-legend-series":{display:"flex !important",alignItems:"center"},".apexcharts-legend-marker":{marginRight:8},".apexcharts-legend-text":{lineHeight:"18px",textTransform:"capitalize"}}}})}function ke(){return Object(A.jsxs)(je,{children:[Object(A.jsx)(Fe,{}),Object(A.jsx)(ye,{}),Object(A.jsx)(ve,{}),Object(A.jsx)(k.Suspense,{fallback:Object(A.jsx)(C.a,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},children:Object(A.jsx)(z.a,{})}),children:Object(A.jsx)(K,{})})]})}var ze=function(e){e&&e instanceof Function&&n.e(34).then(n.bind(null,680)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),o(e),r(e),c(e)}))};o.a.render(Object(A.jsx)(c.b,{children:Object(A.jsx)(r.a,{children:Object(A.jsx)(p.a,{store:v.store,children:Object(A.jsx)(ke,{})})})}),document.getElementById("root")),ze()}},[[86,6,15]]]);
//# sourceMappingURL=main.6eda8aa2.chunk.js.map