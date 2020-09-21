import { Grid, Paper, Typography } from "@material-ui/core";
import React from "react";

const ConversationList = ({
  conversations,
  selectConversation,
  currentConversation,
}) => {
  const conversationList = conversations.map((conversation) => {
    const selected = currentConversation["_id"] === conversation["_id"];

    return (
      <Grid
        item
        container
        direction="row"
        xs={2}
        className="fullWidth"
        key={conversation._id}
        justify="center"
        alignItems="center"
      >
        <Paper
          className={`conversationPaper ${
            selected ? "selectedConversationPaper" : ""
          }`}
          onClick={() => selectConversation(conversation)}
        >
          <Typography variant="h6" gutterBottom>
            {conversation.name}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {conversation.messages.slice(-1)[0]
              ? conversation.messages.slice(-1)[0].text
              : ""}
          </Typography>
        </Paper>
      </Grid>
    );
  });

  return <>{conversationList}</>;
};

export default ConversationList;
