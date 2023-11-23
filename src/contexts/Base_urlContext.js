import React, { createContext } from "react";

export const BaseUrl = createContext();
function Base_urlContext({ children }) {
  return (
    <BaseUrl.Provider value={"https://image.tmdb.org/t/p/original/"}>
      {children}
    </BaseUrl.Provider>
  );
}

export default Base_urlContext;
