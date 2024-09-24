import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const DeleteForm = () => {
    const {no} = useParams();
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handlePw = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        let guestVo = {
            password: password
        }
        console.log(guestVo);
        axios({
            method: 'delete',
            url: `http://localhost:9000/api/guests/${no}`,

            headers: { "Content-Type": "application/json; charset=utf-8" },
            data: guestVo,
            responseType: 'json'
        }).then(response => {
            console.log(response);
            if(response.data.result ==='success'){
                navigate('/addlist');
            }else{
                alert('비밀번호가 일치하지 않습니다.');
            }
        });
    };



    return(
        <body>
            <form onSubmit = {handleSubmit} >
                <table>
                    <tr>
                        <td>비밀번호</td>
                        <td><input type="password" name="" value = {password} onChange = {handlePw}/></td>
                        <td><button type="submit">삭제</button></td>
                    </tr>
                </table>
            </form>
            
            <br/><br/>
            <Link to="/addlist">메인으로 돌아가기</Link>
        </body>


    )

}
export default DeleteForm;


