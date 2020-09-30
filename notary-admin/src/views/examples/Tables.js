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

// reactstrap components
import {
    Badge,
    Card,
    CardHeader,
    CardFooter,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Media,
    Pagination,
    PaginationItem,
    PaginationLink,
    Progress,
    Table,
    Container,
    Row,
    UncontrolledTooltip, CardBody, Col, FormGroup, Input, Form, Button, InputGroup, InputGroupAddon, InputGroupText
} from "reactstrap";
// core components
import ReactDatetime from "react-datetime";

import Header from "components/Headers/Header.js";

class Tables extends React.Component {
    render()
    {
        return (
                <>
                    <Header/>
                    {/* Page content */}
                    <Container className="mt--7" fluid>
                        {/* Table */}
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
                                                                htmlFor="input-username"
                                                        >
                                                            Тема
                                                        </label>
                                                        <Input
                                                                className="form-control-alternative"
                                                                id="input-username"
                                                                placeholder="Банковский перевод"
                                                                type="text"
                                                        />
                                                    </FormGroup>
                                                </Col>
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
                                                <Col lg="6">
                                                    <FormGroup>
                                                        <label
                                                                className="form-control-label"
                                                                htmlFor="input-first-name"
                                                        >
                                                            Статус
                                                        </label>
                                                        <Input
                                                                className="form-control-alternative"
                                                                id="input-first-name"
                                                                placeholder="В процессе"
                                                                type="text"
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                <Col lg="6">
                                                    <FormGroup>
                                                        <label
                                                                className="form-control-label"
                                                                htmlFor="input-first-name"
                                                        >
                                                            Дата
                                                        </label>
                                                        <InputGroup className="input-group-alternative">
                                                            <InputGroupAddon addonType="prepend">
                                                                <InputGroupText>
                                                                    <i className="ni ni-calendar-grid-58" />
                                                                </InputGroupText>
                                                            </InputGroupAddon>
                                                            <ReactDatetime
                                                                    inputProps={{
                                                                        placeholder: "Date Picker Here"
                                                                    }}
                                                                    timeFormat={false}
                                                            />
                                                        </InputGroup>
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
                        {/* Dark table */}
                        <Row className="mt-5">
                            <div className="col">
                                <Card className="shadow">
                                    <CardHeader className="border-0">
                                        <h3 className="mb-0">Обращения</h3>
                                    </CardHeader>
                                    <Table className="align-items-center table-flush" responsive>
                                        <thead className="thead-light">
                                        <tr>
                                            <th scope="col">Тема</th>
                                            <th scope="col">ФИО клиента</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Дата</th>
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
                                            <td>
                                                07.11.1993
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
                                            <td>
                                                03.04.1234
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
                                            <td>
                                                05.09.2020
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
                                          <td>Негодяев Злыдень Иванович</td>
                                          <td>
                                            <Badge color="" className="badge-dot mr-4">
                                              <i className="bg-warning"/>
                                              Не обработано
                                            </Badge>
                                          </td>
                                            <td>
                                                07.08.2020
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
                                            <td>
                                                07.12.2020
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

export default Tables;
