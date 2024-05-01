import Footer from "@/components/share/Footer";
import Header from "@/components/share/Header";
import ScrollToTop from "@/components/BackToTop/ScrollToTop";

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main className="min-h-screen grid place-content-center bg-blue-400">{children}</main>
  <ScrollToTop/>
      <Footer />
      
    </>
  )
}