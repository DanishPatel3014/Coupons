import React, { useEffect } from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import AppRoute from './routes/Route';
import { loadUser } from './reducers/useReducers'
import { useDispatch } from 'react-redux'
import { extendTheme } from "@chakra-ui/react"
import Cookies from 'js-cookie'
import "./assets/css/app.css";

function App() {

  const theme = extendTheme({
    colors: {
      brand: {
        100: "#071A2F",
        200:'#fff',
        300:'#66B2FF',
        400:'BlackAlpha 800',
        500:'#A0AEC0'
      },
    },
  })

  const dispatch = useDispatch();

  useEffect(() => {
    (async()=>{
      if(localStorage.getItem('user') !== null){
        let user = JSON.parse(localStorage.getItem('user') ?? '{}')
        dispatch(loadUser(user))
      }else if(Cookies.get('user') !== undefined){
        let user = JSON.parse(Cookies.get('user') ?? '{}')
        dispatch(loadUser(user))
      }
    })()
  }, [])

  return (
    <ChakraProvider theme={theme}>
      <AppRoute />
    </ChakraProvider>
  );
}

export default App;
