export default async function handler(req,res){
 const { ticker } = req.query;

 const url =
 'https://query1.finance.yahoo.com/v8/finance/chart/' +
 ticker +
 '?interval=1d&range=3mo';

 const r = await fetch(url);
 const data = await r.json();

 res.status(200).json(data);
}
