
class RequestSander {
    static request = new XMLHttpRequest();

    static sand (url) {
        this.request.open('GET', 'http://localhost:8080' + url);
        this.request.send();
        return this.request.onreadystatechange = () => {
                if (this.request.readyState === 4) {
                   return  Boolean(this.request.responseText);
                    // return Boolean(this.request.responseText);
                }
        };
    }
}

export default RequestSander