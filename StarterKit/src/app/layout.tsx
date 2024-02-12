import NoSsr from "@/utils/NoSsr";
import "../../src/index.scss";
import MainProvider from "./MainProvider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <link rel="icon" href="/assets/images/favicon.png" type="image/x-icon" />
        <link rel="shortcut icon" href="/assets/images/favicon.png" type="image/x-icon" />
        <title>Mofi - Premium Admin Template</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&amp;display=swap" rel="stylesheet" />
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAjeJEPREBQFvAIqDSZliF0WjQrCld-Mh0"></script>
      </head>
      <body suppressHydrationWarning={true}>
        <NoSsr><MainProvider>{children}</MainProvider></NoSsr>
      </body>
    </html>
  );
}