import Footer from "../../components/share/Footer";
import Header from "../../components/share/Header";
import styles from "./kontakt.module.css";
//import './kontakt.module.css'

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <Header />
    <main className={styles.main}>{children}</main>

    <Footer />
    
  </>
  )
}