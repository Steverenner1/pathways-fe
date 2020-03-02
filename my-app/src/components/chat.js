import React from "react";
import styled from 'styled-components';

const Chatdiv = styled.input`
  width: 200s%;
  height: 15%;
  background-color:white;
  flex-wrap:wrap;
  align-items: flex-end;
  
`;


const Chat = props => {
    return(
        <div className="chatdiv">
        <Chatdiv
            type="text"
         />
         </div>
    )
}

export default Chat