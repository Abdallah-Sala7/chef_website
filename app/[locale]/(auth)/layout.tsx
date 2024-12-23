import AppBar from "@/components/layout/AppBar";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="min-h-screen">
      <AppBar />
      <div className="w-full max-w-2xl mx-auto px-8 py-10">{children}</div>
    </section>
  );
};

export default AuthLayout;
