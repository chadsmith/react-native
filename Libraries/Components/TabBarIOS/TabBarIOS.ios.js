/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule TabBarIOS
 * @flow
 */
'use strict';

var React = require('React');
var StyleSheet = require('StyleSheet');
var TabBarItemIOS = require('TabBarItemIOS');
var View = require('View');

var requireNativeComponent = require('requireNativeComponent');

var TabBarIOS = React.createClass({
  statics: {
    Item: TabBarItemIOS,
  },

  propTypes: {
    style: View.propTypes.style,
    /**
     * Color of the currently selected tab icon
     */
    tintColor: React.PropTypes.string,
    /**
     * Background color of the tab bar
     */
    barTintColor: React.PropTypes.string,
    /**
     * A Boolean value that indicates whether the tab bar is translucent
     */
    translucent: React.PropTypes.bool,
    /**
     * Background color of the selected tab
     */
    selectionIndicatorColor: React.PropTypes.string,
    /**
     * A Boolean value that indicates whether the tab bar should have a top shadow
     */
    shadow: React.PropTypes.bool,
    /**
     * A Boolean value that indicates whether the tab bar should allow user interaction
     */
    enabled: React.PropTypes.bool,
  },

  render: function() {
    return (
      <RCTTabBar
        style={[styles.tabGroup, this.props.style]}
        tintColor={this.props.tintColor}
        barTintColor={this.props.barTintColor}
        translucent={this.props.translucent !== false}
        selectionIndicatorColor={this.props.selectionIndicatorColor}
        shadow={this.props.shadow !== false}
        enabled={this.props.enabled !== false}>
        {this.props.children}
      </RCTTabBar>
    );
  }
});

var styles = StyleSheet.create({
  tabGroup: {
    flex: 1,
  }
});

var RCTTabBar = requireNativeComponent('RCTTabBar', TabBarIOS);

module.exports = TabBarIOS;
