import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";

const Header = () => {
	return (
		<header>
			<Container>
				<Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
					<LinkContainer to="/">
						<Navbar.Brand>MyShop</Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ml-auto">
							<LinkContainer to="/cart">
								<Nav.Link>
									<FaShoppingCart /> Cart
								</Nav.Link>
							</LinkContainer>
							<LinkContainer to="/login">
								<Nav.Link>
									<FaUserAlt /> Sign In
								</Nav.Link>
							</LinkContainer>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</Container>
		</header>
	);
};

export default Header;
