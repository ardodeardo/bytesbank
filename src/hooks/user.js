import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { getAuthenticatedUser } from "../helper/common";
import { APP_ROUTES } from "../constants/path";

export function useUser() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [authenticated, setAutenticated] = useState(false);

  const fetchUserDetail = async () => {
    const { authenticated, user } = await getAuthenticatedUser();

    if (!authenticated) {
      router.push(APP_ROUTES.signIn);
      
      return;
    }

    setUser(user);
    setAutenticated(authenticated);
  };

  useEffect(() => {
    fetchUserDetail();
  }, []);

  return { user, authenticated };
}
