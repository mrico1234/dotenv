function getCompanies(){
  return fetch("http://localhost:3000/static_resources/api/v1/business_search.json?limit=10&page=1&word=tecnologia").then( data => {
    return data.json()
  }).catch(console.log);
  // let result = response.json();
  // return result;

}

export {getCompanies};

export default async function  (query,type) {
  let url;
  // if (type === '1'){
  //   url = `${process.env.HOST}/static_resources/api/v1/business_search.json?limit=10&page=1&word=${query}`
  // }else{
  //   url = `${process.env.HOST}/static_resources/api/v1/business_search/processes?limit=5&page=2&term=${query}`
  // }

  if (type === '1'){
    url = `https://testing.handelbay.com/static_resources/api/v1/business_search.json?limit=10&page=1&word=${query}`
  }else{
    url = `https://testing.handelbay.com/static_resources/api/v1/business_search/processes?limit=5&page=2&term=${query}`
  }
  //const response = await fetch(`http://localhost:3000/static_resources/api/v1/business_search.json?limit=10&page=1&word=${query}`)
  const response = await fetch(url)
  let result = await response.json();
  return result;
}