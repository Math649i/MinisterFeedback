


//Lognings modul der tager get eller post, urlen og ip

const logger = (req, res, next) => {
    const logMessage = `${new Date().toISOString()} - ${req.method} ${req.url} - IP: ${req.ip}`;

    console.log(logMessage);
    next();
};

module.exports = logger;
