import React from 'react';
import "./Widgets.css";
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from "react-twitter-embed";
import { Search } from '@material-ui/icons';

function Widgets() {
    return (
        <div className="Widgets">
            <div className="widgets__input">
            <Search className="widgets__searchIcon" />
            <input placeholder="search Twitter" type="text"/>
            </div>  

            <div className="widgets__widgetContainer">
                <h2>whats happening</h2>

                <TwitterTweetEmbed tweetId={"1385195373619187714"} />
                
                <TwitterTimelineEmbed
                sourceType="profile"
                screenName="jitesh_sonar"
                options={{ height: 400 }}
                /> 

                <TwitterShareButton
                url={"https://facebook.com/jiteshsonar"}
                options={{text:"#react js is awsom", via:"jiteshsonar"}}
                />
            </div>
        </div>
    )
}

export default Widgets;
