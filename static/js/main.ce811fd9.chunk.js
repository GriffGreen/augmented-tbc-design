(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{223:function(e,t,a){e.exports=a(419)},412:function(e,t,a){},419:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(13),o=a.n(i),c=a(461),l=a(460),s=a(65),m=a.n(s),u=a(116),p=a(18),d=a(420),f=a(467),h=a(459),g=a(421),x=a(463),b=a(458),v=a(457),E=a(465),y=a(456),k="https://medium.com/block-science/cadcad-filling-a-critical-gap-in-open-source-data-science-fcd0d3faa8ed",j=Object(d.a)(function(e){return Object(f.a)({title:{},subtitle:{color:e.palette.text.secondary,margin:e.spacing(3,0,0)},subsubtitle:{color:e.palette.text.secondary,opacity:.6},lightBulb:{verticalAlign:"middle",marginRight:e.spacing(1)},link:{color:e.palette.primary.main},logoContainer:{display:"flex",alignItems:"center",justifyContent:"center",marginBottom:e.spacing(4)},logo:{width:"25px",marginRight:"4px"},logoText:{display:"inline",fontSize:"1.1rem",fontWeight:500}})});function O(){var e=j();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:e.logoContainer},r.a.createElement("img",{src:"./favicon.ico",className:e.logo,alt:"logo"}),r.a.createElement(g.a,{className:e.logoText},"Commons Stack")),r.a.createElement(g.a,{className:e.title,variant:"h4"},"Augmented Token Bonding Curve Design"),r.a.createElement(g.a,{className:e.subtitle},"Experiment and test augmented token bonding curves"),r.a.createElement(g.a,{className:e.subsubtitle},"A narrative showcase of ",r.a.createElement(y.a,{href:k},"cadCAD"),"'s capabilities"))}var w=a(191),N=a(7),C=a(466),S=a(462),A=a(174),B=a.n(A),M=Object(N.a)({root:{height:8},thumb:{height:24,width:24,backgroundColor:"#fff",border:"2px solid currentColor",marginTop:-8,marginLeft:-12,"&:focus,&:hover,&$active":{boxShadow:"inherit"}},active:{},valueLabel:{left:"calc(-50% + 4px)"},track:{height:8,borderRadius:4},rail:{height:8,borderRadius:4},markLabel:{top:30}})(C.a),F=Object(d.a)(function(e){return Object(f.a)({root:{margin:e.spacing(6,0,3)},lightBulb:{verticalAlign:"middle",marginRight:e.spacing(1)},leftContainer:{color:e.palette.text.secondary},centerContainer:{},listBoxContainer:{"& > div:not(:last-child)":{paddingBottom:"12px",marginBottom:"12px",borderBottom:"1px solid #313d47"}},listBox:{"& > div":{display:"flex",alignItems:"center","& p":{marginBottom:0}},"& > div:not(:last-child)":{paddingRight:"12px"}},slider:{color:e.palette.primary.main}})});function R(e){var t=e.inputRef,a=e.onChange,n=e.prefix,i=e.suffix,o=Object(w.a)(e,["inputRef","onChange","prefix","suffix"]);return r.a.createElement(B.a,Object.assign({},o,{getInputRef:t,onValueChange:function(e){a({target:{value:e.value}})},thousandSeparator:!0,prefix:n,suffix:i}))}function I(e){e.curveParams;var t=e.setCurveParams,a=Object(n.useState)(1e6),i=Object(p.a)(a,2),o=i[0],c=i[1],l=Object(n.useState)(.35),s=Object(p.a)(l,2),m=s[0],u=s[1],d=Object(n.useState)(.1),f=Object(p.a)(d,2),h=f[0],x=f[1],b=Object(n.useState)(.3),E=Object(p.a)(b,2),y=E[0],k=E[1],j=Object(n.useState)(.05),O=Object(p.a)(j,2),w=O[0],N=O[1];function C(){t({d0:o,theta:m,p0:h,p1:y,wFee:w})}var A=[{label:"Initial raise",value:o,setter:c,min:1e5,max:1e7,step:1e5,unit:"$M",prefix:"$",suffix:"M",format:function(e){return"$".concat(+(1e-6*e).toFixed(1),"M")},toText:function(e){return String(+(1e-6*e).toFixed(1))},toNum:function(e){return Math.floor(1e6*parseFloat(e))}},{label:"Allocation to project",value:m,setter:u,min:0,max:.9,step:.01,unit:"%",suffix:"%",format:function(e){return"".concat(Math.round(100*e),"%")},toText:function(e){return String(+(100*e).toFixed(0))},toNum:function(e){return.01*parseFloat(e)}},{label:"Hatch sale price",value:h,setter:x,min:.01,max:1,step:.01,unit:"$",prefix:"$",toText:function(e){return String(+e.toFixed(2))},toNum:function(e){return parseFloat(e)},format:function(e){return"$".concat(e)}},{label:"After hatch price",value:y,setter:k,min:h||.1,max:Number((10*h).toFixed(2)),step:.01,unit:"$",prefix:"$",toText:function(e){return String(+e.toFixed(2))},toNum:function(e){return parseFloat(e)},format:function(e){return"$".concat(e)}},{label:"Withdrawl fee",value:w,setter:N,min:0,max:.1,step:.001,unit:"%",suffix:"%",format:function(e){return"".concat(+(100*e).toFixed(1),"%")},toText:function(e){return String(+(100*e).toFixed(1))},toNum:function(e){return.01*parseFloat(e)}}];Object(n.useEffect)(function(){y<h?k(h):y>10*h&&k(10*h)},[h]);var B=F();return r.a.createElement("div",{className:B.listBoxContainer},A.map(function(e){var t=e.label,a=e.value,n=e.setter,i=e.min,o=e.max,c=e.step,l=e.prefix,s=e.suffix,m=e.format,u=e.toText,p=e.toNum;function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;isNaN(e)&&(e=0),e>o?e=o:e<i&&(e=i),n(e)}return r.a.createElement(v.a,{key:t,container:!0,spacing:0,className:B.listBox},r.a.createElement(v.a,{item:!0,xs:6,className:B.leftContainer},r.a.createElement(g.a,{id:t,gutterBottom:!0},t)),r.a.createElement(v.a,{item:!0,xs:2,className:B.centerContainer},r.a.createElement(S.a,{onChange:function(e){d(p?p(e.target.value):parseFloat(e.target.value)),C()},InputProps:{inputComponent:R,disableUnderline:!0,inputProps:{prefix:l,suffix:s}},value:u?u(a):a})),r.a.createElement(v.a,{item:!0,xs:4},r.a.createElement(M,{className:B.slider,valueLabelDisplay:"auto","aria-label":t,defaultValue:a,onChange:function(e,t){return d(Number(t))},onChangeCommitted:C,value:a,min:i,max:o,step:c,valueLabelFormat:function(e){return m(e).replace("$","")}})))}))}var D=a(48),P=a(15);function L(e){for(var t=e.from,a=void 0===t?0:t,n=e.to,r=e.steps,i=[],o=a;o<=n;o+=(n-a)/r)i.push(o);return i}function T(e,t){for(var a=[],n=(e[e.length-1]-e[0])/t,r=e[0];r<e[e.length-1];r+=n)a.push(r);return a.length<t+1&&a.push(e[e.length-1]),a}function H(e){return e[e.length-1]}function $(e){return e.reduce(function(e,t){return e+Math.abs(t)},0)/e.length}function V(e){return new Promise(function(t){return setTimeout(t,e)})}function K(e){var t=e.d0,a=e.theta,n=e.p0,r=e.p1/n/(1-a),i=(1-a)*t,o=t/n;return{k:r,R0:i,S0:o,V0:Math.pow(o,r)/i}}function z(e){var t=e.R,a=e.V0,n=e.k;return n*Math.pow(t,(n-1)/n)/Math.pow(a,1/n)}function W(e){var t=e.R,a=e.deltaR,n=e.V0,r=e.k,i=Math.pow(n*t,1/r),o=a/(Math.pow(n*(t+a),1/r)-i),c=z({R:t,V0:n,k:r});return Math.abs(o-c)/c}function q(e){var t=e.R,a=e.k,n=e.priceGrowth;return-t+Math.pow(n*Math.pow(t,1-1/a),a/(-1+a))}function G(e){for(var t=e.sum,a=e.num,n=t/a,r=4*n,i=[],o=0;o<a;o++)i[o]=U(n-r,n+r);return i}function J(e,t){return Math.random()*(t-e)+e}function U(e,t){for(var a=0,n=0;0===a;)a=Math.random();for(;0===n;)n=Math.random();var r=Math.sqrt(-2*Math.log(a))*Math.cos(2*Math.PI*n);return((r=r/10+.5)>1||r<0)&&(r=U(e,t)),r*=t-e,r+=e}var Q=a(192);var X=function(e){for(var t=e.theta,a=K({d0:e.d0,theta:t,p0:e.p0,p1:e.p1}),n=a.k,i=a.R0,o=a.S0,c=function(e){return o*Math.pow(e/i,1/n)},l=4*i,s=(l-0)/100,m=Math.max(l,c(l)),u=m>5e8?[1e9,"B"]:m>5e5?[1e6,"M"]:m>500?[1e3,"K"]:[1,""],d=Object(p.a)(u,2),f=d[0],h=d[1],g="Supply (tokens) / Reserve (DAI)",x=[],b=0;b<=l;b+=s){var v;x.push((v={},Object(D.a)(v,"x",b),Object(D.a)(v,g,c(b)),v))}var E=Object(Q.a)(),y=function(e){return(+(e/f).toPrecision(2)).toLocaleString()};return r.a.createElement(P.f,{debounce:1},r.a.createElement(P.b,{width:0,height:400,data:x,margin:{top:10,right:30,left:0,bottom:0}},r.a.createElement(P.c,{strokeDasharray:"3 3"}),r.a.createElement(P.h,{interval:"preserveStartEnd",ticks:T(x.map(function(e){return e.x}),4),dataKey:"x",tickFormatter:y,unit:h,tick:{fill:E.palette.text.secondary},stroke:E.palette.text.secondary}),r.a.createElement(P.i,{interval:"preserveStartEnd",ticks:T(x.map(function(e){return e[g]}),3),tickFormatter:y,unit:h,tick:{fill:E.palette.text.secondary},domain:[0,c(l)],stroke:E.palette.text.secondary}),r.a.createElement(P.g,{formatter:function(e){return y(Number(e))}}),r.a.createElement(P.a,{isAnimationActive:!1,type:"monotone",dataKey:g,stroke:E.palette.primary.main,fill:E.palette.primary.main}),r.a.createElement(P.e,{x:i,stroke:E.palette.primary.main,strokeDasharray:"9 0",label:r.a.createElement(function(e){var t=e.textAnchor,a=e.viewBox;return r.a.createElement("text",{x:a.x+10,y:30,fill:E.palette.text.secondary,textAnchor:t},"Initial value")},null)}),r.a.createElement(P.d,{formatter:function(e){return r.a.createElement("span",{style:{color:E.palette.text.secondary}},e)}})))},Y=Object(d.a)(function(e){return Object(f.a)({root:{margin:e.spacing(6,0,3)},lightBulb:{verticalAlign:"middle",marginRight:e.spacing(1)},leftContainer:{color:e.palette.text.secondary},centerContainer:{},listBoxContainer:{"& > div:not(:last-child)":{marginBottom:"12px",borderBottom:"1px solid #313d47"}},listBox:{paddingBottom:"12px","& > div":{display:"flex",alignItems:"center","& p":{marginBottom:0}},"& > div:not(:last-child)":{paddingRight:"12px"}}})});function Z(e){var t=e.resultFields,a=Y();return r.a.createElement("div",{className:a.listBoxContainer},t.map(function(e){var t=e.label,n=e.value;return r.a.createElement(v.a,{key:t,container:!0,spacing:0,className:a.listBox},r.a.createElement(v.a,{item:!0,xs:8,className:a.leftContainer},r.a.createElement(g.a,{id:t,gutterBottom:!0},t)),r.a.createElement(v.a,{item:!0,xs:4,className:a.centerContainer},r.a.createElement(g.a,{gutterBottom:!0},n)))}))}var _=a(120);var ee=function(e){for(var t=e.priceTimeseries,a=e.withdrawFeeTimeseries,n=e.p0,i=e.p1,o=[],c=0;c<t.length;c++){var l;o.push((l={},Object(D.a)(l,"x",c),Object(D.a)(l,"Price (DAI / token)",t[c]||0),Object(D.a)(l,"Collected withdraw fee (DAI)",a[c]||0),l))}var s=Object(Q.a)();function m(e){var t=e.textAnchor,a=e.viewBox,n=e.text;return r.a.createElement("text",{x:a.x+10,y:a.y-10,fill:s.palette.text.secondary,textAnchor:t},n)}return r.a.createElement(P.f,{debounce:1},r.a.createElement(P.b,{width:0,height:400,data:o,margin:{top:10,right:30,left:0,bottom:0}},r.a.createElement(P.c,{strokeDasharray:"3 3"}),r.a.createElement(P.h,{dataKey:"x",tick:{fill:s.palette.text.secondary},stroke:s.palette.text.secondary,ticks:[].concat(Object(_.a)(L({to:t.length,steps:4}).map(Math.floor)),[t.length-1])}),r.a.createElement(P.i,{yAxisId:"left",domain:[0,Math.max.apply(Math,Object(_.a)(t).concat([1.25*i]))],tickFormatter:function(e){return(+e.toPrecision(3)).toLocaleString()},tick:{fill:s.palette.text.secondary},stroke:s.palette.text.secondary}),r.a.createElement(P.i,{yAxisId:"right",orientation:"right",tick:{fill:s.palette.text.secondary},stroke:s.palette.text.secondary}),r.a.createElement(P.g,{formatter:function(e){return Number(e)}}),r.a.createElement(P.a,{isAnimationActive:!1,yAxisId:"left",type:"monotone",dataKey:"Price (DAI / token)",stroke:s.palette.primary.main,fill:s.palette.primary.main}),r.a.createElement(P.e,{y:n,yAxisId:"left",stroke:s.palette.primary.main,strokeDasharray:"9 0",label:r.a.createElement(m,{text:"Hatch sale price"})}),r.a.createElement(P.e,{y:i,yAxisId:"left",stroke:s.palette.primary.main,strokeDasharray:"9 0",label:r.a.createElement(m,{text:"After hatch price"})}),r.a.createElement(P.a,{isAnimationActive:!1,yAxisId:"right",type:"monotone",dataKey:"Collected withdraw fee (DAI)",stroke:s.palette.secondary.main,fill:s.palette.secondary.main}),r.a.createElement(P.d,{formatter:function(e){return r.a.createElement("span",{style:{color:s.palette.text.secondary}},e)}})))},te=a(464),ae=a(184),ne=a.n(ae),re=Object(d.a)(function(e){return{container:{display:"flex",marginLeft:"6px",fontSize:"0.9rem",cursor:"pointer",transition:"opacity ease 150ms",opacity:.2,"&:hover":{opacity:.85}},typography:{padding:e.spacing(2)},paper:{backgroundColor:"#384b59"}}});function ie(e){var t=e.text,a=re(),n=r.a.useState(null),i=Object(p.a)(n,2),o=i[0],c=i[1];var l=Boolean(o),s=l?"simple-popover":void 0;return r.a.createElement("div",{className:a.container},r.a.createElement(ne.a,{onClick:function(e){c(e.currentTarget)}}),r.a.createElement(te.a,{PaperProps:{className:a.paper},id:s,open:l,anchorEl:o,onClose:function(){c(null)},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},r.a.createElement(g.a,{className:a.typography},t)))}var oe=a(185),ce=(a(412),Object(d.a)(function(e){return Object(f.a)({mainContainer:{"& > div:not(:last-child)":{paddingBottom:e.spacing(3)},"& > div":{"& > div":{paddingTop:"0 !important"}},paddingBottom:e.spacing(9)},simulationContainer:{minHeight:"442px"},paper:{width:"100%",height:"100%",minHeight:310,backgroundColor:"#293640"},box:{padding:e.spacing(3,3),minHeight:310},boxButton:{padding:e.spacing(3,3)},boxHeader:{padding:e.spacing(3,3),height:e.spacing(10),display:"flex",alignItems:"center",borderBottom:"1px solid #313d47"},boxChart:{width:"100%",height:"100%",minHeight:310,maxHeight:350,padding:e.spacing(3,3),paddingRight:"5px",paddingLeft:"5px"},boxPlaceholder:{padding:e.spacing(3,3),display:"flex",height:"100%",alignItems:"center",justifyContent:"center",color:e.palette.text.secondary,opacity:.4},header:{backgroundColor:"#0b1216",color:"#f8f8f8",textAlign:"center",padding:e.spacing(3,0,16),marginBottom:-e.spacing(10)},button:{background:"linear-gradient(290deg, #2ad179, #4ab47c)",color:"white"}})}));var le=a(189),se=a.n(le),me=a(190),ue=Object(me.a)({palette:{type:"dark",primary:{main:"#2ecd79"},secondary:{main:"#116be0"},error:{main:se.a.A400},background:{default:"#fff",paper:"#293640"},text:{primary:"#fff",secondary:"#9aa3ad"}},typography:{h6:{fontWeight:400}}});console.log(ue);var pe=ue;o.a.render(r.a.createElement(l.a,{theme:pe},r.a.createElement(c.a,null),r.a.createElement(function(){var e=Object(n.useState)({d0:1e6,theta:.35,p0:.1,p1:.3,wFee:.05}),t=Object(p.a)(e,2),a=t[0],i=t[1],o=a.d0,c=a.theta,l=a.p0,s=a.p1,d=a.wFee,f=Object(n.useMemo)(function(){return Object(oe.throttle)(i,250)},[]),y=K({d0:o,theta:c,p0:l,p1:s}),k=y.k,j=y.R0,w=(y.S0,y.V0),N=Object(n.useState)([0]),C=Object(p.a)(N,2),S=C[0],A=C[1],B=Object(n.useState)([0]),M=Object(p.a)(B,2),F=M[0],R=M[1],D=Object(n.useState)(j),P=Object(p.a)(D,2),L=P[0],T=P[1],U=Object(n.useState)(0),Q=Object(p.a)(U,2),Y=Q[0],_=Q[1],te=Object(n.useState)(0),ae=Object(p.a)(te,2),ne=ae[0],re=ae[1],le=Object(n.useState)(0),se=Object(p.a)(le,2),me=se[0],ue=se[1],pe=Object(n.useState)(!1),de=Object(p.a)(pe,2),fe=de[0],he=de[1],ge=Object(n.useState)(!1),xe=Object(p.a)(ge,2),be=xe[0],ve=xe[1];function Ee(){return(Ee=Object(u.a)(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return he(!1),_(0),A([0]),R([0]),re(0),e.next=3,V(0);case 3:he(!0);case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}Object(n.useEffect)(function(){he(!1)},[a]),Object(n.useEffect)(function(){var e=!0;function t(){return(t=Object(u.a)(m.a.mark(function t(){var a,n,r,i,o,c,l,s;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a=[j],n=[z({R:j,V0:w,k:k})],r=[0],i=[],o=[],c=52,ve(!0),l=function(t){var c=Math.ceil(t<5?J(0,5):J(5,2*t)),l=J(.99,1.03),s=H(a),m=q({R:s,k:k,priceGrowth:l}),u=s+m,p=G({sum:m,num:c}),f=$(p.map(function(e){return W({R:s,deltaR:e,V0:w,k:k})})),h=p.filter(function(e){return e<0}),g=-d*h.reduce(function(e,t){return e+t},0),x=p.reduce(function(e,t){return e+Math.abs(t)},0)/p.length;if(a.push(u),n.push(z({R:u,V0:w,k:k})),i.push(f),o.push(x),r.push(H(r)+g),_(function(e){return e+h.length}),!fe||!e)return"break"},s=0;case 9:if(!(s<c)){t.next=16;break}if("break"!==l(s)){t.next=13;break}return t.abrupt("break",16);case 13:s++,t.next=9;break;case 16:return A(n),R(r),re($(i)),ue($(o)),T(H(a)),t.next=23,V(5);case 23:ve(!1);case 24:case"end":return t.stop()}},t)}))).apply(this,arguments)}return fe&&function(){t.apply(this,arguments)}(),function(){e=!1}},[fe]);var ye=[{label:"Total reserve",value:(+L.toPrecision(3)).toLocaleString()+" DAI"},{label:"Funds generated from initial hatch",value:Math.round(o*c).toLocaleString()+" DAI"},{label:"Funds generated from withdraw fees (".concat(Y," txs)"),value:(+H(F).toPrecision(3)).toLocaleString()+" DAI"},{label:"Average slippage (avg tx size ".concat(Math.round(me).toLocaleString()," DAI)"),value:+(100*ne).toFixed(3)+"%"}],ke=ce();return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:ke.header},r.a.createElement(h.a,{fixed:!0},r.a.createElement(O,null))),r.a.createElement(h.a,{fixed:!0,className:ke.mainContainer},r.a.createElement(v.a,{container:!0,spacing:3},r.a.createElement(v.a,{item:!0,xs:12,sm:12,md:6,lg:4},r.a.createElement(b.a,{className:ke.paper},r.a.createElement(x.a,{className:ke.boxHeader},r.a.createElement(g.a,{variant:"h6"},"Curve Design"),r.a.createElement(ie,{text:r.a.createElement("span",null,"Description of the different parameters ",r.a.createElement("br",null),"Initial raise: Lorem ipsum ",r.a.createElement("br",null),"Allocation to project: Lorem ipsum ",r.a.createElement("br",null),"Initial token price: Lorem ipsum ",r.a.createElement("br",null),"Return factor: Lorem ipsum ",r.a.createElement("br",null),"Withdrawl fee: Lorem ipsum")})),r.a.createElement(x.a,{className:ke.box},r.a.createElement(I,{setCurveParams:f})))),r.a.createElement(v.a,{item:!0,xs:12,sm:12,md:6,lg:8},r.a.createElement(b.a,{className:ke.paper},r.a.createElement(x.a,{className:ke.boxHeader},r.a.createElement(g.a,{variant:"h6"},"Preview"),r.a.createElement(ie,{text:r.a.createElement("span",null,"Preview of the token bonding curve")})),r.a.createElement(x.a,{className:ke.boxChart},r.a.createElement(X,{theta:c,d0:o,p0:l,p1:s}))))),r.a.createElement(v.a,{container:!0,spacing:3},r.a.createElement(v.a,{item:!0,xs:12,md:12},r.a.createElement(b.a,null,r.a.createElement(x.a,{className:ke.boxHeader},r.a.createElement(v.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},r.a.createElement(E.a,{variant:"contained",className:ke.button,onClick:function(){return Ee.apply(this,arguments)},disabled:be},"Run simulation")))))),r.a.createElement(v.a,{container:!0,spacing:3,className:ke.simulationContainer},fe?r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{item:!0,xs:12,sm:12,md:6,lg:8},r.a.createElement(b.a,{className:ke.paper},r.a.createElement(x.a,{className:ke.boxHeader},r.a.createElement(g.a,{variant:"h6"},"Simulation"),r.a.createElement(ie,{text:r.a.createElement("span",null,"Some context about this simulation")})),r.a.createElement(x.a,{className:ke.boxChart},r.a.createElement(ee,{priceTimeseries:S,withdrawFeeTimeseries:F,p0:l,p1:s})))),r.a.createElement(v.a,{item:!0,xs:12,sm:12,md:6,lg:4},r.a.createElement(b.a,{className:ke.paper},r.a.createElement(x.a,{className:ke.boxHeader},r.a.createElement(g.a,{variant:"h6"},"Results"),r.a.createElement(ie,{text:r.a.createElement("span",null,"Explanation of what do this results mean")})),r.a.createElement(x.a,{className:ke.box},r.a.createElement(Z,{resultFields:ye}))))):r.a.createElement(v.a,{item:!0,xs:12},r.a.createElement(b.a,{className:ke.paper},r.a.createElement(x.a,{className:ke.boxPlaceholder},r.a.createElement(g.a,{variant:"h6"},"Run a simulation to see results")))))))},null)),document.querySelector("#root"))}},[[223,1,2]]]);
//# sourceMappingURL=main.ce811fd9.chunk.js.map