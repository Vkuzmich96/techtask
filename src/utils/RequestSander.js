
class RequestSander {
    static request = new XMLHttpRequest();

    static send (url, success, error) {
        this.request.open('GET', 'http://localhost:8080' + url);
        this.request.send();
        this.request.onreadystatechange = () => {
            if(this.request.readyState === 4){
                let serverResponse = this.request.responseText;
                if(serverResponse){
                    success();
                }else {
                    error();
                }
            }
        };
    }
}

export default RequestSander