'use strict';

const response = await fetch('https://jsonplaceholder.typicode.com/posts');
const data = await response.json();

let openRequest = indexedDB.open('posts', 1);

openRequest.onupgradeneeded = () => {
    let db = openRequest.result;
    if (!db.objectStoreNames.contains('posts')) {
        db.createObjectStore('posts', { keyPath: 'id' });
    }
};

openRequest.onsuccess = () => {
    let db = openRequest.result;

    let transaction = db.transaction('posts', 'readwrite');
    let store = transaction.objectStore('posts');

    store.clear();

    for (const post of data) {
        let request = store.add(post);
        request.onsuccess = () => {
            console.log(`Post #${post.id} is added to IndexedDB`);
        }
    }

    let request = store.get(5);
    request.onsuccess = (data) => {
        console.log(data.target.result);
    }

    request.onerror = (error) => {
        console.error(error);
    }

    request = store.getAll();
    request.onsuccess = (data) => {
        console.table(data.target.result);
    }
}
