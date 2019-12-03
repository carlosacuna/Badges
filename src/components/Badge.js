import React from 'react';

import './styles/Badge.css';
import confLogo from '../images/badge-header.svg';
<<<<<<< HEAD
=======
import Gravatar from './Gravatar';
>>>>>>> dev

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>

        <div className="Badge__section-name">
<<<<<<< HEAD
          <img
            className="Badge__avatar"
            src={this.props.avatarUrl}
            alt="Avatar"
          />
=======
          <Gravatar className="Badge__avatar" email={this.props.email} />
>>>>>>> dev
          <h1>
            {this.props.firstName} <br /> {this.props.lastName}
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3>{this.props.jobTitle}</h3>
          <div>@{this.props.twitter}</div>
        </div>

        <div className="Badge__footer">#platziconf</div>
      </div>
    );
  }
}

<<<<<<< HEAD
export default Badge;
=======
export default Badge;
>>>>>>> dev
