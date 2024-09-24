import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AddList = () => {

    const [guestList, setGuestList] = useState([]);
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [comments, setComments] = useState('');

    const getGuestList = () => {
        axios({
            method: 'get',
            url: 'http://localhost:9000/api/guests',
            responseType: 'json'
        }).then(response => {
            console.log(response.data);
            setGuestList(response.data);
        }).catch(error =>{
            console.log(error);
        });
    }

    const handleName = (event) => {
        setName(event.target.value);
    }
    
    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleComments = (event) => {
        setComments(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const guestVo = {
            name: name,
            password: password,
            comments: comments
        };
        axios({
            method: 'post',
            url: 'http://localhost:9000/api/guests',
            data: guestVo
        }).then(response => {
            console.log(response.data);
            getGuestList();
            setName('');
            setPassword('');
            setComments('');
        }).catch(error =>{
            console.log(error);
            alert('저장 실패');
        });
    };

    useEffect(() => {
        getGuestList();
    }, []);


    return (
    <>
        <body>
            <form onSubmit={handleSubmit}>
                <table border="1" width="540px">
                    <tr>
                        <td>이름</td><td><input type="text" name="" value = {name} onChange={handleName}/></td>
                        <td>비밀번호</td><td><input type="password" name="" value = {password} onChange={handlePassword}/></td>
                    </tr>
                    <tr>
                        <td colspan="4"><textarea cols="72" rows="5" value = {comments} onChange={handleComments}></textarea></td>
                    </tr>
                    <tr>
                        <td colspan="4"><button type="submit">등록</button></td>
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
                                <td><Link to={`/deleteform/${guestVo.personId}`} rel="noreferrer noopener">삭제</Link></td>
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