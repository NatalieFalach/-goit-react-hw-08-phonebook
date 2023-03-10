import * as React from 'react';
import PropTypes from 'prop-types';
import { IMaskInput } from 'react-imask';

const PhoneMask = React.forwardRef(function PhoneMask(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="+({000}) 00 000-00-00"
      definitions={{
        '#': /[1-9]/,
      }}
      inputRef={ref}
      onAccept={value => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

PhoneMask.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default PhoneMask;
