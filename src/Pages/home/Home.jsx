import Banner from "./Banner";
import Categories from "./Categories";
import Facilities from "./Facilities";
import NewRelease from "./NewRelease";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <NewRelease></NewRelease>
            <Facilities></Facilities>
        </div>
    );
};

export default Home;