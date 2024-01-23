import { useSession } from "../context/ctx";

export let store: any;

export const connectStore = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { session } = useSession();
  store = session;
};
