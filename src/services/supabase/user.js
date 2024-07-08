import { supabase } from './client';

export const signUp = async ({email, password}) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password
  });
  
  if (error) throw new error (error.message);
  
  return data;
};