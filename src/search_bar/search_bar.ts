import usZips from 'us-zips';

/**
 *  File containing utility functions for querying the location search bar  
 */

export function fetchZipResults(searchQuery) {
  const zipCode = usZips[searchQuery];

  return zipCode;
}
