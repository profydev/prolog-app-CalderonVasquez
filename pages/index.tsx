import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { Routes } from "@config/routes";

const Header = styled.header`
  width: 100%;
  height: 80px;
  padding: 0 2rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
`;

const Navigation = styled.nav`
  ul {
    list-style: none;
    display: flex;
    gap: 2rem;
  }

  a {
    text-decoration: none;
    color: #333;
    font-weight: bold;

    &:hover {
      color: #7f56d9;
    }
  }
`;

const DashboardLink = styled.a`
  color: #fff;
  background-color: #7f56d9;
  padding: 0.625rem 1.125rem;
  border-radius: 0.6875rem;
  text-decoration: none;
  font-weight: bold;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #6941c6;
  }
`;

const LogoLink = styled.a`
  display: inline-block;
`;

// const ContactButton = styled.button`
//   position: absolute;
//   top: 2.5rem;
//   right: 2.5rem;
//   padding: 1rem;
//   background: #7f56d9;
//   border-radius: 50%;
//   box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
//   border: none;
//   cursor: pointer;

//   &:hover {
//     background: #6941c6;
//   }
// `;

const HomePage = () => {
  return (
    <div>
      <Header>
        <Link href={Routes.home}>
          <LogoLink>
            <Image
              src="/icons/logo-large.svg"
              alt="Prolog logo"
              width={120}
              height={40}
            />
          </LogoLink>
        </Link>
        <Navigation>
          <ul>
            <li>
              <Link href={Routes.home}>Home</Link>
            </li>
            <li>
              <Link href={Routes.products}>Products</Link>
            </li>
            <li>
              <Link href={Routes.documentation}>Documentation</Link>
            </li>
            <li>
              <Link href={Routes.pricing}>Pricing</Link>
            </li>
          </ul>
        </Navigation>
        <Link href={Routes.projects}>
          <DashboardLink>
            <span>Open Dashboard</span>
          </DashboardLink>
        </Link>
      </Header>
      {/* <ContactButton
        onClick={() =>
          alert(
            "Implement this in Challenge 2 - Modal:\n\nhttps://profy.dev/rjs-challenge-modal"
          )
        }
      >
        <Image src="/icons/message.svg" alt="Contact" width={24} height={24} />
      </ContactButton> */}
    </div>
  );
};

export default HomePage;
