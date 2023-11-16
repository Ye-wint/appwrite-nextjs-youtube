"use client"
import useAuth from "@/context/useAuth";
import appwriteService from "@/appwrite/config";
import { useRouter } from "next/router";
import React, {useEffect, useState} from "react";

const LogoutPage = () => {
    const router = useRouter();
    const {setAuthStatus} = useAuth();


    useEffect(()=> {
        appwriteService.LogOut()
        .then(()=> {
            setAuthStatus(false);
            router.replace("/")
        })
    },[]);

    return(<></>);
}
export default LogoutPage