import Query from "./Query";
import React, { useState, useEffect } from "react";

const QueryList = ({results, query, setQuery}) => {
  const [shownResults, setShownResults] = useState([]);

  useEffect(() => {
    let newShownResults = [];
    
    for (var i = 0; i < results.length; i++) {
      var result = results[i];
      const sanitizedQuery = query.replace("/\s+/g", " ").toLowerCase();

      const indexOfQuery = result.zip.indexOf(sanitizedQuery);
      const beforeQuery = result.zip.slice(0, indexOfQuery);
      const afterQuery = result.zip.slice(indexOfQuery + sanitizedQuery.length);

      if (indexOfQuery >= 0) {
        newShownResults.push({
          before: beforeQuery,
          normalText: sanitizedQuery,
          after: afterQuery,
        });
      }
    }

    setShownResults(newShownResults);
  }, [query, results]);

  return (
    <>
      {shownResults.length > 0 && query && (
        <table
          sytle={{
            width: "100%",
            zIndex: -1,
            backgroundColor: "F7F6F2",
            padding: "0.25em",
            maxHeight: "500px"
          }}
        >
          <tbody>
            {shownResults.map((shownQuery, key) => {
              return (
                <Query
                  key={key}
                  before={shownQuery.before}
                  normalText={shownQuery.normalText}
                  after={shownQuery.after}
                  query={query}
                  setQuery={setQuery}
                />
               );
            })}
          </tbody>
        </table>
      )}
    </>
  );
};

export default QueryList;
