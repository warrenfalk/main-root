"use strict";
var path = require("path");
var fs = require("fs");
function findEntryDir() {
    var r = module;
    while (r.parent) {
        r = r.parent;
    }
    return r.path || path.dirname(r.filename);
}
function findRoot() {
    // allow env var override
    if (process.env.APP_ROOT_PATH) {
        return path.resolve(process.env.APP_ROOT_PATH);
    }

    // Defer to Yarn Plug'n'Play if enabled
    if (process.versions.pnp) {
        try {
            var pnp = requireFunction('pnpapi');
            return pnp.getPackageInformation(pnp.topLevel).packageLocation;
        } catch (e) { }
    }

    // find the nearest ancestor of the entry script with a package.json
    var entryDir = findEntryDir();
    for (; ;) {
        var pkgJson = path.join(entryDir, "package.json");
        if (fs.existsSync(pkgJson))
            return entryDir;
        var parent = path.dirname(entryDir);
        if (parent === entryDir)
            break;
        entryDir = parent;
    }
}
module.exports = {
    path: findRoot()
};
