const urls = [
    'https://www.swapi.tech/api/people/1',
    'https://www.swapi.tech/api/people/2',
    'https://www.swapi.tech/api/people/3',
    'https://www.swapi.tech/api/people/4'
]

Promise.all(urls)
    .then((urls) => {
        urls.map((url) => {
            let xhr = new XMLHttpRequest();
            xhr.open("GET", url);
            xhr.responseType = 'json';
            xhr.send();
            xhr.onload = (e) => {
                console.log(xhr.response.result.properties);
            }
        })

    })
    .catch(() => { console.log("error happened") })