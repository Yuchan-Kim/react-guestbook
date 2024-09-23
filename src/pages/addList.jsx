import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AddList = () => {

    const [guestList, setGeustList] = useState([]);

    const getGuestList = () => {
        axios({
            method: 'get',
            url: 'http://localhost:9000/api/guests',
            responseType: 'json'
        }).then(response => {
            console.log(response.data);
            setGeustList(response.data);

        }).catch(error =>{
            console.log(error);
            
        });
    }

    useEffect(() => {
        getGuestList();
    }, []);


    return (
    <>
        <body>
            <form>
                <table border="1" width="540px">
                    <tr>
                        <td>이름</td><td><input type="text" name=""/></td>
                        <td>비밀번호</td><td><input type="password" name=""/></td>
                    </tr>
                    <tr>
                        <td colspan="4"><textarea cols="72" rows="5"></textarea></td>
                    </tr>
                    <tr>
                        <td colspan="4"><button type="">등록</button></td>
                    </tr>
                </table>
            </form>
            <br/>

            {guestList.map((guestVo) => {
                return(
                    <div key={guestVo.personId}>
                        <table border="1" width="540px">
                            <tr>
                                <td>{guestVo.personId}</td>
                                <td>{guestVo.name}</td>
                                <td>{guestVo.date}</td>
                                <td><Link to={`/deleteform/${guestVo.guestId}`} rel="noreferrer noopener">삭제</Link></td>
                            </tr>
                            <tr>
                                <td colspan="4">{guestVo.comments}</td>
                            </tr>
                        </table>
                    <br/>
                    </div>
                )
            })}
        </body>
    </>
    );
}
export default AddList;