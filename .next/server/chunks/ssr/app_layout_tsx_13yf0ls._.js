module.exports=[33290,a=>{"use strict";var b=a.i(7997);a.s(["default",0,function({children:a}){return(0,b.jsxs)("html",{lang:"en",suppressHydrationWarning:!0,children:[(0,b.jsxs)("head",{children:[(0,b.jsx)("script",{dangerouslySetInnerHTML:{__html:`
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
            `}}),(0,b.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,b.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"}),(0,b.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap",rel:"stylesheet"})]}),(0,b.jsx)("body",{children:a})]})},"metadata",0,{title:"Aadit's SLE Project",description:"SLE Graduation Project - Aadit Mehta"},"viewport",0,{width:"device-width",initialScale:1,viewportFit:"cover"}])},70864,a=>{a.n(a.i(33290))}];

//# sourceMappingURL=app_layout_tsx_13yf0ls._.js.map