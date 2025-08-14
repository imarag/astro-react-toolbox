import Input from "@react-components/Input.jsx";
import Textarea from "@react-components/Textarea.jsx";
import Label from "@react-components/Label.jsx";
import { AppUrls } from "@utils/enumerators.js";
import { useForm } from "@hooks/useForm.js";
import FormContainer from "@react-components/FormContainer.jsx";

export default function AddPostForm() {
    const {
        formInfo,
        handleChange,
        handleSubmit,
        error,
        success,
        loading
    } = useForm({ "post-title": "", "post-body": "" }, AppUrls.AddPostAPI, AppUrls.Posts);

    return (
        <div className="h-screen flex items-center justify-center">
            <FormContainer title="Add a post" error={error} success={success} handleSubmit={handleSubmit} loading={loading}>
                <>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="post-title">Title</Label>
                        <Input
                            name="post-title"
                            type="text"
                            id="post-title"
                            value={formInfo["post-title"]}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <Label htmlFor="post-body">Description</Label>
                        <Textarea
                            name="post-body"
                            id="post-body"
                            value={formInfo["post-body"]}
                            onChange={handleChange}
                        />
                    </div>
                    <p className="text-center text-sm">Explore all the available <a className="underline text-blue-900" href={AppUrls.Posts}>posts</a>.</p>
                </>
            </FormContainer>
        </div>
    );
}
