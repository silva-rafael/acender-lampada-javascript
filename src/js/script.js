var lampada = document.querySelector('img')
lampada.setAttribute('src', './src/images/apagada.png')

        
document.querySelector('.msg').innerHTML = 'click na lampada para quebrar!'

var botao = document.querySelector('#botao');
var texto = document.querySelector('h3')

var quebrada = false


function trocarLampada(){
    location.reload()
}

function interruptor(props) {

    //condição que quebra a lampada
    if(props){
        quebrada = true
        lampada.src = './src/images/quebrada.png'
        botao.classList.remove('botao-of')
        botao.classList.add('botao-on')
        texto.innerHTML = 'on'        
        document.body.style.backgroundColor = '#000'
        document.querySelector('h2').innerHTML = 'Trocar Lampada <button onclick="trocarLampada()">Trocar</button>'
    
    }


    if(quebrada === false){
        
        if(lampada.src == window.location.origin + '/acender-lampada/src/images/apagada.png'){
            
            lampada.src = './src/images/acesa.png'
            botao.classList.remove('botao-on')
            botao.classList.add('botao-of')
            texto.innerHTML = 'of'
            document.body.style.backgroundColor = "#fff"
            
        }else{
            lampada.src = './src/images/apagada.png'
            botao.classList.remove('botao-of')
            botao.classList.add('botao-on')
            texto.innerHTML = 'on'
            document.body.style.backgroundColor = '#000'
            
        }
    }

 }