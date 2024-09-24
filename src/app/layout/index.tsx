type DefaultLayoutProps = {
  children: React.ReactNode;
};

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div className="relative flex h-full flex-col">
      <main className="flex-auto">{children}</main>
      {/* <Footer /> */}
    </div>
  );
}
