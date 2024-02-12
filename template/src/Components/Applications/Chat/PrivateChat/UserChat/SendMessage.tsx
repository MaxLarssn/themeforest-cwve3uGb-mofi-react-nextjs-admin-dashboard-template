import { TypeMessageHere } from "@/Constant";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { replyByUserAsync, sendMessageAsync } from "@/Redux/Reducers/ChatSlice";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { useState } from "react";
import { Button, Form, Input } from "reactstrap";
import ChatDropMenu from "./ChatDropMenu";

const SendMessage = () => {
  const [messageInput, setMessageInput] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const { chats, selectedUser, currentUser } = useAppSelector((state) => state.chat);

  const dispatch = useAppDispatch();
  const addEmoji = (emoji: string) => {
    const text = `${messageInput}${emoji}`;
    setShowEmojiPicker(false);
    setMessageInput(text);
  };
  const handleMessageChange = (message: string) => {
    setMessageInput(message);
  };

  const handleMessagePress = () => {
    var container = document.getElementsByClassName("msger-chat")[0];
    setTimeout(function () {
      container?.scrollBy({ top: 200, behavior: "smooth" });
    }, 310);
    let currentUserId = currentUser?.id;
    let selectedUserId = selectedUser?.id;
    let selectedUserName = selectedUser?.name;
    if (messageInput.length > 0) {
      dispatch(sendMessageAsync({ currentUserId, selectedUserId, messageInput, chats }));
      setMessageInput("");
      setTimeout(() => {
        const replyMessage = "Hey This is " + selectedUserName + ", Sorry I'm busy right now, I will text you later";
        dispatch(replyByUserAsync({ currentUserId, selectedUserId, replyMessage, chats }));
      }, 2000);
    }
  };
  return (
    <Form className="msger-inputarea py-0">
      <ChatDropMenu />
      <Input className="msger-input two uk-textarea shadow-none" type="text" placeholder={TypeMessageHere} value={messageInput} onChange={(e) => handleMessageChange(e.target.value)} />
      <div className="open-emoji">
        {showEmojiPicker ? (<Picker data={data} onEmojiSelect={(e: { native: string; }) => { addEmoji(e.native)}}/>) : null}
      </div>
      <div className="smiley-box">
        <div className="picker second-btn uk-button px-1" onClick={() => setShowEmojiPicker(!showEmojiPicker)}/>
      </div>
      <Button color="primary" className="msger-send-btn" onClick={handleMessagePress}><i className="fa fa-location-arrow" /></Button>
    </Form>
  );
};

export default SendMessage;