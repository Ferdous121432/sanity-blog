import Navbar from "../../components/Navbar";

export default function layout({ children }) {
  return (
    <main className="font-work-sans">
      <Navbar />
      <main>{children}</main>
    </main>
  );
}
