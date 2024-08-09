"use client"
import { useForm } from "react-hook-form";
export default  ()=>{

let { register , handleSubmit, formState: {errors}} = useForm();

// handleSubmit 
// 1- ap ke form ke andar jo input boxes hte ha un ka data nikalata ha
// 2- ap ke input boxes py validation be yehi lagata ha 

    const saveData = (meraData) =>{
        console.log(meraData);
    }

    // meraData ke andar usi name sy keys ate ha jo ap ny regirster ki hte ha 


    return <div>
        <form onSubmit={handleSubmit(saveData)}>
            
            {/* <input/> is ko register he ne kiya  */}
            
                       <div>
                <input {...register('name', {required: true, minLength: 5})}/>

              { errors.name ?  <div>Please enter your name</div> : null}
            </div>

          

            <div>
                <input {...register('password',{required: true, minLength: 5})}/>
                {errors.password ? <div>Please enter your password</div> : null}
            </div>

            <button>
                Login
            </button>

        </form>
    </div>
}

/* <input {...register('userKaPassword')}/> 1 space rkh ke phr curly bracket lagane  */
 /* required true => lazmi typebox me likhen ge to code chale ga  */ 
