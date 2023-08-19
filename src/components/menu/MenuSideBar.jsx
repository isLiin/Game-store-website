import React from "react";
import './style.css';
import {
    HiOutlineUserCircle, HiHeart, HiMagnifyingGlass,
    HiMiniComputerDesktop, HiBanknotes
} from "react-icons/hi2";
import {
    BsFillKeyboardFill, BsFillMouse3Fill,
    BsHeadset, BsHeadsetVr
} from 'react-icons/bs';
import { img_logo, img_name } from "../../common/dataFake.js";
import { Fab, Tooltip } from "@mui/material"

const MenuSideBar = (propts) => {
    return (
        <div
            id="Menu-side-bar"
            className="Menu-side-bar">
            <div className="Menu-side-bar__Logo">
                <img src={img_logo} alt={img_logo} />
                <img src={img_name} alt={img_name} />
            </div>
            <div className="Menu-side-bar__Button">
                <Tooltip title="Catalog" arrow>
                    <Fab>catalog</Fab>
                </Tooltip>
            </div>
            <div className="Menu-side-bar__Group-Menu">
                <Tooltip title="Profile" placement="top-start" arrow>
                    <div className="item-menu">
                        <div className="item-icon"><HiOutlineUserCircle /></div>
                        <div className="item-name">profile</div>
                    </div>
                </Tooltip>
                <Tooltip title="Search" placement="top-start" arrow>
                    <div className="item-menu">
                        <div className="item-icon"><HiMagnifyingGlass /></div>
                        <div className="item-name">search</div>
                    </div>
                </Tooltip>
                <Tooltip title="Favorite" placement="top-start" arrow>
                    <div className="item-menu">
                        <div className="item-icon"><HiHeart /></div>
                        <div className="item-name">favorite</div>
                    </div>
                </Tooltip>
                <Tooltip title="Balance" placement="top-start" arrow>
                    <div className="item-menu">
                        <div className="item-icon"><HiBanknotes /></div>
                        <div className="item-name">balance</div>
                    </div>
                </Tooltip>
            </div>
            <div className="Menu-side-bar__Group-Category">
                <div className="Category-header">
                    <div className="title">category</div>
                    <div className="icon"></div>
                </div>
                <div className="Category-list">
                    <Tooltip title="Computer" placement="top-start" arrow>
                        <div className="item-menu">
                            <div className="item-icon"><HiMiniComputerDesktop /></div>
                            <div className="item-name">computer</div>
                        </div>
                    </Tooltip>
                    <Tooltip title="Headphones" placement="top-start" arrow>
                        <div className="item-menu">
                            <div className="item-icon"><BsHeadset /></div>
                            <div className="item-name">Headphones</div>
                        </div>
                    </Tooltip>
                    <Tooltip title="VR Glasses" placement="top-start" arrow>
                        <div className="item-menu">
                            <div className="item-icon"><BsHeadsetVr /></div>
                            <div className="item-name">VR Glasses</div>
                        </div>
                    </Tooltip>
                    <Tooltip title="Keyboard" placement="top-start" arrow>
                        <div className="item-menu">
                            <div className="item-icon"><BsFillKeyboardFill /></div>
                            <div className="item-name">Keyboard</div>
                        </div>
                    </Tooltip>
                    <Tooltip title="Mouse" placement="top-start" arrow>
                        <div className="item-menu">
                            <div className="item-icon"><BsFillMouse3Fill /></div>
                            <div className="item-name">Mouse Gaming</div>
                        </div>
                    </Tooltip>
                </div>
            </div>
        </div>
    )
}

export default MenuSideBar;