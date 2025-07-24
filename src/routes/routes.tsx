import Crew from "../components/Crew";
import Destination from "../components/Destination";
import Tech from "../components/Tech";

export const routes = [
    {
        path: "/destination",
        element: Destination,
        title: "Destination"
    },
    {
        path: "crew",
        element: Crew,
        title: "Crew"
    },
    {
        path: "technology",
        element: Tech,
        title: "Technology"
    },
]