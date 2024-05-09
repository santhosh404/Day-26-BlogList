import UIUX from "./pages/UIUX";
import CyberSecurity from "./pages/CyberSecurity";
import DataScience from "./pages/DataScience";
import FullStackDevelopment from "./pages/FullStackDevelopment";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";



export const routes = [
    {
        path: "*",
        element: PageNotFound
    },
    {
        path: "/",
        element: Home
    },
    {
        path: "/full-stack-development",
        element: FullStackDevelopment
    },
    {
        path: "/data-science",
        element: DataScience
    },
    {
        path: "/cyber-security",
        element: CyberSecurity
    },
    {
        path: "/ui-ux",
        element: UIUX
    }
]