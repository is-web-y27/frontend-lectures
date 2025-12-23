let controller = new AbortController();

fetch('http://jsonplaceholder.typicode.com/posts/1', {
    method: 'GET',
    // method: 'POST',
    // body: {
    //     a: 4,
    // },
    headers: {
        'Content-Type': 'text/json',
        'Authorization': 'Bearer MY_JWT',
    },
    signal: controller.signal,
}).then(response => response.json()).catch(console.error);

setTimeout(() => { controller.abort('Timed out') }, 2000);
