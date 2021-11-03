import React from 'react';
import "./Sidebar.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOption from './SidebarOption';
import {Home, 
        Search,
        NotificationsNone,
        ListAlt, 
        MailOutline,
        BookmarkBorder, 
        PermIdentity,
        MoreHoriz
} from "@material-ui/icons";
import { Button } from "@material-ui/core";


function Sidebar() {
    return (
        <div className="sidebar">
            <TwitterIcon className="sidebar__twitterIcon" />

            <SidebarOption active Icon={Home} text="Home" />
            <SidebarOption Icon={Search} text="Explore" />
            <SidebarOption Icon={NotificationsNone} text="Notification" />
            <SidebarOption Icon={MailOutline} text="Mail" />
            <SidebarOption Icon={BookmarkBorder} text="Bookmark" />
            <SidebarOption Icon={ListAlt} text="List" />
            <SidebarOption Icon={PermIdentity} text="Id" />
            <SidebarOption Icon={MoreHoriz} text="More" />
            
            <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>
        </div>
    )
}

export default Sidebar;
