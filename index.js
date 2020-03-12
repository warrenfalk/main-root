function findRoot() {
    var r = module;
    while (r.parent) { r = r.parent };
    return r.path || path.dirname(r.filename);
}

module.exports = {
    path: findRoot(),
}