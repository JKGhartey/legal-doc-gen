import FooterLinks from "@/components/footer";
import Header from "@/components/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="bg-[url('/backgrounds/main.png')] bg-fixed bg-cover bg-center w-full flex flex-col items-center justify-center gap-7">
      <Header />
      <div className="items-center justify-center">{children}</div>
      <FooterLinks />
    </section>
  );
}
