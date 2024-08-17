import usZips from 'us-zips';

/**
 *  File containing utility functions for querying the location search bar  
 */


/**
 * A function to match a user's query against the list of zip codes and return those which match
 *
 * @param {string} searchQuery - The input from the user to be checked against the list of zip codes
 * @returns {array} - an array of the found zip codes
 *
 */
export function fetchZipResults(searchQuery) {
  const zipCodes = [];
  const keys = Object.keys(usZips);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];

    // If the search matches any part of the key return the value
    if (key.startsWith(searchQuery)) {
      zipCodes.push(usZips[key]);
    }
  }

  if (zipCodes.length === 0) {
    zipCodes.push("No Results Found");
  }

  return zipCodes;
}
