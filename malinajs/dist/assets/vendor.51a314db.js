let N=console.error;const H=e=>typeof e=="function",P=e=>typeof e=="object",C=e=>{try{return H(e)&&e()}catch(t){N(t)}};function j(e,t,i,n){return n||(n={}),n.fn=t,n.cb=i,"value"in n||(n.value=NaN),e.watchers.push(n),n}function O(e,t,i){return j(e,t,i,{ro:!0})}function R(e,t){let i=e.indexOf(t);i>=0&&e.splice(i,1)}function A(e){this.parent=e,this.children=[],this.watchers=[],this._d=[],this.prefix=[],this.$$=e==null?void 0:e.$$}A.prototype.new=function(){var e=new A(this);return this.children.push(e),e};A.prototype.destroy=function(e){e!==!1&&this.parent&&R(this.parent.children,this),this.watchers.length=0,this.prefix.length=0,this._d.map(C),this._d.length=0,this.children.map(t=>t.destroy(!1)),this.children.length=0};const v=e=>Array.isArray(e),q=(e,t)=>{let i=v(e),n=v(t);if(i!==n)return!0;if(!i)return e!==t;if(e.length!==t.length)return!0;for(let s=0;s<e.length;s++)if(e[s]!==t[s])return!0;return!1};function z(e,t){return q(e.value,t)?(v(t)?e.value=t.slice():e.value=t,e.cb(e.value),e.ro?0:1):0}function G(e){let t=10,i;for(;t>=0;){let n=0,s=0,r=[],o,l,c=e;for(;c;){for(o=0;o<c.prefix.length;o++)c.prefix[o]();for(o=0;o<c.watchers.length;o++)i=c.watchers[o],l=i.fn(),i.value!==l&&(i.cmp?n+=i.cmp(i,l):(i.value=l,i.ro||n++,i.cb(i.value)));c.children.length&&r.push.apply(r,c.children),c=r[s++]}if(t--,!n)break}t<0&&N("Infinity changes: ",i)}let E={},J=1;const Q="childNodes",T="firstChild";let U=e=>e;const V=(e,t)=>{e.parentNode.insertBefore(t,e.nextSibling)},Y=e=>{if(E[e])return E[e].cloneNode(!0);let t=document.createElement("template");t.innerHTML=e.replace(/<>/g,"<!---->");let i=t.content;return E[e]=i.cloneNode(!0),i};function I(e,t){let i;for(;e&&(i=e.nextSibling,e.remove(),e!=t);)e=i}let w=[],y={};function L(e,t){if(t){if(y[t])return;y[t]=!0}w.push(e),!y.$tick&&(y.$tick=!0,Promise.resolve().then(()=>{y={};let i=w;w=[],i.map(C)}))}let S,B;const W=e=>S._d.push(e),Z=e=>S._m.push(e),X=(e,t,i)=>{t.$l?V(e,i):e.appendChild(i)},K={a:e=>{let t=new A;t.$$=e,W(()=>t.destroy());let i=`a${J++}`,n,s=r=>(n||L(()=>{try{n=!0,G(t)}finally{n=!1}},i),r);e.$cd=t,e.apply=s,e.push=s,s()},b:U},ee=(e,t)=>(i,n={})=>{let s=S;B=n.context||{};let r=S={$option:n,destroy:()=>r._d.map(C),context:B,exported:{},_d:[],_m:[]};t.a(r);try{X(i,n,e(n,r.apply)),t.b(r)}finally{S=s,B=null}return L(()=>r._d.push(...r._m.map(C))),r},te=(e,t)=>{if(document.head.querySelector("style#"+e))return;let i=document.createElement("style");i.id=e,i.innerHTML=t,document.head.appendChild(i)},ie=(e,t)=>F(e,"class",t),ne=(e,t,i)=>{O(e,()=>""+i(),n=>{t.textContent=n})},F=(e,t,i)=>{i!=null?e.setAttribute(t,i):e.removeAttribute(t)},se=(e,t,i,n)=>{O(e,()=>{let s=n();return s==null?s:""+s},s=>F(t,i,s))},le=(e,t,i,n)=>(e.$class||(e.$class={}),!n&&i.main&&(n="main"),(s,r)=>{let o=[];return r&&o.push(r),s.trim().split(/\s+/).forEach(l=>{let c;l[0]=="$"&&(l=l.substring(1),c=!0);let g=i[l]||c;if(g){let f=(e.$class[l===n?"$$main":l]||"").trim();f?o.push(f):g!==!0&&o.push(l,g)}let k=t[l];k?o.push(l,k):g||o.push(l)}),o.join(" ")}),re=(e,t,i)=>P(i[0])?e:t,ce=(e,t)=>{e.prefix.push(t),t()};function fe(e,t,i,n,s,r,o){let l=e.new(),c=new Map,g,k=r[Q].length;j(l,n,f=>{f||(f=[]),typeof f=="number"?f=[...Array(f)].map((a,$)=>$+1):v(f)||(f=[]);let M=new Map,u,x;if(i?(u=null,x=t):(u=t,x=t.parentNode),c.size){let a,$=0;for(let h=0;h<f.length;h++)a=c.get(s(f[h],h,f)),a&&(a.a=!0,$++);!$&&g?(i?t.textContent="":I(t.nextSibling,g),l.children.forEach(h=>h.destroy(!1)),l.children.length=0,c.clear()):(l.children=[],c.forEach(h=>{if(h.a){h.a=!1,l.children.push(h.cd);return}I(h.first,h.last),h.cd.destroy(!1)}))}let p,b,m,d,D;for(p=0;p<f.length;p++){if(b=f[p],m?(d=m,m=null):d=c.get(s(b,p,f)),d){if(D=p==0&&i?x[T]:u.nextSibling,D!=d.first){let a=!0;if(k==1&&p+1<f.length&&(u==null?void 0:u.nextSibling)&&(m=c.get(s(f[p+1],p+1,f)),m&&u.nextSibling.nextSibling===m.first&&(x.replaceChild(d.first,u.nextSibling),a=!1)),a){let $=u==null?void 0:u.nextSibling,h,_=d.first;for(;_&&(h=_.nextSibling,x.insertBefore(_,$),_!=d.last);)_=h}}d.rebind(p,b)}else{let a=r.cloneNode(!0);d={cd:l.new()},o(d,a,b,p),d.first=a[T],d.last=a.lastChild,x.insertBefore(a,u==null?void 0:u.nextSibling)}u=d.last,M.set(s(b,p,f),d)}g=u,c.clear(),c=M},{ro:!0,cmp:z})}export{K as $,le as a,Z as b,S as c,Y as d,Q as e,T as f,fe as g,re as h,se as i,ne as j,O as k,te as l,ee as m,ce as p,ie as s};
