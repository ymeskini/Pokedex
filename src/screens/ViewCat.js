import React from 'react';
import {Text, Container, Content, Button} from 'native-base';
import {useSelector, useDispatch} from 'react-redux';
import {deleteCat} from '../slices/cats';

const ViewCat = ({navigation}) => {
  const cat = useSelector(state => state.cats.viewCat);
  const dispatch = useDispatch();
  return (
    <Container>
      <Content padder>
        <Text>{cat.name}</Text>
        <Text>{cat.description}</Text>
        <Button
          onPress={() => {
            dispatch(deleteCat(cat.id));
            navigation.navigate('Cats');
          }}>
          <Text>Remove this cat</Text>
        </Button>
      </Content>
    </Container>
  );
};

export default ViewCat;