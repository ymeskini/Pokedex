import React from 'react';
import {Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  List,
  ListItem,
  Right,
  Left,
  Icon,
  Container,
  Content,
} from 'native-base';
import {setCatView} from '../slices/cats';

const CatList = ({navigation}) => {
  const cats = useSelector(state => state.cats.list);
  const dispatch = useDispatch();

  return (
    <Container>
      <Content padder>
        <List>
          {cats.map(cat => (
            <ListItem
              onPress={() => {
                dispatch(setCatView(cat));
                navigation.navigate('ViewCat');
              }}
              key={cat.id}>
              <Left>
                <Text>{cat.name}</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          ))}
        </List>
      </Content>
    </Container>
  );
};

export default CatList;