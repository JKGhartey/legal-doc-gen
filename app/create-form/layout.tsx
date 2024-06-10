import FooterLinks from "@/components/footer";
import Header from "@/components/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="bg-[url('/backgrounds/main.png')] bg-fixed bg-cover bg-center h-screen w-full flex flex-col items-center justify-center">
      <Header />
      <div className="flex-1 flex items-center justify-center">{children}</div>
      <FooterLinks />
    </section>
  );
}
