import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { selectPlatform,setFilter } from '../../features/userSlice'



export const Selector = () => {
    const [arr, setArr] = useState([]);
    const [value, setValue] = useState('')
    let uniqePlatform = []


    /* A hook that allows you to access the Redux store's state and dispatch functions. */
    const userInfoArray = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const handleChange = (e) => {
        dispatch(selectPlatform(e.target.value))
    }

    /**
     * The function takes the value of the input field and filters the array of objects to return only
     * the objects that have a title property that starts with the value of the input field
     */
    const changeHandle = (event) => {
        setValue(event.target.value);
        let local = userInfoArray.users
            .filter(item => {
                if (item.title === undefined) {
                    return false
                }
                const searchTerm = value.toLowerCase();
                const titles = item.title.toLowerCase();
                return titles.startsWith(searchTerm)

            })
        setArr(local)
    };

    /**
     * OnSearch is a function that takes a searchTerm as an argument and sets the value of the
     * searchTerm to the value of the searchTerm.
     */
    const onSearch = (searchTerm) => {
        setValue(searchTerm);
    }

    /**
     * It sets the filter to the array.
     */
    const onInpSearch = () => {
        dispatch(setFilter(arr))
    }

   /* A function that returns a JSX element. */
    return (
  
        <div className='main'>
            {userInfoArray.users.map((item) => {
                if (uniqePlatform.includes(item.platform)) {
                    return null
                }
                else {
                    uniqePlatform.push(item.platform)
                }
                return true

            })}


            {/* A Bootstrap grid system. */ }
            <div className='container' >
                <div className="row">
                    <div className="col-4">
                        < Form.Select className='w-50 my-5' placeholder='select platform' onChange={handleChange}>
                            {uniqePlatform.map((item,index) => (<option key={index} value={item}>{item}</option>))}
                        </Form.Select>
                    </div>
                    <div className="col-8 my-5">
                        <div className="search-container">
                            <div className="search-inner">
                                <input type="text" value={value} onChange={changeHandle} />
                                <button onClick={onInpSearch}> Search </button>
                                
                            </div>
                            <div className="dropdown">
                                {(arr.map((item, index) => (<div onClick={() => onSearch(item.title)} className="dropdown-row" key={index}> {item.title}  </div>)))}
                            </div>
                        </div>

                    </div>

                </div>





            </div>

        </div>




    )
}

