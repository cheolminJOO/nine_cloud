export interface IAddPost {
  image: string;
  content: string;
  EmotionStatus: number;
}

export interface IAddComment {
  diaryId: string | undefined;
  content: string | undefined;
}

export interface IEditComment {
  commentId: string | undefined;
  editComment: string | undefined;
}

export interface IDeleteComment {
  commentId: string | undefined;
}
