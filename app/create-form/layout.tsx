import FooterLinks from "@/components/footer";
import Header from "@/components/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="bg-[url('/backgrounds/main.png')] bg-fixed bg-cover bg-center w-full flex flex-col items-center justify-center gap-7 md:h-screen lg:h-fit">
      <Header />
      <div className="items-center justify-center md:flex md:flex-1 lg:block">
        {children}
      </div>
      <FooterLinks />
    </section>
  );
}
