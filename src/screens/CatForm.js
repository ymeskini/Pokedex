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

import {addCat, editCat} from '../slices/cats';

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
  mapPropsToValues: props => {
    if (props.route.params.action === 'EDIT') {
      return {
        ...props.route.params.cat,
      };
    }

    return {name: '', breed: '', description: ''};
  },
  handleSubmit: (values, formikBag) => {
    const action =
      formikBag.props.route.params.action === 'CREATE' ? addCat : editCat;
    formikBag.props.dispatch(action(values));
    formikBag.props.navigation.navigate('Cats');
  },
})(CreateCat);
