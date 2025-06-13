import { AuthContext } from "@/contexts/AuthContext";
import { useContext } from "react";

// Hook to use auth
export const useAuth = () => useContext(AuthContext);