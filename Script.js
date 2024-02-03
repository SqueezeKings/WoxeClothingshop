let bntnext=document.getElementById('next')
bntnext.addEventListener('click',suma)

let bntprev=document.getElementById('previous')
bntprev.addEventListener('click',resta)

let btnshop=document.getElementById('btn-shop')
btnshop.addEventListener('click', cambiararopa)

let maincamisas=document.getElementById('main-camisas')
maincamisas.addEventListener('click',cambiaracamisa)

let btnagg=document.getElementById('bnt-add')
btnagg.addEventListener('click',comprar)

let cerrarventa=document.getElementById('cerrar-venta')
cerrarventa.addEventListener('click',cerrarventa1)

let continuar=document.getElementById('seguircompra')
continuar.addEventListener('click',cerrarventa1)

let volverinicio=document.getElementById('volver')
volverinicio.addEventListener('click',backhome)

let infoventas=document.getElementById('info-venta')

let imagenventas=document.getElementById('imagen-ventas')

let carritoshop=document.getElementById('carrito-shop')

let preciocompra=document.getElementById('precio-compra')

let carritomama=document.getElementById('carritomamalon')
carritomama.addEventListener('click',mostrarcarrito)

let btnshop2=document.getElementById('btn-shop2')
btnshop2.addEventListener('click',cambiararopa)

let nobjetos =document.getElementById('numero-objetos')

let view=document.getElementById('view-cart')
view.addEventListener('click',mostrarcarrito)
let eli=document.getElementById('eliminar')
/*eli.addEventListener('click',)*/


let sumatotal = parseInt(0)

let claseid

let numerodeobjetos =parseInt(0)
  
let cotheslist=[]

class ropa
{
    constructor(nombre,img,precio,unidades,id,id2)
    {
        this.nombre=nombre
        this.img=img
        this.precio=precio
        this.unidades=unidades
        this.id=id
        this.id2=id2
    }
}

let camisa1=new ropa('TSHIRT-PROTOTYPE-ONE','image/PROTOTYPE-ONE.png',50000,'10','camisa1','tshirt1')
let camisa2=new ropa('TSHIRT-PROTOTYPE-DOS','image/PROTOTYPE-TWO.png',50000 ,'10','camisa2','tshirt2')
let camisa3=new ropa('TSHIRT-PROTOTYPE-THREE','image/PROTOTYPE-THREE.png',50000,'10','camisa3','tshirt3')

cotheslist.push(camisa1,camisa2,camisa3)

function iniciarpagina ()
{       

   cotheslist.forEach(tshirt => {
        contenedor=`
        <div class="contenedor-camisas">
                
            <label for=${tshirt.id} class="contenedor-camisa">
                <input type="radio" name="camisas" id=${tshirt.id}>
                <div>
                    <img src=${tshirt.img}>
                </div>
                <p>${tshirt.nombre}</p>
                <p>$ ${tshirt.precio} COP</p>
                <pre>Sold out</pre>
            </label>
            </div>
        `
        maincamisas.innerHTML+=contenedor
        
    });
    cotheslist.forEach(tshirt=>
        {
            contenedor=`<div id=${tshirt.id2} style="display: none;">
            <div class="camisa-venta">
                
                <img src=${tshirt.img}>
                    
                
            </div>
            <div class="informacion">
                
                    <p>${tshirt.nombre}</p>
                    <div class="txt">
                        <p>$ ${tshirt.precio} COP</p>
                        <div>
                            <p>Sold out</p>
                        </div>
                    </div>
               
            </div>
        </div>`
            
            infoventas.innerHTML+=contenedor
        })


    
    
    document.getElementById('header').style.display='none'
    document.getElementById('contenedor-slider').style.display='none'
    document.getElementById('main').style.display='none'
    cambiaracamisa()
}
function cambiararopa()
{
    document.getElementById('header').style.display='flex'
    document.getElementById('main').style.display='flex'
    document.getElementById('inicio').style.display='none'
    document.getElementById('carrito').style.display='none'
    document.getElementById('contenedor-slider').style.display=('none')
}
function cambiaracamisa()
{
    let camisaone=document.getElementById('camisa1')

    let camisatwo=document.getElementById('camisa2')

    let camisathree=document.getElementById('camisa3')

    if(camisaone.checked)
    {   
        claseid=1
        document.getElementById('contenedor-slider').style.display=('flex')
        document.getElementById('main').style.display='none'
        document.getElementById('tshirt1').style.display='flex'
        document.getElementById('tshirt2').style.display='none'
        document.getElementById('tshirt3').style.display='none'


        

        imagenventas.innerHTML=`
        <img src=${camisa1.img} alt="">
                <div>
                    <p>${camisa1.nombre}</p>
                    <p>Size S</p>
                </div>
        `
        
    }else if(camisatwo.checked)
    {
        claseid=2
        document.getElementById('contenedor-slider').style.display=('flex')
        document.getElementById('main').style.display='none'
        document.getElementById('tshirt1').style.display='none'
        document.getElementById('tshirt2').style.display='flex'
        document.getElementById('tshirt3').style.display='none'

        imagenventas.innerHTML=`
        <img src=${camisa2.img} alt="">
                <div>
                    <p>${camisa2.nombre}</p>
                    <p>Size S</p>
                </div>`
    }else if(camisathree.checked)
    {
        claseid=3
        document.getElementById('contenedor-slider').style.display=('flex')
        document.getElementById('main').style.display='none'
        document.getElementById('tshirt1').style.display='none'
        document.getElementById('tshirt2').style.display='none'
        document.getElementById('tshirt3').style.display='flex'
        imagenventas.innerHTML=`
        <img src=${camisa3.img} alt="">
                <div>
                    <p>${camisa3.nombre}</p>
                    <p>Size S</p>
                </div>`
    }
}
function comprar()
{
    let carritoshop=document.getElementById('carrito-shop')
    document.getElementById('box-venta').style.display='flex'

    if(claseid==1)
    {   
        preciocompra.innerHTML=''
        sumatotal+=parseInt(`${camisa1.precio}`)
        preciocompra.innerHTML+=sumatotal
        
        
        carritoshop.innerHTML+=`
        <div class="contenedor-carrito">
                <div>
                    <img src=${camisa1.img} alt="">
                </div>
                <div>
                    <p>${camisa1.nombre}</p>
                    <p>$ ${camisa1.precio} COP</p>
                </div>
                <div>
                    <i id="eliminar" class="fa-solid fa-xmark"></i>
                </div>
            </div>
        `
        numerodeobjetos += parseInt(1)
        nobjetos.innerHTML=parseInt(numerodeobjetos)
        
    }else if(claseid==2)
    {
        preciocompra.innerHTML=''
        sumatotal+=parseInt(`${camisa2.precio}`)
        preciocompra.innerHTML+=sumatotal
        carritoshop.innerHTML+=`
        <div class="contenedor-carrito">
                <div>
                    <img src=${camisa2.img} alt="">
                </div>
                <div>
                    <p>${camisa2.nombre}</p>
                    <p>$ ${camisa2.precio} COP</p>
                </div>
                <div>
                    <i id="eliminar" class="fa-solid fa-xmark"></i>
                </div>
            
            </div>`
            numerodeobjetos += parseInt(1)
            nobjetos.innerHTML=parseInt(numerodeobjetos)
    }else if(claseid==3)
    {
        preciocompra.innerHTML=''
        sumatotal+=parseInt(`${camisa3.precio}`)
        preciocompra.innerHTML+=sumatotal 
        carritoshop.innerHTML+=`
        <div class="contenedor-carrito">
            <div>
                <img src=${camisa3.img} alt="">
            </div>
            <div>
                <p>${camisa3.nombre}</p>
                <p>$ ${camisa3.precio} COP</p>
            </div>
            <div>
                <i id="eliminar" class="fa-solid fa-xmark"></i>
            </div>
        </div>`
        numerodeobjetos += parseInt(1)
        nobjetos.innerHTML=parseInt(numerodeobjetos)
    }
}
function cerrarventa1()
{
    document.getElementById('box-venta').style.display='none'
}
function backhome()
{
    document.getElementById('box-venta').style.display='none'
    document.getElementById('header').style.display='none'
    document.getElementById('inicio').style.display='flex'
    document.getElementById('contenedor-slider').style.display=('none')

   
}
function suma()
{
    claseid++
    document.getElementById('box-venta').style.display='none'
    sliderfuncion()
}
function resta()
{
    claseid--
    document.getElementById('box-venta').style.display='none'
    if(claseid==0)
    {
        claseid=1
    }
    
    sliderfuncion()
}
function sliderfuncion()
{
   

    if(claseid==1)
    {   
        
        document.getElementById('contenedor-slider').style.display=('flex')
        document.getElementById('main').style.display='none'
        document.getElementById('tshirt1').style.display='flex'
        document.getElementById('tshirt2').style.display='none'
        document.getElementById('tshirt3').style.display='none'


        

        imagenventas.innerHTML=`
        <img src=${camisa1.img} alt="">
                <div>
                    <p>${camisa1.nombre}</p>
                    <p>Size S</p>
                </div>
        `
        
    }else if(claseid==2)
    {
       
        document.getElementById('contenedor-slider').style.display=('flex')
        document.getElementById('main').style.display='none'
        document.getElementById('tshirt1').style.display='none'
        document.getElementById('tshirt2').style.display='flex'
        document.getElementById('tshirt3').style.display='none'

        imagenventas.innerHTML=`
        <img src=${camisa2.img} alt="">
                <div>
                    <p>${camisa2.nombre}</p>
                    <p>Size S</p>
                </div>`
    }else if(claseid==3)
    {
        claseid=3
        document.getElementById('contenedor-slider').style.display=('flex')
        document.getElementById('main').style.display='none'
        document.getElementById('tshirt1').style.display='none'
        document.getElementById('tshirt2').style.display='none'
        document.getElementById('tshirt3').style.display='flex'
        imagenventas.innerHTML=`
        <img src=${camisa3.img} alt="">
                <div>
                    <p>${camisa3.nombre}</p>
                    <p>Size S</p>
                </div>`
    }
}
function mostrarcarrito()
{
    document.getElementById('carrito').style.display='flex'
    document.getElementById('contenedor-slider').style.display=('none')
    document.getElementById('main').style.display='none'
    document.getElementById('inicio').style.display='none'
    document.getElementById('contenedor-slider').style.display=('none')
    document.getElementById('box-venta').style.display='none'
}
 

window.addEventListener('load',iniciarpagina)
