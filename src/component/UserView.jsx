
import React from 'react'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchInformation } from "../features/userSlice";
import Card from 'react-bootstrap/Card';


export const UserView = () => {

    // const [users ,setUsers] =useState( [] )

    const userInfoArray = useSelector((state) => state.user);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchInformation())

    }, [])

    return (
        <div>

            <div className="container">
                <div className="row  ">

                    {
                        userInfoArray ? userInfoArray.users.map((currentElement) => {
                            if (currentElement.title === undefined) {
                                return false
                            }
                            return (

                                <Card border="info " style={{ width: '25rem', backgroundColor: 'aliceblue' }} className="p-4 m-3">
                                    <Card.Header style={{ color: 'gray' }}> Title  : {currentElement.title}</Card.Header>
                                    <Card.Body>
                                        <Card.Title> platform  : {currentElement.platform}</Card.Title>
                                        <Card.Text>
                                            <div className="row">
                                                <div className="col"> Score :{currentElement.score}</div>
                                                <div className="col"> Genre  : {currentElement.genre}</div>
                                            </div>
                                        </Card.Text>
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


        </div>
    )
}


