/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetActiveQuizzes
// ====================================================

export interface GetActiveQuizzes_getActiveQuizzes_participants {
  __typename: "User";
  id: string;
  name: string;
}

export interface GetActiveQuizzes_getActiveQuizzes_quiz_infos {
  __typename: "QuizInfo";
  entry_fee: number;
  total_participants: number;
  total_winners: number;
  all_questions_count: number;
  answerable_questions_count: number;
  image: string;
  expiry: number;
  reading: number;
}

export interface GetActiveQuizzes_getActiveQuizzes_questions_pivot {
  __typename: "QuizQuestion";
  is_answerable: boolean;
}

export interface GetActiveQuizzes_getActiveQuizzes_questions {
  __typename: "Question";
  id: string;
  question: string | null;
  question_hindi: string | null;
  answer: string | null;
  answer_hindi: string | null;
  option_1: string | null;
  option_2: string | null;
  option_3: string | null;
  option_4: string | null;
  option_1_hindi: string | null;
  option_2_hindi: string | null;
  option_3_hindi: string | null;
  option_4_hindi: string | null;
  pivot: GetActiveQuizzes_getActiveQuizzes_questions_pivot | null;
}

export interface GetActiveQuizzes_getActiveQuizzes {
  __typename: "Quiz";
  id: string;
  expired_at: any;
  is_joined: boolean;
  participants: GetActiveQuizzes_getActiveQuizzes_participants[];
  quiz_infos: GetActiveQuizzes_getActiveQuizzes_quiz_infos;
  questions: GetActiveQuizzes_getActiveQuizzes_questions[];
}

export interface GetActiveQuizzes {
  getActiveQuizzes: GetActiveQuizzes_getActiveQuizzes[];
}
