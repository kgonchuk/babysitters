"use strict";(self.webpackChunkbabysitters=self.webpackChunkbabysitters||[]).push([[235],{7159:(n,e,r)=>{r.r(e),r.d(e,{default:()=>w});var t,a,o=r(9954),i=r(6489),s=r(5043),c=r(5520),l=r(7591),d=r(5317),p=r(7528),u=r(197),x=r(8114);const g=u.Ay.div(t||(t=(0,p.A)(["\n  padding: 0 20px;\n  @media screen and (min-width: 768px) {\n    padding: 0 45px;\n  }\n  @media screen and (min-width: 1440px) {\n    padding: 0 128px;\n  }\n"]))),h=u.Ay.button(a||(a=(0,p.A)(["\n  box-sizing: border-box;\n  padding: 14px 40px;\n  font-size: 16px;\n  margin-top: 64px;\n  letter-spacing: -0.01em;\n  text-decoration: none;\n  border-radius: 30px;\n  display: flex;\n  flex-wrap: nowrap;\n  height: 48px;\n  width: 159px;\n  align-items: center;\n  background-color: ",";\n  transition: box-shadow 0.3s ease;\n  color: ",";\n  cursor: pointer;\n  margin: 0 auto;\n  &:hover {\n    background-color: ",";\n  }\n"])),x.$.background.main,x.$.background.white,x.$.background.secondaryMain);var m=r(579);const f=n=>{let{filterOption:e}=n;const[r,t]=(0,s.useState)([]),[a,o]=(0,s.useState)(1);(0,s.useEffect)((()=>{const n=(0,l.hg)(d.j,(n=>{n&&(async()=>{try{var n;const e=null===(n=d.j.currentUser)||void 0===n?void 0:n.uid;if(e){const n=await JSON.parse(localStorage.getItem("favorites-".concat(e)))||[];t(n),console.log(n)}}catch(e){console.error("Error reading from localStorage:",e)}})()}));return()=>n()}),[]);const i=((n,e)=>{switch(e){case"A to Z":return n.slice().sort(((n,e)=>n.name.localeCompare(e.name)));case"Z to A":return n.sort(((n,e)=>e.name.localeCompare(n.name)));case"Less than 10$":return n.filter((n=>n.price_per_hour<10));case"Greater than 10$":return n.filter((n=>n.price_per_hour>10));case"Popular":return n.filter((n=>n.rating>4));case"Non popular":return n.filter((n=>n.rating<=4));default:return n}})(r,e);return(0,m.jsx)(g,{children:0===i.length?(0,m.jsx)("div",{children:(0,m.jsx)("p",{children:"No favorites yet. You can choose it in catalog."})}):(0,m.jsxs)("div",{children:[i.slice(0,3*a).map(((n,e)=>(0,m.jsx)(c.A,{nanny:n},e))),i.length>3*a&&(0,m.jsx)(h,{onClick:()=>{const n=i.length-3*a,e=Math.min(3,n);o((n=>n+e))},children:"Load more"})]})})};var b;u.Ay.div(b||(b=(0,p.A)(["\n  margin: 0 auto;\n  box-sizing: border-box;\n  max-width: 1440px;\n  padding-left: 128px;\n  padding-bottom: 140px;\n  display: flex;\n  flex-wrap: wrap;\n"])));const w=()=>{const[n,e]=(0,s.useState)("Show all");return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(i.A,{BGColor:!0}),(0,m.jsx)(o.A,{onFilterChange:n=>{e(n)}}),(0,m.jsx)(f,{filterOprion:n})]})}}}]);
//# sourceMappingURL=235.e21f3bd7.chunk.js.map