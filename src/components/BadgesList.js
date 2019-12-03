import React from 'react';
<<<<<<< HEAD

import './styles/BadgesList.css';
=======
import { Link } from 'react-router-dom';

import './styles/BadgesList.css';
import Gravatar from './Gravatar';
>>>>>>> dev

class BadgesListItem extends React.Component {
  render() {
    return (
      <div className="BadgesListItem">
<<<<<<< HEAD
        <img
          className="BadgesListItem__avatar"
          src={this.props.badge.avatarUrl}
          alt={`${this.props.badge.firstName} ${this.props.badge.lastName}`}
=======
        <Gravatar
          className="BadgesListItem__avatar"
          email={this.props.badge.email}
>>>>>>> dev
        />

        <div>
          <strong>
            {this.props.badge.firstName} {this.props.badge.lastName}
          </strong>
          <br />@{this.props.badge.twitter}
          <br />
          {this.props.badge.jobTitle}
        </div>
      </div>
    );
  }
}

class BadgesList extends React.Component {
  render() {
<<<<<<< HEAD
=======
    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3>No badges were found</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create new badge
          </Link>
        </div>
      );
    }

>>>>>>> dev
    return (
      <div className="BadgesList">
        <ul className="list-unstyled">
          {this.props.badges.map(badge => {
            return (
              <li key={badge.id}>
<<<<<<< HEAD
                <BadgesListItem badge={badge} />
=======
                <Link
                  className="text-reset text-decoration-none"
                  to={`/badges/${badge.id}`}
                >
                  <BadgesListItem badge={badge} />
                </Link>
>>>>>>> dev
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

<<<<<<< HEAD
export default BadgesList;
=======
export default BadgesList;
>>>>>>> dev
