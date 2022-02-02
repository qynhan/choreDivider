import { Button } from "react-bootstrap"
import { useUserAuth } from "../contexts/UserAuthContext";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import carousel_img1 from "../image/carousel_img1.png";
import carousel_img2 from "../image/carousel_img2.png";
import carousel_img3 from "../image/carousel_img3.png";

import { makeStyles } from "@material-ui/core/styles";
import Wrapper from "./Header/Wrapper";
import CardWrapper from "./Cardwrapper/CardWrapper";
import { ReadMoreBtn } from "./Styledcomponents/StyledComponents";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "20px auto",
        // margin: "20px"
    },
    viewBtn: {
        position: "relative",
        top: "160px",
        margin: "20px auto",
    }
}));


const Home = () => {
    const { user, logOut } = useUserAuth();
    // console.log(user);
    const handleLogOut = async () => {
        try {
            await logOut();
        } catch (err) {
            console.log(err.message);
        }
    }

    const classes = useStyles();

    return (
        <div className="p-4 box my-3 text-center">
            Hello Welcome <br />
            {user && user.email}

            <div className={classes.root}>
                <Wrapper />
                <CardWrapper />
                <ReadMoreBtn style={{ margin: "72px" }} className={classes.viewBtn}>Pick Your Pet</ReadMoreBtn>
                {/* <div className="d-grip gap-2 "> */}
                <div>
                    <Button variant="primary" onClick={handleLogOut}>Log out</Button>
                </div>
            </div>
        </div>
    )
}

export default Home;