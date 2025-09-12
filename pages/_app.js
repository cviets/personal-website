import './global.css'; // Assuming global.css is also inside the "pages" folder

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
