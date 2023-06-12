import styled from "styled-components";
import { Layout as UnstyledLayout } from "./Layout";

const Layout = styled(UnstyledLayout)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .main-body {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    width: 100%;
    margin: auto;
  }
  .main-body > * {
    flex-grow: 1;
  }

  #loader {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.75);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 20;
  }
  .pad {
    width: 25px;
    height: 27px;
    background-color: white;
    -webkit-border-radius: 63px 63px 63px 63px / 108px     108px 72px 72px;
    border-radius: 50%  50%  50%  50%  / 60%   60%         40%  40%;
    display: block;
    position: absolute;
  }       
  .large {
    width: 70px;
    height: 80px;
    transform: rotate(80deg);
    left: 100px;
    top: 50px;
  } 
  .small-1 {
    transform: rotate(50deg);
    left: 145px;
    top: 28px;
  }
  .small-2 {
    transform: rotate(65deg);
    left: 174px;
    top: 50px;
  }  
  .small-3 {
    transform: rotate(98deg);
    position: absolute;
    left: 178px;
    top: 87px;
  }
  .small-4 {
    transform: rotate(140deg);
    position: absolute;
    left: 158px;
    top: 117px;
  }
  /* position and animate */
      
  .paw-print-1 {
    opacity: 0;
    position: absolute;
    left : calc(50% - 275px);
    top: calc(50% + 300px);
    /* left: 25%; */
    /* top: 75%; */
    transform: rotate(-65deg);
    -webkit-animation: walk 2s linear infinite;
    animation: /*keyframe*/walk /*duration*/2s /*transition*/linear /*repeat*/infinite;
  }
  .paw-print-2 {
    opacity: 0;
    position: absolute;
    left : calc(50% - 75px);
    top: calc(50% + 175px);
    /* left: 40%;
    top: 65%; */
    transform: rotate(-65deg);
    -webkit-animation: walk 2s linear infinite 0.25s;
    animation: walk 2s linear infinite /*delay*/0.25s;
  }
  .paw-print-3 {
    opacity: 0;
    position: absolute;
    left : calc(50% - 200px);
    top: calc(50% - 100px);
    /* left: 30%;
    top: 45%; */
    transform: rotate(-65deg);
    -webkit-animation: walk 2s linear infinite 0.5s;
    animation: walk 2s linear infinite 0.5s;
  }     
  .paw-print-4 {
    opacity: 0;
    position: absolute;
    left : calc(50% + 0px);
    top: calc(50% - 200px);
    /* left: 45%;
    top: 35%; */
    transform: rotate(-65deg);
    -webkit-animation: walk 2s linear infinite 0.75s;
    animation: walk 2s linear infinite 0.75s;
  }

  .notifications {
    width: 400px;
    height: 0px;
    z-index: 11;
    position: fixed;
    bottom: 0;
    right: 0;
    /* background-color: red; */
    overflow: visible;
  }
  
  .notifications > * {
    position: absolute
  }

  @media only screen and (max.-width: 656px) {
    .pad {
      width: 25px;
      height: 27px;
      -webkit-border-radius: 63px 63px 63px 63px / 108px     108px 72px 72px;
      border-radius: 50%  50%  50%  50%  / 60%   60%         40%  40%;
    }       
    .large {
      width: 70px;
      height: 80px;
      left: 100px;
      top: 50px;
    } 
    .small-1 {
      left: 145px;
      top: 28px;
    }
    .small-2 {
      left: 174px;
      top: 50px;
    }  
    .small-3 {
      left: 178px;
      top: 87px;
    }
    .small-4 {
      transform: rotate(140deg);
      position: absolute;
      left: 158px;
      top: 117px;
    }
    .paw-print-1 {
      left : calc(50% - 275px);
      top: calc(50% + 300px);
    }
    .paw-print-2 {
      left : calc(50% - 75px);
      top: calc(50% + 175px);
    }
    .paw-print-3 {
      left : calc(50% - 200px);
      top: calc(50% - 100px);
    }     
    .paw-print-4 {
      left : calc(50% + 0px);
      top: calc(50% - 200px);
    }
  }
  
      
  /* position and animate */
      
  /* .paw-print-1 {
    opacity: 0;
    position: absolute;
    left: -10%;
    top: 88%;
    transform: rotate(-59deg);
    -webkit-animation: walk 3s linear infinite;
    animation: walk 3s linear infinite;
  }
  .paw-print-2 {
    opacity: 0;
    position: absolute;
    left: 6%;
    top: 74%;
    transform: rotate(-52deg); 
    -webkit-animation: walk 3s linear infinite 0.25s;
    animation: walk 3s linear infinite 0.25s;
  }
  .paw-print-3 {
    opacity: 0;
    position: absolute;
    left: 0%;
    top: 50%;
    transform: rotate(-42deg); 
    -webkit-animation: walk 3s linear infinite 0.5s;
    animation: walk 3s linear infinite 0.5s;
  }     
  .paw-print-4 {
    opacity: 0;
    position: absolute;
    left: 18%;
    top: 42%;
    transform: rotate(-30deg); 
    -webkit-animation: walk 3s linear infinite 0.75s;
    animation: walk 3s linear infinite 0.75s;
  }    
  .paw-print-5 {
    opacity: 0;
    position: absolute;
    left: 26%;
    top: 12%;
    transform: rotate(0deg); 
    -webkit-animation: walk 3s linear infinite 1s;
    animation: walk 3s linear infinite 1s;
  }   
  .paw-print-6 {
    opacity: 0;
    position: absolute;
    left: 44%;
    top: 20%;
    transform: rotate(15deg); 
    -webkit-animation: walk 3s linear infinite 1.25s;
    animation: walk 3s linear infinite 1.25s;
  }   
  .paw-print-7 {
    opacity: 0;
    position: absolute;
    left: 66%;
    top: 8%;
    transform: rotate(35deg); 
    -webkit-animation: walk 3s linear infinite 1.5s;
    animation: walk 3s linear infinite 1.5s;
  }   
  .paw-print-8 {
    opacity: 0;
    position: absolute;
    left: 74%;
    top: 28%;
    transform: rotate(46deg); 
    -webkit-animation: walk 3s linear infinite 1.75s;
    animation: walk 3s linear infinite 1.75s;
  }
  .paw-print-9 {
    opacity: 0;
    position: absolute;
    left: 96%;
    top: 29%;
    transform: rotate(60deg); 
    -webkit-animation: walk 3s linear infinite 2s;
    animation: walk 3s linear infinite 2s;
  }
  .paw-print-10 {
    opacity: 0;
    position: absolute;
    left: 95%;
    top: 54%;
    transform: rotate(74deg); 
    -webkit-animation: walk 3s linear infinite 2.25s;
    animation: walk 3s linear infinite 2.25s;
  } */
      
  /* walking effect animation keyframes */
      
  @-webkit-keyframes walk {
    35% {
      opacity: 1;
    }
    65% {
      opacity: 0;
    }
  }
      
  @keyframes walk {
    /* appear */
    35% {
      opacity: 1;
    }
    /* disappear */
    65% {
      opacity: 0;
    }
  }

  /* @media only screen and (min-width: 1441px) {
    .pad {
      width: 50px;
      height: 54px;
      background-color: #654321;
      -webkit-border-radius: 63px 63px 63px 63px / 108px     108px 72px 72px;
      border-radius: 50%  50%  50%  50%  / 60%   60%         40%  40%;
      display: block;
      position: absolute;
    }       
    .large {
      width: 140px;
      height: 160px;
      transform: rotate(80deg);
      left: 100px;
      top: 50px;
    } 
    .small-1 {
      transform: rotate(50deg);
      left: 200px;
      top: -2px;
    }
    .small-2 {
      transform: rotate(65deg);
      left: 258px;
      top: 38px;
    }  
    .small-3 {
      transform: rotate(98deg);
      position: absolute;
      left: 271px;
      top: 109px;
    }
    .small-4 {
      transform: rotate(140deg);
      position: absolute;
      left: 238px;
      top: 176px;
    }
  } */
`

export default Layout;