import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",              //Obs: tem que colocar o nome da batabase da máquina que está usando para poder conectar o crud.
    user: "root", //seu user
    password: "root",//senha do seu
    database: "crud"//nome do seu database.

    //acho que se não clocar as informação não funciona. até se usar "IF NOT ECXIST" pra criar as coluna altomaticamente...
})

//obs: usei MySQL "Workbench 8.0 CE" caso não dê certo para conectar, deve ser porque o aplicativo não foi iniciado,
// aí você vai em serviços da máquina e starta ele, se não funcionar...segura na mão de deus.
//eu tive mais facilidade com "Workbench 8.0 CE" por ter visto antes. infelizmente não me senti seguro com o Xampp principalmente nas chaves estrengeiras.












//Obrigado pai