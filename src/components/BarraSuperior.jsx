import React from 'react'
import { Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

function BarraSuperior({ title, isBack }) {
    return (
        <Header style={{ height: 45, backgroundColor: "rgba(27,79,114,1)" }}>
            {
                isBack &&
                <Left>

                    <Button transparent>
                        <Icon name='arrow-back' />
                    </Button>
                </Left>
            }

            <Body>
                <Title style={{ color: "white" }}>{title}</Title>
            </Body>
            {
                isBack &&
                <Right>
                    {/* <Button transparent>
                        <Icon name='menu' />
                    </Button> */}
                </Right>
            }
        </Header>
    )
}

export default BarraSuperior
