import React, { Component } from "react";

import { Header, Container, Menu } from "semantic-ui-react";

import TabBarContainer from "../features/tabs/tab-bar";

import Mechs from "../features/mechs/mechs";
import Pilots from "../features/pilots/pilots";
import UnitInfo from "../features/unit-info/unit-info";
import UnitOrganization from "../features/unit-organization/unit-organization";

export default class App extends Component {
  componentWillMount() {
    console.log(process.env.NODE_PATH);
  }

  render() {
    const tabs = [
      { name: "unitInfo", label: "Unit Info", component: UnitInfo },
      { name: "pilots", label: "Pilots", component: Pilots },
      { name: "mechs", label: "Mechs", component: Mechs },
      {
        name: "unitOrganization",
        label: "Unit Organization",
        component: UnitOrganization
      }
    ];

    return (
      <div className="App">
        <div className="App-header">
          <Header inverted as="h1">
            Project Mini-Mek
          </Header>
        </div>
        <Container>
          <TabBarContainer tabs={tabs} size="massive" />
        </Container>
      </div>
    );
  }
}
