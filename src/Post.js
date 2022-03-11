import React from 'react';
import './Post.css';
import Avatar from '@mui/material/Avatar';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import InputOption from './InputOption';
import CommentIcon from '@mui/icons-material/Comment';
import SendIcon from '@mui/icons-material/Send';
import ShareIcon from '@mui/icons-material/Share';
import { useSelector } from 'react-redux';

export default function Post({name , description , message  }) {
    const values = useSelector((state)=>state);

    return (
        <div className="post">
            <div className="postleader">
                <Avatar src={values.url} />
                <div className="post_info">
                    <h2>{values.name}</h2>
                    <p>{description}</p>
                    </div>
            </div>
            <div className="postBody">
                <p>{message}</p>
            </div>

            <div className = "post_button">
                <InputOption Icons={ThumbUpIcon} title="Like" color="gray"/>
                <InputOption Icons={CommentIcon} title="comment" color="gray"/>
                <InputOption Icons={ShareIcon} title="share" color="gray"/>
                {/* <InputOption Icons={SendIcon} title="send" color="gray" />  */}

            </div>
        </div>
    )
}
