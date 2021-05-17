// (XML HTTP REQUEST OBJECT)

document.getElementById('button').addEventListener('click', loadData);

function loadData() {
    // Create an XHR Object
    const xhr = new XMLHttpRequest();

    // Open method
    xhr.open('GET', 'data.txt', true);

    // Optional - uesd for spinners/loaders
    xhr.onprogress = function() {
        console.log('READISTATE', xhr.readyState);
        document.getElementById('output').innerHTML = `<ul><li>Connection: ${this.status} ${this.statusText}</li><li>Request: ${this.readyState} ${this.readyStateText}</li></ul>`;
    }
    
    xhr.onerror = function() {
        console.log('Request error!');
    }
    
    // HTTP Statusses: 200 OK ; 403 Forbidden ; 404 Not found
    xhr.onload = function() {
        if(this.status === 200) {
            console.log(this.responseText);
            document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
        }
    }

    // ready state Statusses: 0 Request not initialized ; 1 server connection established ; 2 request received ; 3 processing request ; 4 request finished and response is ready
    // console.log('READISTATE', xhr.readyState);
    // xhr.onreadystatechange = function() {
    //     if(this.status === 200 && this.readyState === 4) {
    //         console.log(this.responseText);
    //     }
    // }



    xhr.send();
}