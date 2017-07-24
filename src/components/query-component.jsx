const React = require('react');
const PropTypes = require('prop-types');


class QueryComponent extends React.Component {
  /**
   * Render QueryComponent.
   *
   * @returns {React.Component} The rendered component.
   */
  render() {
    const attributes = this.props.attributes;
    return (
      <div className="query-history-query">
        <p className="query-history-title">{this.props.title}</p>
        <ul>
          {Object.keys(attributes).map(function(key, i) {
            if (key.charAt(0) !== '_') {
              return (
                <li key={i}>
                  <h>{key}</h>
                  <p>{JSON.stringify(attributes[key], null, 0)}</p>
                </li>
              );
            }
          })}
        </ul>
      </div>
    );
  }
}

QueryComponent.propTypes = {
  title: PropTypes.string,
  attributes: PropTypes.object
};

QueryComponent.displayName = 'QueryHistoryQueryComponent';

module.exports = QueryComponent;
