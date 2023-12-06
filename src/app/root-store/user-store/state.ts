import { User } from "src/app/models/user";

export interface State {
  user: User | null;
  loggedIn: boolean;
  isLoading: boolean;
  error: string | null;
  hasError: boolean;
}

export const initialState: State = {
  user: null,
  loggedIn: false,
  isLoading: false,
  error: null,
  hasError: false
}
