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
  /* const userWithRole = session?.user as unknown as { email: string; randomKey: string }; */
  const role = session?.user?.role;
  const pathName = usePathname();

  return (
    <Navbar expand="lg" id="navbar-style">
      <Container>
        <Navbar.Brand href="/" id="brand-style">Project Janus</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-start">
            {/* Visible to all users who are not logged in */}
            {!session && (
              <Link href="/" passHref legacyBehavior key="home">
                <Nav.Link id="home-nav" active={pathName === '/'}>
                  Home
                </Nav.Link>
              </Link>
            )}
            {/* Visible to students */}
            {role === 'STUDENT' && (
              <>
                <Link href="/student-home-page" passHref legacyBehavior key="student-home-page">
                  <Nav.Link id="student-home-page-nav" active={pathName === '/student-home-page'}>
                    Student Home
                  </Nav.Link>
                </Link>

                <Link href="/student-profile" passHref legacyBehavior key="student-profile">
                  <Nav.Link id="student-profile-nav" active={pathName === '/student-profile'}>
                    Student Profile
                  </Nav.Link>
                </Link>
              </>
            )}

            {/* visible to companies */}
            {role === 'COMPANY' && (
                <Link href="/company-profile" passHref legacyBehavior key="company-profile">
                  <Nav.Link id="company-profile-nav" active={pathName === '/company-profile'}>
                    Company Profile
                  </Nav.Link>
                </Link>
            )}

            {/* visible to company + student */}
            {(role === 'COMPANY' || role === 'STUDENT') && (
              <Link href="/browsing-page" passHref legacyBehavior key="browsing-page">
              <Nav.Link id="browsing-page-nav" active={pathName === '/browsing-page'}>
                Browse
              </Nav.Link>
              </Link>
            )}

            {/* Visible to admins */}
            {role === 'ADMIN' && (
              <Nav.Link id="admin-stuff-nav" href="/admin" key="admin" active={pathName === '/admin'}>
                Admin
              </Nav.Link>
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
