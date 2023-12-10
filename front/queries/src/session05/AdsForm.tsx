import {useForm} from "react-hook-form";

function AdsForm({onSubmit}){
    const {register, handleSubmit} =useForm()
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
    </form>)
}

export default AdsForm