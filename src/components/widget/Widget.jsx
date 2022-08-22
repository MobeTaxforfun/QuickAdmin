import "./widget.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import ShopIcon from '@mui/icons-material/Shop';
import MoneyIcon from '@mui/icons-material/Money';
import BalanceIcon from '@mui/icons-material/Balance';

const Widget = ({ type }) => {

    let data;
    const amount = 100;
    const diff = 20;

    switch (type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "See all users",
                icon: (
                    <PersonPinIcon
                        className="icon"
                        style={{
                            color: "crimson",
                            backgroundColor: "rgba(255, 0, 0, 0.2)",
                        }}
                    />
                ),
            };
            break;
        case "order":
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "View all orders",
                icon: (
                    <ShopIcon
                        className="icon"
                        style={{
                            backgroundColor: "rgba(218, 165, 32, 0.2)",
                            color: "goldenrod",
                        }}
                    />
                ),
            };
            break;
        case "earning":
            data = {
                title: "EARNINGS",
                isMoney: true,
                link: "View net earnings",
                icon: (
                    <MoneyIcon
                        className="icon"
                        style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
                    />
                ),
            };
            break;
        case "balance":
            data = {
                title: "BALANCE",
                isMoney: true,
                link: "See details",
                icon: (
                    <BalanceIcon
                        className="icon"
                        style={{
                            backgroundColor: "rgba(128, 0, 128, 0.2)",
                            color: "purple",
                        }}
                    />
                ),
            };
            break;
        default:
            break;
    }

    return (
        <div className="widget">
            <div className="left">
                <span className="title">
                    {data.title}
                </span>
                <span className="counter">
                    {data.isMoney && "$"} {amount}
                </span>
                <span className="link">See all user</span>
            </div>
            <div className="right">
                <div className="percentage">
                    <KeyboardArrowUpIcon />
                    {diff}%
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget