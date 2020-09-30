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
// react plugin used to create google maps
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
} from "react-google-maps";

// reactstrap components
import {
    Badge,
    Button,
    Card,
    CardBody, CardFooter,
    CardHeader,
    Col,
    Container, DropdownItem, DropdownMenu,
    DropdownToggle,
    FormGroup,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Media, Pagination, PaginationItem, PaginationLink,
    Row,
    Table,
    UncontrolledDropdown
} from "reactstrap";

// core components
import Header from "components/Headers/Header.js";
import ReactDatetime from "react-datetime";

// mapTypeId={google.maps.MapTypeId.ROADMAP}
class Maps extends React.Component {
    render()
    {
        return (
                <>
                    <Header/>
                    {/* Page content */}
                    <Container className="mt--7" fluid>
                        <Row>
                            <div className="col">
                                <Card className="shadow">
                                    <CardHeader className="border-0">
                                        <h3 className="mb-0">Поиск</h3>
                                    </CardHeader>
                                    <CardBody>
                                        <div className="pl-lg-4">
                                            <Row>
                                                <Col lg="6">
                                                    <FormGroup>
                                                        <label
                                                                className="form-control-label"
                                                                htmlFor="input-email"
                                                        >
                                                            ФИО
                                                        </label>
                                                        <Input
                                                                className="form-control-alternative"
                                                                id="input-email"
                                                                placeholder="Иванов Иван Иванович"
                                                                type="email"
                                                        />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Button color="default" outline type="button">
                                                Поиск
                                            </Button>
                                        </div>

                                    </CardBody>
                                </Card>
                            </div>
                        </Row>
                        <Row className="mt-5">
                            <div className="col">
                                <Card className="shadow">
                                    <CardHeader className="border-0">
                                        <h3 className="mb-0">Клиенты</h3>
                                    </CardHeader>

                                    <Table
                                            className="align-items-center table-flush"
                                            responsive
                                    >
                                        <thead className="thead-light">
                                        <tr>
                                            <th scope="col">имя</th>
                                            <th scope="col">статус</th>
                                            <th scope="col">действия</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <th scope="row">
                                                <Media className="align-items-center">
                                                    <Media>
                            <span className="mb-0 text-sm">
                              Иванов Иван Иванович
                            </span>
                                                    </Media>
                                                </Media>
                                            </th>
                                            <td>
                                                <Badge color="" className="badge-dot mr-4">
                                                    <i className="bg-success"/>
                                                </Badge>
                                            </td>

                                            <td className="align-items-center table-flush">
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
                                                            Отправить смс
                                                        </DropdownItem>
                                                        <DropdownItem
                                                                href="#pablo"
                                                                onClick={e => e.preventDefault()}
                                                        >
                                                            Отправить email
                                                        </DropdownItem>
                                                        <DropdownItem
                                                                href="#pablo"
                                                                onClick={e => e.preventDefault()}
                                                        >
                                                            Показать номер
                                                        </DropdownItem>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <Media className="align-items-center">
                                                    <Media>
                            <span className="mb-0 text-sm">
                              Негодяев Злыдень Иванович
                            </span>
                                                    </Media>
                                                </Media>
                                            </th>
                                            <td>
                                                <Badge color="" className="badge-dot mr-4">
                                                    <i className="bg-warning"/>
                                                </Badge>
                                            </td>

                                            <td className="table-flush">
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
                                                            Отправить смс
                                                        </DropdownItem>
                                                        <DropdownItem
                                                                href="#pablo"
                                                                onClick={e => e.preventDefault()}
                                                        >
                                                            Отправить email
                                                        </DropdownItem>
                                                        <DropdownItem
                                                                href="#pablo"
                                                                onClick={e => e.preventDefault()}
                                                        >
                                                            Показать номер
                                                        </DropdownItem>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <Media className="align-items-center">
                                                    <Media>
                            <span className="mb-0 text-sm">
                              Петренко Петр Петрович
                            </span>
                                                    </Media>
                                                </Media>
                                            </th>
                                            <td>
                                                <Badge color="" className="badge-dot mr-4">
                                                    <i className="bg-warning"/>
                                                </Badge>
                                            </td>

                                            <td className="table-flush">
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
                                                            Отправить смс
                                                        </DropdownItem>
                                                        <DropdownItem
                                                                href="#pablo"
                                                                onClick={e => e.preventDefault()}
                                                        >
                                                            Отправить email
                                                        </DropdownItem>
                                                        <DropdownItem
                                                                href="#pablo"
                                                                onClick={e => e.preventDefault()}
                                                        >
                                                            Показать номер
                                                        </DropdownItem>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>
                                            </td>
                                        </tr>

                                        </tbody>
                                    </Table>
                                    <CardFooter className="py-4">
                                        <nav aria-label="...">
                                            <Pagination
                                                    className="pagination justify-content-end mb-0"
                                                    listClassName="justify-content-end mb-0"
                                            >
                                                <PaginationItem className="disabled">
                                                    <PaginationLink
                                                            href="#pablo"
                                                            onClick={e => e.preventDefault()}
                                                            tabIndex="-1"
                                                    >
                                                        <i className="fas fa-angle-left"/>
                                                        <span className="sr-only">Previous</span>
                                                    </PaginationLink>
                                                </PaginationItem>
                                                <PaginationItem className="active">
                                                    <PaginationLink
                                                            href="#pablo"
                                                            onClick={e => e.preventDefault()}
                                                    >
                                                        1
                                                    </PaginationLink>
                                                </PaginationItem>
                                                <PaginationItem>
                                                    <PaginationLink
                                                            href="#pablo"
                                                            onClick={e => e.preventDefault()}
                                                    >
                                                        2 <span className="sr-only">(current)</span>
                                                    </PaginationLink>
                                                </PaginationItem>
                                                <PaginationItem>
                                                    <PaginationLink
                                                            href="#pablo"
                                                            onClick={e => e.preventDefault()}
                                                    >
                                                        3
                                                    </PaginationLink>
                                                </PaginationItem>
                                                <PaginationItem>
                                                    <PaginationLink
                                                            href="#pablo"
                                                            onClick={e => e.preventDefault()}
                                                    >
                                                        <i className="fas fa-angle-right"/>
                                                        <span className="sr-only">Next</span>
                                                    </PaginationLink>
                                                </PaginationItem>
                                            </Pagination>
                                        </nav>
                                    </CardFooter>
                                </Card>
                            </div>
                        </Row>
                    </Container>
                </>
        );
    }
}

export default Maps;
