'use client';
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { Form } from "@components/Form";

const CreatePrompt = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt: '',
    tag: ''
  });
  console.log(post)
  console.log(session)

  const createPrompt = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      
      //통신 경로는 api 파일 경로대로!

      const res = await fetch('/api/prompt/new', {
        method: "POST",
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
          userId: session?.user.id
        })
      })
      if (res.ok) {
        router.push("/");
      }

    } catch (error) {
      console.log(error)
    } finally {
      setSubmitting(false)
    }
  }



  return (
    <Form
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPrompt}
    />
  )
}




export default CreatePrompt