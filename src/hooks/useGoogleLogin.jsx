// import React from 'react';


import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useGoogleLogin = () => {
    const navigate = useNavigate()
    const { googleLogIn } = useAuth()
    const axiosPublic = useAxiosPublic();
    const handlegooglelogin = () => {

        googleLogIn()
            .then(res => {
                const userInfo = {
                    name: res?.user?.displayName,
                    email: res?.user?.email,
                    image: res?.user?.photoURL
                }
                axiosPublic.post('/addUser', userInfo)
                    .then(res => {
                        (res?.data);
                        Swal.fire({
                            title: "Logged in Successfully..",
                            showClass: {
                                popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                            },
                            hideClass: {
                                popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                            }
                        });
                        navigate('/')
                    })


            })
            .catch(err => {
            })
    }
    return handlegooglelogin
};

export default useGoogleLogin;