import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import postValidator from "../validators/post.validator";
import {IPost} from "../interfaces/postInterface";


// type IFormType = {
//     id: number,
//     title: string,
//     body: string
// }


const PostComponent = () => {

    let {
        formState: {errors, isValid},
        register,
        handleSubmit
    } = useForm<IPost>({mode: 'all', resolver: joiResolver(postValidator)});

    let formSubmitCustomHandler = (data: IPost) => {
        console.log(data);
    };
    return (
        <div>
            {errors.title && <div>title errors: {errors.title?.message}</div>}
            {errors.body && <div>body errors: {errors.body?.message}</div>}
            <form onSubmit={handleSubmit(formSubmitCustomHandler)}>
                <input type="text" {...register('title')}/>
                <input type="text" {...register('body')}/>
                <button disabled={!isValid}>send</button>
            </form>

        </div>
    );
};

export default PostComponent;