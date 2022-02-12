
import nextConnect from "next-connect";
import { randomInt } from "crypto";
const contact = nextConnect({
  // Handle any other HTTP method
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

contact.post(async (req, res) => {
  if (req.method === "POST") {
      const { wallet_addr, nft_list } = req.body;
      
      for (var i = 0; i < 100; i++){
          var resultDeg = randomInt(360);
          if (resultDeg % 10 == 0) {
            console.log(resultDeg, " trying again...")
          }
        else {
            return res.status(200).json(resultDeg);
            break;
          }
            
      }
    //   console.log(`Random number chosen from 0-360: ${n}`);
   
      
    
  } else {
    res.status(422).send("Non supported request method");
  }
});

export default contact;
