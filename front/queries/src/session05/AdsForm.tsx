import {useForm} from "react-hook-form";

function AdsForm({onSubmit, initialData, onDelete}){
    const {register, handleSubmit} =useForm({
        defaultValues:initialData
    })
    return (<form onSubmit={handleSubmit(onSubmit)} className={"flex flex-col"}>
        Title <input {...register('title')}/>
        Description <textarea {...register('description')}/>
        Price <input type="number" {...register('price')}/>
        <div>
            Sell<input  type="radio" value="sell" {...register('ad_type')}/>
            Buy<input  type="radio" value="buy" {...register('ad_type')}/>
        </div>
        Image <input type="file" {...register('image')} />
        <input type="submit" value="Save"/>
        <span onClick={()=>onDelete()}>Delete</span>
    </form>)
}

export default AdsForm