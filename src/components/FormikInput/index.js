import React, { useState } from 'react';
import {
  InputField,
  InputContainer,
  Label,
} from './styles';
import ErrorMessage from '../ErrorMessage';

const FormikInput = ({
  field,
  form,
  label,
  type,
  disabled,
  value,
  children,
  onChange,
  onBlur,
  isObject,
  onFocus,
  style,
}) => {
  const [focused, setFocused] = useState(false);
  const { name } = field;
  const { errors, touched } = form;

  const handleFocus = () => {
    setFocused(!focused);
  };

  const renderInput = () => {
    return (
      <InputField
        {...field}
        type={type}
        className="flex-fill"
        value={value || field.value}
        onChange={onChange || form.handleChange(name)}
        invalid={
          isObject !== undefined
            ? errors[isObject] &&
              Boolean(
                errors[isObject][name] &&
                  (touched[name] ||
                    (touched[isObject] && touched[isObject][name]))
              )
            : Boolean(errors[name] && touched[name])
        }
        disabled={disabled}
        focused={focused}
        onFocus={() => {
          handleFocus();
          if (onFocus) onFocus();
        }}
        onBlur={(e) => {
          field.onBlur(e);
          if (onBlur) onBlur(e);
          else handleFocus();
        }}
        style={style ? style : {}}
      >
        {children}
      </InputField>
    );
  };

  const renderMessage = () => {
    if (isObject !== undefined) {
      if (errors[isObject] !== undefined) {
        if (
          errors[isObject][name] &&
          (touched[name] || (touched[isObject] && touched[isObject][name]))
        )
          return <ErrorMessage text={errors[isObject][name]} />;
      }
    } else if (errors[name] && touched[name]) {
      return <ErrorMessage text={errors[name]} />;
    }
    return <></>;
  };

  return (
    <div className="w-100 p-0 m-0">
      <InputContainer>
        {renderInput()}
        {type === 'file' ? (
          <Label for={name} focused>
            {label}
          </Label>
        ) : (
          <Label focused={focused || value}>{label} </Label>
        )}
      </InputContainer>
      <div className="d-flex justify-content-center" style={{ marginTop: -10 }}>
        {renderMessage()}
      </div>
    </div>
  );
};

export default FormikInput;
