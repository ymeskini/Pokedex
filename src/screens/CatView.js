import React from 'react';
import {StyleSheet} from 'react-native';
import {
  Text,
  Container,
  Content,
  Button,
  Header,
  Left,
  Icon,
  Body,
  Title,
  Right,
  Footer,
  FooterTab,
  Card,
  CardItem,
} from 'native-base';
import {Row, Grid} from 'react-native-easy-grid';

import {useSelector, useDispatch} from 'react-redux';
import {deleteCat} from '../slices/cats';

const ViewCat = ({navigation}) => {
  const cat = useSelector(state => state.cats.viewCat);
  const dispatch = useDispatch();
  return (
    <Container>
      <Header>
        <Left>
          <Button onPress={() => navigation.goBack()} transparent>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>View Cat</Title>
        </Body>
        <Right />
      </Header>
      <Content padder>
        <Card>
          <CardItem>
            <Text style={styles.catItem}>{cat.name}</Text>
          </CardItem>
          <CardItem>
            <Icon active name="paw" />
            <Text>{cat.breed}</Text>
          </CardItem>
          <CardItem>
            <Icon active type="Foundation" name="info" />
            <Text>{cat.description}</Text>
          </CardItem>
        </Card>
      </Content>
      <Footer>
        <FooterTab>
          <Button
            full
            danger
            onPress={() => {
              dispatch(deleteCat(cat.id));
              navigation.navigate('Cats');
            }}>
            <Text>Remove this cat</Text>
          </Button>
        </FooterTab>
        <FooterTab>
          <Button
            full
            onPress={() => {
              navigation.navigate('CatForm', {action: 'EDIT', cat});
            }}>
            <Text>Edit this cat</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
};

const styles = StyleSheet.create({
  catItem: {
    fontSize: 24,
    marginBottom: 6,
  },
  breedSection: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
  },
  breedItem: {
    padding: 5,
  },
});

export default ViewCat;
