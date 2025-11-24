
import {create} from 'zustand'
//import product from '../../../backend/controllers/product';

export const useProductStore=create((set)=>({
    
        products:[],
       setProducts:(products)=>{
        set({products})
       },
       createProduct:async (newProduct)=>{

        //validate the product details user entered
        if(!newProduct.name|| !newProduct.price|| !newProduct.image){
                return {
                        success:false,
                        message:"PLEASE ENTER ALL FIELDS"
                }
        }

        // Use Ingress backend path
        const res = await fetch("/api/products", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newProduct)
        });

      

        const data=await res.json();
          /*what the waiter/api sending to the backend, after making it to json again 
         actual data on the backend
         */


        set((state)=>({
                products:[...state.products,data.data]
        }));
        // update the state of the product 

        return{
                success:true,
                message:"PRODUCT CREATED SUCCESSFULLY"
        };

       },

        fetchProduct: async () => {
                // Use Ingress backend path
                const res = await fetch("/api/products");
                const data = await res.json();

                set({
                products: data.data
                });
        },
        deleteProduct: async (pid) => {
                // Use Ingress backend path
                const res = await fetch(`/api/products/${pid}`, {
                method: "DELETE"
                });

                const data = await res.json();

                if (!data.success) {
                return {
                        success: false,
                        message: "DELETE OPERATION FAILED"
                };
        }
        
        set(state=>({
                products:state.products.filter(product=>product._id!==pid)
        }));

        return{
                success:true,
                message:data.message
        }

        
        
       }

    
}));