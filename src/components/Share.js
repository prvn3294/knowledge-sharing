/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/no-unresolved, import/extensions, import/no-extraneous-dependencies */
import React, { Component } from 'react';
import {
  FacebookShareCount,
  FacebookShareButton,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  PocketShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
  PocketIcon,
} from 'react-share';

import './Share.scss';

class Share extends Component {
  render() {
    const { shareUrl, title} = {...this.props.socialConfig.config};
  
    
    //const mediaImage = this.props.socialConfig.config;

    return (
      <div className="Share__container">
        <div className="Share__some-network">
          <FacebookShareButton
            url={shareUrl}
            quote={title}
            className="Share__some-network__share-button"
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>

          <div>
            <FacebookShareCount url={shareUrl} className="Share__some-network__share-count">
              {count => count}
            </FacebookShareCount>
          </div>
        </div>

        <div className="Share__some-network">
          <FacebookMessengerShareButton
            url={shareUrl}
            appId="521270401588372"
            className="Share__some-network__share-button"
          >
            <FacebookMessengerIcon size={32} round />
          </FacebookMessengerShareButton>
        </div>

        <div className="Share__some-network">
          <TwitterShareButton
            url={shareUrl}
            title={title}
            className="Share__some-network__share-button"
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>

          <div className="Share__some-network__share-count">&nbsp;</div>
        </div>


        <div className="Share__some-network">
          <WhatsappShareButton
            url={shareUrl}
            title={title}
            separator=":: "
            className="Share__some-network__share-button"
          >
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>

          <div className="Share__some-network__share-count">&nbsp;</div>
        </div>

        <div className="Share__some-network">
          <LinkedinShareButton url={shareUrl} className="Share__some-network__share-button">
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
        </div>


        <div className="Share__some-network">
          <PocketShareButton
            url={shareUrl}
            title={title}
            className="Share__some-network__share-button"
          >
            <PocketIcon size={32} round />
          </PocketShareButton>
        </div>
      </div>
    );
  }
}

export default Share;
