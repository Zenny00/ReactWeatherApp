import Query from "./Query";
import React, { useState, useEffect } from "react";

export default function QueryList({results, query, setQuery, setLoading, isLoading}) {
  const [shownResults, setShownResults] = useState([]);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    async function processQueryResults() {
      // Show the spinner icon on the search bar
      setLoading(true);

      let newShownResults = [];
      for (var i = 0; i < results.length; i++) {
        var result = results[i];
        const sanitizedQuery = query.replace(/\s+/g, " ");

        const indexOfQuery = result?.zip?.indexOf(sanitizedQuery);
        const beforeQuery = result?.zip?.slice(0, indexOfQuery);
        const afterQuery = result?.zip?.slice(indexOfQuery + sanitizedQuery.length);

        if (indexOfQuery >= 0) {
          newShownResults.push({
            before: beforeQuery,
            normalText: sanitizedQuery,
            after: afterQuery,
          });
        } 
      }

      if (newShownResults.length > 0) {
        setRows(
          newShownResults.map((shownQuery, key) => {
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
          })
        );
      }

      setLoading(false);
    }

    processQueryResults();
  }, [query, results, setQuery]);

  return (
    <>
      {rows.length > 0 && query && (
        <table
          style={{
            width: "100%",
            zIndex: -1,
            backgroundColor: "#F7F6F2",
            padding: "0.25em",
            maxHeight: "500px"
          }}
        >
          <tbody>
            {rows}
          </tbody>
        </table>
      )}
    </>
  );
}
