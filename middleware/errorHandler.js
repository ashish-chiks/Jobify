const errorHandlerMiddleware = (err, req, res) => {
  console.log(err);
  res.send(500).send("Internal server error");
};

export default errorHandlerMiddleware;
