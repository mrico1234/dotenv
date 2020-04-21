function getCompanies(){
  return fetch("http://localhost:3000/static_resources/api/v1/business_search.json?limit=10&page=1&word=tecnologia").then( data => {
    return data.json()
  }).catch(console.log);
  // let result = response.json();
  // return result;

}

export {getCompanies};

export default async function  (query, type, page) {
  let url;
  // if (type === '1'){
  //   url = `${process.env.HOST}/static_resources/api/v1/business_search.json?limit=10&page=1&word=${query}`
  // }else{
  //   url = `${process.env.HOST}/static_resources/api/v1/business_search/processes?limit=5&page=2&term=${query}`
  // }
  if (type === '1'){
    url = query ? `https://testing.handelbay.com/static_resources/api/v1/business_search.json?limit=20&page=${page}&word=${query}` : `https://testing.handelbay.com/static_resources/api/v1/business_search.json?limit=20&page=${page}`
  } else if (type === '2') {
    url = query ? `https://testing.handelbay.com/static_resources/api/v1/business_search/processes?limit=20&page=${page}&term=${query}` : `https://testing.handelbay.com/static_resources/api/v1/business_search/processes?limit=20&page=${page}`
  } else {
    let f = new Date();
    let fecha = f.getFullYear()+ "-" + (f.getMonth() +1) + "-" +f.getDate()
    url = `https://www.datos.gov.co/resource/p6dx-8zbt.json?$where=fecha_de_recepcion_de > '${fecha}'&adjudicado=No&$limit=20&$offset=${page}&$order=fecha_de_recepcion_de ASC&fase=Presentación de oferta`
  }
  //const response = await fetch(`http://localhost:3000/static_resources/api/v1/business_search.json?limit=10&page=1&word=${query}`)
  const response = await fetch(url)
  let result = await response.json();
  return result;
}