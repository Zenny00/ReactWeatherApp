import usZips from 'us-zips';

/**
 *  File containing utility functions for querying the location search bar  
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
