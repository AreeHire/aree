module.exports = admin => async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const { 1: idToken } = authorization.split("Bearer ");

    const decodedToken = await admin.auth().verifyIdToken(idToken);

    req.locals = { user: decodedToken };

    return next();
  } catch (error) {
    console.error(error);
    return res.sendStatus(401);
  }
};
