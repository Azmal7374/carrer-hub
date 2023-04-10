import { getStoredCart } from "../utilities/fakeDb";

const jobsAndCartData = async() =>{
     const jobsData = await fetch('jobscategory.json');
     const jobs = await jobsData.json();
      console.log(jobs);
    const savedCart = getStoredCart();
    let cartArray = [];

    for( const id in savedCart ){
        const foundJob = jobs.find(job => job.id === id);
    
        if( foundJob){
            foundJob.quantity = savedCart[id]
            cartArray.push(foundJob)
        }
    }
    return {jobs, cartArray};

}

export  default  jobsAndCartData