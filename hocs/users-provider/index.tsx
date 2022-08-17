import React, { createContext, FunctionComponent, useContext } from 'react';
import { User } from 'utils/authorization';

const UserProviderContext = createContext({
  user: null as User | null,
});

export const useUserProvider = () => useContext(UserProviderContext);

export const UserProvider: FunctionComponent<{
  user: User | null;
}> = ({ children, user }) => {
  return (
    <UserProviderContext.Provider
      value={{
        user: user || null,
      }}
    >
      {children}
    </UserProviderContext.Provider>
  );
};
