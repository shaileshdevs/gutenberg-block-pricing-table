(()=>{"use strict";var e,t={259:()=>{const e=window.wp.blocks,t=window.wp.element,a=window.wp.i18n,r=window.wp.blockEditor,c=window.wp.components,l=JSON.parse('{"u2":"shailesh-gutenberg-blocks/pricing-table"}');(0,e.registerBlockType)(l.u2,{edit:function(e){const l=(0,r.useBlockProps)(),{attributes:n,setAttributes:s}=e,{price:i,features:p,ctaText:o}=n;return(0,t.createElement)("div",l,(0,t.createElement)("div",{className:"pricing_table-price-wrapper"},(0,t.createElement)(r.RichText,{className:"pricing_table-price",tagName:"h2",placeholder:(0,a.__)("$50"),value:i,onChange:e=>s({price:e})})),(0,t.createElement)("ul",{className:"pricing_table-features-wrapper"},p.map(((e,a)=>{let{text:c}=e;return(0,t.createElement)("li",{className:"pricing_table-feature-li"},(0,t.createElement)("svg",{id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 457.57"},(0,t.createElement)("path",{class:"cls-1",d:"M0,220.57c100.43-1.33,121-5.2,191.79,81.5,54.29-90,114.62-167.9,179.92-235.86C436-.72,436.5-.89,512,.24,383.54,143,278.71,295.74,194.87,457.57,150,361.45,87.33,280.53,0,220.57Z"})),(0,t.createElement)(r.RichText,{key:a,tagName:"span",value:c,onChange:e=>((e,t,a)=>{const r=n.features;r[a].text=t,s({features:r})})(0,e,a)}))}))),(0,t.createElement)("div",{className:"pricing_table-add-feature-wrapper"},(0,t.createElement)(c.Button,{className:"pricing_table-add-feature-button",label:(0,a.__)("Add feature"),icon:"plus-alt",onClick:()=>{const e=n.features.length+1,t=[...n.features,{icon:"fas fa-check",text:`Feature ${e}`,color:"#03bb89"}];s({features:t})}}),(0,t.createElement)("span",{className:"pricing_table-add-feature-text"},(0,a.__)("Add Feature"))),(0,t.createElement)("div",{className:"pricing_table-cta-wrapper"},(0,t.createElement)(r.RichText,{className:"pricing_table-cta",tagName:"a",placeholder:(0,a.__)("Buy Now"),value:o,onChange:e=>s({ctaText:e})})))},save:function(e){const a=r.useBlockProps.save(),{attributes:c,setAttributes:l}=e,{price:n,features:s,ctaText:i}=c;return(0,t.createElement)("div",a,(0,t.createElement)("div",{className:"pricing_table-price-wrapper"},(0,t.createElement)(r.RichText.Content,{className:"pricing_table-price",tagName:"h2",value:n})),(0,t.createElement)("ul",{className:"pricing_table-features-wrapper"},s.map(((e,a)=>{let{text:r}=e;return(0,t.createElement)("li",{key:a,className:"pricing_table-feature-li"},(0,t.createElement)("svg",{id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 457.57"},(0,t.createElement)("path",{class:"cls-1",d:"M0,220.57c100.43-1.33,121-5.2,191.79,81.5,54.29-90,114.62-167.9,179.92-235.86C436-.72,436.5-.89,512,.24,383.54,143,278.71,295.74,194.87,457.57,150,361.45,87.33,280.53,0,220.57Z"})),(0,t.createElement)("span",{className:"pricing_table-feature-text"},r))}))),(0,t.createElement)("div",{className:"pricing_table-cta-wrapper"},(0,t.createElement)(r.RichText.Content,{className:"pricing_table-cta",tagName:"a",value:i})))}})}},a={};function r(e){var c=a[e];if(void 0!==c)return c.exports;var l=a[e]={exports:{}};return t[e](l,l.exports,r),l.exports}r.m=t,e=[],r.O=(t,a,c,l)=>{if(!a){var n=1/0;for(o=0;o<e.length;o++){for(var[a,c,l]=e[o],s=!0,i=0;i<a.length;i++)(!1&l||n>=l)&&Object.keys(r.O).every((e=>r.O[e](a[i])))?a.splice(i--,1):(s=!1,l<n&&(n=l));if(s){e.splice(o--,1);var p=c();void 0!==p&&(t=p)}}return t}l=l||0;for(var o=e.length;o>0&&e[o-1][2]>l;o--)e[o]=e[o-1];e[o]=[a,c,l]},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={826:0,431:0};r.O.j=t=>0===e[t];var t=(t,a)=>{var c,l,[n,s,i]=a,p=0;if(n.some((t=>0!==e[t]))){for(c in s)r.o(s,c)&&(r.m[c]=s[c]);if(i)var o=i(r)}for(t&&t(a);p<n.length;p++)l=n[p],r.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return r.O(o)},a=globalThis.webpackChunkshailesh_gutenberg_blocks=globalThis.webpackChunkshailesh_gutenberg_blocks||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var c=r.O(void 0,[431],(()=>r(259)));c=r.O(c)})();
