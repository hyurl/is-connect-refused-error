const assert = require("assert");
const isConnectRefusedError = require(".");

var err = "an error string";
assert.strictEqual(isConnectRefusedError(err), false);

var err2 = new Error("a normal error");
assert.strictEqual(isConnectRefusedError(err2), false);

var err3 = new Error("connect ENOENT /tmp/.459249383/8799");
assert.strictEqual(isConnectRefusedError(err3), true);

var err4 = new Error("connect ECONNREFUSED");
assert.strictEqual(isConnectRefusedError(err4), true);

var err5 = new Error("some message");
err5["code"] = "ECONNREFUSED";
assert.strictEqual(isConnectRefusedError(err5), true);

var err6 = new Error("some message");
err6["code"] = "ENOENT";
assert.strictEqual(isConnectRefusedError(err6), true);

console.log("#### OK ####");
