import React from 'react';
import {Button, Card, CardBody, CardHeader, Col, Input, Row} from "reactstrap";
import {MessageBox, ChatItem, SystemMessage, MessageList, ChatList, Popup, SideBar, Navbar, Dropdown, Avatar} from 'react-chat-elements';

const ChatComponent = ({role, ...restProps}) => (

        <Card className="bg-secondary shadow">
            <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                    <Col xs="8">
                        <h3 className="mb-0">Чат</h3>
                    </Col>
                </Row>
            </CardHeader>
            <CardBody>
                <div className='chat-scroll'>
                    <MessageBox
                            title={'Петренко Петр Петрович'}
                            titleColor={'#24ae00'}
                            position={'left'}
                            type={'photo'}
                            text={'react.svg'}
                            data={{
                                uri: 'https://facebook.github.io/react/img/logo.svg',
                                status: {
                                    click: false,
                                    loading: 0,
                                }
                            }}/>
                    <MessageBox
                            reply={{
                                photoURL: 'https://facebook.github.io/react/img/logo.svg',
                                title: 'elit magna',
                                titleColor: '#8717ae',
                                message: 'Aliqua amet incididunt id nostrud',
                            }}
                            replyButton={true}
                            onReplyMessageClick={() => console.log('reply clicked!')}
                            position={'left'}
                            type={'text'}
                            text={'Ответить и прочее'}/>

                    <SystemMessage
                            text={'Системное сообщение типо разделиние дат. Дальше сообщения списком идут'}/>

                    {/* eslint-disable-next-line react/jsx-no-undef */}
                    <MessageList
                            className='message-list'
                            lockable={true}
                            toBottomHeight={'100%'}
                            dataSource={[
                                {
                                    title: 'Негодяев Злыдень Иванович',
                                    titleColor: '#8717ae',
                                    position: 'right',
                                    type: 'text',
                                    text: 'Много сообщений от одного',
                                    date: new Date(),
                                },
                                {
                                    title: 'Негодяев Злыдень Иванович',
                                    titleColor: '#8717ae',
                                    position: 'right',
                                    type: 'text',
                                    text: 'пользователя',
                                    date: new Date(),
                                },
                                {
                                    title: 'Иванов Иван Иванович',
                                    titleColor: '#ae0000',
                                    position: 'left',
                                    type: 'text',
                                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                                    date: new Date(),
                                },
                                {
                                    title: 'Негодяев Злыдень Иванович',
                                    titleColor: '#8717ae',
                                    position: 'right',
                                    type: 'text',
                                    text: 'Много сообщений от одного',
                                    date: new Date(),
                                },
                                {
                                    title: 'Негодяев Злыдень Иванович',
                                    titleColor: '#8717ae',
                                    position: 'right',
                                    type: 'text',
                                    text: 'пользователя',
                                    date: new Date(),
                                },
                                {
                                    title: 'Иванов Иван Иванович',
                                    titleColor: '#ae0000',
                                    position: 'left',
                                    type: 'text',
                                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipisicing elit',
                                    date: new Date(),
                                },
                                {
                                    title: 'Негодяев Злыдень Иванович',
                                    titleColor: '#8717ae',
                                    position: 'right',
                                    type: 'text',
                                    text: 'Много сообщений от одного',
                                    date: new Date(),
                                },
                                {
                                    title: 'Негодяев Злыдень Иванович',
                                    titleColor: '#8717ae',
                                    position: 'right',
                                    type: 'text',
                                    text: 'пользователя',
                                    date: new Date(),
                                },
                                {
                                    title: 'Петренко Петр Петрович',
                                    titleColor: '#24ae00',
                                    position: 'left',
                                    type: 'text',
                                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                                    date: new Date(),
                                }
                            ]}/>

                </div>
                <hr className="my-4"/>
                <Input
                        className="form-control-alternative"
                        placeholder="Введите ваше сообщение..."
                        rows="4"
                        type="textarea"
                />

                <Button className="my-4" color="info" type="button">
                    Отправить
                </Button>
                <input type="file" name="photo" multiple accept="image/*,image/jpeg"/>
            </CardBody>

        </Card>

);

export default ChatComponent;