import styled from 'styled-components';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import firebase from '../firebase/config';

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
  background-color: ${(props) => {
    return (props as any).active ? props.theme.primaryLight : '';
  }};
  width: 180px;
  padding: 10px 2px 10px 20px;
  margin-top: 20px;
  border-radius: 10px;
`;

export default function Nav(): JSX.Element {
  const router = useRouter();

  const mode = useSelector((state) => (state as any).mode);
  const fillColor = mode === 'light' ? 'black' : 'cyan';
  return (
    <NavContainer>
      <NavBar>
        <Link href="/admin/home">
          <NavItem
            style={{
              backgroundColor: router.pathname.includes('/admin/home') ? 'white' : '',
              color: router.pathname.includes('/admin/home') ? 'black' : '',
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 3C2.44772 3 2 3.44772 2 4C2 4.55228 2.44772 5 3 5V13C3 14.1046 3.89543 15 5 15H7.58579L6.29289 16.2929C5.90237 16.6834 5.90237 17.3166 6.29289 17.7071C6.68342 18.0976 7.31658 18.0976 7.70711 17.7071L10 15.4142L12.2929 17.7071C12.6834 18.0976 13.3166 18.0976 13.7071 17.7071C14.0976 17.3166 14.0976 16.6834 13.7071 16.2929L12.4142 15H15C16.1046 15 17 14.1046 17 13V5C17.5523 5 18 4.55228 18 4C18 3.44772 17.5523 3 17 3H3ZM14 7C14 6.44772 13.5523 6 13 6C12.4477 6 12 6.44772 12 7V11C12 11.5523 12.4477 12 13 12C13.5523 12 14 11.5523 14 11V7ZM11 8C11 7.44772 10.5523 7 10 7C9.44772 7 9 7.44772 9 8V11C9 11.5523 9.44772 12 10 12C10.5523 12 11 11.5523 11 11V8ZM8 9C8 8.44772 7.55228 8 7 8C6.44772 8 6 8.44772 6 9V11C6 11.5523 6.44772 12 7 12C7.55228 12 8 11.5523 8 11V9Z"
                fill={fillColor}
              />
            </svg>
            <span>&nbsp;</span>မှတ်တမ်းများ
          </NavItem>
        </Link>
        <Link href="/admin/category">
          <NavItem
            style={{
              backgroundColor: router.pathname.includes('/admin/category') ? 'white' : '',
              color: router.pathname.includes('/admin/category') ? 'black' : '',
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 3C3.89543 3 3 3.89543 3 5V7C3 8.10457 3.89543 9 5 9H7C8.10457 9 9 8.10457 9 7V5C9 3.89543 8.10457 3 7 3H5Z"
                fill={fillColor}
              />
              <path
                d="M5 11C3.89543 11 3 11.8954 3 13V15C3 16.1046 3.89543 17 5 17H7C8.10457 17 9 16.1046 9 15V13C9 11.8954 8.10457 11 7 11H5Z"
                fill={fillColor}
              />
              <path
                d="M11 5C11 3.89543 11.8954 3 13 3H15C16.1046 3 17 3.89543 17 5V7C17 8.10457 16.1046 9 15 9H13C11.8954 9 11 8.10457 11 7V5Z"
                fill={fillColor}
              />
              <path
                d="M11 13C11 11.8954 11.8954 11 13 11H15C16.1046 11 17 11.8954 17 13V15C17 16.1046 16.1046 17 15 17H13C11.8954 17 11 16.1046 11 15V13Z"
                fill={fillColor}
              />
            </svg>
            <span>&nbsp;</span>အမျိုးအမည်စီမံရန်
          </NavItem>
        </Link>
        <Link href="/admin/subcategory">
          <NavItem
            style={{
              backgroundColor: router.pathname.includes('/admin/subcategory') ? 'white' : '',
              color: router.pathname.includes('/admin/subcategory') ? 'black' : '',
            }}
          >
            <svg
              width="22"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 3C3.89543 3 3 3.89543 3 5V7C3 8.10457 3.89543 9 5 9H7C8.10457 9 9 8.10457 9 7V5C9 3.89543 8.10457 3 7 3H5Z"
                fill={fillColor}
              />
              <path
                d="M5 11C3.89543 11 3 11.8954 3 13V15C3 16.1046 3.89543 17 5 17H7C8.10457 17 9 16.1046 9 15V13C9 11.8954 8.10457 11 7 11H5Z"
                fill={fillColor}
              />
              <path
                d="M11 5C11 3.89543 11.8954 3 13 3H15C16.1046 3 17 3.89543 17 5V7C17 8.10457 16.1046 9 15 9H13C11.8954 9 11 8.10457 11 7V5Z"
                fill={fillColor}
              />
              <path
                d="M14 11C14.5523 11 15 11.4477 15 12V13H16C16.5523 13 17 13.4477 17 14C17 14.5523 16.5523 15 16 15H15V16C15 16.5523 14.5523 17 14 17C13.4477 17 13 16.5523 13 16V15H12C11.4477 15 11 14.5523 11 14C11 13.4477 11.4477 13 12 13H13V12C13 11.4477 13.4477 11 14 11Z"
                fill={fillColor}
              />
            </svg>
            <span>&nbsp;</span>တစ်ခုခြင်းအမျိုးအစား
          </NavItem>
        </Link>
        <Link href="/admin/product">
          <NavItem
            style={{
              backgroundColor: router.pathname.includes('/admin/product') ? 'white' : '',
              color: router.pathname.includes('/admin/product') ? 'black' : '',
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5 4C3.34315 4 2 5.34315 2 7V13C2 14.6569 3.34315 16 5 16H15C16.6569 16 18 14.6569 18 13V7C18 5.34315 16.6569 4 15 4H5ZM4 13V12H9V14H5C4.44772 14 4 13.5523 4 13ZM11 14H15C15.5523 14 16 13.5523 16 13V12H11V14ZM11 10H16V8H11V10ZM9 8H4V10H9V8Z"
                fill={fillColor}
              />
            </svg>
            <span>&nbsp;</span>ပစ္စည်းစီမံရန်
          </NavItem>
        </Link>
        <NavItem
          onClick={() => {
            firebase.auth().signOut();
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3 3C2.44772 3 2 3.44772 2 4V16C2 16.5523 2.44772 17 3 17C3.55228 17 4 16.5523 4 16V4C4 3.44772 3.55228 3 3 3ZM13.2929 12.2929C12.9024 12.6834 12.9024 13.3166 13.2929 13.7071C13.6834 14.0976 14.3166 14.0976 14.7071 13.7071L17.7071 10.7071C17.8946 10.5196 18 10.2652 18 10C18 9.73478 17.8946 9.48043 17.7071 9.29289L14.7071 6.29289C14.3166 5.90237 13.6834 5.90237 13.2929 6.29289C12.9024 6.68342 12.9024 7.31658 13.2929 7.70711L14.5858 9L7 9C6.44771 9 6 9.44772 6 10C6 10.5523 6.44772 11 7 11H14.5858L13.2929 12.2929Z"
              fill={fillColor}
            />
          </svg>
          <span>&nbsp;</span>ထွက်ရန်
        </NavItem>
      </NavBar>
    </NavContainer>
  );
}
