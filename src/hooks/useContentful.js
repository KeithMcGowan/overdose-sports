import { useState, useEffect } from "react";

const { REACT_APP_SPACE_ID, REACT_APP_CDA_TOKEN } = process.env;

export const useContentful = (query) => {
  let [data, setData] = useState(null);
  let [errors, setErrors] = useState(null);

  useEffect(() => {
    fetch(
        `https://graphql.contentful.com/content/v1/spaces/${REACT_APP_SPACE_ID}`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${REACT_APP_CDA_TOKEN}`,
          },
          body: JSON.stringify({ query }),
        }
      )
      .then((res) => res.json())
      .then(({ data, errors }) => {
        if (errors) setErrors(errors);
        if (data) setData(data);
      })
      .catch((err) => setErrors([err]));
  }, [query]);

  return { data, errors };
};
