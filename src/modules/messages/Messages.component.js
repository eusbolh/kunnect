import React, { Component } from 'react';
import PropTypes from 'prop-types';
import brandLogo from 'common/assets/logo_white.png';
import { getContacts, getSampleChat } from './Messages.config';

class Messages extends Component {
  /* Contacts */

  renderContactImage = (name) => {
    if (name.length < 8) {
      return (
        <div className="knc-messages-contact-image-container knc-messages-contact-image-container--blue">
          <img alt="brand" className="knc-messages-contact-image" src={brandLogo} />
        </div>
      );
    }
    if (name.length < 12) {
      return (
        <div className="knc-messages-contact-image-container knc-messages-contact-image-container--green">
          <img alt="brand" className="knc-messages-contact-image" src={brandLogo} />
        </div>
      );
    }
    return (
      <div className="knc-messages-contact-image-container knc-messages-contact-image-container--gold">
        <img alt="brand" className="knc-messages-contact-image" src={brandLogo} />
      </div>
    );
  }

  renderContact = contact => (
    <div className="knc-messages-contact" key={`knc-messages-contact-${contact.id}`}>
      {this.renderContactImage(contact.username)}
      <div className="knc-messages-contact-content">
        <div className="knc-messages-contact-head">
          <div className="knc-messages-contact-username">{contact.username}</div>
          <div className="knc-messages-contact-timestamp">{contact.lastMessageTimestamp}</div>
        </div>
        <div className="knc-messages-contact-message">{contact.lastMessage}</div>
      </div>
    </div>
  )

  /* Chat */

  renderChat = chat => (
    <div className="knc-messages-chat">
      {chat.messages && chat.messages.map((message) => {
        if (message.isOwner) {
          return (
            <div className="knc-messages-chat-message knc-messages-chat-message--owner" key={`knc-messages-chat-message-${message.id}`}>
              <div className="knc-messages-chat-message-timestamp">{message.timestamp}</div>
              <div className="knc-messages-chat-message-text">{message.message}</div>
            </div>
          );
        }
        return (
          <div className="knc-messages-chat-message" key={`knc-messages-chat-message-${message.id}`}>
            <div className="knc-messages-chat-message-timestamp">{message.timestamp}</div>
            <div className="knc-messages-chat-message-text">{message.message}</div>
          </div>
        );
      })}
    </div>
  )

  renderChatBox = () => (
    <div className="knc-messages-chat-box">
      Send Message
    </div>
  )

  render() {
    return (
      <div className="knc-messages-module">
        <div className="knc-messages-content-container">
          <div className="knc-messages-left-side">
            {getContacts().map(contact => this.renderContact(contact))}
          </div>
          <div className="knc-messages-right-side">
            {this.renderChat(getSampleChat())}
            {this.renderChatBox()}
          </div>
        </div>
      </div>
    );
  }
}

Messages.propTypes = {
};

Messages.defaultProps = {
};

export default Messages;
