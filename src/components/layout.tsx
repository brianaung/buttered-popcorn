import Link from "next/link";
import Searchbar from "./searchbar";

const Layout: React.FC<{
  children: React.ReactNode;
}> = (props) => {
  return (
    <div className="w-full h-full">
      <div className="flex items-center justify-between p-4">
        <Link href='/' className="font-bold">ButteredPopcorn</Link>
        <Searchbar />
      </div>
      <main className="w-full h-auto p-4">{props.children}</main>
    </div>
  )
}

export default Layout
