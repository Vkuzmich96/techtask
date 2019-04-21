
class RequestSander {
    static request = new XMLHttpRequest();


    static sand (url) {
        this.request.open('GET', 'http://localhost:8080' + url);
        this.request.send();
        this.request.onreadystatechange = () => {
            if (this.request.readyState === 4 && this.request.status === 200) {
                return this.request.responseText;
            }
        };
    }
}

export default RequestSander