function MostrarValoracion (valoración)
{
    alert("Has valorado con "+valoración+" puntos");
}
function MostrarCuenta (País,ControlIBAN,Entidad,Sucursal,DC,Cuenta)
{
    alert("Le informamos que su cuenta bancaria es: "+País+ControlIBAN+"-"+Entidad+"-"+Sucursal+"-"+DC+"-"+Cuenta);
}
function MostrarDia (fecha) {
    var dias=["Domingo", "Lunes" , "Martes", "Miércoles", "Jueves", "Viernes"];
    alert("La fecha seleccionada en el elemento fecha es "+dias[new Date(fecha).getDay()]);
}
function Comprobarcodpostal () 
{
    Provincias=["Alava", "Albacete", "Alicante", "Almeria", "Avila", "Badajoz", "Islas Baleares", "Barcelona", "Burgos", "Caceres", "Cadiz", "Castellon", "Ciudad Real", "Cordoba", "La Coruna", "Cuenca", "Gerona", "Granada", "Guadalajara", "Guipuzcua", "Huelva", "Huesca", "Jaen", "Leon", "Lerida", "La Rioja", "Lugo", "Madrid", "Malaga", "Murica", "Navarra", "Orense", "Asturias", "Palencia", "Las Palmas", "Pontevedra", "Salamanca", "Santa Cruz de Tenerife", "Cantabria", "Segovia", "Sevilla", "Soria", "Tarragona", "Teruel", "Toledo", "Valencia", "Valladolid","Vizcaya", "Zamora", "Zaragoza", "Ceuta", "Melilla"];
    Codigopostal=document.getElementById("codpostal").value;
    formulario=document.getElementById("formulario");
    prov=document.getElementById("provincia").value;
    if (Codigopostal==""|| Codigopostal==" "|| isNaN(Codigopostal)){
        alert("Introduce un número");
        formulario.reset(); 
    }
    else if (Codigopostal<0 || Codigopostal>99999){
        alert("Introduce un código postal correcto");
        formulario.reset(); 
    } 
    var encontrado = false
    var i=0;
    while (encontrado==false && i< Provincias.length){
        if(Provincias[i]==prov){
            encontrado = true;
        }
        i++;
    }
    if (encontrado==false){
        alert("Introduce una provincia correcta");
        formulario.reset();     
    }
    else if (i!= Math.trunc(Codigopostal/1000)){
    rojo = document.createElement("h3");
    rojo.textContent = "La provincia introducida no corresponde con el código postal";
    rojo.setAttribute("id", "rojo");
    document.getElementById("resultado").appendChild(rojo);
    document.getElementById("rojo").style.color = "#ff0000";

} else{
        verde = document.createElement ("h3");
        verde.textContent = 'El código postal introducido corresponde a la provincia';
        verde.setAttribute ("id", "verde")
        document.getElementById("resultado").appendChild(verde);
        document.getElementById("verde").style.color = "#00e600";
}   
}   

