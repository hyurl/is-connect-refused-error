# is-connect-refused-error

**Checks if the provided error is connect refused error.**

## Example

```javascript
const { createServer, createConnection } = require("net");
const isConnectRefusedError = require("is-connect-refused-error");

var server = createServer(socket => {
    socket.on("error", err => {
        if (isConnectRefusedError(err)) {
            try {
                socket.destroy();
                socket.unref();
            } finally { }
        } else {
            // TODO...
        }
    });
});
server.listen(3000);

var socket = createConnection(3000);
socket.on("error", err => {
    if (isConnectRefusedError(err)) {
        // use some machanism to retry connect
    } else {
        // TODO...
    }
));

```
