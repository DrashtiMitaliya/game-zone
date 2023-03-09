import React from 'react';

import Form from 'react-bootstrap/Form';
import { useSelector } from 'react-redux';

export const Selector = () => {
    let uniqeData = []
    const userInfoArray = useSelector((state) => state.user);

    return (

        <div className='main'>

            {userInfoArray.users.map(item => {
                if (uniqeData.includes(item.platform)) {
                    return null
                }
                else {
                    uniqeData.push(item.platform)
                }
            })}
            <Form.Select aria-label="Default select example" className='w-25 m-auto my-5'>

                <div>

                    {/* {uniqeData.map(displaydata =>(<option>{displaydata}</option>))} */}
                    {/* { console.log(uniqeData)} */}
                </div>

            </Form.Select>

        </div>
    )
}
