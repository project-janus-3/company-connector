/* eslint-disable react/jsx-indent, @typescript-eslint/indent */

'use client';

import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { BoxArrowRight, Lock, PersonFill, PersonPlusFill } from 'react-bootstrap-icons';

const NavBar: React.FC = () => {
  const { data: session } = useSession();
  const currentUser = session?.user?.email;
  const userWithRole = session?.user as { email: string; randomKey: string };
  const role = userWithRole?.randomKey;
  const pathName = usePathname();
  return (
    <Navbar expand="lg" id="navbar-style">
      <Container>
        <Navbar.Brand href="/" id="brand-style">Project Janus</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-start">
            {/* { currentUser */}
               {/* ? [ */}
                  <Link href="/" passHref legacyBehavior key="home">
                  <Nav.Link
                    id="add-stuff-nav"
                    active={pathName === '/'}
                  >
                    Home
                  </Nav.Link>
                  </Link>
                  <Link href="/student-profile" passHref legacyBehavior key="profile">
                  <Nav.Link
                    id="profile-nav"
                    key="profile"
                    active={pathName === '/student-profile'}
                  >
                    Profile
                  </Nav.Link>
                  </Link>
                  <Nav.Link id="list-stuff-nav" href="/list" key="list" active={pathName === '/list'}>
                    Browse
                  </Nav.Link>
            {/* }    ] */}
            {/* }: ''} */}

            <Nav.Link href="#" key="#" active={pathName === '#'}>
              Home
            </Nav.Link>

            <Nav.Link href="#" key="#" active={pathName === '#'}>
              Profile
            </Nav.Link>

            <Nav.Link href="#" key="#" active={pathName === '#'}>
              Browse
            </Nav.Link>

            {currentUser && role === 'ADMIN' ? (
              <Nav.Link id="admin-stuff-nav" href="/admin" key="admin" active={pathName === '/admin'}>
                Admin
              </Nav.Link>
            ) : (
              ''
            )}
          </Nav>
          <Nav className="justify-content-end">
            {session ? (
              <NavDropdown id="login-dropdown navlink-style" title={currentUser}>
                <NavDropdown.Item id="login-dropdown-sign-out navlink-style" href="/api/auth/signout">
                  <BoxArrowRight />
                  Sign Out
                </NavDropdown.Item>
                <NavDropdown.Item id="login-dropdown-change-password navlink-style" href="/auth/change-password">
                  <Lock />
                  Change Password
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <NavDropdown id="login-dropdown navlink-style" title="Login">
                <NavDropdown.Item id="login-dropdown-sign-in navlink-style" href="/auth/signin">
                  <PersonFill />
                  Sign in
                </NavDropdown.Item>
                <NavDropdown.Item id="login-dropdown-sign-up navlink-style" href="/auth/signup">
                  <PersonPlusFill />
                  Sign up
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
