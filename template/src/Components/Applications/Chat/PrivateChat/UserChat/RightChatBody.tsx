import { useEffect, useRef, useState } from "react";
import SendMessage from "./SendMessage";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { fetchChatMemberAsync, setChats, setSelectedUser } from "@/Redux/Reducers/ChatSlice";
import { ImagePath } from "@/Constant";
import { AllMemberType, ChatsTypes, MessageTypes } from "@/Types/ChatType";

const RightChatBody = () => {
  const bottomRef = useRef<null | HTMLDivElement>(null);
  const [scroll, setScroll] = useState(0);
  const { allMembers, chats, selectedUser, currentUser } = useAppSelector((state) => state.chat);
  const dispatch = useAppDispatch();

  const fetchChatAsync = () => {
    if (chats.length > 0) {
      const currentUserId = 0;
      const chat = chats.filter((x: ChatsTypes) => x.users.includes(currentUserId));
      const selectedUser = chats[0].users.find((x: number) => x !== currentUserId);
      const oneSelect = allMembers.find((x: AllMemberType) => x.id === selectedUser);
      if (allMembers.length > 0) {
        dispatch(setChats(chat));
        dispatch(setSelectedUser(oneSelect));
      }
      if (allMembers.length > 0) {
        return allMembers.find((x: AllMemberType) => x.id === selectedUser);
      }
    }
  };

  useEffect(() => {
    dispatch(fetchChatMemberAsync());
    fetchChatAsync();
    setScroll(1);
  }, [dispatch, allMembers.length, chats.length]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chats, scroll]);

  const selectedChat = allMembers && chats && selectedUser && currentUser ? chats.find((x: ChatsTypes) => x.users.includes(currentUser?.id) && x.users.includes(selectedUser.id)) : null;

  return (
    <div className="right-sidebar-Chats">
      <div className="msger">
        <div className="msger-chat">
          {selectedChat && selectedChat.messages.length > 0 ? (
            selectedChat.messages.map((item: MessageTypes, id: number) => {
              const participators = allMembers.find((x: AllMemberType) => x.id === item.sender);
              return (
                <div className={`msg ${item.sender === currentUser?.id ? "right" : "left"}-msg`} key={id}>
                  {item?.name ? <div className="msg-img" /> : <img src={`${ImagePath}/${participators?.image}`} className="rounded-circle img-30 h-auto" alt="user" />}
                  <div className="msg-bubble mx-2">
                    <div className="msg-info">
                      <div className="msg-info-name">{!item?.sender ? "Theresa Webb" : selectedUser?.name}</div>
                      <div className="msg-info-time">{item.time}</div>
                    </div>
                    <div className="msg-text">{item.text}</div>
                  </div>
                </div>
              );
            })
          ) : (
            <img className="w-100" src={`${ImagePath}/start-conversion.jpg`} alt="start conversion" />
          )}
        </div>
        <SendMessage />
      </div>
    </div>
  );
};

export default RightChatBody;
