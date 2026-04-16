import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{C as x}from"./Card-DiE9YhKt.js";import{c as u}from"./utils-BLSKlp9E.js";import{D as r}from"./DataBlock-vjQ5tBKw.js";function l({symbol:a,className:s}){var n;const m=((n=a==null?void 0:a.slice(0,1))==null?void 0:n.toUpperCase())||"?";return e.jsx("div",{className:u("flex-shrink-0 w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center font-bold text-xl border border-neutral-700 text-[var(--neon-orange)]",s),children:m})}l.__docgenInfo={description:"",methods:[],displayName:"TokenIcon",props:{symbol:{required:!0,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};function d({token:a}){var s;return e.jsxs(x,{children:[e.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[e.jsx(l,{symbol:a.symbol||"?"}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold text-white tracking-wide",children:a.symbol||"Unknown"}),e.jsx("p",{className:"text-neutral-400 font-mono text-xs mt-1 truncate max-w-[200px] sm:max-w-xs cursor-text",children:((s=a.address)==null?void 0:s.value)||"Unknown Address"})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 mt-6",children:[e.jsx(r,{label:"Decimals",value:a.decimals??"N/A"}),a.chainInfo&&e.jsx(r,{label:"Chain ID",value:a.chainInfo.chainId}),e.jsx(r,{label:"Raw JSON",className:"col-span-2 overflow-x-auto",value:e.jsx("pre",{className:"text-xs text-neutral-400 font-mono text-left leading-relaxed",children:JSON.stringify(a,null,2)})})]})]})}d.__docgenInfo={description:"",methods:[],displayName:"TokenCard",props:{token:{required:!0,tsType:{name:"TokenMetadata"},description:""}}};const g={title:"Domain/TokenCard",component:d,parameters:{layout:"centered"},tags:["autodocs"]},t={args:{token:{symbol:"WETH",decimals:18,address:{value:"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"},chainInfo:{chainId:1},rawObject:"some other raw data automatically injected"}}};var o,i,c;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    token: {
      symbol: 'WETH',
      decimals: 18,
      address: {
        value: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
      },
      chainInfo: {
        chainId: 1
      },
      rawObject: "some other raw data automatically injected"
    }
  }
}`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const b=["Default"];export{t as Default,b as __namedExportsOrder,g as default};
