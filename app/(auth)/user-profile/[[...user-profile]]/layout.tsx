
import Footer from "@/components/share/Footer";
import Header from "@/components/share/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main className="content">{children}</main>
      <Footer />
    </div>
  )
}