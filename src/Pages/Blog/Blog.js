import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='container'>
            <h1 className='text-center text-info'>Questions and Answer</h1>
            <div className=''>
                <div className='blog my-3'>
                    <h3>Difference Authorization and authentication</h3>
                    <p>
                        Authentication is the act of validating that users are whom claim to be.This is the first step in any security process.Authentication has many process as example passwords, one time pins, Generate security codes via an outside party that grants access. <br />
                        Authorization in system security is the process of giving the user permission to access a specific resource or function.This term is often used interchangeably with access control or client privilege.Giving someone permission to download a particular file on a server or providing individual users with administrative access to an application are good examples of authorization.
                    </p>
                </div>
                <div className='blog my-3'>
                    <h3>Firebase</h3>
                    <p>
                        Firebase manages all data real - time in the database.So, the exchange of data to and from the database is easy and quick.Hence,
                            if We are looking to develop mobile apps such as live streaming, chat messaging, etc., we can use Firebase.Firebase allow syncing the real - time data across all the devices - Android, iOS, and the web without refreshing the screen.Create Application without backend server.
                            Sync real time data in the application.No SQL database so it is more faster. <br />
                            <span className='text-primary'>Firebase Alternatives: </span>
                            1. Back4App
                            2. Parse
                            3. AWS Amplify
                            4. Deployd
                            5. Hasura
                    </p>
                </div>
                <div className='blog'>
                    <h3>Firebase Provides Others Services :</h3>
                    <p>
                        1. Cloud Messaging
                        2. Dynamic Links
                        3. Predictions
                        4. Remote Config
                        5. PushTable
                        6. Flamelink
                        7. Generate traffic
                        8. Backups
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;