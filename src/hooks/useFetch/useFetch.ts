import React from "react";

type runFetchOptions = Record<string, any>;

export const useFetch = () => {
  const buildUrl = (baseUrl: string, options?: runFetchOptions) => {
    let optionsCount = 0;
    let finalUrl = `${baseUrl}?`;

    for (const key in options) {
      const value = options[key];

      //If this is not the first option param, add an &
      if (optionsCount > 0) {
        finalUrl = `${finalUrl}&`;
      }

      //add the key and the value
      finalUrl = `${finalUrl}${key}=${value}`;
      //Count one more option
      optionsCount++;
    }

    return finalUrl;
  };

  const runFetch = async <OutputType>(
    endpointUrl: string,
    options?: runFetchOptions
  ): Promise<OutputType> => {
    const fetchUrl = buildUrl(endpointUrl, options);

    const result = await fetch(fetchUrl);
    const jsonResult = await result.json();

    return jsonResult as OutputType;
  };

  return runFetch;
};
