import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import FontAwesome from 'react-fontawesome';
import Actions from 'actions';

import styles from './ToggleQueryHistoryButton.less';

class ToggleQueryHistoryButton extends PureComponent {
  static displayName = 'ToggleQueryHistoryButton';

  static propTypes = {
    onClick: PropTypes.func
  };

  static defaultProps = {};

  handleCollapse = () => {
    Actions.toggleCollapse();
  }

  render() {
    return (
        <button
          id="query_history_button"
          key="query-history-button"
          className={classnames('btn', 'btn-default', 'btn-sm', styles.component)}
          data-test-id="query-history-button"
          type="button"
          onClick={this.handleCollapse}>
          <FontAwesome
            data-test-id="query-history-button-icon"
            name="history"
            className="query-history-button-icon"/>
        </button>
    );
  }
}

export default ToggleQueryHistoryButton;
export { ToggleQueryHistoryButton };
