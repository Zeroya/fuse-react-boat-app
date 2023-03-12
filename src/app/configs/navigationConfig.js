import i18next from "i18next";
import ar from "./navigation-i18n/ar";
import en from "./navigation-i18n/en";
import tr from "./navigation-i18n/tr";

i18next.addResourceBundle("en", "navigation", en);
i18next.addResourceBundle("tr", "navigation", tr);
i18next.addResourceBundle("ar", "navigation", ar);

const navigationConfig = [
  {
    id: "example-component",
    title: "Example",
    translate: "page 1",
    type: "item",
    // icon: "heroicons-outline:star",
    url: "page1",
  },
  {
    id: "new-page",
    title: "New Page",
    translate: "page 2",
    type: "item",
    // icon: "heroicons-outline:star",
    url: "page2",
  },
  {
    id: "page3",
    title: "New Page",
    translate: "page 3",
    type: "item",
    // icon: "heroicons-outline:star",
    url: "page3",
  },
];

export default navigationConfig;
