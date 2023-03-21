import React from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchInformation } from '../../features/userSlice';
import Card from 'react-bootstrap/Card';


export const UserView = () => {

    /* This is a hook that is used to access the state. */
    const userInfoArray = useSelector((state) => state.user.filterArr);

    /* This is a hook that is used to dispatch an action. */
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchInformation())

    }, [dispatch])

     /* This is a react component that is used to display the data in a card format. */
    return (
        <div className="container">
            <div className="row  ">
                {
                    userInfoArray ? userInfoArray.map((currentElement,index) => {

                        if (currentElement.title === undefined) {
                            return false
                        }
                        return (
                            <Card  key={index} border="info " style={{ width: '25rem', backgroundColor: 'aliceblue' }} className="p-4 m-3">
                                <Card.Header style={{ color: 'gray' }}> Title  : {currentElement.title}</Card.Header>
                                <Card.Body>
                                    <Card.Title> platform  : {currentElement.platform}</Card.Title>
                                    <div className='my-2'>
                                        <div className="row">
                                            <div className="col"> Score :{currentElement.score}</div>
                                            <div className="col"> Genre  : {currentElement.genre}</div>
                                        </div>
                                    </div>
                                    <Card.Text>
                                        Editors Choice :{currentElement.editors_choice}
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        )
                    })
                        : 'loading....'
                }

            </div>
        </div>



    )
}


