import React from 'react'
import Sidebar from '../Sidebar/index'
const ErrorPage = () => {
    return (
        <div class="flex-container">
            <div class="flex-child magenta">
                <Sidebar/>
            </div>
            <div class="flex-child green"></div>
        <div class="mainbox">
        <div class="err">404</div>
        <div class="msg">Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?<p>Let's go <a href="/Landing">home</a> and try from there.</p></div>
          </div>
          </div>
    )
}

export default ErrorPage
