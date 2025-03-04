import AppBar from "@/components/layout/AppBar";

const NewOrderLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AppBar />

      <main className="main-layout">{children}</main>
    </div>
  );
};

export default NewOrderLayout;
