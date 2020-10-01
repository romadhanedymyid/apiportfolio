module.exports = {
    ok: (values, res, message = "Request was successfully processed and returned") => {
        let status_code = 200
        let data = {
            "code": status_code,
            "message": message,
            "result": values
        }
        return res.status(status_code).json(data)
    },
    created: (values, res, message = "Request was successfully processed and returned") => {
        let status_code = 201
        let data = {
            "code": status_code,
            "message": message,
            "result": values
        }
        return res.status(status_code).json(data)
    },
    bad: (values, res, message = "Missing or invalid parameter(s)") => {
        let status_code = 400
        let data = {
            "code": status_code,
            "message": message,
            "result": values
        }
        return res.status(status_code).send(data)
    },
    invalid: (values, res, message = "Invalid credentials or session has expired") => {
        let status_code = 401
        let data = {
            "code": status_code,
            "message": message,
            "result": values
        }
        return res.status(status_code).send(data)
    },
    unauthorized: (values, res, message = "Access denied or rate limit has been reached") => {
        let status_code = 403
        let data = {
            "code": status_code,
            "message": message,
            "result": values
        }
        return res.status(status_code).send(data)
    },
    notFound: (values, res, message = "Invalid URL or the requested resource does not exist") => {
        let status_code = 404
        let data = {
            "code": status_code,
            "message": message,
            "result": values
        }        
        return res.status(status_code).send(data)
    },
    duplicated: (values, res, message = "Ops... Duplicated data") => {
        let status_code = 409
        let data = {
            "code": status_code,
            "message": message,
            "result": values
        }
        return res.status(status_code).send(data)
    },
    error: (values, res, message = "Ops... Internal server error, please contact support") => {
        let status_code = 500
        let data = {
            "code": status_code,
            "message": message,
            "result": values
        }
        return res.status(status_code).send(data)
    },
    errorCognito: (values, res, message = "Ops... Internal server error, please contact support") => {
        let status_code = 422
        let data = {
            "code": status_code,
            "message": message,
            "result": values
        }
        return res.status(status_code).send(data)
    }
}