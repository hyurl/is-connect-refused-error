module.exports = function isSocketRefuseError(err) {
    return err instanceof Error
        && (err["code"] === "ECONNREFUSED" ||
            err["code"] === "ENOENT" ||
            /connect.+(ECONNREFUSED|ENOENT)/i.test(err.message));
};
