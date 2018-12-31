const HEROS = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];
const DATAMOCK ={
  "bankList": [
    {
      "accountNo": 1234,
      "bankName": "Saigon Bank",
      "term": "Tiet kiem lai cky 01M thong thuong - 1 thang",
      "amount": 1000000,
      "interestRate": 5.4,
      "transactionDate": "2018-10-05T17:00:00.000Z",
      "maturityDate": "2018-12-03T17:00:00.000Z"
    },
    {
      "accountNo": 4567,
      "bankName": "ACB Bank",
      "term": "Tiet kiem lai cky 01M thong thuong - 6 thang",
      "amount": 6000000,
      "interestRate": 6.1,
      "transactionDate": "2018-12-03T17:00:00.000Z",
      "maturityDate": "2018-12-03T17:00:00.000Z"
    },
    {
      "accountNo": 7899,
      "bankName": "Sacombank",
      "term": "Tiet kiem lai cky 01M thong thuong - 12 thang",
      "amount": 12000000,
      "interestRate": 6.5,
      "transactionDate": "2017-12-03T17:00:00.000Z",
      "maturityDate": "2018-11-12T17:00:00.000Z"
    }
  ]
}


const DROPDOWN = {
  "bankNames": ["Sacombank","ACB Bank","Saigon Bank"]
}
const origin = "http://localhost:3000";
const CONST = {
  "number":[1,2,3,4,5,6,7,8,9,10, 11],
  "chu":['một', 'hai', 'ba', 'bốn', 'năm', 'sáu', 'bảy', 'tám', 'chín', 'mười', 'mười một'],
  "donvi":['mươi','trăm','nghìn', 'triệu'],
  "API":{
    "GET_ES": origin + "/getES/",
    "SAVE_ES": origin + "/saveES/",
    "DELETE_ES": origin + "/deleteES/",
    "GET_ALL_ES": origin + "/getAllES/",
  },
  "DB_MODE": {
    "LOCALSTORAGE": "local",
    "SESSIONSTORAGE": "session",
    "ES" : "es"
  },
  "USER_MODE":{
    "GUEST":"guest"
  },
  "URL":{
    "TYPE_ES":{
      "BANK": "demo",
      "BOOK": "book"
    }
    
  }
}
var TABLE = [];
(function init(){
CONST.number.forEach(num => {
  TABLE[num] = CONST.chu[num-1];
})
})()

export {HEROS, DATAMOCK, DROPDOWN, CONST, TABLE}