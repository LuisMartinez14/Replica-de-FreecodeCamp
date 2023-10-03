import React from 'react'
import styled from 'styled-components'

const ColorParrafo = '#2090A6';
const BordeParrafo = '#2E24B3';

const Contenedor = styled.div`
width:100%;
margin-top:15px;
margin-bottom:15px;
display:flex;
justify-content:center;
`
const Caja = styled.div`
width: 70%;
height:200px;
display:grid;
grid-template-columns:1fr 1fr 1fr 1fr;
grid-template-rows:1fr;
`
const Foto = styled.div`
grid-area: 1/1/2/2;
overflow:hidden;
width:200px;
height:200px;
display:flex;
justify-content:right;
box-sizing:border-box;
border-radius:50%;
box-shadow:110px 0px 1px #00B497;
&::after{
content:'';
display:block;
width:50% ;
height:100%;
z-index:-100000;
position:relative;
background-color:#00B497;
}
@media (max-width: 500px) {
box-shadow:none;
   &::after{
    content:none;
}
}
`
const AreaTexto = styled.div`
background-color:${ColorParrafo};
grid-area:1/2/2/5;
border-radius: 0 20px 20px 0;
z-index:-5 ;
display:flex;
justify-content:flex-end;
align-items:center;

`
const Texto = styled.p`
background:#DAF6FD;
text-align:justify;
width:80%;
height:90%;
box-sizing:border-box;
padding:5px 10px;
margin-right:5%;
z-index:100;
border-radius:10px;
font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
`
export const Declaraciones = ({fondo,texto,nombre,pais,cargo,empresa}) => {
  return (
    <Contenedor>
    <Caja>
    <Foto>
    <img src={fondo} />
    </Foto>
    <AreaTexto>
    <Texto>
    {nombre} en {pais} <br/>
    {cargo} en {empresa} <br/> <br/>
    {texto}
    </Texto>
    </AreaTexto>
    </Caja>
    </Contenedor>
  )
}
