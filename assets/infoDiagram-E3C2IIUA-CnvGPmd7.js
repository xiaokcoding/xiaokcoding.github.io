import{p as o}from"./radar-MK3ICKWK-KPFLJ5ZN-BF9MRlx2.js";import{m as e,t as s,aN as n,T as d,aO as p}from"./mermaid.esm.min-xRpAkWHp.js";import"./chunk-5ZJXQJOJ-DUKnBJR3.js";import"./app-gdwmcdjK.js";var m={parse:e(async r=>{let a=await o("info",r);s.debug(a)},"parse")},g={version:p.version},v=e(()=>g.version,"getVersion"),f={getVersion:v},l=e((r,a,i)=>{s.debug(`rendering info diagram
`+r);let t=n(a);d(t,100,400,!0),t.append("g").append("text").attr("x",100).attr("y",40).attr("class","version").attr("font-size",32).style("text-anchor","middle").text(`v${i}`)},"draw"),x={draw:l},w={parser:m,db:f,renderer:x};export{w as diagram};
