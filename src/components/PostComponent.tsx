import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import postValidator from "../validators/post.validator";


type IFormType = {
    id: number,
    title: string,
    body: string
}


const PostComponent = () => {

    let {
        formState: {errors, isValid},
        register,
        handleSubmit
    } = useForm<IFormType>({mode: 'all', resolver: joiResolver(postValidator)});

    let formSubmitCustomHandler = (data: IFormType) => {
        console.log(data);
    };
    return (
        <div>
            {errors.title && <div>username errors: {errors.title?.message}</div>}
            {errors.body && <div>password errors: {errors.body?.message}</div>}
            <form onSubmit={handleSubmit(formSubmitCustomHandler)}>
                <input type="text" {...register('title')}/>
                <input type="text" {...register('body')}/>
                <button disabled={!isValid}>send</button>
            </form>

        </div>
    );
};

export default PostComponent;