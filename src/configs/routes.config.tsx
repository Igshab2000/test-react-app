import { RouteConfig } from "react-router-config";
import { Redirect } from "react-router-dom";
import App from "../App";
import withLazyLoader from "../hoc/withLazyLoader/withLazyLoader";
import { initializeKey, loginKey } from "../utils/Routes/keys";
import { initializePath, loginPath, rootPath } from "../utils/Routes/paths";

interface IRoutes extends Omit<RouteConfig, "routes"> {}

const Authorization = withLazyLoader(() => import("../containers/Authorization/Authorization"));
const Initialize = withLazyLoader(() => import("../containers/Initialize/Initialize"));

export const unAuthorizedRoutes: IRoutes[] = [
    {
        path: rootPath,
        exact: true,
        component: () => <Redirect to={loginPath}/>,
    },
    {
        key: loginKey,
        path: loginPath,
        component: Authorization,
        exact: true,
    },
    {
        key: initializeKey,
        path: initializePath,
        component: Initialize,
        exact: true,
    },
]