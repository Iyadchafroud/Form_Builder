import type { BaseForm } from "./baseForm";

const formSchema: BaseForm = {
  title: "User Registration",
  id: "user-registration-form",
  description: "Please fill out the form to register.",
  submitLabel: "Register",
  onSubmit: (formData) => {
    console.log("Form submitted:", formData);
  },
  fields: [
    {
      name: "name",
      label: "Username",

      type: "text",

      placeholder: "johndoe",
    },
    {
      type: "password",
      name: "password",
      label: "Password",
      required: true,
    },
    {
      type: "email",
      name: "email",
      label: "Email Address",
      required: true,
      placeholder: "",
    },
    {
      type: "checkbox",
      name: "terms",
      label: "I agree to the terms and conditions",
      required: true,
      defaultValue: false,
      options: [
        { label: "Agree", value: true },
        { label: "Disagree", value: false },
      ],
    },
  ],
};

export default formSchema;
