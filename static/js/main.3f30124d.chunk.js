(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(t,e,n){t.exports=n(61)},60:function(t,e,n){},61:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),i=n(21),c=n.n(i),o=n(7),u=n(4),l=n(1),s=n(2),p=n(5),f=n(3),d=n(6),m="TOGGLE_ALIVE",h="MAKE_RANDOM",b="CLEAR",g="TICK",y="PLAY",v="STOP";var O=n(8),k=Object(O.style)({background:"rgb(66, 134, 244)"}),j=Object(O.style)({background:"rgba(66, 134, 244, 0.6)"}),E=Object(O.style)({background:"#ddd"}),w=Object(O.style)({".alive":j,".new-born":k,":hover:not(alive):not(newBborn)":E,border:"1px solid #ddd",height:"1em",width:"1em"}),C=function(t){return a.a.createElement("td",Object.assign({onClick:t.handleClick},w,{className:"".concat(t.alive?"alive":""," ").concat(t.newBorn?"new-born":"")}))},I={margin:"1.2em 0",borderCollapse:"collapse",borderSpacing:"0"},R=function(t){function e(){return Object(l.a)(this,e),Object(p.a)(this,Object(f.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this;return a.a.createElement("div",null,a.a.createElement("table",{style:I},a.a.createElement("tbody",null,this.props.table.map(function(e,n){return a.a.createElement("tr",{key:n},e.map(function(e,r){return a.a.createElement(C,{key:r,alive:e.status,newBorn:e.newBorn,handleClick:function(){return t.props.toggleAlive(n,r)}})}))}))))}}]),e}(r.Component),S=Object(u.b)(function(t){return{table:t.table}},function(t){return{toggleAlive:function(e,n){return t(function(t,e){return{type:m,x:t,y:e}}(e,n))}}})(R),P=Object(O.style)({display:"inline-block",marginRight:"0.4em",padding:"0.3em 0.7em",fontSize:"0.9em",fontWeight:"400",lineHeight:"1.5em",background:"rgb(66, 134, 244)",color:"#fff",cursor:"pointer",":hover":{backgroundColor:"rgba(66, 134, 244, 0.8)"}}),A=function(t){return a.a.createElement("span",Object.assign({onClick:t.handleClick},P),a.a.createElement("i",{className:t.icon})," ",t.title)},B={display:"inline-block"},G=function(t){function e(){return Object(l.a)(this,e),Object(p.a)(this,Object(f.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){this.props.makeRandomGrid(),this.togglePlay()}},{key:"togglePlay",value:function(){if(this.props.playState.isRunning)clearInterval(this.props.playState.timerId),this.props.stopPlaying();else{var t=setInterval(this.props.tick,100);this.props.startPlaying(t)}}},{key:"clear",value:function(){this.props.isRunning&&(clearInterval(this.props.timerId),this.props.stopPlaying()),this.props.clear()}},{key:"render",value:function(){var t=this;return a.a.createElement("div",{className:"controls"},a.a.createElement("div",{className:"buttons"},a.a.createElement(A,{handleClick:function(){return t.props.makeRandomGrid()},title:"Randomise",icon:"fa fa-random"}),a.a.createElement(A,{handleClick:function(){return t.clear()},title:"Clear",icon:"fa fa-undo"}),a.a.createElement("div",{style:B},a.a.createElement(A,{icon:this.props.playState.isRunning?"fa fa-pause":"fa fa-play",handleClick:function(){return t.togglePlay()}}),a.a.createElement(A,{handleClick:function(){return t.props.tick()},icon:"fa fa-step-forward"}))))}}]),e}(r.Component),x=Object(u.b)(function(t){return{playState:t.playState}},function(t){return{makeRandomGrid:function(){return t({type:h})},tick:function(){return t({type:g})},startPlaying:function(e){return t(function(t){return{type:y,timerId:t}}(e))},stopPlaying:function(){return t({type:v,timerId:e});var e},clear:function(){return t({type:b})}}})(G),L=function(t){function e(){return Object(l.a)(this,e),Object(p.a)(this,Object(f.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return a.a.createElement("div",{style:{float:"right",color:"white",fontSize:27}},"Generations: ",this.props.generations)}}]),e}(r.Component),N=Object(u.b)(function(t){return{generations:t.counter}})(L),M={textAlign:"center",fontSize:"2em",fontWeight:"500",color:"white"},z=function(t){function e(){return Object(l.a)(this,e),Object(p.a)(this,Object(f.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("h1",{style:M},"Game of Life"),a.a.createElement(S,null),a.a.createElement(x,null),a.a.createElement(N,null))}}]),e}(r.Component),T=function(t){return Array(t).fill(null)},D=function(t,e,n,r){return T(e).map(function(){t.push(function(t,e){return T(t).map(function(){var t;return e&&(t=Math.random()>.85),{status:t,newBorn:t}})}(n,r))})},J=function(t,e,n){return T(e).map(function(r,a){return function(t,e,n,r){return T(r).map(function(a,i){return function(t,e){return t?{status:e>3||e<2?0:1}:3===e?{status:1,newBorn:!0}:{status:0}}(t[e][i].status,function(t,e,n,r,a){var i=e-1<0?r-1:e-1,c=e+1===r?0:e+1,o=n-1<0?a-1:n-1,u=n+1===a?0:n+1,l=0;return l+=t[i][o].status,l+=t[i][n].status,l+=t[i][u].status,l+=t[e][o].status,l+=t[e][u].status,l+=t[c][o].status,l+=t[c][n].status,l+=t[c][u].status}(t,e,i,n,r))})}(t,a,e,n)})},K=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=[];return D(r,t,e,n),r},W=K(25,40),_={timerId:null,isRunning:!1},q=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;switch((arguments.length>1?arguments[1]:void 0).type){case g:return t+1;case b:case h:return 0;default:return t}},H=Object(o.c)({table:function(){var t,e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case m:return(e=(t=n.slice(0))[r.x][r.y]).status=!e.status,e.newBorn=!e.newBorn,t;case h:return K(25,40,!0);case b:return K(25,40);case g:return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=t.length,n=t[0].length;return J(t,e,n)}(n.slice(0));default:return n}},playState:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case y:return{timerId:e.timerId,isRunning:!0};case v:return{timerId:null,isRuninng:!1};default:return t}},counter:q}),V=(n(60),Object(o.a)()(o.d));c.a.render(a.a.createElement(u.a,{store:V(H)},a.a.createElement(z,null)),document.querySelector("#root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.3f30124d.chunk.js.map