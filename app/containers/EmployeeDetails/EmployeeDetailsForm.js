import React from 'react';
import PropTypes from 'prop-types';
// import { FormattedMessage } from 'react-intl';
import { Field, reduxForm } from 'redux-form/immutable';
import Button from '@material-ui/core/Button';
import TextInput from 'components/Fields/TextInput';
import PageButton from 'components/Fields/PageButton';
import * as rules from 'utils/validationRules';
// import messages from './messages';
const FORM_NAME = 'EmployeeDetailsForm';

class EmployeeDetailsForm extends React.PureComponent {
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field
          name="firstName"
          required
          component={TextInput}
          validate={[rules.required]}
          label="First Name"
        />
        <br />
        <Field
          name="lastName"
          component={TextInput}
          validate={[rules.required]}
          label="Last Name"
          required
        />

        <div>
          <Button
            variant="outlined"
            color="primary"
            type="submit"
            disabled={pristine || submitting}
          >
            Primary
          </Button>
          <br />
        </div>
      </form>
    );
  }
}

// LoginForm.propTypes = {
//   firstName: PropTypes.text,
// };
// export default LoginForm;
export default reduxForm({
  form: FORM_NAME,
})(EmployeeDetailsForm);
