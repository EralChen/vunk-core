const a=(t,e,n,i)=>{if(e==null||i&&t==null)return t;if(Array.isArray(e)){if(!e.length)return t;e=e.flat(1/0);const[r,...f]=e;let s=t[r];return s===void 0&&(n?.(t,r,f[0]),s=t[r]),f.length?a(s,f,n,i):s}else return t instanceof Map?t.get(e):t[e]},l=(t,e)=>{const n=t;let i=e.k;if(Array.isArray(i)){i=i.flat(1/0);const r=[...i];if(i=r.pop(),t=a(t,r,e.intoUndefined),t===void 0&&r.length){const f=r.pop(),s=a(n,r);s&&(e.intoUndefined?.(s,f,i),t=s[f])}}if(Array.isArray(t)&&e.insert){t.splice(i,0,e.v);return}t instanceof Map?t.set(i,e.v):t[i]=e.v},p=(t,e)=>{let n=e.k;if(Array.isArray(n)){n=n.flat(1/0);const i=[...n];n=i.pop(),t=a(t,i,e.intoUndefined)}Array.isArray(t)?t.splice(n,e.n??1):t instanceof Map?t.delete(n):Reflect.deleteProperty(t,n)},d=(t,e,n)=>{n!==void 0&&(typeof n=="number"?t[e]=[]:t[e]={})};export{d,a as g,l as s,p as u};