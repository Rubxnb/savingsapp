import { createContext, useState } from 'react';
import { bankActivity as initialBankActivity } from '../mocks/bankActivity.json';

export const BankActivityContext = createContext();

export function BankActivityProvider ({children}) {

  const [bankActivity, setBankActivity] = useState(initialBankActivity);
  
  return (
    <BankActivityContext.Provider value={{bankActivity, setBankActivity}}>
      {children}
    </BankActivityContext.Provider>
  );
}