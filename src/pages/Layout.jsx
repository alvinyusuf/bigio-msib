import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function Layout({ children }) {
  return (
    <div className="flex h-screen">
      <div className="border-r-2 w-60 py-8 space-y-4">
        <Sidebar />
      </div>
      <div className="flex flex-1 flex-col overflow-auto p-6 gap-y-12">
        <Header text={"Stories"} />
        <div id="content" className="space-y-4">
          {children}
        </div>
      </div>
    </div>
  );
}
