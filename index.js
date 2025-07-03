import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
const db= new pg.Client(
  {
    user:"postgres",

    host:"localhost",
    database:"world",
    password:"Tushar#118",
    port:5432,
  }
);
db.connect();
const app = express();
const port = 3003;
 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  const result=await db.query("SELECT country_code FROM visited_countries");
  let countries=[];
  result.rows.forEach((country)=>
  {
countries.push(country.country_code);
  });
  console.log(result.rows);
  console.log("result ",countries);
  res.render("index.ejs",{countries :countries,total:countries.length});
  
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});



app.post("/add", async (req, res) => {
  const input = req.body["country"];
console.log(input);
  const result = await db.query(
    "SELECT country_code FROM countries WHERE country_name = $1",
    [input]
  );

  if (result.rows.length !== 0) {
    console.log("entered");
    const data = result.rows[0];
    const countryCode = data.country_code;

    await db.query("INSERT INTO visited_countries (country_code) VALUES ($1)", [
      countryCode,
    ]);
    res.redirect("/");
  }
});


// app.post("/add",async(req,res)=>
// {
//   const userinput=req.body["country"];
//   //dyamic access to database
//   const result=await db.query(
//    " SELECT country_code FROM countries WHERE country_name=$1",[userinput]
//   );
//   if(result.rows.length!==0)
//   {
//     const data=result.rows[0];
//     const countrycode=data.country_code;

//     await db.query("INSERT INTO visited_countries (country_code) VALUES ($1)" ,[countrycode,]);

//   }
//   res.redirect("/");
// //   console.log(userinput);
// // countries.push(userinput);
// // console.log("countries",countries);
// // res.render("index.ejs",{countries :countries,total:countries.length});
// });



