import React, { Component } from "react";

import TabView from "./TabView";
import TopHeader from "./TopHeader";

class Dashboard extends Component {
  state = {};

  render() {
    return (
      <div>
        <TopHeader />
        <TabView />
      </div>
    );
  }
}

export default Dashboard;
