import React, {useState} from "react";
import {
    Col,
    Collapse, Container, DropdownItem, DropdownMenu, DropdownToggle,
    Nav,
    Navbar,
    NavbarBrand, NavbarText,
    NavbarToggler,
    NavItem,
    NavLink, Row,
    UncontrolledDropdown
} from "reactstrap";
import {Table1} from "./components/Table1";
import {Form1} from "./components/Form1";
import {Chart1} from "./components/Chart1";
import {Chart2} from "./components/Chart2";


export const PageLayout = () => {
    const [toggleBar, setToggleBar] = useState(false);
    const [page, setPage] = useState('dashboard');
    const onToggleBar = () => setToggleBar(!toggleBar);
    const onClickPage = (_page) => () => setPage(_page);


    const Content = ({page}) => {
        switch (page) {
            case 'dashboard':
                return (
                    <Container>
                        <Row className='my-4'>
                            <Col md={7}>
                                <Table1 maxHeight={400}/>
                            </Col>
                            <Col md={5}>
                                <Chart1 maxHeight={400}/>
                            </Col>
                        </Row>
                        <Row className='my-4'>
                            <Col md={7}>
                                <Chart2 maxHeight={400}/>
                            </Col>
                            <Col md={5}>
                                <Form1 maxHeight={400}/>
                            </Col>
                        </Row>
                    </Container>
                )
            case 'dashboard2':
                return (
                    <Container fluid>
                        <Row className='my-4'>
                            <Col md={7}>
                                <Table1 maxHeight={400}/>
                            </Col>
                            <Col md={5}>
                                <Chart1 maxHeight={400}/>
                            </Col>
                        </Row>
                        <Row className='my-4'>
                            <Col md={7}>
                                <Chart2 maxHeight={400}/>
                            </Col>
                            <Col md={5}>
                                <Form1 maxHeight={400}/>
                            </Col>
                        </Row>
                    </Container>
                )
            case 'tabel':
                return <Table1 maxHeight={400}/>
            case 'form':
                return <Form1 maxHeight={400}/>
            case 'chart1':
                return <Chart1 maxHeight={400}/>
            case 'chart2':
                return <Chart2 maxHeight={400}/>
            default:
                return <div className='mt-5 text-center'>NONE PAGE</div>
        }
    }

    return (
        <div>
            <Navbar
                color="light"
                expand="md"
                light
            >
                <NavbarBrand href="/" className={'ms-5 me-4'}>
                    www.x-plugin.pl
                </NavbarBrand>
                <NavbarToggler onClick={onToggleBar}/>
                <Collapse navbar>
                    <Nav
                        className="me-auto"
                        navbar
                    >
                        <NavItem>
                            <NavLink href="https://github.com/marcin86mak/demo-simplebar-react">
                                GitHub
                            </NavLink>
                        </NavItem>
                        <UncontrolledDropdown
                            inNavbar
                            nav
                        >
                            <DropdownToggle
                                caret
                                nav
                            >
                                Options
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Option 1
                                </DropdownItem>
                                <DropdownItem>
                                    Option 2
                                </DropdownItem>
                                <DropdownItem divider/>
                                <DropdownItem>
                                    Reset
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    <NavbarText>
                        DEMO - demo-simplebar-react
                    </NavbarText>
                </Collapse>
            </Navbar>
            <div className='border min-vh-100 menu-left'>
                <Nav vertical pills>
                    <NavItem active={page === 'dashboard'}>
                        <NavLink active={page === 'dashboard'} href="#" onClick={onClickPage('dashboard')}>
                            Tablica
                        </NavLink>
                    </NavItem>
                    <NavItem active={page === 'dashboard2'}>
                        <NavLink active={page === 'dashboard2'} href="#" onClick={onClickPage('dashboard2')}>
                            Tablica 2
                        </NavLink>
                    </NavItem>
                    <NavItem active={page === 'tabel'}>
                        <NavLink active={page === 'tabel'} href="#" onClick={onClickPage('tabel')}>
                            Tabela
                        </NavLink>
                    </NavItem>
                    <NavItem active={page === 'form'}>
                        <NavLink active={page === 'form'} href="#" onClick={onClickPage('form')}>
                            Formularz
                        </NavLink>
                    </NavItem>
                    <NavItem active={page === 'chart1'}>
                        <NavLink active={page === 'chart1'} href="#" onClick={onClickPage('chart1')}>
                            Wykres 1
                        </NavLink>
                    </NavItem>
                    <NavItem active={page === 'chart2'}>
                        <NavLink active={page === 'chart2'} href="#" onClick={onClickPage('chart2')}>
                            Wykres 2
                        </NavLink>
                    </NavItem>
                </Nav>
            </div>
            <div className='min-vh-100 content'>
                <Content page={page}/>
            </div>
        </div>
    )
}