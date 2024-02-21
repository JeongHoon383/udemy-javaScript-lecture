async function getData() {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");
  let jsonResponse = await response.json();
  console.log(jsonResponse);
}

getData();
