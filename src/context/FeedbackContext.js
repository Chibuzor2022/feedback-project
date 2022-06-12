import { createContext, useState } from "react";
import FeedbackData from "../components/FeedbackData";
const FeedbackContext = createContext();
const defaultEditState = {
  item: {},
  edit: false,
};
export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedbackData);
  const [feedbackEdit, setFeedbackEdit] = useState(defaultEditState);
 
   const addFeedback = (newFeedback) => {
    setFeedback([newFeedback, ...feedback]);
  };
 
    const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
 
   const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...updItem, id } : item))
    );
 
   setFeedbackEdit(defaultEditState);
  };
 
    const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };
 
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        FeedbackData,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
        
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
 export default FeedbackContext;
