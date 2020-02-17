import React from 'react';
import {
  Form,
  Item,
  Input,
  Textarea,
  Container,
  Button,
  Content,
  Header,
  Left,
  Icon,
  Body,
  Title,
  Right,
  Footer,
  FooterTab,
  Text,
} from 'native-base';
import {withFormik} from 'formik';

import {addCat, editCat} from '../slices/cats';

const CreateCat = props => {
  const {handleChange, handleSubmit, handleBlur, values, navigation} = props;
  return (
    <Container>
      <Header>
        <Left>
          <Button onPress={() => navigation.goBack()} transparent>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>
            {props.route.params.action === 'CREATE'
              ? 'Add new cat'
              : 'Edit cat'}
          </Title>
        </Body>
        <Right />
      </Header>
      <Content padder>
        <Form>
          <Item>
            <Input
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
              placeholder="name"
            />
          </Item>
          <Item>
            <Input
              onChangeText={handleChange('breed')}
              onBlur={handleBlur('breed')}
              value={values.breed}
              placeholder="breed"
            />
          </Item>
          <Item bordered>
            <Textarea
              value={values.description}
              onBlur={handleBlur('breed')}
              onChangeText={handleChange('description')}
              rowSpan={3}
              placeholder="Description"
            />
          </Item>
        </Form>
      </Content>
      <Footer>
        <FooterTab>
          <Button full onPress={handleSubmit}>
            <Text>Submit</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
};

export default withFormik({
  mapPropsToValues: props => {
    if (props.route.params.action === 'EDIT') {
      return {
        ...props.route.params.cat,
      };
    }

    return {name: '', breed: '', description: ''};
  },
  handleSubmit: (values, formikBag) => {
    const isCreateView = formikBag.props.route.params.action === 'CREATE';
    const action = isCreateView ? addCat : editCat;
    formikBag.props.dispatch(action(values));
    formikBag.props.navigation.navigate('Cats');
  },
})(CreateCat);
