import type { JSX } from "react";
export interface Option {
  label: string;
  value: string;
}
export interface FormField {
  name: string;
  label: string;
  type:
    | "text"
    | "number"
    | "email"
    | "password"
    | "checkbox"
    | "radio"
    | "select"
    | "textarea";
  required?: boolean;
  options?: Option[]; // for select and radio types
  placeholder?: string;
  defaultValue?: string | number | boolean;
}

export interface BaseForm {
  id: string;
  title: string;
  description?: string;
  fields: FormField[];
  submitLabel?: string;
  onSubmit: (formData: { [key: string]: string | number | boolean }) => void;
}
export interface FormValidationError {
  fieldName: string;
  message: string;
}
export interface FormState {
  values: { [key: string]: string | number | boolean };
  errors: FormValidationError[];
  isSubmitting: boolean;
}
export interface FormProps {
  form: BaseForm;
}
export interface FormFieldProps {
  field: FormField;
  value: string | number | boolean;
  error?: string;
  onChange: (name: string, value: string | number | boolean) => void;
}
export interface FormSubmitEvent {
  formData: { [key: string]: string | number | boolean };
}
export interface FormValidation {
  validate: (formData: {
    [key: string]: string | number | boolean;
  }) => FormValidationError[];
}
export interface FormRenderer {
  renderField: (props: FormFieldProps) => JSX.Element;
  renderForm: (
    props: FormProps,
    state: FormState,
    onChange: (name: string, value: string | number | boolean) => void,
    onSubmit: () => void
  ) => JSX.Element;
}
export interface FormHandler {
  handleChange: (
    name: string,
    value: string | number | boolean,
    state: FormState
  ) => FormState;
  handleSubmit: (
    form: BaseForm,
    state: FormState,
    setState: (state: FormState) => void
  ) => void;
}
