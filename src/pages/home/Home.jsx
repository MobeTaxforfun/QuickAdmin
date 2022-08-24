import Chart from "../../components/chart/Chart";
import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import TableList from "../../components/table/Table";
import Widget from "../../components/widget/Widget";

import "./home.scss";

export const Home = () => {
    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <div className="widgets">
                    <Widget type="user" />
                    <Widget type="order" />
                    <Widget type="earning" />
                    <Widget type="balance" />
                </div>
                <div className="charts">
                    <Featured />
                    <Chart aspect={3 / 1} title="Total" />
                </div>
                <div className="listContainer">
                    <div className="listTitle">SomeTable here</div>
                    <TableList />
                </div>
            </div>
        </div>
    );
};

export default Home;