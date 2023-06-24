import Portfolio from "@/components/container/portfolio";
import { Poppins } from "next/font/google";
import Head from "next/head";

const inter = Poppins({
  weight: ["100", "200", "300", "400", "500", "700", "800", "900"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
    <Head>
      <title>Fazal Karim</title>
      <meta name="description" content="Fazal Karim Portfolio"/>
    </Head>
      <main className={`${inter.className}`}>
        <Portfolio />
      </main>
    </>
  );
}
