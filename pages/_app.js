import './global.css'; // Assuming global.css is also inside the "pages" folder
import { Analytics } from "@vercel/analytics/next"

export default function MyApp({ Component, pageProps }) {
  return ( 
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
