import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {login as authLogin} from "../store/authSlice";
import {Button, Input, Logo} from "./index";
import { useDispatch } from 'react-redux';
import authService from "../appwrite/auth";
import {useForm} from "react-hook-form";

function Login() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState("")


    const login = async(data) =>{
        setError("")
        try{
            const session = await authService.login(data)

            if(session){
                const userData = await authService.getCurrentUser();

                if(userData){
                    dispatch(authLogin(userData));
                    navigate("/");
                }
            }
            else{

            }

        }catch(error){
            setError(error.messsage)
        }
    }

  return (
    <div className="flex items-center justify-center w-full" >
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
            <div>

            </div>
        </div>
    </div>
  )
}

export default Login