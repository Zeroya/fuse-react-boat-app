import React, { useState, useEffect } from "react";
import { Form } from "@formio/react";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { addNewFormData, selectFormsData } from "app/store/dataSlice";
import { FormBuilder } from "@formio/react";
import { uid } from "uid";
import { set, ref, onValue } from "firebase/database";
import { db } from "../../../firebase";

const Formio = () => {
  const [jsonSchema, setSchema] = useState({ display: "form", components: [] });
  const [formVisible, setFormVisible] = useState(false);
  const [forms, setForms] = useState([]);
  const [test, setTest] = useState({
    display: "form",
    components: [
      {
        label: "Email",
        tableView: true,
        key: "email",
        type: "email",
        input: true,
      },
      {
        label: "Password",
        tableView: false,
        key: "password",
        type: "password",
        input: true,
        protected: true,
      },
    ],
  });
  const dispatch = useDispatch();
  const fromForm = useSelector(selectFormsData);
  console.log(fromForm);

  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      setForms([]);
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((form) => {
          setForms((oldArray) => [...oldArray, form]);
        });
      }
    });
    console.log("effect work now ");
  }, [jsonSchema]);

  const handleSchemaChange = (schema) => {
    setSchema(schema);
    console.log("schema", schema);
    console.log("fromForm", fromForm);
  };

  const handleSubmitNewForm = () => {
    const uuid = uid();
    dispatch(addNewFormData(jsonSchema.components));
    set(ref(db, `/${uuid}`), {
      ...jsonSchema.components,
    });

    setSchema({ display: "form", components: [] });
  };
  console.log("forms", forms);
  return (
    <div className="w-full border-2 border-black p-4">
      <div className="my-2 flex justify-center ml-8">
        <Button
          className="hover:bg-secondary hover:text-white mr-4 "
          onClick={handleSubmitNewForm}
          variant="contained"
          color="secondary"
          size="small"
        >
          Upload New form
        </Button>
        <Button
          className={
            formVisible ? "hover:bg-gray-400 text-white bg-gray-700" : "hover:bg-blue-700 text-white bg-blue-400 "
          }
          onClick={() => setFormVisible(!formVisible)}
          variant="contained"
          size="small"
        >
          {formVisible ? "Hide form" : "See all forms"}
        </Button>
      </div>
      <FormBuilder form={jsonSchema} onChange={handleSchemaChange} />
      {forms.length && formVisible ? (
        forms.map((form, i) => (
          <div key={i} className="mt-6 w-full">
            <div className="w-full h-1 bg-gray-400"></div>
            <h3 className="text-center">{`New Form #${i + 1}`}</h3>
            <Form form={{ components: form }} />
          </div>
        ))
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Formio;
