var express = require('express'),
    aplicacao = express(),
    porta = process.env.PORT || 5000;

aplicacao.listen( porta );

console.log('inscricoes RESTful API a executar em:' + porta);
