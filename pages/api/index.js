import nextConnect from "next-connect";

const config = nextConnect({
  // Handle any other HTTP method
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

config.get(async (req, res) => {
  
  res.send("Hello World");
});

export default config;
