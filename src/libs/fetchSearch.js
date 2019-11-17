function getCompanies(){
  return fetch("http://localhost:3000/static_resources/api/v1/business_search.json?limit=10&page=1&word=tecnologia").then( data => {
    return data.json()
  }).catch(console.log);
  // let result = response.json();
  // return result;

}

export {getCompanies};

export default async function  () {
  const response = await fetch("http://localhost:3000/static_resources/api/v1/business_search.json?limit=10&page=1&word=tecnologia")
  let result = await response.json();
  return result;
}