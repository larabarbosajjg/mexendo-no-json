
const clientesjson = require ("./aula-json.json")
//console.log (clientesjson);

// encontrando dados usando métodos de array
function encontrarNoJson (lista, chave, valor){
   return lista.find((item) => item[chave] === valor);
}
 const encontrado = encontrarNoJson(clientesjson, "nome", "Izaak");

 // para abranger ainda mais dados na pesquisa, pode trocar na função o "===" por ".includes (valor)", assim o parâmetro valor vai englobar diferentes tipos de dados.
 function encontrarNoJson (lista, chave, valor){
    return lista.find((item) => item[chave]. includes(valor));
}
  const encontrado2 = encontrarNoJson(clientesjson, "telefone", "5193301028") 

 console.log(encontrado2)