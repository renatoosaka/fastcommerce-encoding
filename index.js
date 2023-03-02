import axios from 'axios'
import qs from 'qs'
import qsIconv from 'qs-iconv'

function main() {
  const XMLRecords = '<?xml version="1.0" encoding="ISO-8859-1"?><Records><Record Num="1"><Field Name="COMANDO" Value="A"/><Field Name="IDPRODUTO" Value="8319528"/><Field Name="METAKEYWORDSPROD" Value=""/><Field Name="ESTOQUE" Value="0"/><Field Name="ESTOQUEMINIMO" Value="1"/><Field Name="CODBARRASPROD" Value=""/><Field Name="PRECO" Value="13,00"/><Field Name="PRECOPROM" Value=""/><Field Name="DATAPROMINICIO" Value=""/><Field Name="DATAPROMFIM" Value=""/><Field Name="PRECOB2B" Value="13,00"/><Field Name="PRECOB2BPROM" Value=""/><Field Name="NOMECAT" Value="Nível 1-0"/><Field Name="CODPROD" Value="1126559"/><Field Name="NOMEPROD" Value="PRODUTO ACENTUAÇÃO áéó"/><Field Name="PESO" Value="0"/><Field Name="DESCRICAO" Value="PRODUTO ACENTUAÇÃO VAN CURTA"/><Field Name="DESCRLONGA" Value="PRODUTO ACENTUAÇÃO VAN LONGAaa"/><Field Name="DESCRHTM" Value=""/><Field Name="DESCRURL" Value=""/><Field Name="URLTARGET" Value="False"/><Field Name="DISPONIVEL" Value="True"/><Field Name="MAXPARCELASPROD" Value="0"/><Field Name="XMLPARCELASPROD" Value="0"/><Field Name="LANCAMENTO" Value="False"/><Field Name="EMDESTAQUE" Value="False"/><Field Name="IDPRODUTOPAI" Value="0"/><Field Name="ORDEMPROD" Value="0"/><Field Name="DATAVENCIMENTO" Value="30/12/1899"/><Field Name="ADICIONAL1" Value="316306"/><Field Name="ADICIONAL2" Value=""/><Field Name="ADICIONALD1" Value=""/><Field Name="IDSFILTROITEM" Value=""/><Field Name="CORES" Value="0"/><Field Name="IDCATEGORIA" Value="534522"/></Record></Records>'

  const data = {
    "StoreName": "API Onclick Sistemas",
    "StoreID": "14107",
    "Username": "admin",
    "Password": "api10onclick",
    "method": 'ProductManagement',
    "XMLRecords": XMLRecords
  }

  axios
    .post(
      'https://www.fastcommerce.com.br/adm/APILogon.asp',
      qs.stringify(data, { format: 'RFC1738', encoder: qsIconv.encoder('win1252') }),
      {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      })
    .then(({ data }) => {
      console.log(data)
      console.log('DEU CERTO')
    })
    .catch((error) => {
      console.error(error)
      console.error('DEU ERRADO')
    })
}

main()