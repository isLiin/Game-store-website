import React, { useState } from "react";
import './style.css'
import { img_9 } from "../../common/dataFake"
import { CiSearch } from "react-icons/ci";
import {
    BsBellFill, BsBoxSeamFill, BsFillPersonFill,
    BsFillFunnelFill, BsPlusCircleFill, BsCurrencyExchange,
    BsXLg
} from "react-icons/bs";
import {
    Button, IconButton, Tooltip,
    Rating, Radio, TableRow, TableCell, TableBody
} from "@mui/material";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const ScreenMain = (props) => {
    var total = 0;
    const [openStore, setOpenStore] = useState(false);
    const [openNoti, setOpenNoti] = useState(false);
    const [store, setStore] = useState([]);
    // const [notificate, setNotificate] = useState([]);
    const [notificateStote, setNotificateStore] = useState(3);
    const [notificateNoti, setNotificateNoti] = useState(2);

    const handleClickOpen = (dialog) => {
        return dialog ? setOpenNoti(true) : setOpenStore(true);
    };

    const handleClose = (dialog) => {
        return dialog ? setOpenNoti(false) : setOpenStore(false);
    };

    /**
     * 
     * @param {*} item 
     * @returns Add item to store
     */
    const handleAddStore = (item) => {
        let arr = [];
        let checked = store.includes(item);

        if (checked) {
            let count = store[store.indexOf(item)].count;
            store[store.indexOf(item)].count = (count !== undefined) ? count + 1 : 1;
            arr = [...store];
        } else {
            arr = [...store, item];
        }
        setNotificateStore(notificateStote + 1);
        return setStore(arr);
    }

    /**
     * 
     * @param {*} item 
     * @returns Delete item in store
     */
    const handleRemoveStore = (item) => {
        (notificateStote > 0) ? setNotificateStore(notificateStote - 1) : setNotificateStore(notificateStote);
        return setStore(store.slice(store.indexOf(item)));
    }

    /**
     * 
     * @param {*} price 
     * @returns Total bill
     */
    const billStore = (price) => {
        total += price;
    }

    /**
     *  true : Notifications,
     *  false: Store
     * 
     * @param {true/flase} dialog 
     * @returns dialog
     */
    const dialoger = (dialog) => {
        function bill() {
            return (total !== 0) ? (<div className="total"
                style={{
                    marginRight: "auto"
                }}
            >Bill: {total}</div>
            ) : (<div></div>)
        }
        return dialog ? (
            <Dialog
                open={openNoti}
                onClose={() => handleClose(true)}
                aria-labelledby="draggable-dialog-title"
            >
                <DialogTitle style={{ userSelect: "none" }} id="draggable-dialog-title">
                    Notifications
                </DialogTitle>
                <DialogContent sx={{
                    minWidth: "550px"
                }}>
                    <DialogContentText>
                        Notifications..
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={() => handleClose(true)}>Cancel</Button>
                </DialogActions>
            </Dialog>
        ) : (
            <Dialog
                open={openStore}
                onClose={() => handleClose(false)}
                aria-labelledby="draggable-dialog-title"
            >
                <DialogTitle style={{ userSelect: "none" }} id="draggable-dialog-title">
                    Store
                </DialogTitle>
                <DialogContent sx={{
                    minWidth: "550px"
                }}>
                    <TableBody>
                        {store.map((row, index) =>
                            <TableRow
                                key={index}
                            >
                                <TableCell component="th" scope="row">
                                    <img src={row.art} alt="imgages" />
                                </TableCell>
                                <TableCell align="right">{row.name}</TableCell>
                                <TableCell align="right">{row.type}</TableCell>
                                <TableCell align="right">{row.coin}</TableCell>
                                <TableCell align="right">
                                    <Button color="error"
                                        onClick={() => handleRemoveStore(row)}
                                    ><BsXLg /></Button>
                                </TableCell>
                                {billStore(row.coin)}
                            </TableRow>
                        )}
                    </TableBody>
                </DialogContent>
                <DialogActions>
                    {bill()}
                    <Button autoFocus onClick={() => handleClose(false)}>
                        Cancel
                    </Button>
                    <Button onClick={() => handleClose(false)}>Buy</Button>
                </DialogActions>
            </Dialog>
        )
    }

    return (
        <div
            id="main"
            className="local-main">
            <div className="group-info">
                <div className="ring">
                    <Tooltip title="Notifications" arrow>
                        <IconButton aria-label="Bell"
                            onClick={() => handleClickOpen(true)}>
                            <BsBellFill />
                        </IconButton>
                        {(notificateNoti !== 0) ? <div className="sl-store">{notificateNoti}</div> : <></>}
                    </Tooltip>
                </div>
                <div className="store">
                    <Tooltip title="..." arrow>
                        <IconButton aria-label="Store"
                            onClick={() => handleClickOpen(false)}>
                            <BsBoxSeamFill />
                        </IconButton>
                        {(notificateStote !== 0) ? <div className="sl-store">{notificateStote}</div> : <></>}
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
                            <BsBoxSeamFill />
                            <span>Order now</span>
                        </Button>
                    </div>
                    <div className="container-image-item">
                        <img src={img_9} alt="images" />
                    </div>
                </div>
                <div className="group-radio">
                    <Radio name="item-new" checked />
                    <Radio name="item-new" />
                    <Radio name="item-new" />
                </div>
            </div>
            <div className="Product">
                <div className="header">Product</div>
                <div className="product-position">
                    <div className="btn">
                        <Tooltip title="Top" arrow>
                            <Button variant="text">Top</Button>
                        </Tooltip>
                    </div>
                    <div className="btn">
                        <Tooltip title="Popullar" arrow>
                            <Button variant="text">Popullar</Button>
                        </Tooltip>
                    </div>
                    <div className="btn">
                        <Tooltip title="Recommended" arrow>
                            <Button variant="text">Recommended</Button>
                        </Tooltip>
                    </div>
                    <div className="btn">
                        <Tooltip title="Fillter" arrow>
                            <Button variant="text">
                                <BsFillFunnelFill />
                                <span>Fillter</span>
                            </Button>
                        </Tooltip>
                    </div>
                </div>
                <div className="product-list-items">
                    {props.data.map((item, index) =>
                        <Tooltip key={index} title={item.name + " - " + item.type + index} placement="top" arrow>
                            <div className="component-card" key={index}>
                                <img src={item.art} alt={item.type} />
                                <div className="name-item">{item.name}</div>
                                <div className="type-item">{item.type}</div>
                                <div className="price-item">
                                    <BsCurrencyExchange />
                                    <span style={{
                                        marginLeft: "1em"
                                    }}>{item.coin}</span>
                                </div>
                                <Button sx={{ fontSize: ".8em" }}
                                    onClick={() => handleAddStore(item)}
                                >
                                    <BsPlusCircleFill />
                                    <span style={{
                                        marginLeft: "1em"
                                    }}>Add to store</span>
                                </Button>
                            </div>
                        </Tooltip>
                    )}
                </div>
            </div>
            {dialoger(true)}
            {dialoger(false)}
        </div>
    )
}

export default ScreenMain;