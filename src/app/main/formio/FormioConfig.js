import Formio from "./Formio";

const FormioConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: "page4",
      element: <Formio />,
    },
  ],
};

export default FormioConfig;
