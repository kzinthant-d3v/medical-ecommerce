import styled from 'styled-components';
import { useRouter } from 'next/router';
import Link from 'next/link';

const NavContainer = styled.div`
  height: 100vh;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const NavBar = styled.div`
  background-color: ${(props) => props.theme.primary};
  width: 200px;
  height: 700px;
  border-radius: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
`;

const NavItem = styled.div`
  display: flex;
  justify-content: flex-start;
  background-color: ${(props) => (props.active ? props.theme.primaryLight : '')};
  width: 180px;
  padding: 10px 2px 10px 20px;
  margin-top: 20px;
  border-radius: 10px;
`;

export default function Nav(): JSX.Element {
  const router = useRouter();
  return (
    <NavContainer>
      <NavBar>
        <Link href="/admin/home">
          <NavItem active={router.pathname === '/admin/home'}>
            <i className="nav-icon fas fa-chart-line"></i>
            Dashboard
          </NavItem>
        </Link>
        <Link href="/admin/category">
          <NavItem active={router.pathname === '/admin/category'}>
            <i className="nav-icon fas fa-bookmark"></i>Categories
          </NavItem>
        </Link>
        <Link href="/admin/subcategory">
          <NavItem active={router.pathname === '/admin/subcategory'}>
            <i className="nav-icon fas fa-box-open"></i>Sub Categories
          </NavItem>
        </Link>
        <Link href="/admin/product">
          <NavItem active={router.pathname === '/admin/product'}>
            <i className="nav-icon fas fa-briefcase"></i>Products
          </NavItem>
        </Link>
      </NavBar>
    </NavContainer>
  );
}
