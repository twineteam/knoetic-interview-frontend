import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import HeaderContentLayout from "layout/HeaderContentLayout";
import ExplorerView from "pages/ExplorerView";
import DashboardView from "pages/DashboardView";
import CpoHqForumView from "pages/CpoHqForumView";
import CpoHqPollsView from "pages/CpoHqPollsView";

import routes from "routes";

const pages = [
  { exact: true, path: routes.dashboard, component: DashboardView },
  { exact: true, path: routes.explorer, component: ExplorerView },
  { exact: true, path: routes.cpoHqForum, component: CpoHqForumView },
  { exact: true, path: routes.cpoHqPolls, component: CpoHqPollsView },
];

const App = () => {
  return (
    <div className="page-wrapper" style={{ backgroundColor: "ghostwhite" }}>
      <HeaderContentLayout>
        <Switch>
          {pages.map(({ exact, path, component: Component }) => {
            return (
              <Route
                key={path}
                exact={exact}
                path={path}
                render={() => <Component />}
              />
            );
          })}
          <Redirect to={routes.dashboard} />
        </Switch>
      </HeaderContentLayout>
    </div>
  );
};

export default App;
