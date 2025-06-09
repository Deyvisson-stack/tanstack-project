import { useState } from "react";
import { useDeleteMutation } from "../../utils/mutations";
import { usePost } from "../../utils/querys";
import { SuccessDelete } from "../success/succesdelete";
import { LoadingComponent } from "../loading/loading";
import './request.css'
import { useQueryClient } from "@tanstack/react-query";
import type { PostType } from "../../types/post";

type Props = {
  showModal: () => void;
}

export const Request = ({ showModal }: Props) => {
  const post = usePost();
  const queryClient = useQueryClient()
  const mutation = useDeleteMutation();
  const [showSuccess, setShowSuccess] = useState(false);

  const handleDeleteBtn = (id: number) => {
    mutation.mutate(id, {
      onSuccess:
        () => {
          setShowSuccess(true);
          queryClient.setQueryData(['posts'], (old: PostType[]) => {
            if (old) {
              return old.filter(post => post.id !== id);
            }
          })
          setTimeout(() => setShowSuccess(false), 3000)
        }
    });
  }

  return (
    <div className="request-container">
      <div className="btn-new-container">
        <button onClick={showModal} className="btn-new">
          + Novo Post
        </button>
      </div>
      {post.isLoading && <LoadingComponent />}
      {showSuccess && <SuccessDelete />}
      {post?.data && post?.data?.length &&
        <div className="request">
          {post.data.map(item => (
            <div className="request-item" key={item.id}>
              <h1>{item.title}</h1>
              <p>{item.body}</p>
              <div>
                <button onClick={() => handleDeleteBtn(item.id)} className="delete-btn">Deletar</button>
              </div>
            </div>
          ))}
        </div>
      }
    </div>
  )
}