import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Anwar Kader - About Me',
  description: 'A Lego-inspired portfolio website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                darkMode: "class",
                theme: {
                  extend: {
                    colors: {
                      "primary": "#f4f425",
                      "background-light": "#f8f8f5",
                      "background-dark": "#222210",
                      "lego-red": "#d01012",
                      "lego-blue": "#0055bf",
                      "lego-green": "#24ad42",
                      "lego-gray": "#9ba1a6",
                    },
                    fontFamily: {
                      "display": ["Plus Jakarta Sans", "sans-serif"]
                    },
                    borderRadius: {"DEFAULT": "1rem", "lg": "2rem", "xl": "3rem", "full": "9999px"},
                  },
                },
              }
            `,
          }}
        />
      </head>
      <body className="font-display bg-background-light text-slate-900">
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
