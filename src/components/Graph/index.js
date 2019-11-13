import React, { useState, useEffect } from 'react';

import { graphql, buildSchema } from 'graphql';

function Graph() {
  const [schema, setSchema] = useState(buildSchema(`type Query { hello: String }`));
  const [information, setInformation] = useState({ hello: () => 'Hello world!' });

  useEffect(() => {
    graphql(schema, '{ ooo }', information).then(response => console.log(response));
  }, [information, schema]);

  return (
    <div></div>
  )
}

export default Graph;
