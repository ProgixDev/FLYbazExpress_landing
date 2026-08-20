import "./globals.css";

export const metadata = {
  title: "Flybaz Express",
  description:
    "Expédiez vos colis avec la communauté, partout dans le monde — mis en relation avec des voyageurs de confiance.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Material+Symbols+Outlined:opsz,wght,FILL@20..48,100..700,0..1&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
