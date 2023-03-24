import React, { useState } from "react";
import { Form } from "@formio/react";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addNewFormData, selectFormsData } from "app/store/dataSlice";
import { FormBuilder } from "@formio/react";

const Formio = () => {
  const [jsonSchema, setSchema] = useState({ display: "form", components: [] });
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
  console.log("fromFormaaaa", fromForm);

  const handleSchemaChange = (schema) => {
    setSchema(schema);
    console.log("schema", schema);
    // console.log("fromForm", fromForm);
  };

  const handleSubmitNewForm = () => {
    dispatch(addNewFormData(jsonSchema.components));
    setSchema({ display: "form", components: [] });
  };

  return (
    <div class="w-full border-2 border-black p-4">
      <div class="my-2 flex justify-center ml-15">
        <Button
          className="hover:bg-secondary hover:text-white "
          onClick={handleSubmitNewForm}
          variant="contained"
          color="secondary"
          size="small"
        >
          Upload New form
        </Button>
      </div>
      <FormBuilder form={jsonSchema} onChange={handleSchemaChange} />
      {fromForm.length ? (
        fromForm.map((form, i) => (
          <div className="mt-6 w-full">
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
