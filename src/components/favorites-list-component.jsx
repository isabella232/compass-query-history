const React = require('react');
const PropTypes = require('prop-types');

const FavoritesComponent = require('./favorite-component');

// const debug = require('debug')('mongodb-compass:query-history:favorites-list-component');

class FavoritesListComponent extends React.Component {

  /**
   * Render FavoritesListComponent.
   *
   * @returns {React.Component} The rendered component.
   */
  render() {
    return (
      <div className="query-history-favorites-list">
        <h2 className="query-history-title">FavoritesListComponent</h2>
        <p><i>The query history favorites-list.</i></p>
        <ul>
          {this.props.favorites.map(function(item) {
            return (
              <FavoritesComponent model={item}/>
            );
          })}
        </ul>
      </div>
    );
  }
}

FavoritesListComponent.propTypes = {
  favorites: PropTypes.object,
  current_favorite: PropTypes.object
};

FavoritesListComponent.defaultProps = {
  favorites: null,
  current_favorite: null
};

FavoritesListComponent.displayName = 'QueryHistoryFavoritesListComponent';

module.exports = FavoritesListComponent;
