export default async function LetterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex flex-col flex-auto items-center justify-center">
      {children}
    </section>
  );
}
