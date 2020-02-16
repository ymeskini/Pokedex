import React from 'react';
import {Text} from 'react-native';
import {
  Form,
  Item,
  Input,
  Textarea,
  Container,
  Button,
  Content,
} from 'native-base';
import {withFormik} from 'formik';

import {addCat} from '../slices/cats';

const CreateCat = props => {
  const {handleChange, handleSubmit, handleBlur, values} = props;
  return (
    <Container>
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
              onBlur={handleBlur('breed')}
              onChangeText={handleChange('description')}
              rowSpan={3}
              placeholder="Description"
            />
          </Item>
          <Button rounded onPress={handleSubmit}>
            <Text>Submit</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

export default withFormik({
  mapPropsToValues: () => ({name: '', breed: '', description: ''}),
  handleSubmit: (values, formikBag) => {
    formikBag.props.dispatch(addCat(values));
    formikBag.props.navigation.navigate('Cats');
  },
})(CreateCat);
