(this["webpackJsonp@minimal/material-kit-react"]=this["webpackJsonp@minimal/material-kit-react"]||[]).push([[27],{143:function(t,e,a){"use strict";var n=a(6),r=a(150),c=a(4),i=a.n(c),o=a(51),l=a(0),s=a(108),d=a(2),u=["children","title"],m=Object(l.forwardRef)((function(t,e){var a=t.children,c=t.title,i=void 0===c?"":c,l=Object(r.a)(t,u);return Object(d.jsxs)(s.a,Object(n.a)(Object(n.a)({ref:e},l),{},{children:[Object(d.jsx)(o.a,{children:Object(d.jsx)("title",{children:i})}),a]}))}));m.propTypes={children:i.a.node.isRequired,title:i.a.string},e.a=m},419:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"d",(function(){return r})),a.d(e,"c",(function(){return c})),a.d(e,"b",(function(){return i}));var n=function(t){return{type:"ADD_PROFILE",payload:{data:t}}},r=function(){return{type:"DELETE_PROFILE"}},c=function(t){return{type:"CHANGE_PREV",payload:{page:t}}},i=function(t){return{type:"ADD_VPA",payload:{data:t}}}},668:function(t,e,a){"use strict";a.r(e),function(t){var n=a(17),r=a(36),c=a(0),i=a(378),o=a(5),l=a(425),s=a(583),d=a(108),u=a(504),m=a(379),g=a(415),h=a(568),j=a(50),f=a(419),b=a(143),p=a(2),O=a(212),x=Object(r.a)(l.a)((function(t){return{justifyContent:"center",padding:t.theme.spacing(4,4)}}));e.default=function(){var e=Object(o.h)(),a=Object(i.a)(""),r=Object(n.a)(a,2),l=r[0],_=(r[1],Object(j.c)((function(t){return t.profileReducer}))),y=Object(j.b)();return Object(c.useEffect)((function(){console.log("data",localStorage.getItem("number")),O.get("/users/getData",{params:{number:localStorage.getItem("number")}}).then((function(a){if(console.log("data",a.data),Object.keys(l).length){var n=null;a.data[0].photo&&a.data[0].photo.data&&(n=t.from(a.data[0].photo.data));var r=null;a.data[0].ent_logo&&a.data[0].ent_logo.data&&(r=t.from(a.data[0].ent_logo.data)),console.log("img data",r?r.toString("utf8"):"no logo"),y(Object(f.a)([a.data[0].first_name,a.data[0].last_name,localStorage.getItem("number"),n?n.toString("utf8"):null,a.data[0].email,a.data[0].address1,a.data[0].address2,a.data[0].city,a.data[0].pin,a.data[0].state,a.data[0].locality_of_work,a.data[0].highlights,a.data[0].enterprise,a.data[0].user_mast_id,a.data[0].user_type,r?r.toString("utf8"):null,a.data[0].ent_id,a.data[0].vpa]));var c="".concat(a.data[0].first_name," ").concat(a.data[0].last_name),i=JSON.stringify({number:localStorage.getItem("number"),name:c,image:n?n.toString("utf8"):null});console.log(i),localStorage.setItem("prev_user",i)}else e("/sessionExpired")})).then((function(){setTimeout((function(){console.log("Welcome!"),e("/dashboard/work")}),2e3)})).catch((function(t){console.log("err",t)}))}),[localStorage.getItem("number")]),Object(p.jsx)(b.a,{title:"Dashboard",children:Object(p.jsxs)(s.a,{maxWidth:"xl",children:[Object(p.jsx)(d.a,{sx:{pb:5},children:Object(p.jsx)(u.a,{variant:"h4",children:"Hi, Welcome Back"})}),Object(p.jsxs)(m.a,{container:!0,spacing:3,children:[Object(p.jsx)(m.a,{item:!0,xs:12,sm:6,md:3,align:"center",children:Object(p.jsx)(x,{children:_.img?Object(p.jsx)(g.a,{src:_.img,sx:{width:150,height:150,alignSelf:"center"},alt:"photoURL"}):Object(p.jsx)(g.a,{sx:{width:150,height:150,alignSelf:"center"},alt:"photoURL"})})}),Object(p.jsx)(m.a,{item:!0,xs:12,sm:6,md:6,children:Object(p.jsxs)(h.a,{sx:{justifyContent:"center",alignItems:"center",marginTop:5},spacing:2,children:[Object(p.jsxs)(u.a,{variant:"h4",children:[_.fname," ",_.lname]}),Object(p.jsx)(u.a,{variant:"h4",children:_.number})]})})]})]})})}}.call(this,a(627).Buffer)}}]);
//# sourceMappingURL=27.5d7ec16d.chunk.js.map