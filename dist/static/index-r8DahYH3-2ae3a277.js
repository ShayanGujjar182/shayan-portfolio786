import{u as j,r as c,b as h,j as n,P as v,c as _,e as B,f as I,g as b,B as E,h as H,A as k,i as y,k as C}from"./sanity-8072f709.js";function g(e){const{actionHandlers:t,index:s,menuItems:a,menuItemGroups:r,title:i}=e,{features:o}=B();return!(a!=null&&a.length)&&!i?null:n.jsx(I,{actions:n.jsx(b,{menuItems:a,menuItemGroups:r,actionHandlers:t}),backButton:o.backButton&&s>0&&n.jsx(E,{as:H,"data-as":"a",icon:k,mode:"bleed",tooltipProps:{content:"Back"}}),title:i})}var u=Object.freeze,w=Object.defineProperty,A=(e,t)=>u(w(e,"raw",{value:u(t||e.slice())})),d;const R=j(C)(d||(d=A([`
  position: relative;
`])));function S(e){const{children:t}=e,{collapsed:s}=y();return n.jsx(R,{hidden:s,height:"fill",overflow:"auto",children:t})}function z(e){const{index:t,pane:s,paneKey:a,...r}=e,{child:i,component:o,menuItems:p,menuItemGroups:m,type:T,...f}=s,[l,x]=c.useState(null),{title:P=""}=h(s);return n.jsxs(v,{id:a,minWidth:320,selected:r.isSelected,children:[n.jsx(g,{actionHandlers:l==null?void 0:l.actionHandlers,index:t,menuItems:p,menuItemGroups:m,title:P}),n.jsxs(S,{children:[_.isValidElementType(o)&&c.createElement(o,{...r,...f,ref:x,child:i,paneKey:a}),c.isValidElement(o)&&o]})]})}export{z as default};
