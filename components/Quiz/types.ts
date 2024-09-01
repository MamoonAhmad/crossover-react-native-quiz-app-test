export interface ForYouQuestionAPIResponse {
  type: string;
  id: number;
  playlist: string;
  description: string;
  image: string;
  question: string;
  options: MCQOption[];
  user: User;
}

export interface MCQOption {
  id: string;
  answer: string;
}

export interface User {
  name: string;
  avatar: string;
}

export interface ForYouQuestionAnswerResponse {
  id: number;
  correct_options: CorrectOption[];
}

export interface CorrectOption {
  id: string;
  answer: string;
}
