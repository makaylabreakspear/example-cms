console.log('hello world!');

var client = contentful.createClient({
    space: 'fdt9412ua609',
    accessToken: 'AOznWQA6p9nTvEus8d_87okFOAfNuTUzj31CTf3jAtM',
  });
  console.log(client);

  //   client is helper to connect to contentful
//   getEntries is a method to get all entries from contentful
//   entries is an object that contains all the entries
client.getEntries().then(function (entries) {
    console.log(entries);
    // for each entry run the function
    entries.items.forEach(function (entry) {
        //  fields are the fields we named in contentful
      if (entry.fields.name) {
        console.log("entry name: " + entry.fields.name);
        console.log("entry link: " + entry.fields.link);
        console.log("entry image url: " + entry.fields.mainImage.fields.file.url);
      }
    });
  });
  




// var cars = [{type:"Fiat", model:"500", color:"white"}, 
//             {type:"Volvo", model:"XC90", color:"black"}]
// console.log(cars[0]); // to get all info on first car
// console.log(cars[0].type); // to get type of first car
// console.log(cars[1].model);

// cars.forEach (function (car) {
//     console.log("Car Type is " + car.type);
// });