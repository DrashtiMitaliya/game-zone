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



            <div >
                < Form.Select className='w-25 m-auto my-5' placeholder='select platform'>
                    {uniqeData.map((item) => (<option value={item}>{item}</option>))}
                </Form.Select>

                <div>
                    {userInfoArray.filter( currentElement=> currentElement.users.platform(item)).map( currentElement=> (
                    {currentElement}
                    ))}
                </div>
            </div>

        </div>
    )
}
