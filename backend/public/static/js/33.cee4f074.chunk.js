(this["webpackJsonp@minimal/material-kit-react"]=this["webpackJsonp@minimal/material-kit-react"]||[]).push([[33],{143:function(e,t,n){"use strict";var i=n(6),c=n(150),a=n(4),s=n.n(a),r=n(51),j=n(0),l=n(108),d=n(2),h=["children","title"],b=Object(j.forwardRef)((function(e,t){var n=e.children,a=e.title,s=void 0===a?"":a,j=Object(c.a)(e,h);return Object(d.jsxs)(l.a,Object(i.a)(Object(i.a)({ref:t},j),{},{children:[Object(d.jsx)(r.a,{children:Object(d.jsx)("title",{children:s})}),n]}))}));b.propTypes={children:s.a.node.isRequired,title:s.a.string},t.a=b},674:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return w}));var i=n(17),c=n(0),a=n(5),s=n(38),r=n(169),j=n(583),l=n(568),d=n(504),h=n(416),b=n(379),o=n(415),O=n(424),x=n(108),u=n(50),p=n(631),f=n.n(p),g=n(143),m=n(2),v=n(212);function w(){var e=Object(u.c)((function(e){return e.profileReducer})),t=Object(c.useState)([]),n=Object(i.a)(t,2),p=n[0],w=n[1],y=Object(a.h)();return Object(c.useEffect)((function(){v.post("/users/getUserServices",{id:e.id}).then((function(e){console.log("result",e),w(e.data)})).catch((function(e){console.log("Error",e)}))}),[]),Object(m.jsx)(g.a,{title:"Profile",children:Object(m.jsxs)(j.a,{maxWidth:"xl",children:[Object(m.jsxs)(l.a,{direction:"row",justifyContent:"space-between",children:[Object(m.jsx)(d.a,{variant:"h4",children:"My Profile"}),Object(m.jsx)(h.a,{onClick:function(){y("/register")},size:"large",children:Object(m.jsx)(r.a,{icon:f.a})})]}),Object(m.jsxs)(b.a,{container:!0,spacing:3,children:[Object(m.jsx)(b.a,{item:!0,xs:12,sm:6,md:12,align:"center",children:Object(m.jsxs)(l.a,{spacing:2,children:[e.img?Object(m.jsx)(o.a,{src:e.img,sx:{width:150,height:150,alignSelf:"center"},alt:"photoURL"}):Object(m.jsx)(o.a,{sx:{width:150,height:150,alignSelf:"center"},alt:"photoURL"}),Object(m.jsxs)(d.a,{variant:"h6",children:[e.fname," ",e.lname]})]})}),Object(m.jsx)(b.a,{item:!0,xs:12,sm:6,md:12,alignItems:"center",children:Object(m.jsxs)(l.a,{spacing:2,children:[Object(m.jsx)("hr",{}),Object(m.jsxs)(l.a,{direction:"row",justifyContent:"space-between",spacing:2,children:[Object(m.jsx)(d.a,{variant:"h6",children:"Address 1: "}),Object(m.jsxs)(d.a,{variant:"subtitle2",children:[e.add1," "]})]}),Object(m.jsxs)(l.a,{direction:"row",justifyContent:"space-between",spacing:2,children:[Object(m.jsx)(d.a,{variant:"h6",children:"Address 2: "}),Object(m.jsxs)(d.a,{variant:"subtitle2",children:[e.add2," "]})]}),Object(m.jsxs)(l.a,{direction:"row",justifyContent:"space-between",spacing:2,children:[Object(m.jsx)(d.a,{variant:"h6",children:"Phone number: "}),Object(m.jsxs)(d.a,{variant:"subtitle2",children:[e.number," "]})]}),Object(m.jsxs)(l.a,{direction:"row",justifyContent:"space-between",spacing:2,children:[Object(m.jsx)(d.a,{variant:"h6",children:"Email: "}),Object(m.jsxs)(d.a,{variant:"subtitle2",children:[e.email," "]})]}),Object(m.jsxs)(l.a,{direction:"row",justifyContent:"space-between",spacing:2,children:[Object(m.jsx)(d.a,{variant:"h6",children:"Enterprise: "}),Object(m.jsxs)(d.a,{variant:"subtitle2",children:[e.ent," "]})]}),Object(m.jsx)("hr",{}),Object(m.jsxs)(l.a,{direction:"row",justifyContent:"space-between",spacing:2,children:[Object(m.jsx)(d.a,{variant:"h6",children:"Payment Profile"}),Object(m.jsx)(O.a,{component:s.b,to:"/dashboard/payment",children:Object(m.jsx)(d.a,{variant:"h6",children:"QR Code"})})]}),Object(m.jsx)("hr",{}),Object(m.jsx)(x.a,{children:Object(m.jsx)(d.a,{variant:"h6",children:"Our Services"})}),Object(m.jsx)(l.a,{direction:"row",justifyContent:"space-between",spacing:2,children:p.map((function(e){return Object(m.jsx)(l.a,{spacing:1,children:Object(m.jsx)(d.a,{alignSelf:"center",variant:"subtitle2",children:e.serv_name})},e.serv_id)}))}),Object(m.jsx)("hr",{}),Object(m.jsxs)(l.a,{direction:"row",justifyContent:"space-between",spacing:2,children:[Object(m.jsx)(d.a,{variant:"h6",children:"Highlights: "}),Object(m.jsxs)(d.a,{variant:"subtitle2",children:[e.hghlts," "]})]})]})})]})]})})}}}]);
//# sourceMappingURL=33.cee4f074.chunk.js.map