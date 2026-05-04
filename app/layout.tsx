import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aadit's SLE Project",
  description: "SLE Graduation Project - Aadit Mehta"
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
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
            `
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
