import Link from "next/link";
import NavbarUser from "./NavbarUser";

const AppNavbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/app/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/app/add-money">Add Money</Link>
        </li>
        <li>
          <Link href="/app/spend-money">Spend Money</Link>
        </li>
      </ul>
     <NavbarUser/>
    </nav>
  );
};

export default AppNavbar;
