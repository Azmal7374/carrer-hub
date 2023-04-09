
 export const jobsAndCartData = async() =>{
     const jobsData = await fetch('jobscategory.json');
     const jobs = await jobsData.json();
    //   console.log(jobs);
    // const savedCart = getStoredCart();
    // let cartArray = [];

//     for( const id in savedCart ){
//         const foundProduct = products.find(product => product.id === id);
    
//         if( foundProduct){
//             foundProduct.quantity = savedCart[id]
//             cartArray.push(foundProduct)
//         }
//     }
    return jobs;

}
