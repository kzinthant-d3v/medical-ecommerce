export async function mutate(url, method, data) {
  console.log(url, method, data);
  let result = await fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  result = await result;
  console.log(result);
  return result;
}
