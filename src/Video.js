import React from 'react'
import ADABapp from './ADABapp.mp4'

export default function Video() {
    return (
        <div className="stdiv">
            <h1 className="h">About Us</h1><br />
            {/* <iframe width="500" height="315" src="https://www.youtube.com/embed/P7sbrLgMPpk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    */}
            <video width="400" controls>
                <source src={ADABapp} type="video/mp4" />
            </video>
            <div className="hh" ><br /> <br />
                <img src="https://i.ibb.co/fnb0TYy/F4273-E7-D-3-D8-E-4-B93-A785-D26-AA09-BC177.png"
                    alt="ADAB LOGO" width="300" height="200" className="center" />
                <br /><b>ADAB </b>is a web application that allows the user to <b>sign up</b>
            and<b> log in</b> to the website to <b>add </b>her/his favorite <b>quotes</b>, or<b> edit</b>, <b>delete existing quotes</b>,
            and<b> view </b>other<b> users quotes </b>and can <b>likes</b> any <b>quotes</b> he/she likes, the user can also see
            <b>  likes number </b>of a quote in <b>ADAB</b>.</div>
        </div>
    )
}
