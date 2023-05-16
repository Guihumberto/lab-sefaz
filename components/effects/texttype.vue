<template>
    <div class="wrapper">
      <ul class="sec-texts">
        <li><span>Laboratório</span></li>
        <li><span>Inteligência</span></li>
        <li><span>Inovação</span></li>
        <li><span>Ciência de dados</span></li>
      </ul>
    </div>
  </template>
  
  <script>
    export default {
    }
  </script>
  
  <style scoped>
  div{
    background: #000;
  }
  .wrapper{
    display: flex;
  }
  .wrapper .first-text{
    font-size: 23px;
    color: #fff;
  }
  .wrapper .sec-texts{
    height: 60px;
    line-height: 90px;
    overflow: hidden;
  }
  .sec-texts li{
    position: relative;
    top: 0;
    font-size: 23px;
    color: #0ef;
    list-style: none;
    padding: 0 20px;
    text-shadow: 0 0 10px #0ef;
    animation: slide 12s steps(4) infinite, colorful 6s infinite;
  }
  @keyframes slide {
    100%{
      top: -360px;
    }
  }
  @keyframes colorful {
    100%{
      filter: hue-rotate(360deg);
    }
  }
  .sec-texts li span {
    position: relative;
  }
  .sec-texts li span::before{
    content: '';
    position: absolute;
    left: 0;
    width: 400px;
    height: 90px;
    background: #000;
    border-left: 2px solid #0ef;
    animation: typing 1.5s steps(14) infinite alternate;
  }
  @keyframes typing {
    100%{
      left: 100%;
      margin: 0 -35px 0 35px
    }
  }
  </style>