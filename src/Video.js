import React from 'react'
import ADAB from './ADAB.mp4'
export default function Video() {
    return (
        <div className="stdiv">
            <h1 className="h">About Us</h1><br />
            <iframe width="500" height="315" src="https://www.youtube.com/embed/lx1X_wSbS4o" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            {/* <video width="400" controls>
                <source src="ADAB.mp4" type="video/mp4" />
            </video> */}
        </div>
    )
}
