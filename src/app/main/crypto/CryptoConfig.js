import Crypto from "./Crypto";

const CryptoConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: "page1",
      element: <Crypto />,
    },
  ],
};

export default CryptoConfig;
