import Footer from "../../components/share/Footer";
import Header from "../../components/share/Header";
import styles from'./about.module.css';
import ScrollToTop from "@/components/BackToTop/ScrollToTop";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <ScrollToTop />
      <Footer />
    </>
  )
}