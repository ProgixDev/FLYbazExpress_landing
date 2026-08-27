import "./globals.css";

export const metadata = {
  title: "Flybaz Express",
  description:
    "Expédiez vos colis avec la communauté, partout dans le monde — mis en relation avec des voyageurs de confiance.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@1,400;1,500;1,600&family=Material+Symbols+Outlined:opsz,wght,FILL@20..48,100..700,0..1&display=swap"
        />
        {/* Runs before first paint so revealed elements never flash in visible
            first. Absent JS or reduced-motion leaves the page fully visible. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(!matchMedia('(prefers-reduced-motion: reduce)').matches)" +
              "document.documentElement.classList.add('motion-ready')}catch(e){}",
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
