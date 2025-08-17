import React, { useRef } from 'react'
import './Card.css'
import useSpotlight from '../../utilities/useSpotlight'
const Card = ({title,content,writer}) => {
    const ref = useRef(null)
    const { x, y } = useSpotlight(ref)
    return (
            <div id='card' ref={ref} style={{
                '--x': `${x}px`,
                '--y': `${y}px`
            } as React.CSSProperties}>
                <div id='card_title'>{title}</div>
                <div id='card_content'>{content}</div>
                <div id='card_writer'>{writer}</div>
                <div id='learn_more'>Learn More</div>
            </div>
    )
}

export default Card