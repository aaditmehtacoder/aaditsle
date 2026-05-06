1:"$Sreact.fragment"
3:I[39756,["/_next/static/chunks/0dbhjjzl8qfwv.js"],"default"]
4:I[37457,["/_next/static/chunks/0dbhjjzl8qfwv.js"],"default"]
5:I[47257,["/_next/static/chunks/0dbhjjzl8qfwv.js"],"ClientPageRoot"]
6:I[46194,["/_next/static/chunks/0dbhjjzl8qfwv.js","/_next/static/chunks/06v6dsf_me1cv.js","/_next/static/chunks/08gr5fgs0kkn4.js"],"default"]
e:I[68027,["/_next/static/chunks/0dbhjjzl8qfwv.js"],"default",1]
:HL["/_next/static/chunks/0_n665olus4zr.css","style"]
:HL["https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap","style"]
2:T5b6,
              (() => {
                const clean = (node) => {
                  if (!node || !node.attributes) return;
                  for (const attr of Array.from(node.attributes)) {
                    if (attr.name.startsWith('__gcr')) node.removeAttribute(attr.name);
                  }
                };

                clean(document.documentElement);
                if (document.body) clean(document.body);
                document.querySelectorAll('*').forEach(clean);

                const observer = new MutationObserver((mutations) => {
                  for (const mutation of mutations) {
                    if (mutation.type === 'attributes' && mutation.attributeName?.startsWith('__gcr')) {
                      mutation.target.removeAttribute(mutation.attributeName);
                    }
                    if (mutation.type === 'childList') {
                      mutation.addedNodes.forEach((node) => {
                        if (node.nodeType !== 1) return;
                        clean(node);
                        node.querySelectorAll?.('*').forEach(clean);
                      });
                    }
                  }
                });

                observer.observe(document.documentElement, { attributes: true, childList: true, subtree: true });
                window.addEventListener('load', () => window.setTimeout(() => observer.disconnect(), 3000), { once: true });
              })();
            0:{"P":null,"c":["","host"],"q":"","i":false,"f":[[["",{"children":["host",{"children":["__PAGE__",{}]}]},"$undefined","$undefined",16],[["$","$1","c",{"children":[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/chunks/0_n665olus4zr.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}],["$","script","script-0",{"src":"/_next/static/chunks/0dbhjjzl8qfwv.js","async":true,"nonce":"$undefined"}]],["$","html",null,{"lang":"en","suppressHydrationWarning":true,"children":[["$","head",null,{"children":[["$","script",null,{"dangerouslySetInnerHTML":{"__html":"$2"}}],["$","link",null,{"rel":"preconnect","href":"https://fonts.googleapis.com"}],["$","link",null,{"rel":"preconnect","href":"https://fonts.gstatic.com","crossOrigin":"anonymous"}],["$","link",null,{"href":"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap","rel":"stylesheet"}]]}],["$","body",null,{"children":["$","$L3",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L4",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[[["$","title",null,{"children":"404: This page could not be found."}],["$","div",null,{"style":{"fontFamily":"system-ui,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\"","height":"100vh","textAlign":"center","display":"flex","flexDirection":"column","alignItems":"center","justifyContent":"center"},"children":["$","div",null,{"children":[["$","style",null,{"dangerouslySetInnerHTML":{"__html":"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"}}],["$","h1",null,{"className":"next-error-h1","style":{"display":"inline-block","margin":"0 20px 0 0","padding":"0 23px 0 0","fontSize":24,"fontWeight":500,"verticalAlign":"top","lineHeight":"49px"},"children":404}],["$","div",null,{"style":{"display":"inline-block"},"children":["$","h2",null,{"style":{"fontSize":14,"fontWeight":400,"lineHeight":"49px","margin":0},"children":"This page could not be found."}]}]]}]}]],[]],"forbidden":"$undefined","unauthorized":"$undefined"}]}]]}]]}],{"children":[["$","$1","c",{"children":[null,["$","$L3",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L4",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}],{"children":[["$","$1","c",{"children":[["$","$L5",null,{"Component":"$6","serverProvidedParams":{"searchParams":{},"params":{},"promises":["$@7","$@8"]}}],["$L9","$La"],"$Lb"]}],{},null,false,null]},null,false,"$@c"]},null,false,null],"$Ld",false]],"m":"$undefined","G":["$e",["$Lf"]],"S":true,"h":null,"s":"$undefined","l":"$undefined","p":"$undefined","d":"$undefined","b":"LIIQbSmvjEg1fnfX1WxO5"}
10:I[97367,["/_next/static/chunks/0dbhjjzl8qfwv.js"],"OutletBoundary"]
11:"$Sreact.suspense"
14:I[97367,["/_next/static/chunks/0dbhjjzl8qfwv.js"],"ViewportBoundary"]
16:I[97367,["/_next/static/chunks/0dbhjjzl8qfwv.js"],"MetadataBoundary"]
9:["$","script","script-0",{"src":"/_next/static/chunks/06v6dsf_me1cv.js","async":true,"nonce":"$undefined"}]
a:["$","script","script-1",{"src":"/_next/static/chunks/08gr5fgs0kkn4.js","async":true,"nonce":"$undefined"}]
b:["$","$L10",null,{"children":["$","$11",null,{"name":"Next.MetadataOutlet","children":"$@12"}]}]
13:[]
c:"$W13"
d:["$","$1","h",{"children":[null,["$","$L14",null,{"children":"$L15"}],["$","div",null,{"hidden":true,"children":["$","$L16",null,{"children":["$","$11",null,{"name":"Next.Metadata","children":"$L17"}]}]}],null]}]
f:["$","link","0",{"rel":"stylesheet","href":"/_next/static/chunks/0_n665olus4zr.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]
7:{}
8:"$0:f:0:1:1:children:1:children:0:props:children:0:props:serverProvidedParams:params"
15:[["$","meta","0",{"charSet":"utf-8"}],["$","meta","1",{"name":"viewport","content":"width=device-width, initial-scale=1, viewport-fit=cover"}]]
12:null
17:[["$","title","0",{"children":"Aadit's SLE Project"}],["$","meta","1",{"name":"description","content":"SLE Graduation Project - Aadit Mehta"}]]
