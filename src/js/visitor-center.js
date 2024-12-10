function getParam(param) {
    const search = location.search;
    const params = new URLSearchParams(search);
    return params.get(param);
}