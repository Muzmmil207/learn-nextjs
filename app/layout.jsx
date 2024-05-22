import { Sidebar } from "@/components";
import "./globals.css";

export const metadata = {
  title: "Learn NEXT.JS",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <script src="https://use.fontawesome.com/releases/v6.3.0/js/all.js" crossorigin="anonymous"></script>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.5.5/css/simple-line-icons.min.css" rel="stylesheet" />
         */}
        <Sidebar />
        {children}
      </body>
    </html>
  );
}