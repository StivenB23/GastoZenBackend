export const responseErrors = (err, res, message = "Error en el servidor") => {
    res
        .status(err?.status || 500)
        .send({ code: err?.status || 500, message: err?.message || message });
}

