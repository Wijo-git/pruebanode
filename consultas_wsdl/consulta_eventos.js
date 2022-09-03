var soap = require('soap');
var url = "C:/pruebas/consultas_wsdl/wsdl/AfiliadosEventos.wsdl";
var args = {DOCUMENTO: '8600026933', TIPODOCUMENTO: 'NIT'};


soap.createClient(url, {}, function(err, client) {
    client.setSecurity(new soap.BasicAuthSecurity('WS_QAS_CONSU','inicio.2022"'));
    // console.log('cliente: ', client);
    // console.log(err);
    client.ConsultarInfoEmprAfil_ConsultaInterna_Out(args, function(err, result) {
        //console.log(result);
        console.log(err);
    });
});
