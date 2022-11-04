import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getIP } from "./actions/ip";

const IP = () => {
  const dispatch = useDispatch()
  const { ip, messages } = useSelector(state => state.ip)

  useEffect(() => {
    dispatch(getIP())
  }, [])

  return <h1>Twoje IP: {ip}</h1>
}

export default IP
