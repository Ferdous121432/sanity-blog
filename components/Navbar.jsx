import Link from "next/link";
import Image from "next/image";

import { auth, signIn, signOut } from "@/auth";

async function Navbar() {
  const session = await auth();
  // console.log(session);

  return (
    <div className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={144} height={30} />
        </Link>

        <div className="flex items-center gap-5 text-black default">
          {session && session?.user ? (
            <>
              <Link href="/startup/create">
                <span>Create</span>
              </Link>

              <form
                action={async () => {
                  "use server";

                  await signOut({ redirectTo: "/" });
                }}>
                <button type="submit">
                  <span className="max-sm:hidden">Logout</span>
                </button>
              </form>

              <Image
                src={session?.user?.image || ""}
                alt="Profile"
                width={40}
                height={40}
                className="rounded-full"
              />

              <Link href={`/user/${session?.id}`}>
                <span>{session?.user?.name}</span>
              </Link>
            </>
          ) : (
            <form
              action={async () => {
                "use server";

                await signIn("github");
              }}>
              <button type="submit">Login</button>
            </form>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
