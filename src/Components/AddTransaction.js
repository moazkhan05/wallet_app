import React from 'react';
import { Text , View , StyleSheet , TextInput } from "react-native";
import { Container , Content , Form , Item , Input } from "native-base";

const AddTransaction = () => {
    return (
        <Container>
            <Content>
                <Form>
                    <Item style={ styles.itemTitle }>
                        <Input placeholder="Expense Title"/>
                    </Item>
                    <Item style={ styles.itemPrice }>
                        <Input placeholder="Expense Price" keyboardType="number-pad"/>
                    </Item>
                </Form>
            </Content>
        </Container>
    )
}

const styles= StyleSheet.create({
    itemTitle:{

    },
    itemPrice:{

    }

});

export default AddTransaction;
