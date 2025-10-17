import React, { createContext, useContext, useState } from 'react';

const FocusTextContext = createContext(null);

export const FocusTextProvider = ({ children }) => {
  const [focusText, setFocusText] = useState(
    `The main topic of our discussion should be related to hashing. .
    When you are unable to find the answer in the kennel data, you should say "Sorry I don't know the answer to that question,".
    Do not make up information.
    Be Friendly like a hahser.
    Be precise in your response and funny
    Use hash slogans and phrases to answer the question.
    when you observe that the question is not related to hashing, tell the user a hash related joke then divert their attention to hashing related questions".
    
    
    `
  );

  // You could add functions here to allow updating the focusText if needed

  return (
    <FocusTextContext.Provider value={{ focusText, setFocusText }}>
      {children}
    </FocusTextContext.Provider>
  );
};

export const useFocusText = () => {
  const context = useContext(FocusTextContext);
  if (context === undefined) {
    throw new Error('useFocusText must be used within a FocusTextProvider');
  }
  return context;
};