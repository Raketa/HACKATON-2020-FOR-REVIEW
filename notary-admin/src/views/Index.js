/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import {Line, Bar} from "react-chartjs-2";
import claim from "./examples/Utils.js";
// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    NavItem,
    NavLink,
    Nav,
    Progress,
    Table,
    Container,
    Row,
    Col, CardImg, CardTitle, CardText, Media, Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, CardFooter, Pagination, PaginationItem, PaginationLink
} from "reactstrap";

// core components
import {
    chartOptions,
    parseOptions,
    chartExample1,
    chartExample2
} from "variables/charts.js";

import Header from "components/Headers/Header.js";
import Utils from "./examples/Utils";

class Index extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            activeNav: 1,
            chartExample1Data: "data1"
        };
        if (window.Chart)
        {
            parseOptions(Chart, chartOptions());
        }
        Utils.claims();
        Utils.register();
        Utils.auth();
    }

    toggleNavs = (e, index) => {
        e.preventDefault();
        this.setState({
            activeNav: index,
            chartExample1Data:
                    this.state.chartExample1Data === "data1" ? "data2" : "data1"
        });
    };

    render()
    {
        return (
                <>
                    <Header/>
                    {/* Page content */}
                    <Container className="mt--7" fluid>
                        <Row>
                            <Col className="mb-5 mb-xl-0" xl="8">
                                <Row>
                                    <div className="col">
                                        <Card className="shadow">
                                            <CardHeader className="border-0">
                                                <Row className="align-items-center">
                                                    <div className="col">
                                                        <h3 className="mb-0">Последние обращения</h3>
                                                    </div>
                                                    <div className="col text-right">
                                                        <Button
                                                                color="primary"
                                                                href="#pablo"
                                                                onClick={e => e.preventDefault()}
                                                                size="sm"
                                                        >
                                                            Развернуть
                                                        </Button>
                                                    </div>
                                                </Row>
                                            </CardHeader>
                                            <Table className="align-items-center table-flush" responsive>
                                                <thead className="thead-light">
                                                <tr>
                                                    <th scope="col">Тема</th>
                                                    <th scope="col">ФИО клиента</th>
                                                    <th scope="col">Status</th>
                                                    <th scope="col"/>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <th scope="row">
                                                        <Media>
                            <span className="mb-0 text-sm">
                              Банковский перевод
                            </span>
                                                        </Media>
                                                    </th>
                                                    <td>Негодяев Злыдень Иванович</td>
                                                    <td>
                                                        <Badge color="" className="badge-dot mr-4">
                                                            <i className="bg-warning"/>
                                                            Не обработано
                                                        </Badge>
                                                    </td>
                                                    <td className="text-right">
                                                        <UncontrolledDropdown>
                                                            <DropdownToggle
                                                                    className="btn-icon-only text-light"
                                                                    href="#pablo"
                                                                    role="button"
                                                                    size="sm"
                                                                    color=""
                                                                    onClick={e => e.preventDefault()}
                                                            >
                                                                <i className="fas fa-ellipsis-v"/>
                                                            </DropdownToggle>
                                                            <DropdownMenu className="dropdown-menu-arrow" right>
                                                                <DropdownItem
                                                                        href="#pablo"
                                                                        onClick={e => e.preventDefault()}
                                                                >
                                                                    Action
                                                                </DropdownItem>
                                                                <DropdownItem
                                                                        href="#pablo"
                                                                        onClick={e => e.preventDefault()}
                                                                >
                                                                    Another action
                                                                </DropdownItem>
                                                                <DropdownItem
                                                                        href="#pablo"
                                                                        onClick={e => e.preventDefault()}
                                                                >
                                                                    Something else here
                                                                </DropdownItem>
                                                            </DropdownMenu>
                                                        </UncontrolledDropdown>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <Media>
                            <span className="mb-0 text-sm">
                              Доверенность на квартиру
                            </span>
                                                        </Media>
                                                    </th>
                                                    <td>Негодяев Злыдень Иванович</td>
                                                    <td>
                                                        <Badge color="" className="badge-dot mr-4">
                                                            <i className="bg-warning"/>
                                                            Не обработано
                                                        </Badge>
                                                    </td>
                                                    <td className="text-right">
                                                        <UncontrolledDropdown>
                                                            <DropdownToggle
                                                                    className="btn-icon-only text-light"
                                                                    href="#pablo"
                                                                    role="button"
                                                                    size="sm"
                                                                    color=""
                                                                    onClick={e => e.preventDefault()}
                                                            >
                                                                <i className="fas fa-ellipsis-v"/>
                                                            </DropdownToggle>
                                                            <DropdownMenu className="dropdown-menu-arrow" right>
                                                                <DropdownItem
                                                                        href="#pablo"
                                                                        onClick={e => e.preventDefault()}
                                                                >
                                                                    Action
                                                                </DropdownItem>
                                                                <DropdownItem
                                                                        href="#pablo"
                                                                        onClick={e => e.preventDefault()}
                                                                >
                                                                    Another action
                                                                </DropdownItem>
                                                                <DropdownItem
                                                                        href="#pablo"
                                                                        onClick={e => e.preventDefault()}
                                                                >
                                                                    Something else here
                                                                </DropdownItem>
                                                            </DropdownMenu>
                                                        </UncontrolledDropdown>
                                                    </td>
                                                </tr>

                                                </tbody>
                                            </Table>
                                        </Card>
                                    </div>
                                </Row>
                            </Col>
                            <Col xl="4">
                                <Card className="shadow">
                                    <CardHeader className="border-0">
                                        <Row className="align-items-center">
                                            <div className="col">
                                                <h3 className="mb-0">Обращения от сотрудников Банка</h3>
                                            </div>
                                            <div className="col text-right">
                                                <Button
                                                        color="primary"
                                                        href="#pablo"
                                                        onClick={e => e.preventDefault()}
                                                        size="sm"
                                                >
                                                    Развернуть
                                                </Button>
                                            </div>
                                        </Row>
                                    </CardHeader>
                                    <Table className="align-items-center table-flush" responsive>
                                        <thead className="thead-light">
                                        <tr>
                                            <th scope="col">Тема</th>
                                            <th scope="col">ФИО клиента</th>
                                            <th scope="col">Status</th>
                                            <th scope="col"/>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <th scope="row">
                                                <Media>
                            <span className="mb-0 text-sm">
                              Банковский перевод
                            </span>
                                                </Media>
                                            </th>
                                            <td>Негодяев Злыдень Иванович</td>
                                            <td>
                                                <Badge color="" className="badge-dot mr-4">
                                                    <i className="bg-warning"/>
                                                    Не обработано
                                                </Badge>
                                            </td>
                                            <td className="text-right">
                                                <UncontrolledDropdown>
                                                    <DropdownToggle
                                                            className="btn-icon-only text-light"
                                                            href="#pablo"
                                                            role="button"
                                                            size="sm"
                                                            color=""
                                                            onClick={e => e.preventDefault()}
                                                    >
                                                        <i className="fas fa-ellipsis-v"/>
                                                    </DropdownToggle>
                                                    <DropdownMenu className="dropdown-menu-arrow" right>
                                                        <DropdownItem
                                                                href="#pablo"
                                                                onClick={e => e.preventDefault()}
                                                        >
                                                            Action
                                                        </DropdownItem>
                                                        <DropdownItem
                                                                href="#pablo"
                                                                onClick={e => e.preventDefault()}
                                                        >
                                                            Another action
                                                        </DropdownItem>
                                                        <DropdownItem
                                                                href="#pablo"
                                                                onClick={e => e.preventDefault()}
                                                        >
                                                            Something else here
                                                        </DropdownItem>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <Media>
                            <span className="mb-0 text-sm">
                              Доверенность на квартиру
                            </span>
                                                </Media>
                                            </th>
                                            <td>Негодяев Злыдень Иванович</td>
                                            <td>
                                                <Badge color="" className="badge-dot mr-4">
                                                    <i className="bg-warning"/>
                                                    Не обработано
                                                </Badge>
                                            </td>
                                            <td className="text-right">
                                                <UncontrolledDropdown>
                                                    <DropdownToggle
                                                            className="btn-icon-only text-light"
                                                            href="#pablo"
                                                            role="button"
                                                            size="sm"
                                                            color=""
                                                            onClick={e => e.preventDefault()}
                                                    >
                                                        <i className="fas fa-ellipsis-v"/>
                                                    </DropdownToggle>
                                                    <DropdownMenu className="dropdown-menu-arrow" right>
                                                        <DropdownItem
                                                                href="#pablo"
                                                                onClick={e => e.preventDefault()}
                                                        >
                                                            Action
                                                        </DropdownItem>
                                                        <DropdownItem
                                                                href="#pablo"
                                                                onClick={e => e.preventDefault()}
                                                        >
                                                            Another action
                                                        </DropdownItem>
                                                        <DropdownItem
                                                                href="#pablo"
                                                                onClick={e => e.preventDefault()}
                                                        >
                                                            Something else here
                                                        </DropdownItem>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                </Card>
                            </Col>

                        </Row>
                        <Row className="mt-5">
                            <Col className="mb-5 mb-xl-0" xl="8">
                                <Row>
                                    <div className="col">
                                        <Card className="shadow">
                                            <CardHeader className="border-0">
                                                <Row className="align-items-center">
                                                    <div className="col">
                                                        <h3 className="mb-0">Ждут вашего ответа</h3>
                                                    </div>
                                                    <div className="col text-right">
                                                        <Button
                                                                color="primary"
                                                                href="#pablo"
                                                                onClick={e => e.preventDefault()}
                                                                size="sm"
                                                        >
                                                            Развернуть
                                                        </Button>
                                                    </div>
                                                </Row>
                                            </CardHeader>
                                            <Table className="align-items-center table-flush" responsive>
                                                <thead className="thead-light">
                                                <tr>
                                                    <th scope="col">Тема</th>
                                                    <th scope="col">ФИО клиента</th>
                                                    <th scope="col">Status</th>
                                                    <th scope="col"/>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <th scope="row">
                                                        <Media>
                            <span className="mb-0 text-sm">
                              Банковский перевод
                            </span>
                                                        </Media>
                                                    </th>
                                                    <td>Петренко Петр Петрович</td>
                                                    <td>
                                                        <Badge color="" className="badge-dot mr-4">
                                                            <i className="bg-gradient-yellow"/>
                                                            В процессе
                                                        </Badge>
                                                    </td>
                                                    <td className="text-right">
                                                        <UncontrolledDropdown>
                                                            <DropdownToggle
                                                                    className="btn-icon-only text-light"
                                                                    href="#pablo"
                                                                    role="button"
                                                                    size="sm"
                                                                    color=""
                                                                    onClick={e => e.preventDefault()}
                                                            >
                                                                <i className="fas fa-ellipsis-v"/>
                                                            </DropdownToggle>
                                                            <DropdownMenu className="dropdown-menu-arrow" right>
                                                                <DropdownItem
                                                                        href="#pablo"
                                                                        onClick={e => e.preventDefault()}
                                                                >
                                                                    Action
                                                                </DropdownItem>
                                                                <DropdownItem
                                                                        href="#pablo"
                                                                        onClick={e => e.preventDefault()}
                                                                >
                                                                    Another action
                                                                </DropdownItem>
                                                                <DropdownItem
                                                                        href="#pablo"
                                                                        onClick={e => e.preventDefault()}
                                                                >
                                                                    Something else here
                                                                </DropdownItem>
                                                            </DropdownMenu>
                                                        </UncontrolledDropdown>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <Media>
                            <span className="mb-0 text-sm">
                              Банковский перевод
                            </span>
                                                        </Media>
                                                    </th>
                                                    <td>
                                                        Петренко Петр Петрович
                                                    </td>
                                                    <td>
                                                        <Badge color="" className="badge-dot mr-4">
                                                            <i className="bg-gradient-yellow"/>
                                                            В процессе
                                                        </Badge>
                                                    </td>
                                                    <td className="text-right">
                                                        <UncontrolledDropdown>
                                                            <DropdownToggle
                                                                    className="btn-icon-only text-light"
                                                                    href="#pablo"
                                                                    role="button"
                                                                    size="sm"
                                                                    color=""
                                                                    onClick={e => e.preventDefault()}
                                                            >
                                                                <i className="fas fa-ellipsis-v"/>
                                                            </DropdownToggle>
                                                            <DropdownMenu className="dropdown-menu-arrow" right>
                                                                <DropdownItem
                                                                        href="#pablo"
                                                                        onClick={e => e.preventDefault()}
                                                                >
                                                                    Action
                                                                </DropdownItem>
                                                                <DropdownItem
                                                                        href="#pablo"
                                                                        onClick={e => e.preventDefault()}
                                                                >
                                                                    Another action
                                                                </DropdownItem>
                                                                <DropdownItem
                                                                        href="#pablo"
                                                                        onClick={e => e.preventDefault()}
                                                                >
                                                                    Something else here
                                                                </DropdownItem>
                                                            </DropdownMenu>
                                                        </UncontrolledDropdown>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <Media>
                            <span className="mb-0 text-sm">
                              Банковский перевод
                            </span>
                                                        </Media>
                                                    </th>
                                                    <td>
                                                        Негодяев Злыдень Иванович
                                                    </td>
                                                    <td>
                                                        <Badge color="" className="badge-dot mr-4">
                                                            <i className="bg-danger"/>
                                                            Незаконное действие
                                                        </Badge>
                                                    </td>
                                                    <td className="text-right">
                                                        <UncontrolledDropdown>
                                                            <DropdownToggle
                                                                    className="btn-icon-only text-light"
                                                                    href="#pablo"
                                                                    role="button"
                                                                    size="sm"
                                                                    color=""
                                                                    onClick={e => e.preventDefault()}
                                                            >
                                                                <i className="fas fa-ellipsis-v"/>
                                                            </DropdownToggle>
                                                            <DropdownMenu className="dropdown-menu-arrow" right>
                                                                <DropdownItem
                                                                        href="#pablo"
                                                                        onClick={e => e.preventDefault()}
                                                                >
                                                                    Action
                                                                </DropdownItem>
                                                                <DropdownItem
                                                                        href="#pablo"
                                                                        onClick={e => e.preventDefault()}
                                                                >
                                                                    Another action
                                                                </DropdownItem>
                                                                <DropdownItem
                                                                        href="#pablo"
                                                                        onClick={e => e.preventDefault()}
                                                                >
                                                                    Something else here
                                                                </DropdownItem>
                                                            </DropdownMenu>
                                                        </UncontrolledDropdown>
                                                    </td>
                                                </tr>

                                                </tbody>
                                            </Table>
                                        </Card>
                                    </div>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </>
        );
    }
}

export default Index;
