import{j as D}from"./jsx-runtime-BjG_zV1W.js";import{R}from"./index-B3TfwC44.js";import{a as z,c as W}from"./utils-BLSKlp9E.js";const f=t=>typeof t=="boolean"?`${t}`:t===0?"0":t,p=z,A=(t,a)=>e=>{var i;if((a==null?void 0:a.variants)==null)return p(t,e==null?void 0:e.class,e==null?void 0:e.className);const{variants:l,defaultVariants:r}=a,k=Object.keys(l).map(n=>{const o=e==null?void 0:e[n],d=r==null?void 0:r[n];if(o===null)return null;const s=f(o)||f(d);return l[n][s]}),g=e&&Object.entries(e).reduce((n,o)=>{let[d,s]=o;return s===void 0||(n[d]=s),n},{}),w=a==null||(i=a.compoundVariants)===null||i===void 0?void 0:i.reduce((n,o)=>{let{class:d,className:s,...C}=o;return Object.entries(C).every(O=>{let[b,y]=O;return Array.isArray(y)?y.includes({...r,...g}[b]):{...r,...g}[b]===y})?[...n,d,s]:n},[]);return p(t,k,w,e==null?void 0:e.class,e==null?void 0:e.className)},E=A("inline-flex items-center justify-center rounded-xl font-bold transition-all duration-300 disabled:opacity-50 disabled:hover:scale-100 disabled:shadow-none focus:outline-none",{variants:{intent:{primary:"text-black bg-[var(--neon-cyan)] hover:scale-105 hover:shadow-[0_0_20px_rgba(0,240,255,0.6)] active:scale-95",secondary:"border border-[var(--neon-cyan)]/50 bg-black/40 text-[var(--neon-cyan)] hover:bg-[var(--neon-cyan)]/10 active:scale-95 backdrop-blur-md",danger:"bg-red-500 text-white hover:bg-red-600"},size:{default:"px-6 py-3",sm:"px-4 py-2 text-sm",lg:"px-8 py-4 text-lg"},fullWidth:{true:"w-full"}},defaultVariants:{intent:"primary",size:"default"}}),v=R.forwardRef(({className:t,intent:a,size:e,fullWidth:i,...l},r)=>D.jsx("button",{ref:r,className:W(E({intent:a,size:e,fullWidth:i,className:t})),...l}));v.displayName="Button";v.__docgenInfo={description:"",methods:[],displayName:"Button",composes:["VariantProps"]};const K={title:"UI/Button",component:v,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{intent:{control:"select",options:["primary","secondary","danger"]},size:{control:"select",options:["default","sm","lg"]},fullWidth:{control:"boolean"}}},c={args:{intent:"primary",children:"Primary Button"}},u={args:{intent:"secondary",children:"Secondary Button"}},m={args:{intent:"danger",children:"Danger Button"}};var h,x,B;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    intent: 'primary',
    children: 'Primary Button'
  }
}`,...(B=(x=c.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var V,N,_;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    intent: 'secondary',
    children: 'Secondary Button'
  }
}`,...(_=(N=u.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var S,j,P;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    intent: 'danger',
    children: 'Danger Button'
  }
}`,...(P=(j=m.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};const $=["Primary","Secondary","Danger"];export{m as Danger,c as Primary,u as Secondary,$ as __namedExportsOrder,K as default};
