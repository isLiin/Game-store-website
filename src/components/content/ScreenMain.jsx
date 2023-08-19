import React from "react";
import './style.css'
import { img_9 } from "../../common/dataFake"
import { CiSearch } from "react-icons/ci";
import { BsBellFill, BsBoxSeamFill, BsFillPersonFill } from "react-icons/bs";
import { 
    Button, IconButton, Tooltip,
    Rating, Radio
} from "@mui/material";


const ScreenMain = (props) => {

    return (
        <div
            id="main"
            className="local-main">
            <div className="group-info">
                <div className="ring">
                    <Tooltip title="Notifications" arrow>
                        <IconButton aria-label="Bell">
                            <BsBellFill />
                        </IconButton>
                    </Tooltip>
                </div>
                <div className="store">
                    <Tooltip title="Store" arrow>
                        <IconButton aria-label="Store">
                            <BsBoxSeamFill />
                        </IconButton>
                    </Tooltip>
                </div>
                <div className="user">
                    <Tooltip title="User" arrow>
                        <IconButton aria-label="user">
                            <BsFillPersonFill />
                        </IconButton>
                    </Tooltip>
                </div>
            </div>
            <Tooltip title="Search.." arrow>
                <div id="main_searchItem" className="inputSearch">
                    <Button variant="text"><CiSearch /></Button>
                    <input type="search" placeholder="Search.." />
                </div>
            </Tooltip>
            <div className="group-new">
                <div className="new-item">
                    <div className="container-title">
                        <div className="rating">
                            <Rating 
                                name="half-rating-read" 
                                size="small"
                                defaultValue={4.5} 
                                precision={0.5} 
                                readOnly />
                        </div>
                        <div className="title">[Oculus <span>VR</span>]</div>
                        <div className="title-2">
                            VR box 360 original complete geme.VR gaming complete set of 2 remotes.
                        </div>
                        <Button variant="contained">
                            <BsBoxSeamFill/> 
                            <span>Order now</span>
                        </Button>
                    </div>
                    <div className="container-image-item">
                        <img src={img_9} alt="images" />
                    </div>
                </div>
                <div className="group-radio">
                    <Radio name="item-new" checked/>
                    <Radio name="item-new"/>
                    <Radio name="item-new"/>
                </div>
            </div>
        </div>
    )
}

export default ScreenMain;